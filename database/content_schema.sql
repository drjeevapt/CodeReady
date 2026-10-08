-- ==============================================================================
-- CodeReady - Content Engine & Editorial Workflow Schema Extensions
-- ==============================================================================

-- 1. Code Set Versions Table
CREATE TABLE IF NOT EXISTS public.code_set_versions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code_set_name TEXT NOT NULL DEFAULT 'ICD-10-CM',
    year TEXT NOT NULL, -- e.g. 'FY2026', 'FY2027'
    effective_date DATE NOT NULL,
    status TEXT NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Upcoming', 'Archived')),
    source_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Case Reviews Table (Formal Editorial & Coding Review)
CREATE TABLE IF NOT EXISTS public.case_reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    case_id TEXT NOT NULL,
    reviewer_id TEXT NOT NULL,
    reviewer_name TEXT NOT NULL,
    decision TEXT NOT NULL CHECK (decision IN ('Approved', 'Changes Requested', 'Rejected')),
    review_notes TEXT,
    checklist JSONB NOT NULL,
    quality_score INT NOT NULL DEFAULT 95,
    reviewed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Content Audit Log Table (Immutable Traceability)
CREATE TABLE IF NOT EXISTS public.content_audit_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    case_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    user_name TEXT NOT NULL,
    action TEXT NOT NULL,
    old_status TEXT,
    new_status TEXT,
    comment TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Case Versions Table (Historical Snapshots)
CREATE TABLE IF NOT EXISTS public.case_versions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    case_id TEXT NOT NULL,
    version_number INT NOT NULL,
    code_set_year TEXT NOT NULL,
    case_data_snapshot JSONB NOT NULL,
    change_reason TEXT NOT NULL,
    created_by TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Case Flags Table (Learner & QA Problem Reports)
CREATE TABLE IF NOT EXISTS public.case_flags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    case_id TEXT NOT NULL,
    user_id TEXT,
    reason TEXT NOT NULL CHECK (reason IN (
        'Possible incorrect answer',
        'Documentation unclear',
        'Typo',
        'Code appears outdated',
        'Question confusing',
        'Other'
    )),
    details TEXT,
    status TEXT NOT NULL DEFAULT 'Pending Review' CHECK (status IN ('Pending Review', 'Resolved', 'Dismissed')),
    resolution_notes TEXT,
    resolved_by TEXT,
    resolved_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. Case Tags Mapping Table
CREATE TABLE IF NOT EXISTS public.case_tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    case_id TEXT NOT NULL,
    tag TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexing for high-performance admin filtering & search
CREATE INDEX IF NOT EXISTS idx_case_reviews_case_id ON public.case_reviews(case_id);
CREATE INDEX IF NOT EXISTS idx_content_audit_case_id ON public.content_audit_log(case_id);
CREATE INDEX IF NOT EXISTS idx_case_versions_case_id ON public.case_versions(case_id);
CREATE INDEX IF NOT EXISTS idx_case_flags_case_id ON public.case_flags(case_id);
CREATE INDEX IF NOT EXISTS idx_case_flags_status ON public.case_flags(status);
CREATE INDEX IF NOT EXISTS idx_case_tags_tag ON public.case_tags(tag);
