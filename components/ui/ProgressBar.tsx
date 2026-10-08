import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ProgressBarProps {
  value: number; // 0 - 100
  max?: number;
  label?: string;
  showPercent?: boolean;
  color?: 'teal' | 'navy' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercent = false,
  color = 'teal',
  size = 'md',
  className,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const colorStyles = {
    teal: 'bg-teal',
    navy: 'bg-navy-900',
    success: 'bg-emerald-600',
    warning: 'bg-amber-500',
    error: 'bg-rose-600',
  };

  const sizeStyles = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className={twMerge('w-full', className)}>
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-1.5 text-xs font-medium text-content-secondary">
          {label && <span>{label}</span>}
          {showPercent && <span className="font-semibold text-content-primary">{percentage}%</span>}
        </div>
      )}
      <div
        className={twMerge('w-full bg-slate-100 rounded-full overflow-hidden border border-surface-border/50', sizeStyles[size])}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={twMerge('h-full transition-all duration-500 ease-out rounded-full', colorStyles[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
