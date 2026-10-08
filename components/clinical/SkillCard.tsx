import React from 'react';
import { ProgressBar } from '../ui/ProgressBar';
import { LucideIcon } from 'lucide-react';

export interface SkillCardProps {
  title: string;
  score: number; // 0 - 100
  description?: string;
  icon?: LucideIcon;
  benchmark?: string;
}

export function SkillCard({
  title,
  score,
  description,
  icon: Icon,
  benchmark = 'Target: 80%+',
}: SkillCardProps) {
  const getColor = (s: number) => {
    if (s >= 80) return 'success' as const;
    if (s >= 60) return 'teal' as const;
    if (s >= 40) return 'warning' as const;
    return 'error' as const;
  };

  return (
    <div className="bg-white border border-surface-border rounded-xl p-5 shadow-subtle flex flex-col justify-between hover:border-teal/40 transition-colors">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {Icon && (
              <div className="w-8 h-8 rounded-lg bg-navy-50 text-navy-800 flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
            )}
            <h3 className="text-sm font-semibold text-navy-950">{title}</h3>
          </div>
          <span className="text-lg font-bold font-mono text-navy-950">
            {score}%
          </span>
        </div>

        <ProgressBar
          value={score}
          size="md"
          color={getColor(score)}
          className="mb-3"
        />

        {description && (
          <p className="text-xs text-content-secondary leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span>Benchmark standard</span>
        <span className="font-semibold text-content-secondary">{benchmark}</span>
      </div>
    </div>
  );
}
