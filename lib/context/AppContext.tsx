'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  AssessmentRecord,
  CaseAttempt,
  CaseItem,
  ExperienceLevel,
  PublicCaseItem,
  SubscriptionRecord,
  UserProfile,
  UserRole,
} from '../types';
import {
  completeAssessment,
  createAssessment,
  getAllCases,
  getAssessmentById,
  getCurrentUser,
  getPublishedCases,
  getUserAssessments,
  getUserAttempts,
  getUserSubscription,
  initializeStorage,
  saveCase,
  saveUser,
  setCurrentUser,
  submitCaseAttempt,
  upgradeUserToPro,
} from '../services/storageService';
import {
  canAccessUnlimitedPractice,
  canUseAITutor,
  canViewAdvancedAnalytics,
  getPracticeLimit,
} from '../entitlements/entitlements';
import { trackEvent } from '../analytics/analytics';

interface AppContextType {
  user: UserProfile | null;
  isLoading: boolean;
  cases: CaseItem[];
  publishedCases: CaseItem[];
  subscription: SubscriptionRecord | null;
  userAssessments: AssessmentRecord[];
  userAttempts: CaseAttempt[];
  canUnlimitedPractice: boolean;
  canAITutor: boolean;
  canAnalytics: boolean;
  practiceLimit: { limit: number; remaining: number; isUnlimited: boolean };
  signup: (fullName: string, email: string, experienceLevel: ExperienceLevel) => Promise<UserProfile>;
  login: (email: string) => Promise<UserProfile>;
  logout: () => void;
  switchRole: (role: UserRole) => void;
  startNewAssessment: () => AssessmentRecord;
  submitAnswer: (params: {
    caseId: string;
    assessmentId?: string;
    selectedAnswer: string;
    reasoning: string;
    timeTakenSeconds: number;
    mode: 'assessment' | 'practice';
  }) => { attempt: CaseAttempt; feedback: any };
  finalizeAssessment: (assessmentId: string) => AssessmentRecord | null;
  upgradeSubscription: (paymentId: string) => SubscriptionRecord;
  upsertCase: (caseItem: CaseItem) => void;
  refreshData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [subscription, setSubscription] = useState<SubscriptionRecord | null>(null);
  const [userAssessments, setUserAssessments] = useState<AssessmentRecord[]>([]);
  const [userAttempts, setUserAttempts] = useState<CaseAttempt[]>([]);

  const refreshData = () => {
    initializeStorage();
    const currentUser = getCurrentUser();
    setUser(currentUser);

    const allCasesList = getAllCases();
    setCases(allCasesList);

    if (currentUser) {
      const sub = getUserSubscription(currentUser.id);
      setSubscription(sub);

      const assessments = getUserAssessments(currentUser.id);
      setUserAssessments(assessments);

      const attempts = getUserAttempts(currentUser.id);
      setUserAttempts(attempts);
    } else {
      setSubscription(null);
      setUserAssessments([]);
      setUserAttempts([]);
    }
  };

  useEffect(() => {
    refreshData();
    setIsLoading(false);
  }, []);

  const signup = async (fullName: string, email: string, experienceLevel: ExperienceLevel): Promise<UserProfile> => {
    const newUser: UserProfile = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      email: email.trim().toLowerCase(),
      full_name: fullName.trim(),
      experience_level: experienceLevel,
      role: email.toLowerCase().includes('admin') ? 'admin' : 'learner',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    saveUser(newUser);
    setCurrentUser(newUser);
    setUser(newUser);
    refreshData();

    trackEvent('signup_completed', {
      userId: newUser.id,
      experienceLevel: newUser.experience_level,
    });

    return newUser;
  };

  const login = async (email: string): Promise<UserProfile> => {
    const cleanEmail = email.trim().toLowerCase();
    const isSpecialAdmin = cleanEmail.includes('admin') || cleanEmail === 'admin@codeready.health';

    let loggedInUser: UserProfile = {
      id: isSpecialAdmin ? 'admin-001' : `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, '_')}`,
      email: cleanEmail,
      full_name: isSpecialAdmin ? 'Dr. Sarah Mitchell, CPC, CPMA' : cleanEmail.split('@')[0].replace('.', ' '),
      experience_level: isSpecialAdmin ? '3+ years' : 'Fresher',
      role: isSpecialAdmin ? 'admin' : 'learner',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    saveUser(loggedInUser);
    setCurrentUser(loggedInUser);
    setUser(loggedInUser);
    refreshData();

    trackEvent('login_completed', {
      userId: loggedInUser.id,
      role: loggedInUser.role,
    });

    return loggedInUser;
  };

  const logout = () => {
    setCurrentUser(null);
    setUser(null);
    setSubscription(null);
    setUserAssessments([]);
    setUserAttempts([]);
  };

  const switchRole = (newRole: UserRole) => {
    if (!user) return;
    const updatedUser: UserProfile = { ...user, role: newRole, updated_at: new Date().toISOString() };
    saveUser(updatedUser);
    setCurrentUser(updatedUser);
    setUser(updatedUser);
    refreshData();
  };

  const startNewAssessment = (): AssessmentRecord => {
    const activeUserId = user ? user.id : 'guest_learner';
    const asmt = createAssessment(activeUserId, 900); // 15 min limit
    trackEvent('assessment_started', { assessmentId: asmt.id, userId: activeUserId });
    refreshData();
    return asmt;
  };

  const submitAnswer = (params: {
    caseId: string;
    assessmentId?: string;
    selectedAnswer: string;
    reasoning: string;
    timeTakenSeconds: number;
    mode: 'assessment' | 'practice';
  }) => {
    const activeUserId = user ? user.id : 'guest_learner';
    const result = submitCaseAttempt({
      ...params,
      userId: activeUserId,
    });

    trackEvent('case_submitted', {
      caseId: params.caseId,
      isCorrect: result.attempt.is_correct,
      timeTaken: params.timeTakenSeconds,
      mode: params.mode,
    });

    refreshData();
    return result;
  };

  const finalizeAssessment = (assessmentId: string): AssessmentRecord | null => {
    const completed = completeAssessment(assessmentId);
    if (completed) {
      trackEvent('assessment_completed', {
        assessmentId,
        readinessScore: completed.readiness_score,
        level: completed.readiness_level,
      });
      refreshData();
    }
    return completed;
  };

  const upgradeSubscription = (paymentId: string): SubscriptionRecord => {
    const activeUserId = user ? user.id : 'guest_learner';
    const newSub = upgradeUserToPro(activeUserId, { razorpay_payment_id: paymentId });
    setSubscription(newSub);
    trackEvent('payment_success', { userId: activeUserId, plan: 'pro', paymentId });
    refreshData();
    return newSub;
  };

  const upsertCase = (caseItem: CaseItem) => {
    saveCase(caseItem);
    refreshData();
  };

  const publishedCases = cases.filter((c) => c.status === 'Published');

  const entitlementContext = {
    plan: subscription?.plan || 'free',
    status: subscription?.status || 'active',
    practiceCasesCompletedCount: userAttempts.filter((a) => a.mode === 'practice').length,
  };

  const canUnlimitedPractice = canAccessUnlimitedPractice(entitlementContext);
  const canAITutor = canUseAITutor(entitlementContext);
  const canAnalytics = canViewAdvancedAnalytics(entitlementContext);
  const practiceLimit = getPracticeLimit(entitlementContext);

  return (
    <AppContext.Provider
      value={{
        user,
        isLoading,
        cases,
        publishedCases,
        subscription,
        userAssessments,
        userAttempts,
        canUnlimitedPractice,
        canAITutor,
        canAnalytics,
        practiceLimit,
        signup,
        login,
        logout,
        switchRole,
        startNewAssessment,
        submitAnswer,
        finalizeAssessment,
        upgradeSubscription,
        upsertCase,
        refreshData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
