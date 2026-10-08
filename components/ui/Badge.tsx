import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'teal' | 'navy' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md';
}

export function Badge({
  children,
  className,
  variant = 'neutral',
  size = 'md',
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide';

  const variants = {
    teal: 'bg-teal-50 text-teal-700 border border-teal-200',
    navy: 'bg-navy-50 text-navy-800 border border-navy-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200',
    error: 'bg-rose-50 text-rose-700 border border-rose-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))} {...props}>
      {children}
    </span>
  );
}
