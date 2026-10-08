'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronLeft,
  Clock,
  RotateCcw,
  CheckCircle2,
  BookOpen,
  BrainCircuit,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { ClinicalNote } from '../../../components/clinical/ClinicalNote';
import { AnswerOption } from '../../../components/clinical/AnswerOption';
import { ReasoningInput } from '../../../components/clinical/ReasoningInput';
import { FeedbackCard } from '../../../components/clinical/FeedbackCard';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { useApp } from '../../../lib/context/AppContext';
import { getFullCaseById } from '../../../lib/services/storageService';
import { CaseItem } from '../../../lib/types';

export default function PracticeCasePage() {
  const params = useParams();
  const router = useRouter();
  const caseId = String(params.caseId || '');
  const { publishedCases, submitAnswer, userAttempts, canAITutor } = useApp();

  const caseItem = publishedCases.find((c) => c.id === caseId) || getFullCaseById(caseId);

  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [reasoning, setReasoning] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [feedbackData, setFeedbackData] = useState<any>(null);
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    setStartTime(Date.now());
    setSelectedOptionId('');
    setReasoning('');
    setFeedbackData(null);
  }, [caseId]);

  if (!caseItem) {
    return (
      <div className="py-20 text-center space-y-4">
        <p className="text-content-secondary">Case not found.</p>
        <Link href="/practice">
          <Button variant="outline">Back to Practice Library</Button>
        </Link>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!selectedOptionId || isSubmitting) return;

    setIsSubmitting(true);
    const timeTaken = Math.max(5, Math.round((Date.now() - startTime) / 1000));

    try {
      const result = submitAnswer({
        caseId: caseItem.id,
        selectedAnswer: selectedOptionId,
        reasoning,
        timeTakenSeconds: timeTaken,
        mode: 'practice',
      });

      setFeedbackData(result.feedback);
    } catch (err) {
      alert('Error recording attempt. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setSelectedOptionId('');
    setReasoning('');
    setFeedbackData(null);
    setStartTime(Date.now());
  };

  return (
    <div className="min-h-screen bg-surface-bg pb-20">
      {/* Top Practice Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-surface-border py-3 px-4 sm:px-6 shadow-subtle">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <Link
            href="/practice"
            className="text-xs text-content-secondary hover:text-navy-900 flex items-center gap-1.5 p-1 rounded hover:bg-slate-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Practice Library</span>
          </Link>

          <div className="flex items-center gap-2">
            <Badge variant="teal" size="sm">
              Practice Mode • Self-Paced
            </Badge>
            <Badge variant="neutral" size="sm">
              Target: ~{caseItem.target_time_seconds}s
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8 animate-fade-in">
        {/* Header Title */}
        <div className="space-y-1">
          <span className="text-xs font-bold text-teal uppercase tracking-wider block">
            Case #{caseItem.case_number} • {caseItem.skill}
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-navy-950">
            {caseItem.title}
          </h1>
        </div>

        {/* Clinical EHR Documentation */}
        <ClinicalNote
          content={caseItem.clinical_documentation}
          caseNumber={caseItem.case_number}
          specialty={caseItem.specialty}
          codeSetYear={caseItem.code_set_year}
        />

        {/* Question & Options Section */}
        <div className="space-y-4">
          <div className="bg-white border border-surface-border rounded-xl p-4 sm:p-5 shadow-subtle">
            <h2 className="text-base sm:text-lg font-bold text-navy-950">
              {caseItem.question}
            </h2>
            <p className="text-xs text-content-secondary mt-1">
              Analyze the documentation boundaries and select the supported ICD-10-CM coding decision.
            </p>
          </div>

          <div className="space-y-2.5">
            {caseItem.options.map((option) => (
              <AnswerOption
                key={option.id}
                option={option}
                isSelected={selectedOptionId === option.id}
                onSelect={setSelectedOptionId}
                disabled={!!feedbackData || isSubmitting}
              />
            ))}
          </div>
        </div>

        {/* Reasoning Input */}
        {!feedbackData && (
          <ReasoningInput
            value={reasoning}
            onChange={setReasoning}
            disabled={isSubmitting}
          />
        )}

        {/* Submit Action Bar */}
        {!feedbackData && (
          <div className="flex items-center justify-between pt-2">
            <Link href="/practice">
              <Button variant="ghost" size="md">
                Cancel
              </Button>
            </Link>

            <Button
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              disabled={!selectedOptionId || isSubmitting}
              isLoading={isSubmitting}
              rightIcon={<CheckCircle2 className="w-5 h-5" />}
              className="px-8"
            >
              Check Answer
            </Button>
          </div>
        )}

        {/* Post-Submission Feedback */}
        {feedbackData && (
          <div className="space-y-4">
            <FeedbackCard
              isCorrect={feedbackData.isCorrect}
              userAnswerId={selectedOptionId}
              correctAnswerId={feedbackData.correctAnswer}
              options={caseItem.options}
              code={feedbackData.code}
              explanation={feedbackData.explanation}
              codingConcept={feedbackData.codingConcept}
              commonMistake={feedbackData.commonMistake}
              learningObjective={feedbackData.learningObjective}
              reference={feedbackData.reference}
              userReasoning={reasoning}
              reasoningQuality={feedbackData.reasoningQuality}
              onContinue={() => router.push('/practice')}
              continueLabel="Back to Practice Library"
              caseTitle={caseItem.title}
              clinicalDocumentation={caseItem.clinical_documentation}
              question={caseItem.question}
              canUseAI={canAITutor}
            />

            <div className="flex justify-center pt-2">
              <Button
                variant="outline"
                size="md"
                onClick={handleRetry}
                leftIcon={<RotateCcw className="w-4 h-4" />}
              >
                Retry this case
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
