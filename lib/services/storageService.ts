import { INITIAL_CASES } from '../data/initialCases';
import {
  AssessmentRecord,
  CaseAttempt,
  CaseItem,
  Case,
  PublicCaseItem,
  SubscriptionRecord,
  UserProfile,
  CaseReviewRecord,
  ContentAuditLog,
  CaseFlag,
  CaseVersion,
  CodeSetVersionRecord,
} from '../types';
import {
  computeAssessmentResults,
  evaluateReasoningQuality,
  calculateSpeedScore,
} from '../scoring/scoringEngine';
import { calculateContentQualityScore } from '../content/contentQualityEngine';

const STORAGE_KEYS = {
  CURRENT_USER: 'codeready_current_user',
  ALL_USERS: 'codeready_users_list',
  CASES: 'codeready_cases_database',
  ASSESSMENTS: 'codeready_assessments',
  ATTEMPTS: 'codeready_attempts',
  SUBSCRIPTIONS: 'codeready_subscriptions',
  REVIEWS: 'codeready_case_reviews',
  AUDIT_LOGS: 'codeready_content_audit_log',
  FLAGS: 'codeready_case_flags',
  VERSIONS: 'codeready_case_versions',
  CODE_SETS: 'codeready_code_sets',
};

// Safe helper for localStorage
function getItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw) as T;
  } catch {
    return defaultValue;
  }
}

function setItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving to localStorage key: ${key}`, e);
  }
}

// Ensure default cases and data structures exist in storage
export function initializeStorage() {
  if (typeof window === 'undefined') return;
  const existingCases = localStorage.getItem(STORAGE_KEYS.CASES);
  if (!existingCases || JSON.parse(existingCases).length < 20) {
    localStorage.setItem(STORAGE_KEYS.CASES, JSON.stringify(INITIAL_CASES));
  }

  // Initialize Code Set Versions if missing
  const existingCodeSets = localStorage.getItem(STORAGE_KEYS.CODE_SETS);
  if (!existingCodeSets) {
    const defaultCodeSets: CodeSetVersionRecord[] = [
      {
        id: 'cs-fy2026',
        code_set_name: 'ICD-10-CM',
        year: 'FY2026',
        effective_date: '2025-10-01',
        status: 'Active',
        source_url: 'https://www.cms.gov/medicare/coding-billing/icd-10-codes/2026-icd-10-cm',
        created_at: '2025-09-01T00:00:00Z',
      },
      {
        id: 'cs-fy2027',
        code_set_name: 'ICD-10-CM',
        year: 'FY2027',
        effective_date: '2026-10-01',
        status: 'Upcoming',
        source_url: 'https://www.cms.gov/medicare/coding-billing/icd-10-codes/2027-icd-10-cm',
        created_at: '2026-06-01T00:00:00Z',
      },
    ];
    setItem(STORAGE_KEYS.CODE_SETS, defaultCodeSets);
  }
}

// -------------------------------------------------------------
// USER & AUTHENTICATION METHODS
// -------------------------------------------------------------
export function getCurrentUser(): UserProfile | null {
  return getItem<UserProfile | null>(STORAGE_KEYS.CURRENT_USER, null);
}

export function setCurrentUser(user: UserProfile | null): void {
  setItem(STORAGE_KEYS.CURRENT_USER, user);
}

export function getAllUsers(): UserProfile[] {
  return getItem<UserProfile[]>(STORAGE_KEYS.ALL_USERS, [
    {
      id: 'admin-001',
      email: 'admin@codeready.health',
      full_name: 'Dr. Sarah Mitchell, CPC, CPMA',
      experience_level: '3+ years',
      role: 'admin',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'reviewer-001',
      email: 'reviewer@codeready.health',
      full_name: 'Elena Rostova, RHIA, CCS',
      experience_level: '3+ years',
      role: 'content_reviewer',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}

export function saveUser(user: UserProfile): void {
  const users = getAllUsers();
  const index = users.findIndex((u) => u.id === user.id || u.email.toLowerCase() === user.email.toLowerCase());
  if (index >= 0) {
    users[index] = { ...users[index], ...user, updated_at: new Date().toISOString() };
  } else {
    users.push(user);
  }
  setItem(STORAGE_KEYS.ALL_USERS, users);
}

// -------------------------------------------------------------
// CASES METHODS
// -------------------------------------------------------------
export function getAllCases(): Case[] {
  const cases = getItem<Case[]>(STORAGE_KEYS.CASES, INITIAL_CASES as Case[]);
  return cases.length > 0 ? cases : (INITIAL_CASES as Case[]);
}

export function getPublishedCases(): Case[] {
  return getAllCases().filter((c) => c.status === 'Published' || c.content_status === 'PUBLISHED');
}

/**
 * Returns public case safe for client before submission (strips correct answer, code, and explanations)
 */
export function getPublicCase(caseIdOrNumber: string | number): PublicCaseItem | null {
  const c = getAllCases().find(
    (item) => item.id === String(caseIdOrNumber) || item.case_number === Number(caseIdOrNumber)
  );
  if (!c) return null;
  return {
    id: c.id,
    case_number: c.case_number,
    title: c.title,
    specialty: c.specialty,
    difficulty: c.difficulty,
    skill: c.skill || c.primary_skill || 'Diagnosis Selection',
    clinical_documentation: c.clinical_documentation,
    question: c.question,
    options: c.options,
    target_time_seconds: c.target_time_seconds,
    code_set_year: c.code_set_year,
  };
}

export function getFullCaseById(caseId: string): Case | null {
  return getAllCases().find((c) => c.id === caseId) || null;
}

export function saveCase(caseItem: Case, authorUserId?: string, authorName?: string): void {
  const cases = getAllCases();
  const index = cases.findIndex((c) => c.id === caseItem.id);
  const oldCase = index >= 0 ? cases[index] : null;

  // Compute fresh quality score
  const quality = calculateContentQualityScore(caseItem);
  const enrichedCase: Case = {
    ...caseItem,
    quality_score: quality.totalScore,
    updated_at: new Date().toISOString(),
  };

  if (index >= 0) {
    cases[index] = enrichedCase;
  } else {
    cases.push(enrichedCase);
  }
  setItem(STORAGE_KEYS.CASES, cases);

  // Snapshot version
  snapshotCaseVersion(
    enrichedCase,
    oldCase ? 'Edited case fields' : 'Initial case creation',
    authorName || 'Content Author'
  );

  // Audit log
  logContentAction({
    case_id: enrichedCase.id,
    user_id: authorUserId || 'user_auto',
    user_name: authorName || 'Content System',
    action: oldCase ? 'edited' : 'created',
    old_status: oldCase ? (oldCase.status || oldCase.content_status) : undefined,
    new_status: enrichedCase.status || enrichedCase.content_status,
    comment: `Saved case updates with Quality Score: ${quality.totalScore}/100`,
  });
}

// -------------------------------------------------------------
// REVIEW WORKFLOW & APPROVALS
// -------------------------------------------------------------
export function getAllReviews(): CaseReviewRecord[] {
  return getItem<CaseReviewRecord[]>(STORAGE_KEYS.REVIEWS, []);
}

export function getCaseReviews(caseId: string): CaseReviewRecord[] {
  return getAllReviews().filter((r) => r.case_id === caseId);
}

export function submitCaseReview(params: {
  caseId: string;
  reviewerId: string;
  reviewerName: string;
  decision: 'Approved' | 'Changes Requested' | 'Rejected';
  reviewNotes?: string;
  checklist: any;
}): { success: boolean; case: Case; review: CaseReviewRecord } {
  const fullCase = getFullCaseById(params.caseId);
  if (!fullCase) throw new Error('Case not found');

  const review: CaseReviewRecord = {
    id: `rev_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    case_id: params.caseId,
    reviewer_id: params.reviewerId,
    reviewer_name: params.reviewerName,
    decision: params.decision,
    review_notes: params.reviewNotes,
    checklist: params.checklist,
    quality_score: fullCase.quality_score || 95,
    reviewed_at: new Date().toISOString(),
  };

  const reviews = getAllReviews();
  reviews.push(review);
  setItem(STORAGE_KEYS.REVIEWS, reviews);

  // Update Case status based on decision
  const oldStatus = fullCase.review_status;
  let newReviewStatus = fullCase.review_status;
  let newContentStatus = fullCase.content_status;
  let newStatus = fullCase.status;

  if (params.decision === 'Approved') {
    newReviewStatus = 'Approved';
    newContentStatus = 'APPROVED';
    newStatus = 'Approved';
    fullCase.coding_verification_status = 'VERIFIED';
  } else if (params.decision === 'Changes Requested') {
    newReviewStatus = 'Changes Requested';
    newContentStatus = 'NEEDS_UPDATE';
    newStatus = 'Needs Update';
  } else if (params.decision === 'Rejected') {
    newReviewStatus = 'Rejected';
    newContentStatus = 'ARCHIVED';
    newStatus = 'Archived';
  }

  const updatedCase: Case = {
    ...fullCase,
    review_status: newReviewStatus,
    content_status: newContentStatus,
    status: newStatus,
    reviewed_by: params.reviewerName,
    last_reviewed_at: new Date().toISOString(),
    review_notes: params.reviewNotes,
  };

  saveCase(updatedCase, params.reviewerId, params.reviewerName);

  logContentAction({
    case_id: params.caseId,
    user_id: params.reviewerId,
    user_name: params.reviewerName,
    action: `review_${params.decision.toLowerCase().replace(' ', '_')}`,
    old_status: oldStatus,
    new_status: newReviewStatus,
    comment: params.reviewNotes || `Review completed with decision: ${params.decision}`,
  });

  return { success: true, case: updatedCase, review };
}

// -------------------------------------------------------------
// CASE VERSIONING & SNAPSHOTS
// -------------------------------------------------------------
export function getAllVersions(): CaseVersion[] {
  return getItem<CaseVersion[]>(STORAGE_KEYS.VERSIONS, []);
}

export function getCaseVersions(caseId: string): CaseVersion[] {
  return getAllVersions().filter((v) => v.case_id === caseId);
}

export function snapshotCaseVersion(
  caseData: Case,
  changeReason: string,
  createdBy: string
): CaseVersion {
  const versions = getAllVersions();
  const existingForCase = versions.filter((v) => v.case_id === caseData.id);
  const nextVersionNumber = existingForCase.length + 1;

  const snapshot: CaseVersion = {
    id: `ver_${caseData.id}_v${nextVersionNumber}_${Date.now()}`,
    case_id: caseData.id,
    version_number: nextVersionNumber,
    code_set_year: caseData.code_set_year,
    case_data_snapshot: caseData,
    change_reason: changeReason,
    created_by: createdBy,
    created_at: new Date().toISOString(),
  };

  versions.push(snapshot);
  setItem(STORAGE_KEYS.VERSIONS, versions);
  return snapshot;
}

// -------------------------------------------------------------
// AUDIT LOGGING
// -------------------------------------------------------------
export function getContentAuditLogs(caseId?: string): ContentAuditLog[] {
  const logs = getItem<ContentAuditLog[]>(STORAGE_KEYS.AUDIT_LOGS, []);
  if (!caseId) return logs;
  return logs.filter((l) => l.case_id === caseId);
}

export function logContentAction(entry: Omit<ContentAuditLog, 'id' | 'timestamp'>): ContentAuditLog {
  const logs = getContentAuditLogs();
  const newLog: ContentAuditLog = {
    ...entry,
    id: `aud_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    timestamp: new Date().toISOString(),
  };
  logs.unshift(newLog);
  setItem(STORAGE_KEYS.AUDIT_LOGS, logs.slice(0, 1000)); // cap at 1000 entries
  return newLog;
}

// -------------------------------------------------------------
// LEARNER REPORTING & FLAGS
// -------------------------------------------------------------
export function getAllCaseFlags(): CaseFlag[] {
  return getItem<CaseFlag[]>(STORAGE_KEYS.FLAGS, []);
}

export function reportProblem(params: {
  caseId: string;
  userId?: string;
  reason: any;
  details: string;
}): CaseFlag {
  const flags = getAllCaseFlags();
  const newFlag: CaseFlag = {
    id: `flg_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    case_id: params.caseId,
    user_id: params.userId,
    reason: params.reason,
    details: params.details,
    status: 'Pending Review',
    created_at: new Date().toISOString(),
  };

  flags.unshift(newFlag);
  setItem(STORAGE_KEYS.FLAGS, flags);

  // Mark case status for attention if needed
  const fullCase = getFullCaseById(params.caseId);
  if (fullCase && fullCase.status === 'Published') {
    logContentAction({
      case_id: params.caseId,
      user_id: params.userId || 'learner_anon',
      user_name: 'Learner Reporter',
      action: 'flagged_by_learner',
      old_status: fullCase.status,
      new_status: fullCase.status,
      comment: `Reported issue: ${params.reason} — "${params.details}"`,
    });
  }

  return newFlag;
}

export function resolveCaseFlag(
  flagId: string,
  resolution: 'Resolved' | 'Dismissed',
  resolutionNotes: string,
  resolvedBy: string
): void {
  const flags = getAllCaseFlags();
  const index = flags.findIndex((f) => f.id === flagId);
  if (index >= 0) {
    flags[index] = {
      ...flags[index],
      status: resolution,
      resolution_notes: resolutionNotes,
      resolved_by: resolvedBy,
      resolved_at: new Date().toISOString(),
    };
    setItem(STORAGE_KEYS.FLAGS, flags);
  }
}

// -------------------------------------------------------------
// CODE SET YEAR TRANSITION ENGINE
// -------------------------------------------------------------
export function getAllCodeSets(): CodeSetVersionRecord[] {
  return getItem<CodeSetVersionRecord[]>(STORAGE_KEYS.CODE_SETS, []);
}

export function reviewForNewCodeSet(targetYear: string): {
  totalCases: number;
  flaggedForReview: number;
  cases: Case[];
} {
  const cases = getAllCases();
  const flaggedCases = cases.map((c) => ({
    ...c,
    content_status: 'NEEDS_UPDATE' as const,
    review_status: 'Pending Review' as const,
    coding_verification_status: 'UNVERIFIED' as const,
    code_set_year: targetYear,
  }));

  return {
    totalCases: cases.length,
    flaggedForReview: flaggedCases.length,
    cases: flaggedCases,
  };
}

// -------------------------------------------------------------
// ATTEMPTS & SUBMISSIONS
// -------------------------------------------------------------
export function getAllAttempts(): CaseAttempt[] {
  return getItem<CaseAttempt[]>(STORAGE_KEYS.ATTEMPTS, []);
}

export function getUserAttempts(userId: string): CaseAttempt[] {
  return getAllAttempts().filter((a) => a.user_id === userId);
}

export function submitCaseAttempt(params: {
  userId: string;
  caseId: string;
  assessmentId?: string;
  selectedAnswer: string;
  reasoning: string;
  timeTakenSeconds: number;
  mode: 'assessment' | 'practice';
}): { attempt: CaseAttempt; feedback: any } {
  const caseItem = getFullCaseById(params.caseId);
  if (!caseItem) {
    throw new Error('Case not found');
  }

  const isCorrect = params.selectedAnswer === caseItem.correct_answer;
  const speedScore = calculateSpeedScore(caseItem.target_time_seconds, params.timeTakenSeconds);
  const reasoningQuality = evaluateReasoningQuality(params.reasoning, isCorrect);

  const attempt: CaseAttempt = {
    id: `att_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    user_id: params.userId,
    case_id: params.caseId,
    assessment_id: params.assessmentId,
    selected_answer: params.selectedAnswer,
    reasoning: params.reasoning,
    is_correct: isCorrect,
    accuracy_score: isCorrect ? 100 : 0,
    documentation_score: isCorrect ? 100 : 0,
    judgment_score: isCorrect ? 100 : 0,
    speed_score: speedScore,
    time_taken_seconds: params.timeTakenSeconds,
    reasoning_quality: reasoningQuality,
    feedback_viewed: true,
    mode: params.mode,
    created_at: new Date().toISOString(),
    case_details: {
      title: caseItem.title,
      correct_answer: caseItem.correct_answer,
      code: caseItem.code || caseItem.icd10cm_code || '',
      explanation: caseItem.explanation || caseItem.rationale || '',
      coding_concept: caseItem.coding_concept || '',
      common_mistake: caseItem.common_mistake || caseItem.common_trap || '',
      learning_objective: caseItem.learning_objective || '',
      reference: caseItem.reference || caseItem.official_reference || '',
    },
  };

  const attempts = getAllAttempts();
  attempts.push(attempt);
  setItem(STORAGE_KEYS.ATTEMPTS, attempts);

  return {
    attempt,
    feedback: {
      isCorrect,
      selectedAnswer: params.selectedAnswer,
      correctAnswer: caseItem.correct_answer,
      code: caseItem.code || caseItem.icd10cm_code,
      explanation: caseItem.explanation || caseItem.rationale,
      codingConcept: caseItem.coding_concept,
      commonMistake: caseItem.common_mistake || caseItem.common_trap,
      learningObjective: caseItem.learning_objective,
      reasoningQuality,
      reference: caseItem.reference || caseItem.official_reference,
    },
  };
}

// -------------------------------------------------------------
// ASSESSMENTS
// -------------------------------------------------------------
export function getAllAssessments(): AssessmentRecord[] {
  return getItem<AssessmentRecord[]>(STORAGE_KEYS.ASSESSMENTS, []);
}

export function getUserAssessments(userId: string): AssessmentRecord[] {
  return getAllAssessments().filter((a) => a.user_id === userId);
}

export function getAssessmentById(id: string): AssessmentRecord | null {
  return getAllAssessments().find((a) => a.id === id) || null;
}

export function createAssessment(userId: string, timeLimitSeconds: number = 900): AssessmentRecord {
  const newAssessment: AssessmentRecord = {
    id: `asmt_${Date.now()}`,
    user_id: userId,
    type: 'onboarding_readiness',
    status: 'in_progress',
    started_at: new Date().toISOString(),
    time_limit_seconds: timeLimitSeconds,
    readiness_score: 0,
    accuracy_score: 0,
    documentation_score: 0,
    judgment_score: 0,
    speed_score: 0,
    readiness_level: 'Developing',
    strongest_skill: 'Diagnosis Selection',
    weakest_skill: 'Documentation Interpretation',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const list = getAllAssessments();
  list.push(newAssessment);
  setItem(STORAGE_KEYS.ASSESSMENTS, list);
  return newAssessment;
}

export function completeAssessment(assessmentId: string): AssessmentRecord | null {
  const assessments = getAllAssessments();
  const index = assessments.findIndex((a) => a.id === assessmentId);
  if (index === -1) return null;

  const assessment = assessments[index];
  const allAttempts = getAllAttempts().filter((att) => att.assessment_id === assessmentId);
  const cases = getAllCases();

  const caseMeta = cases.map((c) => ({
    id: c.id,
    skill: c.skill || c.primary_skill || 'Diagnosis Selection',
    target_time_seconds: c.target_time_seconds,
  }));

  const results = computeAssessmentResults(allAttempts, caseMeta);

  const updated: AssessmentRecord = {
    ...assessment,
    status: 'completed',
    completed_at: new Date().toISOString(),
    readiness_score: results.readinessScore,
    accuracy_score: results.accuracyScore,
    documentation_score: results.documentationScore,
    judgment_score: results.judgmentScore,
    speed_score: results.speedScore,
    readiness_level: results.readinessLevel,
    strongest_skill: results.strongestSkill,
    weakest_skill: results.weakestSkill,
    attempts: allAttempts,
    updated_at: new Date().toISOString(),
  };

  assessments[index] = updated;
  setItem(STORAGE_KEYS.ASSESSMENTS, assessments);
  return updated;
}

// -------------------------------------------------------------
// SUBSCRIPTIONS
// -------------------------------------------------------------
export function getUserSubscription(userId: string): SubscriptionRecord {
  const list = getItem<SubscriptionRecord[]>(STORAGE_KEYS.SUBSCRIPTIONS, []);
  const sub = list.find((s) => s.user_id === userId);
  if (sub) return sub;

  // Default free subscription
  const defaultSub: SubscriptionRecord = {
    id: `sub_${userId}`,
    user_id: userId,
    plan: 'free',
    status: 'active',
    current_period_start: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  return defaultSub;
}

export function upgradeUserToPro(userId: string, paymentDetails: {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
}): SubscriptionRecord {
  const list = getItem<SubscriptionRecord[]>(STORAGE_KEYS.SUBSCRIPTIONS, []);
  const index = list.findIndex((s) => s.user_id === userId);

  const now = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(now.getMonth() + 1);

  const proSub: SubscriptionRecord = {
    id: index >= 0 ? list[index].id : `sub_${Date.now()}`,
    user_id: userId,
    plan: 'pro',
    status: 'active',
    razorpay_payment_id: paymentDetails.razorpay_payment_id,
    current_period_start: now.toISOString(),
    current_period_end: nextMonth.toISOString(),
    created_at: index >= 0 ? list[index].created_at : now.toISOString(),
    updated_at: now.toISOString(),
  };

  if (index >= 0) {
    list[index] = proSub;
  } else {
    list.push(proSub);
  }

  setItem(STORAGE_KEYS.SUBSCRIPTIONS, list);
  return proSub;
}
