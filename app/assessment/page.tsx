'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Activity,
  Clock,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BrainCircuit,
  Target,
  FileCheck,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { useApp } from '../../lib/context/AppContext';

export default function AssessmentIntroPage() {
  const router = useRouter();
  const { user, startNewAssessment } = useApp();
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = () => {
    setIsStarting(true);
    const newAsmt = startNewAssessment();
    router.push(`/assessment/${newAsmt.id}/case/1`);
  };

  const skillsAssessed = [
    { title: 'Documentation Interpretation', desc: 'Distinguishing confirmed conditions from unverified physician differentials.' },
    { title: 'Diagnosis Selection', desc: 'Sequencing primary diagnoses vs. inherent signs and symptoms.' },
    { title: 'Specificity & Laterality', desc: 'Correct right/left/bilateral digits and non-traumatic vs traumatic classifications.' },
    { title: 'Coding Judgment', desc: 'Avoiding assumption traps in incomplete emergency and urgent care records.' },
    { title: 'Clinical Reasoning', desc: 'Handling stroke sequelae and chronic post-surgical recovery aftercare.' },
    { title: 'Coding Speed', desc: 'Pacing against target production thresholds (~90 seconds per outpatient case).' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      {/* Hero Banner */}
      <div className="text-center space-y-3">
        <Badge variant="teal" size="md">
          Standardized Benchmark
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
          Your Coding Readiness Assessment
        </h1>
        <p className="text-base sm:text-lg text-content-secondary max-w-2xl mx-auto leading-relaxed">
          10 realistic cases. About 10–15 minutes. No pressure—this assessment is designed to show you where you are today.
        </p>
      </div>

      {/* Assessment Specifications Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-white border border-surface-border rounded-xl p-4 text-center shadow-subtle">
          <FileCheck className="w-5 h-5 text-teal mx-auto mb-1.5" />
          <div className="text-xl font-bold font-mono text-navy-950">10</div>
          <div className="text-xs text-content-secondary">Clinical Cases</div>
        </div>

        <div className="bg-white border border-surface-border rounded-xl p-4 text-center shadow-subtle">
          <Clock className="w-5 h-5 text-teal mx-auto mb-1.5" />
          <div className="text-xl font-bold font-mono text-navy-950">15 min</div>
          <div className="text-xs text-content-secondary">Time Limit</div>
        </div>

        <div className="bg-white border border-surface-border rounded-xl p-4 text-center shadow-subtle">
          <BookOpen className="w-5 h-5 text-navy-900 mx-auto mb-1.5" />
          <div className="text-xl font-bold font-mono text-navy-950">ICD-10-CM</div>
          <div className="text-xs text-content-secondary">FY 2025/2026</div>
        </div>

        <div className="bg-white border border-surface-border rounded-xl p-4 text-center shadow-subtle">
          <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
          <div className="text-xl font-bold text-navy-950 truncate">Ortho & Rehab</div>
          <div className="text-xs text-content-secondary">Specialization</div>
        </div>
      </div>

      {/* Skills Assessed Section */}
      <Card className="p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-teal" />
          <h2 className="text-lg font-bold text-navy-950">
            Skills Measured in This Assessment
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillsAssessed.map((skill, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm font-semibold text-navy-950 block">
                  {skill.title}
                </strong>
                <span className="text-xs text-content-secondary leading-snug">
                  {skill.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Start CTA Box */}
      <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 shadow-elevated flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            Ready to test your coding judgment?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            Your progress and timer will automatically persist across page refreshes.
          </p>
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={handleStart}
          isLoading={isStarting}
          rightIcon={<ArrowRight className="w-5 h-5" />}
          className="w-full sm:w-auto px-8 py-4 text-base font-semibold shrink-0"
        >
          Start Assessment →
        </Button>
      </div>
    </div>
  );
}
