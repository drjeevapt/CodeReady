'use client';

import React from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  TrendingUp,
  Target,
  Clock,
  CheckCircle2,
  XCircle,
  BookOpen,
  Award,
  Sparkles,
  FileText,
  AlertCircle,
  Calendar,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { ScoreCard } from '../../components/clinical/ScoreCard';
import { SkillCard } from '../../components/clinical/SkillCard';
import { CaseCard } from '../../components/clinical/CaseCard';
import { useApp } from '../../lib/context/AppContext';

export default function DashboardPage() {
  const { user, userAssessments, userAttempts, publishedCases, subscription } = useApp();

  const firstName = user?.full_name?.split(' ')[0] || 'Coder';

  // Get latest completed assessment or baseline
  const latestAssessment = userAssessments
    .filter((a) => a.status === 'completed')
    .sort((a, b) => new Date(b.completed_at || b.created_at).getTime() - new Date(a.completed_at || a.created_at).getTime())[0];

  const readinessScore = latestAssessment ? latestAssessment.readiness_score : 74;
  const readinessLevel = latestAssessment ? latestAssessment.readiness_level : 'Approaching Job Ready';
  const accuracyScore = latestAssessment ? latestAssessment.accuracy_score : 80;
  const docScore = latestAssessment ? latestAssessment.documentation_score : 75;
  const judgmentScore = latestAssessment ? latestAssessment.judgment_score : 70;
  const speedScore = latestAssessment ? latestAssessment.speed_score : 72;
  const weakestSkill = latestAssessment ? latestAssessment.weakest_skill : 'Documentation Interpretation';

  const recommendedCases = publishedCases
    .filter((c) => c.skill === weakestSkill)
    .slice(0, 3);

  const isPro = subscription?.plan === 'pro' && subscription?.status === 'active';

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Greeting Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Good morning, {firstName}
          </h1>
          <p className="text-sm text-content-secondary mt-0.5">
            Let&apos;s improve your coding confidence today.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/assessment">
            <Button variant="secondary" size="md" leftIcon={<Activity className="w-4 h-4 text-teal" />}>
              {latestAssessment ? 'Retake Assessment' : 'Take 10-Case Assessment'}
            </Button>
          </Link>
          <Link href="/practice">
            <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Continue Practice
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Score Card */}
      <div className="relative">
        <ScoreCard
          score={readinessScore}
          readinessLevel={readinessLevel}
          subtitle="Based on your latest ICD-10-CM Orthopedics & Rehabilitation evaluations."
        />
      </div>

      {/* 4 Core Skill Profile Breakdown */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-teal" />
            <h2 className="text-base font-bold text-navy-950">Core Competency Breakdown</h2>
          </div>
          <span className="text-xs text-content-secondary">Standardized across 10 cases</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCard
            title="Coding Accuracy"
            score={accuracyScore}
            description="Assigning correct ICD-10-CM codes supported by documentation."
            icon={CheckCircle2}
            benchmark="Target: 85%+"
          />
          <SkillCard
            title="Documentation Interpretation"
            score={docScore}
            description="Respecting documented facts and avoiding premature assumptions."
            icon={FileText}
            benchmark="Target: 80%+"
          />
          <SkillCard
            title="Coding Judgment"
            score={judgmentScore}
            description="Outpatient rule-out principles and postoperative sequencing."
            icon={BookOpen}
            benchmark="Target: 75%+"
          />
          <SkillCard
            title="Speed & Production"
            score={speedScore}
            description="Average pacing compared to industry baseline (~90s/case)."
            icon={Clock}
            benchmark="Target: 70%+"
          />
        </div>
      </div>

      {/* Recommended Practice Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="warning" size="sm">
                Targeted Recommendation
              </Badge>
              <h2 className="text-base font-bold text-navy-950">
                Focus Area: {weakestSkill}
              </h2>
            </div>
            <p className="text-xs text-content-secondary mt-1">
              3 practice cases recommended to strengthen your lowest scoring skill domain.
            </p>
          </div>

          <Link href="/practice">
            <Button variant="outline" size="sm">
              Open Case Library →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(recommendedCases.length > 0 ? recommendedCases : publishedCases.slice(0, 3)).map((c) => (
            <CaseCard key={c.id} caseItem={c} attempts={userAttempts} />
          ))}
        </div>
      </div>

      {/* Two Column Grid: Recent Activity & Readiness Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Table (2 Cols) */}
        <div className="lg:col-span-2 bg-white border border-surface-border rounded-xl p-5 shadow-subtle space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-navy-950">Recent Case Activity</h3>
            <span className="text-xs text-content-secondary">
              {userAttempts.length} total attempts
            </span>
          </div>

          {userAttempts.length === 0 ? (
            <div className="py-8 text-center text-xs text-content-secondary">
              No attempts yet. Take your first case in the Assessment or Practice Library!
            </div>
          ) : (
            <div className="divide-y divide-slate-100 overflow-x-auto">
              {userAttempts.slice(-5).reverse().map((attempt) => {
                const caseItem = publishedCases.find((c) => c.id === attempt.case_id);
                return (
                  <div key={attempt.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      {attempt.is_correct ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      )}
                      <div>
                        <strong className="text-navy-950 block font-semibold truncate max-w-[200px] sm:max-w-xs">
                          {caseItem?.title || attempt.case_id}
                        </strong>
                        <span className="text-slate-400 text-[11px]">
                          {caseItem?.skill} • {attempt.mode === 'assessment' ? 'Assessment' : 'Practice'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-slate-500 font-mono hidden sm:inline">
                        {attempt.time_taken_seconds}s
                      </span>
                      <Badge variant={attempt.is_correct ? 'success' : 'error'} size="sm">
                        {attempt.is_correct ? 'Passed' : 'Missed'}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Readiness Trend / Milestones (1 Col) */}
        <div className="bg-white border border-surface-border rounded-xl p-5 shadow-subtle space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-navy-950">Readiness Trajectory</h3>
              <TrendingUp className="w-4 h-4 text-teal" />
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-teal-50/60 rounded-lg border border-teal-200 text-xs">
                <div className="flex items-center justify-between font-semibold text-teal-900 mb-1">
                  <span>Current Level</span>
                  <span>{readinessScore}/100</span>
                </div>
                <p className="text-[11px] text-teal-800">
                  {readinessLevel} — Ready for entry-level interview evaluations.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-surface-border text-xs text-content-secondary space-y-1">
                <div className="font-semibold text-navy-950">Hiring Benchmark</div>
                <p className="text-[11px]">
                  Most healthcare coding recruiters look for candidates scoring <strong>≥75/100</strong> on clinical documentation judgment.
                </p>
              </div>
            </div>
          </div>

          {!isPro && (
            <div className="pt-3 border-t border-slate-100">
              <Link href="/pricing">
                <Button variant="primary" size="sm" className="w-full">
                  Upgrade for AI Tutor & Unlimited Cases
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
