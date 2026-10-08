import React from 'react';
import { clsx } from 'clsx';
import { OptionItem } from '../../lib/types';
import { CheckCircle2, Circle } from 'lucide-react';

export interface AnswerOptionProps {
  option: OptionItem;
  isSelected: boolean;
  onSelect: (optionId: string) => void;
  disabled?: boolean;
}

export function AnswerOption({
  option,
  isSelected,
  onSelect,
  disabled = false,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onSelect(option.id)}
      disabled={disabled}
      className={clsx(
        'w-full text-left p-4 rounded-xl border-2 transition-all duration-150 flex items-start gap-3.5 group',
        isSelected
          ? 'bg-teal-50/60 border-teal shadow-subtle text-navy-950'
          : 'bg-white border-surface-border hover:border-slate-300 hover:bg-slate-50/70 text-content-primary',
        disabled && 'cursor-not-allowed opacity-80'
      )}
    >
      {/* Option Identifier Circle */}
      <div
        className={clsx(
          'w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-semibold text-xs transition-colors mt-0.5',
          isSelected
            ? 'bg-teal text-white'
            : 'bg-slate-100 text-content-secondary group-hover:bg-slate-200'
        )}
      >
        {option.label}
      </div>

      {/* Option Text */}
      <div className="flex-1">
        <div className="text-sm sm:text-base leading-snug font-medium">
          {option.text}
        </div>
      </div>

      {/* Radio Check Indicator */}
      <div className="shrink-0 mt-0.5">
        {isSelected ? (
          <CheckCircle2 className="w-5 h-5 text-teal" />
        ) : (
          <Circle className="w-5 h-5 text-slate-300 group-hover:text-slate-400" />
        )}
      </div>
    </button>
  );
}
