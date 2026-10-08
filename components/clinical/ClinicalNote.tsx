import React from 'react';
import { FileText, Stethoscope, User, Calendar, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/Badge';

export interface ClinicalNoteProps {
  content: string;
  caseNumber?: number;
  specialty?: string;
  codeSetYear?: string;
}

export function ClinicalNote({
  content,
  caseNumber,
  specialty = 'Orthopedics',
  codeSetYear = '2025/2026',
}: ClinicalNoteProps) {
  return (
    <div className="bg-white border border-surface-border rounded-xl shadow-subtle overflow-hidden">
      {/* EHR Header Banner */}
      <div className="bg-navy-900 text-white px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-2 border-b border-navy-950">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center text-teal-300">
            <Stethoscope className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
              <span>Electronic Health Record</span>
              <span className="text-slate-400">•</span>
              <span>De-identified Synthetic Record</span>
            </div>
            <h3 className="text-sm sm:text-base font-medium text-white">
              Clinical Documentation {caseNumber ? `— Case #${caseNumber}` : ''}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <Badge variant="teal" size="sm">
            {specialty}
          </Badge>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-navy-800 text-slate-300 border border-navy-700">
            ICD-10-CM {codeSetYear}
          </span>
        </div>
      </div>

      {/* Note Body */}
      <div className="p-4 sm:p-6 bg-slate-50/40 font-mono text-xs sm:text-sm text-content-primary leading-relaxed whitespace-pre-wrap selection:bg-teal-100">
        {content}
      </div>

      {/* Note Footer Disclaimer */}
      <div className="px-4 py-2.5 bg-slate-100 border-t border-surface-border text-[11px] text-content-secondary flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-teal" />
          <span>Verified against ICD-10-CM Official Coding Guidelines</span>
        </div>
        <span className="text-slate-400 italic">Code strictly from the documentation above</span>
      </div>
    </div>
  );
}
