import { CaseAttempt, ReadinessLevel, ReasoningQuality, SkillCategory } from '../types';

/**
 * Calculates speed score based on target time.
 * > target = 100
 * Minor overrun (105s vs 90s) = 85
 * 50% overrun (130s vs 90s) = 70
 * Double overrun (180s vs 90s) = 55
 * Severe overrun (240s vs 90s) = 40
 */
export function calculateSpeedScore(targetTimeSeconds: number, actualTimeSeconds: number): number {
  if (actualTimeSeconds <= targetTimeSeconds) {
    return 100;
  }
  const excess = actualTimeSeconds - targetTimeSeconds;
  if (excess <= 15) return 100 - excess;
  if (excess <= 40) return 85 - Math.round((excess - 15) * (15 / 25));
  if (excess <= 90) return 70 - Math.round((excess - 40) * (15 / 50));
  return Math.max(30, 55 - Math.round((excess - 90) * (15 / 60)));
}

/**
 * Returns the readiness level classification string for a given score.
 */
export function getReadinessLevel(score: number): ReadinessLevel {
  if (score >= 90) return 'Assessment Ready';
  if (score >= 75) return 'Job Ready';
  if (score >= 60) return 'Approaching Job Ready';
  if (score >= 40) return 'Developing';
  return 'Needs Foundation';
}

/**
 * Evaluates reasoning quality string for medical coding rigor.
 */
export function evaluateReasoningQuality(reasoningText: string, isCorrect: boolean): ReasoningQuality {
  if (!reasoningText || reasoningText.trim().length === 0) {
    return 'Needs improvement';
  }

  const text = reasoningText.toLowerCase();
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  const clinicalKeywords = [
    'documented',
    'assessment',
    'laterality',
    'right',
    'left',
    'bilateral',
    'symptom',
    'diagnosis',
    'primary',
    'osteoarthritis',
    'specific',
    'guideline',
    'rule',
    'sequencing',
    'history',
    'exam',
    'mri',
    'x-ray',
    'code',
  ];

  let keywordHits = 0;
  clinicalKeywords.forEach((kw) => {
    if (text.includes(kw)) keywordHits += 1;
  });

  if (isCorrect) {
    if (wordCount >= 15 && keywordHits >= 2) {
      return 'Strong';
    }
    if (wordCount >= 8 || keywordHits >= 1) {
      return 'Adequate';
    }
    return 'Needs improvement';
  } else {
    if (wordCount >= 15 && keywordHits >= 2) {
      return 'Adequate';
    }
    return 'Needs improvement';
  }
}

export interface ReadinessScoreResult {
  readinessScore: number;
  accuracyScore: number;
  documentationScore: number;
  judgmentScore: number;
  speedScore: number;
  readinessLevel: ReadinessLevel;
  strongestSkill: SkillCategory;
  weakestSkill: SkillCategory;
  skillBreakdown: Record<string, number>;
  totalTimeSeconds: number;
  averageTimePerCase: number;
}

/**
 * Computes official CodeReady Readiness Score (50% Accuracy, 25% Documentation, 15% Judgment, 10% Speed)
 */
export function computeAssessmentResults(
  attempts: CaseAttempt[],
  casesMetadata: { id: string; skill: SkillCategory; target_time_seconds: number }[]
): ReadinessScoreResult {
  if (!attempts || attempts.length === 0) {
    return {
      readinessScore: 0,
      accuracyScore: 0,
      documentationScore: 0,
      judgmentScore: 0,
      speedScore: 0,
      readinessLevel: 'Needs Foundation',
      strongestSkill: 'Diagnosis Selection',
      weakestSkill: 'Documentation Interpretation',
      skillBreakdown: {
        'Documentation Interpretation': 0,
        'Diagnosis Selection': 0,
        'Laterality & Specificity': 0,
        'Coding Judgment': 0,
        'Clinical Reasoning': 0,
      },
      totalTimeSeconds: 0,
      averageTimePerCase: 0,
    };
  }

  const caseMap = new Map(casesMetadata.map((c) => [c.id, c]));

  let correctCount = 0;
  let totalTime = 0;
  let totalSpeedScore = 0;

  const skillTotals: Record<string, { total: number; correct: number; scoreSum: number }> = {
    'Documentation Interpretation': { total: 0, correct: 0, scoreSum: 0 },
    'Diagnosis Selection': { total: 0, correct: 0, scoreSum: 0 },
    'Laterality & Specificity': { total: 0, correct: 0, scoreSum: 0 },
    'Coding Judgment': { total: 0, correct: 0, scoreSum: 0 },
    'Clinical Reasoning': { total: 0, correct: 0, scoreSum: 0 },
  };

  attempts.forEach((attempt) => {
    const meta = caseMap.get(attempt.case_id);
    const skill = meta?.skill || 'Diagnosis Selection';
    const targetTime = meta?.target_time_seconds || 90;

    const isCorrect = attempt.is_correct;
    if (isCorrect) correctCount += 1;

    const timeTaken = attempt.time_taken_seconds || 60;
    totalTime += timeTaken;

    const speed = calculateSpeedScore(targetTime, timeTaken);
    totalSpeedScore += speed;

    const caseScore = isCorrect ? 100 : 0;
    if (!skillTotals[skill]) {
      skillTotals[skill] = { total: 0, correct: 0, scoreSum: 0 };
    }
    skillTotals[skill].total += 1;
    if (isCorrect) skillTotals[skill].correct += 1;
    skillTotals[skill].scoreSum += caseScore;
  });

  const count = attempts.length;
  const accuracyScore = Math.round((correctCount / count) * 100);
  const speedScore = Math.round(totalSpeedScore / count);

  // Calculate scores per skill category
  const skillBreakdown: Record<string, number> = {};

  let maxSkillScore = -1;
  let minSkillScore = 101;
  let strongestSkill: SkillCategory = 'Diagnosis Selection';
  let weakestSkill: SkillCategory = 'Documentation Interpretation';

  Object.keys(skillTotals).forEach((skill) => {
    const data = skillTotals[skill];
    const score = data.total > 0 ? Math.round((data.correct / data.total) * 100) : accuracyScore;
    skillBreakdown[skill] = score;

    if (data.total > 0) {
      if (score > maxSkillScore) {
        maxSkillScore = score;
        strongestSkill = skill;
      }
      if (score < minSkillScore) {
        minSkillScore = score;
        weakestSkill = skill;
      }
    }
  });

  // Specific domain scores
  const docScore = skillBreakdown['Documentation Interpretation'] || accuracyScore;
  const judgmentScore = skillBreakdown['Coding Judgment'] || Math.round(accuracyScore * 0.9);

  // Readiness Formula
  const rawReadiness = accuracyScore * 0.5 + docScore * 0.25 + judgmentScore * 0.15 + speedScore * 0.1;
  const readinessScore = Math.min(100, Math.max(0, Math.round(rawReadiness)));
  const readinessLevel = getReadinessLevel(readinessScore);

  return {
    readinessScore,
    accuracyScore,
    documentationScore: docScore,
    judgmentScore,
    speedScore,
    readinessLevel,
    strongestSkill,
    weakestSkill,
    skillBreakdown,
    totalTimeSeconds: totalTime,
    averageTimePerCase: Math.round(totalTime / count),
  };
}
