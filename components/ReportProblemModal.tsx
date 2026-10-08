'use client';

import React, { useState } from 'react';
import { reportProblem } from '@/lib/services/storageService';
import { Flag, CheckCircle, AlertTriangle } from 'lucide-react';

interface ReportProblemModalProps {
  caseId: string;
  caseNumber: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ReportProblemModal({
  caseId,
  caseNumber,
  isOpen,
  onClose,
}: ReportProblemModalProps) {
  const [reason, setReason] = useState<
    | 'Possible incorrect answer'
    | 'Documentation unclear'
    | 'Typo'
    | 'Code appears outdated'
    | 'Question confusing'
    | 'Other'
  >('Possible incorrect answer');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!details.trim()) {
      alert('Please provide a brief explanation of the problem encountered.');
      return;
    }

    reportProblem({
      caseId,
      reason,
      details,
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setDetails('');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Flag className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">
              Report an Issue with Case #{caseNumber}
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            ✕
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-2">
            <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
            <div className="text-sm font-bold text-white">Report Submitted</div>
            <p className="text-xs text-slate-400">
              Thank you! Our clinical QA team will review this case.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <p className="text-slate-300">
              Help us maintain medical coding accuracy and quality. Select a reason:
            </p>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">
                Problem Category
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value as any)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-slate-200"
              >
                <option value="Possible incorrect answer">Possible incorrect answer</option>
                <option value="Documentation unclear">Documentation unclear</option>
                <option value="Typo">Typo / Formatting</option>
                <option value="Code appears outdated">Code appears outdated</option>
                <option value="Question confusing">Question confusing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-semibold">
                Details / Rationale
              </label>
              <textarea
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Explain why you believe this coding decision or documentation is inaccurate..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-400 hover:text-slate-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg"
              >
                Submit Report
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
