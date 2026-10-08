import React from 'react';
import { Award, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { ReadinessLevel } from '../../lib/types';
import { Badge } from '../ui/Badge';

export interface ScoreCardProps {
  score: number;
  readinessLevel: ReadinessLevel;
  subtitle?: string;
}

export function ScoreCard({ score, readinessLevel, subtitle }: ScoreCardProps) {
  const getLevelColor = (lvl: ReadinessLevel) => {
    switch (lvl) {
      case 'Assessment Ready':
      case 'Job Ready':
        return {
          bg: 'bg-emerald-500/10 text-emerald-800 border-emerald-300',
          badge: 'success' as const,
          description:
            'You demonstrate solid clinical judgment and consistent adherence to ICD-10-CM coding guidelines.',
        };
      case 'Approaching Job Ready':
        return {
          bg: 'bg-teal-500/10 text-teal-900 border-teal-300',
          badge: 'teal' as const,
          description:
            'You have strong fundamentals with targeted opportunities in documentation boundaries and encounter specificity.',
        };
      case 'Developing':
        return {
          bg: 'bg-amber-500/10 text-amber-900 border-amber-300',
          badge: 'warning' as const,
          description:
            'You are making good progress. Focus on avoiding unstated assumptions and mastering laterality conventions.',
        };
      case 'Needs Foundation':
      default:
        return {
          bg: 'bg-slate-500/10 text-slate-900 border-slate-300',
          badge: 'neutral' as const,
          description:
            'Review foundational ICD-10-CM conventions, especially the distinction between definitive diagnoses and associated symptoms.',
        };
    }
  };

  const levelInfo = getLevelColor(readinessLevel);

  return (
    <div className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left: Big Score Meter */}
      <div className="flex items-center gap-6">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center bg-navy-900 text-white shadow-elevated shrink-0 border-4 border-teal">
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-teal-300">
            {score}
          </span>
          <span className="text-[11px] uppercase tracking-wider text-slate-300 font-medium mt-0.5">
            / 100
          </span>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
            Coding Readiness Score
          </span>
          <div className="flex items-center gap-2.5 mb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-950">
              {readinessLevel}
            </h2>
            <Badge variant={levelInfo.badge} size="md">
              Verified Score
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-content-secondary max-w-md leading-relaxed">
            {subtitle || levelInfo.description}
          </p>
        </div>
      </div>

      {/* Right: Summary Meta */}
      <div className="w-full md:w-auto bg-slate-50 border border-surface-border rounded-xl p-4 text-xs text-content-secondary space-y-2 shrink-0 md:min-w-[220px]">
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-content-primary">Scoring Weight</span>
          <span className="font-mono text-slate-500">ICD-10-CM v25/26</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span>Accuracy (50%)</span>
          <span className="font-semibold text-teal-800">Primary</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span>Documentation (25%)</span>
          <span className="font-semibold text-teal-800">Direct</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span>Judgment (15%) + Speed (10%)</span>
          <span className="font-semibold text-teal-800">Weighted</span>
        </div>
      </div>
    </div>
  );
}
