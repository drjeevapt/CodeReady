import { CaseItem, OptionItem, Case } from '../types';

export interface QualityScoreBreakdown {
  documentationScore: number; // max 20
  codingVerificationScore: number; // max 30
  educationalValueScore: number; // max 20
  questionQualityScore: number; // max 15
  distractorQualityScore: number; // max 10
  referenceCompletenessScore: number; // max 5
  totalScore: number; // max 100
  isPublishable: boolean;
  blockers: string[];
  recommendations: string[];
}

export interface DuplicateMatch {
  matchedCaseId: string;
  matchedCaseNumber: number;
  matchedTitle: string;
  matchedCode: string;
  similarityScore: number; // 0 to 100%
  similarityPercentage: number;
  reasons: string[];
}

export const PUBLISH_QUALITY_THRESHOLD = 90;

/**
 * Calculates the internal Content Quality Score (0-100) for a medical coding case.
 */
export function calculateCaseQualityScore(caseItem: Partial<CaseItem | Case>): QualityScoreBreakdown {
  const blockers: string[] = [];
  const recommendations: string[] = [];

  // 1. Documentation Quality (20 pts)
  let docScore = 0;
  const doc = (caseItem.clinical_documentation || '').trim();
  if (doc.length >= 80) docScore += 8;
  if (
    doc.includes('SUBJECTIVE') ||
    doc.includes('OBJECTIVE') ||
    doc.includes('ASSESSMENT') ||
    doc.includes('PLAN') ||
    doc.includes('History:') ||
    doc.includes('Exam:') ||
    doc.includes('Assessment:')
  ) {
    docScore += 7;
  }
  if (!doc.match(/\b(John Doe|Jane Smith|SSN|Phone)\b/i)) {
    docScore += 5; // Synthetic/de-identified check
  } else {
    blockers.push('Potential real identifiable information (PHI) detected in clinical documentation.');
  }

  // 2. Coding Verification (30 pts)
  let codeScore = 0;
  const code = (caseItem.code || (caseItem as any).icd10cm_code || '').trim();
  const isVerified = (caseItem as any).coding_verification_status === 'VERIFIED' || (caseItem as any).review_status === 'Approved';

  if (code.length >= 3 && /^[A-Z][0-9][A-Z0-9](\.[A-Z0-9]+)?(,\s*[A-Z][0-9][A-Z0-9](\.[A-Z0-9]+)?)*$/i.test(code)) {
    codeScore += 10;
  } else {
    blockers.push('Invalid ICD-10-CM code format.');
  }

  if (caseItem.code_set_year && caseItem.code_set_year.length >= 4) {
    codeScore += 5;
  } else {
    blockers.push('Missing official Code-Set Year (e.g. FY2026/FY2027).');
  }

  if (isVerified) {
    codeScore += 15;
  } else {
    blockers.push('Code is not marked as VERIFIED against the official ICD-10-CM tabular list.');
    recommendations.push('Run coding review to certify ICD-10-CM code validity.');
  }

  // 3. Educational Value (20 pts)
  let eduScore = 0;
  if (caseItem.learning_objective && caseItem.learning_objective.trim().length >= 15) {
    eduScore += 8;
  } else {
    blockers.push('Missing or too brief learning objective.');
  }

  if ((caseItem.coding_concept || (caseItem as any).primary_skill) && ((caseItem.coding_concept || '').trim().length >= 5 || (caseItem as any).primary_skill)) {
    eduScore += 6;
  }

  if (caseItem.common_mistake || (caseItem as any).common_trap) {
    eduScore += 6;
  } else {
    recommendations.push('Add a common learner misconception / trap description.');
  }

  // 4. Question Quality (15 pts)
  let qScore = 0;
  const q = (caseItem.question || '').trim();
  if (q.length >= 15) qScore += 10;
  if (
    q.toLowerCase().includes('coding decision') ||
    q.toLowerCase().includes('supported') ||
    q.toLowerCase().includes('documentation') ||
    q.toLowerCase().includes('code') ||
    q.toLowerCase().includes('which')
  ) {
    qScore += 5;
  }

  // 5. Distractor Quality (10 pts)
  let distScore = 0;
  const options = caseItem.options || [];
  if (options.length === 4) {
    distScore += 5;
    const allHaveText = options.every((o) => o.text && o.text.trim().length > 5);
    if (allHaveText) distScore += 3;
    if (caseItem.correct_answer || (caseItem as any).correct_option) distScore += 2;
  } else {
    blockers.push('Case must have exactly 4 answer options.');
  }

  // 6. Reference Completeness (5 pts)
  let refScore = 0;
  const ref = (caseItem.reference || (caseItem as any).official_reference || '').trim();
  if (
    ref.length >= 5 &&
    (ref.toLowerCase().includes('guideline') ||
      ref.toLowerCase().includes('icd-10') ||
      ref.toLowerCase().includes('category') ||
      ref.toLowerCase().includes('cms') ||
      ref.toLowerCase().includes('cdc'))
  ) {
    refScore += 5;
  } else {
    recommendations.push('Cite the exact ICD-10-CM Guideline section or category.');
  }

  const totalScore = docScore + codeScore + eduScore + qScore + distScore + refScore;
  const isPublishable = totalScore >= PUBLISH_QUALITY_THRESHOLD && blockers.length === 0 && isVerified;

  return {
    documentationScore: docScore,
    codingVerificationScore: codeScore,
    educationalValueScore: eduScore,
    questionQualityScore: qScore,
    distractorQualityScore: distScore,
    referenceCompletenessScore: refScore,
    totalScore,
    isPublishable,
    blockers,
    recommendations,
  };
}

export const calculateContentQualityScore = calculateCaseQualityScore;

/**
 * Calculates string token similarity between two texts.
 */
function computeTextSimilarity(text1: string, text2: string): number {
  const clean1 = (text1 || '').toLowerCase().replace(/[^a-z0-9\s]/g, '');
  const clean2 = (text2 || '').toLowerCase().replace(/[^a-z0-9\s]/g, '');

  const words1 = new Set(clean1.split(/\s+/).filter((w) => w.length > 3));
  const words2 = new Set(clean2.split(/\s+/).filter((w) => w.length > 3));

  if (words1.size === 0 || words2.size === 0) return 0;

  let common = 0;
  words1.forEach((w) => {
    if (words2.has(w)) common += 1;
  });

  const totalUnique = new Set([...Array.from(words1), ...Array.from(words2)]).size;
  return Math.round((common / totalUnique) * 100);
}

/**
 * Checks a case for potential duplicates in the existing case repository.
 */
export function detectDuplicateCases(
  targetCase: Partial<CaseItem | Case>,
  allCases: (CaseItem | Case)[]
): DuplicateMatch[] {
  const matches: DuplicateMatch[] = [];

  for (const existing of allCases) {
    if (targetCase.id && existing.id === targetCase.id) continue;

    const reasons: string[] = [];
    let similarityScore = 0;

    // Check exact code match
    const isSameCode = existing.code === targetCase.code && Boolean(targetCase.code);
    if (isSameCode) {
      reasons.push(`Same target ICD-10-CM code (${existing.code})`);
      similarityScore += 30;
    }

    // Check title similarity
    const titleSim = computeTextSimilarity(targetCase.title || '', existing.title);
    if (titleSim >= 60) {
      reasons.push(`High title similarity (${titleSim}%)`);
      similarityScore += Math.round(titleSim * 0.35);
    }

    // Check documentation similarity
    const docSim = computeTextSimilarity(
      targetCase.clinical_documentation || '',
      existing.clinical_documentation
    );
    if (docSim >= 65) {
      reasons.push(`High documentation phrasing overlap (${docSim}%)`);
      similarityScore += Math.round(docSim * 0.35);
    }

    if (similarityScore >= 45 || (isSameCode && titleSim >= 50)) {
      matches.push({
        matchedCaseId: existing.id,
        matchedCaseNumber: existing.case_number,
        matchedTitle: existing.title,
        matchedCode: existing.code,
        similarityScore: Math.min(100, similarityScore),
        similarityPercentage: Math.min(100, similarityScore),
        reasons,
      });
    }
  }

  return matches.sort((a, b) => b.similarityScore - a.similarityScore);
}

export const findDuplicateCandidates = detectDuplicateCases;

/**
 * Validates whether a case can be transitioned to PUBLISHED status.
 */
export function validateCaseBeforePublish(caseItem: CaseItem | Case): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (caseItem.review_status !== 'Approved' && (caseItem as any).content_status !== 'APPROVED') {
    errors.push(`Review status must be approved before publication (current: ${caseItem.review_status}).`);
  }

  if (caseItem.coding_verification_status !== 'VERIFIED') {
    errors.push('ICD-10-CM code must be verified against the official code-set before publication.');
  }

  if (!caseItem.options || caseItem.options.length !== 4) {
    errors.push('Case must have exactly 4 answer options.');
  }

  if (!caseItem.correct_answer && !(caseItem as any).correct_option) {
    errors.push('A valid correct answer option must be designated.');
  }

  if (!caseItem.explanation && !(caseItem as any).rationale) {
    errors.push('Comprehensive coding rationale is required.');
  }

  if (!caseItem.reference && !(caseItem as any).official_reference) {
    errors.push('Official ICD-10-CM Guideline reference citation is required.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export const validateCaseForPublication = validateCaseBeforePublish;
