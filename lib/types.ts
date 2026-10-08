export type ExperienceLevel = 'Student' | 'Fresher' | '<1 year' | '1–3 years' | '3+ years';
export type UserRole = 'learner' | 'admin' | 'content_reviewer';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  experience_level: ExperienceLevel;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export type Specialty =
  | 'Orthopedics'
  | 'Rehabilitation'
  | 'Neurology'
  | 'General'
  | 'General MSK'
  | 'General Musculoskeletal'
  | 'Sports Medicine'
  | 'Spine'
  | 'Knee'
  | 'Shoulder'
  | 'Hip'
  | 'Foot/Ankle'
  | 'Upper Extremity'
  | 'Injury';

export type BodyRegion =
  | 'Knee'
  | 'Shoulder'
  | 'Spine/Back'
  | 'Hip'
  | 'Foot/Ankle'
  | 'Upper Extremity'
  | 'General Musculoskeletal'
  | 'Rehabilitation'
  | 'Injury/Follow-up';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type SkillCategory =
  | 'Documentation Interpretation'
  | 'Diagnosis Selection'
  | 'Laterality & Specificity'
  | 'Coding Judgment'
  | 'Clinical Reasoning'
  | 'Diagnosis vs Symptom'
  | 'Acute vs Chronic'
  | 'Injury & Encounter Phase'
  | 'Sequencing & Aftercare'
  | 'Rehabilitation Documentation'
  | 'Post-Procedure Scenarios'
  | string;

export type ContentStatus =
  | 'DRAFT'
  | 'PENDING_REVIEW'
  | 'CODING_REVIEW'
  | 'APPROVED'
  | 'PUBLISHED'
  | 'NEEDS_UPDATE'
  | 'ARCHIVED'
  | 'REJECTED';

// Backwards-compatible CaseStatus
export type CaseStatus = 'Draft' | 'Pending Review' | 'Approved' | 'Published' | 'Rejected' | 'Archived' | 'Needs Update';
export type ReviewStatus = 'Draft' | 'Pending' | 'Pending Review' | 'Approved' | 'Rejected' | 'Changes Requested';
export type CodingVerificationStatus = 'VERIFIED' | 'NEEDS_REVIEW' | 'UNVERIFIED';

export interface OptionItem {
  id: string;
  label: string; // e.g. "A", "B", "C", "D"
  text: string;
  codeSnippet?: string;
}

export interface AITutorStructuredContext {
  learning_objective: string;
  coding_concept: string;
  common_misconception: string;
  correct_reasoning: string;
  safe_explanation_boundaries: string;
  official_reference: string;
  code_set_year: string;
}

export interface CaseItem {
  id: string;
  case_number: number;
  title: string;
  specialty: Specialty;
  body_region?: BodyRegion | string;
  difficulty: Difficulty;
  skill: SkillCategory; // Primary skill
  primary_skill?: SkillCategory;
  secondary_skills?: string[];

  clinical_documentation: string;
  question: string;
  answer_type?: 'single_choice' | 'multiple_choice';

  options: OptionItem[];
  correct_answer: string; // Option id (e.g. 'opt_b')
  correct_option?: string; // 'A' | 'B' | 'C' | 'D'
  code: string; // Official ICD-10-CM code
  icd10cm_code?: string;
  code_description?: string;

  rationale?: string;
  explanation: string;
  documentation_evidence?: string;
  coding_concept: string;
  common_mistake: string;
  common_trap?: string;
  why_wrong_answers_are_wrong?: Record<string, string>;
  learning_objective: string;
  target_time_seconds: number;
  reference: string;
  official_reference?: string;
  code_set_year: string;

  status: CaseStatus;
  content_status?: ContentStatus;
  review_status: ReviewStatus;
  coding_verification_status?: CodingVerificationStatus;
  quality_score?: number; // 0-100 internal QA score
  assessment_ready?: boolean; // If true, eligible for standardized timed assessment
  tags?: string[];
  review_notes?: string;

  created_by?: string;
  reviewed_by?: string;
  last_reviewed_at?: string;
  next_review_date?: string;
  created_at: string;
  updated_at: string;

  ai_tutor_context?: AITutorStructuredContext;
}

export type Case = CaseItem;

// Client-safe case item (strips answer, code, and internal reviewer notes before submission)
export interface PublicCaseItem {
  id: string;
  case_number: number;
  title: string;
  specialty: Specialty;
  body_region?: BodyRegion | string;
  difficulty: Difficulty;
  skill: SkillCategory;
  clinical_documentation: string;
  question: string;
  options: OptionItem[];
  target_time_seconds: number;
  code_set_year: string;
  assessment_ready?: boolean;
  tags?: string[];
}

export type ReasoningQuality = 'Strong' | 'Adequate' | 'Needs improvement';

export interface CaseAttempt {
  id: string;
  user_id: string;
  case_id: string;
  assessment_id?: string;
  selected_answer: string;
  reasoning: string;
  is_correct: boolean;
  accuracy_score: number;
  documentation_score: number;
  judgment_score: number;
  speed_score: number;
  time_taken_seconds: number;
  reasoning_quality: ReasoningQuality;
  feedback_viewed: boolean;
  mode: 'assessment' | 'practice';
  created_at: string;
  case_details?: {
    title: string;
    correct_answer: string;
    code: string;
    explanation: string;
    coding_concept: string;
    common_mistake: string;
    learning_objective: string;
    reference: string;
    why_wrong_answers_are_wrong?: Record<string, string>;
  };
}

export type ReadinessLevel =
  | 'Needs Foundation'
  | 'Developing'
  | 'Approaching Job Ready'
  | 'Job Ready'
  | 'Assessment Ready';

export interface AssessmentRecord {
  id: string;
  user_id: string;
  type: 'onboarding_readiness' | 'practice_set' | 'job_simulation';
  status: 'in_progress' | 'completed' | 'expired';
  started_at: string;
  completed_at?: string;
  time_limit_seconds: number;
  readiness_score: number;
  accuracy_score: number;
  documentation_score: number;
  judgment_score: number;
  speed_score: number;
  readiness_level: ReadinessLevel;
  strongest_skill: SkillCategory;
  weakest_skill: SkillCategory;
  attempts?: CaseAttempt[];
  created_at: string;
  updated_at: string;
}

export type SubscriptionPlan = 'free' | 'pro' | 'career';
export type SubscriptionStatus = 'active' | 'cancelled' | 'past_due' | 'expired';

export interface SubscriptionRecord {
  id: string;
  user_id: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  razorpay_customer_id?: string;
  razorpay_subscription_id?: string;
  razorpay_payment_id?: string;
  current_period_start: string;
  current_period_end?: string;
  created_at: string;
  updated_at: string;
}

export interface CaseReviewChecklist {
  documentation_realistic: boolean;
  documentation_clear: boolean;
  documentation_sufficient: boolean;
  code_verified: boolean;
  code_description_verified: boolean;
  laterality_verified: boolean;
  specificity_verified: boolean;
  code_set_year_verified: boolean;
  guidelines_checked: boolean;
  question_clear: boolean;
  distractors_plausible: boolean;
  rationale_accurate: boolean;
  learning_objective_clear: boolean;
  no_unsupported_assumptions?: boolean;
  synthetic_no_phi?: boolean;
}

export interface CaseReviewRecord {
  id: string;
  case_id: string;
  reviewer_id: string;
  reviewer_name: string;
  reviewer_role?: string;
  decision?: 'Approved' | 'Changes Requested' | 'Rejected';
  action?: 'Approve' | 'Request Changes' | 'Reject' | 'Approved' | 'Changes Requested' | 'Rejected';
  checklist: CaseReviewChecklist;
  review_notes?: string;
  quality_score?: number;
  reviewed_at?: string;
  created_at?: string;
}

export interface ContentAuditLog {
  id: string;
  case_id: string;
  user_id: string;
  user_name: string;
  action:
    | 'created'
    | 'edited'
    | 'submitted_for_review'
    | 'reviewed'
    | 'approved'
    | 'rejected'
    | 'published'
    | 'unpublished'
    | 'archived'
    | 'code_updated'
    | 'version_updated'
    | 'flag_resolved'
    | 'flagged_by_learner'
    | string;
  old_status?: string;
  new_status?: string;
  comment?: string;
  timestamp: string;
}

export interface CaseFlag {
  id: string;
  case_id: string;
  user_id?: string;
  user_email?: string;
  reason: 'Possible incorrect answer' | 'Documentation unclear' | 'Typo' | 'Code appears outdated' | 'Question confusing' | 'Other';
  details: string;
  status: 'open' | 'under_review' | 'resolved' | 'dismissed' | 'Pending Review' | 'Resolved' | 'Dismissed';
  resolution_notes?: string;
  resolved_by?: string;
  created_at: string;
  resolved_at?: string;
}

export interface CaseVersion {
  id: string;
  case_id: string;
  version_number: number;
  case_data_snapshot: Partial<CaseItem>;
  code_set_year: string;
  change_reason: string;
  created_by: string;
  created_at: string;
}

export interface CodeSetVersionRecord {
  id: string;
  code_set_name: string;
  year: string;
  effective_date: string;
  status: 'active' | 'upcoming' | 'deprecated' | 'Active' | 'Upcoming' | 'Archived';
  source_url: string;
  notes?: string;
  created_at: string;
}

export interface AITutorMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
}

export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  userId?: string;
  timestamp: string;
}
