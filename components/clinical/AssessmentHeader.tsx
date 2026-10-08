'use client';

import React from 'react';
import { Timer } from './Timer';
import { ProgressBar } from '../ui/ProgressBar';
import Link from 'next/link';
import { ChevronLeft, Shield } from 'lucide-react';

export interface AssessmentHeaderProps {
  currentCaseIndex: number; // 0-based
  totalCases: number;
  startedAt: string;
  timeLimitSeconds: number;
  onExpire?: () => void;
  title?: string;
}

export function AssessmentHeader({
  currentCaseIndex,
  totalCases,
  startedAt,
  timeLimitSeconds,
  onExpire,
  title = 'Coding Readiness Assessment',
}: AssessmentHeaderProps) {
  const currentCaseNumber = currentCaseIndex + 1;
  const progressPercent = Math.round((currentCaseNumber / totalCases) * 100);

  return (
    <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-surface-border py-3 px-4 sm:px-6 shadow-subtle">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Left info */}
        <div className="flex items-center justify-between sm:justify-start gap-3">
          <Link
            href="/dashboard"
            className="text-xs text-content-secondary hover:text-navy-900 flex items-center gap-1 p-1 rounded hover:bg-slate-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          <div>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block">
              Case {currentCaseNumber} of {totalCases}
            </span>
            <h1 className="text-sm font-semibold text-navy-950 truncate max-w-[240px] sm:max-w-xs">
              {title}
            </h1>
          </div>
        </div>

        {/* Center Progress bar */}
        <div className="flex-1 max-w-xs hidden md:block px-4">
          <ProgressBar
            value={currentCaseNumber}
            max={totalCases}
            size="sm"
            color="teal"
            label={`Progress: ${progressPercent}%`}
          />
        </div>

        {/* Right Timer */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <div className="text-xs text-content-secondary hidden lg:flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-teal" />
            <span>Official Rules Applied</span>
          </div>
          <Timer
            startedAt={startedAt}
            timeLimitSeconds={timeLimitSeconds}
            onExpire={onExpire}
          />
        </div>
      </div>
    </div>
  );
}
