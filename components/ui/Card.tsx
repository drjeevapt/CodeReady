import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'clinical' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
  ...props
}: CardProps) {
  const baseStyles = 'bg-white rounded-xl border border-surface-border transition-all';

  const variants = {
    default: 'shadow-subtle',
    elevated: 'shadow-elevated',
    clinical: 'border-l-4 border-l-teal-600 shadow-subtle bg-slate-50/50',
    interactive: 'shadow-subtle hover:shadow-card hover:border-teal/40 cursor-pointer',
  };

  const paddings = {
    none: '',
    sm: 'p-3 sm:p-4',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  return (
    <div className={twMerge(clsx(baseStyles, variants[variant], paddings[padding], className))} {...props}>
      {children}
    </div>
  );
}
