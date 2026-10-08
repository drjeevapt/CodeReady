import { describe, it, expect } from 'vitest';
import {
  canAccessUnlimitedPractice,
  canUseAITutor,
  canViewAdvancedAnalytics,
  getPracticeLimit,
  FREE_PRACTICE_CASE_LIMIT,
} from '../lib/entitlements/entitlements';

describe('Entitlements System Tests', () => {
  it('correctly gates features for free learners', () => {
    const freeContext = { plan: 'free' as const, status: 'active' as const, practiceCasesCompletedCount: 2 };

    expect(canAccessUnlimitedPractice(freeContext)).toBe(false);
    expect(canUseAITutor(freeContext)).toBe(false);
    expect(canViewAdvancedAnalytics(freeContext)).toBe(false);

    const limitInfo = getPracticeLimit(freeContext);
    expect(limitInfo.isUnlimited).toBe(false);
    expect(limitInfo.limit).toBe(FREE_PRACTICE_CASE_LIMIT);
    expect(limitInfo.remaining).toBe(FREE_PRACTICE_CASE_LIMIT - 2);
  });

  it('correctly unlocks all features for active Pro subscribers', () => {
    const proContext = { plan: 'pro' as const, status: 'active' as const, practiceCasesCompletedCount: 20 };

    expect(canAccessUnlimitedPractice(proContext)).toBe(true);
    expect(canUseAITutor(proContext)).toBe(true);
    expect(canViewAdvancedAnalytics(proContext)).toBe(true);

    const limitInfo = getPracticeLimit(proContext);
    expect(limitInfo.isUnlimited).toBe(true);
    expect(limitInfo.remaining).toBe(Infinity);
  });

  it('revokes features if subscription status is cancelled or past_due', () => {
    const expiredContext = { plan: 'pro' as const, status: 'expired' as const };
    expect(canAccessUnlimitedPractice(expiredContext)).toBe(false);
    expect(canUseAITutor(expiredContext)).toBe(false);
  });
});
