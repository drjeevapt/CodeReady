import { SubscriptionPlan, SubscriptionStatus } from '../types';

export interface EntitlementContext {
  plan?: SubscriptionPlan;
  status?: SubscriptionStatus;
  practiceCasesCompletedCount?: number;
}

export const FREE_PRACTICE_CASE_LIMIT = 5;

/**
 * Checks whether the user can access unlimited practice cases.
 */
export function canAccessUnlimitedPractice(context?: EntitlementContext): boolean {
  if (!context) return false;
  const isProOrCareer = context.plan === 'pro' || context.plan === 'career';
  const isActive = context.status === 'active';
  return isProOrCareer && isActive;
}

/**
 * Checks whether the user is entitled to use the AI Tutor.
 */
export function canUseAITutor(context?: EntitlementContext): boolean {
  if (!context) return false;
  const isProOrCareer = context.plan === 'pro' || context.plan === 'career';
  const isActive = context.status === 'active';
  return isProOrCareer && isActive;
}

/**
 * Checks whether the user can view advanced performance analytics.
 */
export function canViewAdvancedAnalytics(context?: EntitlementContext): boolean {
  if (!context) return false;
  const isProOrCareer = context.plan === 'pro' || context.plan === 'career';
  const isActive = context.status === 'active';
  return isProOrCareer && isActive;
}

/**
 * Returns the maximum allowed practice cases for free users.
 */
export function getPracticeLimit(context?: EntitlementContext): { limit: number; remaining: number; isUnlimited: boolean } {
  if (canAccessUnlimitedPractice(context)) {
    return { limit: Infinity, remaining: Infinity, isUnlimited: true };
  }
  const completed = context?.practiceCasesCompletedCount || 0;
  const remaining = Math.max(0, FREE_PRACTICE_CASE_LIMIT - completed);
  return {
    limit: FREE_PRACTICE_CASE_LIMIT,
    remaining,
    isUnlimited: false,
  };
}
