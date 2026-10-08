'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Award,
  TrendingUp,
  Target,
  ArrowRight,
  Sparkles,
  BookOpen,
  Zap,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  LayoutDashboard,
} from 'lucide-react';
import { ScoreCard } from '../../../../components/clinical/ScoreCard';
import { SkillCard } from '../../../../components/clinical/SkillCard';
import { CaseCard } from '../../../../components/clinical/CaseCard';
import { Button } from '../../../../components/ui/Button';
import { Card } from '../../../../components/ui/Card';
import { Badge } from '../../../../components/ui/Badge';
import { useApp } from '../../../../lib/context/AppContext';
import { getAssessmentById, getUserAttempts } from '../../../../lib/services/storageService';
import { AssessmentRecord, CaseAttempt, CaseItem } from '../../../../lib/types';

export default function AssessmentResultsPage() {
  const params = useParams();
  const router = useRouter();
  const attemptId = String(params.attemptId || '');
  const { publishedCases, subscription } = useApp();

  const [assessment, setAssessment] = useState<AssessmentRecord | null>(null);
  const [attempts, setAttempts] = useState<CaseAttempt[]>([]);

  useEffect(() => {
    const asmt = getAssessmentById(attemptId);
    if (asmt) {
      setAssessment(asmt);
      if (asmt.attempts) {
        setAttempts(asmt.attempts);
      }
    }
  }, [attemptId]);

  if (!assessment) {
    return (
      <div className="py-20 text-center text-content-secondary">
        Computing readiness metrics...
      </div>
    );
  }

  // Find 3 recommended practice cases targeting weakest skill
  const weakestSkill = assessment.weakest_skill || 'Documentation Interpretation';
  const recommendedCases = publishedCases
    .filter((c) => c.skill === weakestSkill)
    .slice(0, 3);

  const fallbackCases = recommendedCases.length > 0 ? recommendedCases : publishedCases.slice(0, 3);

  const isPro = subscription?.plan === 'pro' && subscription?.status === 'active';

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10 animate-fade-in">
      {/* Top Banner Header */}
      <div className="text-center space-y-2">
        <Badge variant="teal" size="md">
          Official Assessment Completed
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
          Your Coding Readiness Score
        </h1>
        <p className="text-xs sm:text-sm text-content-secondary max-w-lg mx-auto">
          Benchmarked against junior orthopedic coding standards and ICD-10-CM guidelines.
        </p>
      </div>

      {/* Hero Score Card */}
      <ScoreCard
        score={assessment.readiness_score}
        readinessLevel={assessment.readiness_level}
      />

      {/* 4 Core Skill Profile Metrics */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-teal" />
            <h2 className="text-lg font-bold text-navy-950">Skill Profile</h2>
          </div>
          <span className="text-xs text-content-secondary font-medium">
            Passing Target: ≥80%
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCard
            title="Coding Accuracy"
            score={assessment.accuracy_score}
            description="Identifying the legally and clinically supported diagnosis code."
            icon={CheckCircle2}
            benchmark="Target: 85%+"
          />
          <SkillCard
            title="Documentation Interpretation"
            score={assessment.documentation_score}
            description="Respecting documented boundaries without premature inferences."
            icon={FileText}
            benchmark="Target: 80%+"
          />
          <SkillCard
            title="Coding Judgment"
            score={assessment.judgment_score}
            description="Applying outpatient uncertainty and surgical aftercare sequence rules."
            icon={BookOpen}
            benchmark="Target: 75%+"
          />
          <SkillCard
            title="Speed & Pacing"
            score={assessment.speed_score}
            description="Pacing per case against real-world production expectations (~90s)."
            icon={Clock}
            benchmark="Target: 70%+"
          />
        </div>
      </div>

      {/* Strongest Skill vs. Biggest Opportunity Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strongest */}
        <Card className="p-6 border-l-4 border-l-emerald-600 bg-emerald-50/20">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
            <Award className="w-4 h-4" />
            <span>Strongest Skill</span>
          </div>
          <h3 className="text-lg font-bold text-navy-950 mb-1">
            {assessment.strongest_skill}
          </h3>
          <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
            You consistently identify the strongest supported answer and show strong familiarity with primary diagnostic guidelines.
          </p>
        </Card>

        {/* Weakest / Opportunity */}
        <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50/20">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-2">
            <AlertCircle className="w-4 h-4" />
            <span>Biggest Opportunity</span>
          </div>
          <h3 className="text-lg font-bold text-navy-950 mb-1">
            {assessment.weakest_skill}
          </h3>
          <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
            You may be making assumptions when documentation does not establish a definitive diagnosis or overlooking subtle encounter phase designations.
          </p>
        </Card>
      </div>

      {/* Recommended Practice Cases Targeting Weak Skill */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-teal uppercase tracking-wider block">
              Personalized Practice Recommendation
            </span>
            <h2 className="text-lg font-bold text-navy-950">
              Drills for &ldquo;{weakestSkill}&rdquo;
            </h2>
          </div>
          <Link href="/practice">
            <Button variant="outline" size="sm">
              View All Cases
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fallbackCases.map((c) => (
            <CaseCard key={c.id} caseItem={c} attempts={attempts} />
          ))}
        </div>
      </div>

      {/* Monetization / Pro Upgrade Banner (if not already Pro) */}
      {!isPro && (
        <div className="bg-gradient-to-r from-navy-900 to-navy-950 text-white rounded-2xl p-6 sm:p-8 shadow-elevated flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal/20 text-teal-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Unlock Unlimited Practice with Pro</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Ready to guarantee job-readiness?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Get unlimited access to the complete case library, interactive AI Tutor on every clinical note, and detailed guideline audits for only ₹699/month.
            </p>
          </div>

          <Link href="/pricing" className="shrink-0 w-full md:w-auto">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full md:w-auto px-6 py-3.5"
            >
              Upgrade to Pro (₹699)
            </Button>
          </Link>
        </div>
      )}

      {/* Navigation Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link href="/practice" className="w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto px-8"
          >
            Practice My Weak Areas →
          </Button>
        </Link>

        <Link href="/dashboard" className="w-full sm:w-auto">
          <Button
            variant="outline"
            size="lg"
            leftIcon={<LayoutDashboard className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            View Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
