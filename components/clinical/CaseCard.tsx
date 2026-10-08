import React from 'react';
import Link from 'next/link';
import { CaseItem, CaseAttempt } from '../../lib/types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Clock, CheckCircle2, XCircle, ArrowRight, BookOpen } from 'lucide-react';

export interface CaseCardProps {
  caseItem: CaseItem;
  attempts?: CaseAttempt[];
  isLocked?: boolean;
}

export function CaseCard({ caseItem, attempts = [], isLocked = false }: CaseCardProps) {
  const latestAttempt = attempts.find((a) => a.case_id === caseItem.id);
  const isCompleted = !!latestAttempt;
  const isCorrect = latestAttempt?.is_correct;

  const getDifficultyBadge = (d: string) => {
    switch (d) {
      case 'Beginner':
        return <Badge variant="teal" size="sm">Beginner</Badge>;
      case 'Intermediate':
        return <Badge variant="navy" size="sm">Intermediate</Badge>;
      case 'Advanced':
        return <Badge variant="warning" size="sm">Advanced</Badge>;
      default:
        return <Badge variant="neutral" size="sm">{d}</Badge>;
    }
  };

  return (
    <div className="bg-white border border-surface-border rounded-xl p-5 shadow-subtle hover:shadow-card hover:border-teal/40 transition-all flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {getDifficultyBadge(caseItem.difficulty)}
            <Badge variant="neutral" size="sm">
              {caseItem.specialty}
            </Badge>
          </div>

          <div className="flex items-center gap-1 text-xs text-content-secondary font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>~{Math.round(caseItem.target_time_seconds / 60)} min</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-navy-950 group-hover:text-teal transition-colors mb-2 line-clamp-2">
          {caseItem.title}
        </h3>

        {/* Skill Category */}
        <div className="flex items-center gap-1.5 text-xs text-content-secondary mb-4">
          <BookOpen className="w-3.5 h-3.5 text-teal" />
          <span>Skill: <strong className="text-content-primary font-medium">{caseItem.skill}</strong></span>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
        <div>
          {isCompleted ? (
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Completed (Passed)</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-500" />
                  <span className="text-rose-600">Attempted</span>
                </>
              )}
            </div>
          ) : (
            <span className="text-xs text-slate-400 font-medium">Not started</span>
          )}
        </div>

        <Link href={`/practice/${caseItem.id}`}>
          <Button
            variant={isCompleted ? 'secondary' : 'primary'}
            size="sm"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            {isCompleted ? 'Review / Retry' : 'Practice Case'}
          </Button>
        </Link>
      </div>
    </div>
  );
}
