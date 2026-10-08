import { describe, it, expect } from 'vitest';
import {
  calculateSpeedScore,
  evaluateReasoningQuality,
  getReadinessLevel,
  computeAssessmentResults,
} from '../lib/scoring/scoringEngine';
import { CaseAttempt } from '../lib/types';

describe('Scoring Engine Unit Tests', () => {
  it('calculates speed scores accurately', () => {
    // Within target
    expect(calculateSpeedScore(90, 80)).toBe(100);
    expect(calculateSpeedScore(90, 90)).toBe(100);

    // Minor overrun
    expect(calculateSpeedScore(90, 105)).toBe(85);

    // 50% overrun
    expect(calculateSpeedScore(90, 130)).toBe(70);

    // Double overrun
    expect(calculateSpeedScore(90, 180)).toBe(55);

    // Severe overrun
    expect(calculateSpeedScore(90, 240)).toBe(40);
  });

  it('evaluates reasoning text quality', () => {
    expect(evaluateReasoningQuality('', false)).toBe('Needs improvement');
    expect(evaluateReasoningQuality('too short', false)).toBe('Needs improvement');

    const strongReasoning =
      'Per ICD-10-CM Guideline I.B.4, knee pain is an inherent symptom of documented right knee osteoarthritis and should not be separately coded.';
    expect(evaluateReasoningQuality(strongReasoning, true)).toBe('Strong');

    const adequateReasoning =
      'Selected M17.11 because the patient has primary osteoarthritis in the right knee.';
    expect(evaluateReasoningQuality(adequateReasoning, true)).toBe('Adequate');
  });

  it('maps numerical scores to exact readiness levels without shaming', () => {
    expect(getReadinessLevel(95)).toBe('Assessment Ready');
    expect(getReadinessLevel(90)).toBe('Assessment Ready');
    expect(getReadinessLevel(85)).toBe('Job Ready');
    expect(getReadinessLevel(75)).toBe('Job Ready');
    expect(getReadinessLevel(74)).toBe('Approaching Job Ready');
    expect(getReadinessLevel(60)).toBe('Approaching Job Ready');
    expect(getReadinessLevel(55)).toBe('Developing');
    expect(getReadinessLevel(40)).toBe('Developing');
    expect(getReadinessLevel(35)).toBe('Needs Foundation');
    expect(getReadinessLevel(0)).toBe('Needs Foundation');
  });

  it('computes composite weighted readiness score correctly (50/25/15/10 formula)', () => {
    const mockCasesMeta = [
      { id: 'c1', skill: 'Diagnosis Selection' as const, target_time_seconds: 90 },
      { id: 'c2', skill: 'Documentation Interpretation' as const, target_time_seconds: 90 },
      { id: 'c3', skill: 'Laterality & Specificity' as const, target_time_seconds: 60 },
      { id: 'c4', skill: 'Coding Judgment' as const, target_time_seconds: 100 },
    ];

    const mockAttempts: CaseAttempt[] = [
      {
        id: 'a1',
        user_id: 'u1',
        case_id: 'c1',
        selected_answer: 'opt_b',
        reasoning: 'Valid guideline rationale',
        is_correct: true,
        accuracy_score: 100,
        documentation_score: 100,
        judgment_score: 100,
        speed_score: 100,
        time_taken_seconds: 70,
        reasoning_quality: 'Strong',
        feedback_viewed: true,
        mode: 'assessment',
        created_at: new Date().toISOString(),
      },
      {
        id: 'a2',
        user_id: 'u1',
        case_id: 'c2',
        selected_answer: 'opt_c',
        reasoning: 'Symptoms only per Guideline IV.H',
        is_correct: true,
        accuracy_score: 100,
        documentation_score: 100,
        judgment_score: 100,
        speed_score: 100,
        time_taken_seconds: 80,
        reasoning_quality: 'Strong',
        feedback_viewed: true,
        mode: 'assessment',
        created_at: new Date().toISOString(),
      },
      {
        id: 'a3',
        user_id: 'u1',
        case_id: 'c3',
        selected_answer: 'opt_b',
        reasoning: 'Laterality 2 for left knee',
        is_correct: true,
        accuracy_score: 100,
        documentation_score: 100,
        judgment_score: 100,
        speed_score: 100,
        time_taken_seconds: 50,
        reasoning_quality: 'Adequate',
        feedback_viewed: true,
        mode: 'assessment',
        created_at: new Date().toISOString(),
      },
      {
        id: 'a4',
        user_id: 'u1',
        case_id: 'c4',
        selected_answer: 'opt_a',
        reasoning: 'Aftercare sequencing Z47.1',
        is_correct: false,
        accuracy_score: 0,
        documentation_score: 0,
        judgment_score: 0,
        speed_score: 100,
        time_taken_seconds: 90,
        reasoning_quality: 'Needs improvement',
        feedback_viewed: true,
        mode: 'assessment',
        created_at: new Date().toISOString(),
      },
    ];

    const results = computeAssessmentResults(mockAttempts, mockCasesMeta);

    expect(results.accuracyScore).toBe(75); // 3 of 4 correct = 75%
    expect(results.speedScore).toBe(100);
    expect(results.readinessScore).toBeGreaterThanOrEqual(60);
    expect(results.readinessScore).toBeLessThanOrEqual(100);
    expect(results.strongestSkill).toBeDefined();
    expect(results.weakestSkill).toBeDefined();
  });
});
