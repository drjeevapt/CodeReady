import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  BookOpen,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  BrainCircuit,
  MessageSquare,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { OptionItem, ReasoningQuality } from '../../lib/types';
import { AITutorModal } from './AITutorModal';

export interface FeedbackCardProps {
  isCorrect: boolean;
  userAnswerId: string;
  correctAnswerId: string;
  options: OptionItem[];
  code: string;
  explanation: string;
  codingConcept: string;
  commonMistake: string;
  learningObjective: string;
  reference: string;
  userReasoning?: string;
  reasoningQuality?: ReasoningQuality;
  onContinue: () => void;
  continueLabel?: string;
  caseTitle: string;
  clinicalDocumentation: string;
  question: string;
  canUseAI?: boolean;
}

export function FeedbackCard({
  isCorrect,
  userAnswerId,
  correctAnswerId,
  options,
  code,
  explanation,
  codingConcept,
  commonMistake,
  learningObjective,
  reference,
  userReasoning,
  reasoningQuality = 'Adequate',
  onContinue,
  continueLabel = 'Continue to Next Case',
  caseTitle,
  clinicalDocumentation,
  question,
  canUseAI = true,
}: FeedbackCardProps) {
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);

  const userAnswer = options.find((o) => o.id === userAnswerId);
  const correctAnswer = options.find((o) => o.id === correctAnswerId);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div
        className={`p-5 sm:p-6 rounded-2xl border-2 transition-all ${
          isCorrect
            ? 'bg-emerald-50/70 border-emerald-500 text-navy-950 shadow-subtle'
            : 'bg-rose-50/70 border-rose-400 text-navy-950 shadow-subtle'
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {isCorrect ? (
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <XCircle className="w-6 h-6" />
              </div>
            )}
            <div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-navy-950">
                {isCorrect ? 'Correct Decision ✓' : 'Not Quite'}
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary mt-0.5">
                {isCorrect
                  ? 'Your coding choice accurately adheres to official documentation and ICD-10-CM guidelines.'
                  : 'Review the coding principle below to identify where the documentation deviated.'}
              </p>
            </div>
          </div>

          <Badge variant={isCorrect ? 'success' : 'error'} size="md">
            {isCorrect ? '100% Accuracy' : '0% Accuracy'}
          </Badge>
        </div>

        {/* Answers Comparison */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-slate-200/80">
          <div className="bg-white/80 p-3.5 rounded-lg border border-slate-200">
            <span className="text-xs font-semibold text-content-secondary uppercase tracking-wider block mb-1">
              Your Answer
            </span>
            <div className="text-sm font-medium text-content-primary">
              {userAnswer?.text || 'No answer selected'}
            </div>
          </div>

          <div className="bg-white/90 p-3.5 rounded-lg border-2 border-teal/40">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                Best Supported Answer (Code: {code})
              </span>
              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>
            <div className="text-sm font-semibold text-navy-950">
              {correctAnswer?.text}
            </div>
          </div>
        </div>
      </div>

      {/* Core Concept Card */}
      <div className="bg-white border border-surface-border rounded-xl p-5 sm:p-6 shadow-subtle space-y-4">
        <div className="flex items-center gap-2 text-teal font-semibold text-sm">
          <BookOpen className="w-4 h-4" />
          <span>Official Coding Principle</span>
        </div>

        <div className="bg-teal-50/50 border-l-4 border-teal p-3.5 rounded-r-lg">
          <h4 className="text-sm font-bold text-navy-950">{codingConcept}</h4>
          <p className="text-xs sm:text-sm text-content-primary mt-1 leading-relaxed">
            {explanation}
          </p>
        </div>

        {!isCorrect && commonMistake && (
          <div className="bg-amber-50/70 border border-amber-200 rounded-lg p-3.5 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Why this answer can be tempting: </span>
              {commonMistake}
            </div>
          </div>
        )}

        {/* Highlighted Learning Principle Callout */}
        <div className="p-3 bg-navy-900 text-white rounded-lg text-xs sm:text-sm flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-teal-300 shrink-0" />
          <span className="font-medium italic">
            &ldquo;Code the documentation — not your clinical assumption.&rdquo;
          </span>
        </div>

        {/* User's Reasoning Assessment */}
        {userReasoning && userReasoning.trim().length > 0 && (
          <div className="pt-4 border-t border-surface-border">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-content-secondary flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                <span>Your Submitted Reasoning</span>
              </span>
              <Badge
                variant={
                  reasoningQuality === 'Strong'
                    ? 'success'
                    : reasoningQuality === 'Adequate'
                    ? 'teal'
                    : 'warning'
                }
                size="sm"
              >
                Quality: {reasoningQuality}
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-content-primary italic bg-slate-50 p-3 rounded-lg border border-slate-200">
              &ldquo;{userReasoning}&rdquo;
            </p>
          </div>
        )}

        {/* Reference Citation */}
        <div className="text-[11px] text-content-secondary flex items-center gap-1.5 pt-2 border-t border-surface-border">
          <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
          <span>Reference: {reference}</span>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <Button
          variant="outline"
          onClick={() => setIsAITutorOpen(true)}
          leftIcon={<BrainCircuit className="w-4 h-4 text-teal" />}
          className="w-full sm:w-auto"
        >
          Ask AI Coding Tutor
        </Button>

        <Button
          variant="primary"
          size="lg"
          onClick={onContinue}
          rightIcon={<ArrowRight className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          {continueLabel}
        </Button>
      </div>

      {/* AI Tutor Modal */}
      {isAITutorOpen && (
        <AITutorModal
          isOpen={isAITutorOpen}
          onClose={() => setIsAITutorOpen(false)}
          caseTitle={caseTitle}
          clinicalDocumentation={clinicalDocumentation}
          question={question}
          userAnswer={userAnswer?.text || 'None'}
          correctAnswer={correctAnswer?.text || ''}
          code={code}
          codingConcept={codingConcept}
          explanation={explanation}
          commonMistake={commonMistake}
          userReasoning={userReasoning}
        />
      )}
    </div>
  );
}
