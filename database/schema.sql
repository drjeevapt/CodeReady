-- ==============================================================================
-- CodeReady - Production PostgreSQL Database Schema (Supabase)
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table (Extends Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    experience_level TEXT NOT NULL CHECK (experience_level IN ('Student', 'Fresher', '<1 year', '1–3 years', '3+ years')),
    role TEXT NOT NULL DEFAULT 'learner' CHECK (role IN ('learner', 'admin', 'content_reviewer')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Cases Table
CREATE TABLE IF NOT EXISTS public.cases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    case_number INT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    specialty TEXT NOT NULL DEFAULT 'Orthopedics',
    difficulty TEXT NOT NULL CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
    skill TEXT NOT NULL CHECK (skill IN (
        'Documentation Interpretation',
        'Diagnosis Selection',
        'Laterality & Specificity',
        'Coding Judgment',
        'Clinical Reasoning'
    )),
    clinical_documentation TEXT NOT NULL,
    question TEXT NOT NULL,
    options JSONB NOT NULL, -- Array of { id: string, text: string, label: string }
    correct_answer TEXT NOT NULL, -- The option ID (e.g. 'opt_b')
    code TEXT NOT NULL, -- The official ICD-10-CM code string (e.g. 'M17.11')
    explanation TEXT NOT NULL,
    coding_concept TEXT NOT NULL,
    common_mistake TEXT NOT NULL,
    learning_objective TEXT NOT NULL,
    target_time_seconds INT NOT NULL DEFAULT 90,
    reference TEXT NOT NULL DEFAULT 'ICD-10-CM Official Guidelines for Coding and Reporting FY 2025/2026',
    code_set_year TEXT NOT NULL DEFAULT '2025/2026',
    status TEXT NOT NULL DEFAULT 'Published' CHECK (status IN ('Draft', 'Pending Review', 'Approved', 'Published', 'Rejected', 'Archived')),
    created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    reviewed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    review_status TEXT NOT NULL DEFAULT 'Approved',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Assessments Table
CREATE TABLE IF NOT EXISTS public.assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    type TEXT NOT NULL DEFAULT 'onboarding_readiness',
    status TEXT NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'expired')),
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    time_limit_seconds INT NOT NULL DEFAULT 900, -- 15 minutes
    readiness_score NUMERIC(5,2),
    accuracy_score NUMERIC(5,2),
    documentation_score NUMERIC(5,2),
    judgment_score NUMERIC(5,2),
    speed_score NUMERIC(5,2),
    readiness_level TEXT,
    strongest_skill TEXT,
    weakest_skill TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. User Attempts Table
CREATE TABLE IF NOT EXISTS public.attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    case_id UUID NOT NULL REFERENCES public.cases(id) ON DELETE CASCADE,
    assessment_id UUID REFERENCES public.assessments(id) ON DELETE CASCADE,
    selected_answer TEXT NOT NULL,
    reasoning TEXT,
    is_correct BOOLEAN NOT NULL,
    accuracy_score NUMERIC(5,2) NOT NULL DEFAULT 0,
    documentation_score NUMERIC(5,2) NOT NULL DEFAULT 0,
    judgment_score NUMERIC(5,2) NOT NULL DEFAULT 0,
    speed_score NUMERIC(5,2) NOT NULL DEFAULT 0,
    time_taken_seconds INT NOT NULL DEFAULT 0,
    reasoning_quality TEXT NOT NULL DEFAULT 'Adequate' CHECK (reasoning_quality IN ('Strong', 'Adequate', 'Needs improvement')),
    feedback_viewed BOOLEAN NOT NULL DEFAULT FALSE,
    mode TEXT NOT NULL DEFAULT 'assessment' CHECK (mode IN ('assessment', 'practice')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Subscriptions Table
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE,
    plan TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'career')),
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'past_due', 'expired')),
    razorpay_customer_id TEXT,
    razorpay_subscription_id TEXT,
    razorpay_payment_id TEXT,
    current_period_start TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    current_period_end TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. AI Tutor Logs Table (For usage auditing & rate limiting)
CREATE TABLE IF NOT EXISTS public.ai_tutor_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    case_id UUID REFERENCES public.cases(id) ON DELETE SET NULL,
    user_query TEXT NOT NULL,
    tutor_response TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==============================================================================
-- INDEXES FOR PERFORMANCE
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_cases_status ON public.cases(status);
CREATE INDEX IF NOT EXISTS idx_cases_skill ON public.cases(skill);
CREATE INDEX IF NOT EXISTS idx_cases_specialty ON public.cases(specialty);
CREATE INDEX IF NOT EXISTS idx_assessments_user_id ON public.assessments(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_user_id ON public.attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_assessment_id ON public.attempts(assessment_id);
CREATE INDEX IF NOT EXISTS idx_attempts_case_id ON public.attempts(case_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON public.subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_logs_user_date ON public.ai_tutor_logs(user_id, created_at);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_tutor_logs ENABLE ROW LEVEL SECURITY;

-- Helper function to check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Helper function to check if current user is reviewer
CREATE OR REPLACE FUNCTION public.is_reviewer()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role IN ('admin', 'content_reviewer')
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Profiles Policies
CREATE POLICY "Users can read their own profile"
    ON public.profiles FOR SELECT
    USING (auth.uid() = id OR public.is_admin());

CREATE POLICY "Users can update their own profile"
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- Cases Policies (Learners can only see Published cases; sensitive fields handled in API / views)
CREATE POLICY "Learners can view published cases"
    ON public.cases FOR SELECT
    USING (status = 'Published' OR public.is_reviewer());

CREATE POLICY "Admins and Reviewers can insert/update cases"
    ON public.cases FOR ALL
    USING (public.is_reviewer());

-- Assessments Policies
CREATE POLICY "Users can view their own assessments"
    ON public.assessments FOR SELECT
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users can create and update their own assessments"
    ON public.assessments FOR ALL
    USING (auth.uid() = user_id);

-- Attempts Policies
CREATE POLICY "Users can view their own attempts"
    ON public.attempts FOR SELECT
    USING (auth.uid() = user_id OR public.is_admin());

CREATE POLICY "Users can create their own attempts"
    ON public.attempts FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Subscriptions Policies
CREATE POLICY "Users can view their own subscription"
    ON public.subscriptions FOR SELECT
    USING (auth.uid() = user_id OR public.is_admin());

-- AI Tutor Logs Policies
CREATE POLICY "Users can view their own AI logs"
    ON public.ai_tutor_logs FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert AI logs"
    ON public.ai_tutor_logs FOR INSERT
    WITH CHECK (auth.uid() = user_id);
