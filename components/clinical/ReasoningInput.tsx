import React from 'react';
import { Lightbulb, MessageSquare } from 'lucide-react';

export interface ReasoningInputProps {
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}

export function ReasoningInput({
  value,
  onChange,
  disabled = false,
}: ReasoningInputProps) {
  return (
    <div className="bg-white border border-surface-border rounded-xl p-4 sm:p-5 shadow-subtle">
      <div className="flex items-center justify-between mb-2">
        <label
          htmlFor="clinical-reasoning"
          className="text-sm font-semibold text-content-primary flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4 text-teal" />
          <span>Explain your clinical coding reasoning (Optional but recommended)</span>
        </label>
        <span className="text-xs text-content-secondary hidden sm:inline">
          Demonstrates coding judgment
        </span>
      </div>

      <p className="text-xs text-content-secondary mb-3">
        Why did you select this code? Point to documentation keywords (e.g., laterality, primary vs. symptom, outpatient rules, encounter phase).
      </p>

      <textarea
        id="clinical-reasoning"
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="E.g., The documentation explicitly specifies right knee primary osteoarthritis without trauma. Knee pain is inherent to osteoarthritis per ICD-10-CM Guideline I.B.4 and should not be separately reported..."
        className="w-full text-sm text-content-primary bg-slate-50/50 border border-surface-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal placeholder:text-slate-400 resize-y"
      />

      <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-500">
        <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <span>Tip: Hiring managers look for solid guideline citations over rote memorization.</span>
      </div>
    </div>
  );
}
