'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AssessmentHeader } from '../../../../../components/clinical/AssessmentHeader';
import { ClinicalNote } from '../../../../../components/clinical/ClinicalNote';
import { AnswerOption } from '../../../../../components/clinical/AnswerOption';
import { ReasoningInput } from '../../../../../components/clinical/ReasoningInput';
import { FeedbackCard } from '../../../../../components/clinical/FeedbackCard';
import { Button } from '../../../../../components/ui/Button';
import { useApp } from '../../../../../lib/context/AppContext';
import { getAssessmentById, getFullCaseById } from '../../../../../lib/services/storageService';
import { CaseItem, OptionItem } from '../../../../../lib/types';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function AssessmentCasePage() {
  const params = useParams();
  const router = useRouter();
  const { publishedCases, submitAnswer, finalizeAssessment, userAttempts } = useApp();

  const attemptId = String(params.attemptId || '');
  const caseNumber = parseInt(String(params.caseNumber || '1'), 10);
  const caseIndex = caseNumber - 1;

  const [assessment, setAssessment] = useState<any>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [reasoning, setReasoning] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [feedbackData, setFeedbackData] = useState<any>(null);
  const [caseStartTime, setCaseStartTime] = useState<number>(Date.now());

  // Load assessment session
  useEffect(() => {
    const asmt = getAssessmentById(attemptId);
    if (asmt) {
      setAssessment(asmt);
    }
    setCaseStartTime(Date.now());
    setSelectedOptionId('');
    setReasoning('');
    setFeedbackData(null);
  }, [attemptId, caseNumber]);

  // Check if case is already attempted
  const currentCase = publishedCases[caseIndex] || publishedCases[0];

  useEffect(() => {
    if (!currentCase) return;
    const existingAttempt = userAttempts.find(
      (a) => a.assessment_id === attemptId && a.case_id === currentCase.id
    );
    if (existingAttempt) {
      const fullCase = getFullCaseById(currentCase.id);
      setSelectedOptionId(existingAttempt.selected_answer);
      setReasoning(existingAttempt.reasoning || '');
      setFeedbackData({
        isCorrect: existingAttempt.is_correct,
        selectedAnswer: existingAttempt.selected_answer,
        correctAnswer: fullCase?.correct_answer || '',
        code: fullCase?.code || '',
        explanation: fullCase?.explanation || '',
        codingConcept: fullCase?.coding_concept || '',
        commonMistake: fullCase?.common_mistake || '',
        learningObjective: fullCase?.learning_objective || '',
        reasoningQuality: existingAttempt.reasoning_quality,
        reference: fullCase?.reference || '',
      });
    }
  }, [currentCase, userAttempts, attemptId]);

  if (!currentCase) {
    return (
      <div className="p-12 text-center text-content-secondary">
        Loading case documentation...
      </div>
    );
  }

  const handleSubmit = () => {
    if (!selectedOptionId || isSubmitting) return;

    setIsSubmitting(true);
    const timeTaken = Math.max(5, Math.round((Date.now() - caseStartTime) / 1000));

    try {
      const result = submitAnswer({
        caseId: currentCase.id,
        assessmentId: attemptId,
        selectedAnswer: selectedOptionId,
        reasoning,
        timeTakenSeconds: timeTaken,
        mode: 'assessment',
      });

      setFeedbackData(result.feedback);
    } catch (err) {
      alert('Error submitting answer. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinue = () => {
    if (caseNumber < publishedCases.length && caseNumber < 10) {
      router.push(`/assessment/${attemptId}/case/${caseNumber + 1}`);
    } else {
      // Completed all 10 cases -> Finalize score and redirect to results
      finalizeAssessment(attemptId);
      router.push(`/assessment/${attemptId}/results`);
    }
  };

  const handleTimerExpire = () => {
    alert('Time limit reached for this assessment. Finalizing your results.');
    finalizeAssessment(attemptId);
    router.push(`/assessment/${attemptId}/results`);
  };

  return (
    <div className="min-h-screen bg-surface-bg pb-20">
      {/* Persistent Timer and Progress Header */}
      <AssessmentHeader
        currentCaseIndex={caseIndex}
        totalCases={Math.min(10, publishedCases.length)}
        startedAt={assessment?.started_at || new Date().toISOString()}
        timeLimitSeconds={assessment?.time_limit_seconds || 900}
        onExpire={handleTimerExpire}
        title={`Case #${caseNumber}: ${currentCase.title}`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Clinical EHR Documentation */}
        <ClinicalNote
          content={currentCase.clinical_documentation}
          caseNumber={caseNumber}
          specialty={currentCase.specialty}
          codeSetYear={currentCase.code_set_year}
        />

        {/* Question & Options Section */}
        <div className="space-y-4">
          <div className="bg-white border border-surface-border rounded-xl p-4 sm:p-5 shadow-subtle">
            <h2 className="text-base sm:text-lg font-bold text-navy-950">
              {currentCase.question}
            </h2>
            <p className="text-xs text-content-secondary mt-1">
              Select the single best supported ICD-10-CM coding decision based exclusively on the documentation above.
            </p>
          </div>

          <div className="space-y-2.5">
            {currentCase.options.map((option) => (
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

        {/* Submission Action Bar */}
        {!feedbackData && (
          <div className="flex items-center justify-end pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              disabled={!selectedOptionId || isSubmitting}
              isLoading={isSubmitting}
              rightIcon={<CheckCircle2 className="w-5 h-5" />}
              className="w-full sm:w-auto px-8"
            >
              Submit Answer
            </Button>
          </div>
        )}

        {/* Post-Submission Feedback */}
        {feedbackData && (
          <FeedbackCard
            isCorrect={feedbackData.isCorrect}
            userAnswerId={selectedOptionId}
            correctAnswerId={feedbackData.correctAnswer}
            options={currentCase.options}
            code={feedbackData.code}
            explanation={feedbackData.explanation}
            codingConcept={feedbackData.codingConcept}
            commonMistake={feedbackData.commonMistake}
            learningObjective={feedbackData.learningObjective}
            reference={feedbackData.reference}
            userReasoning={reasoning}
            reasoningQuality={feedbackData.reasoningQuality}
            onContinue={handleContinue}
            continueLabel={
              caseNumber >= Math.min(10, publishedCases.length)
                ? 'View Final Assessment Results →'
                : `Continue to Case ${caseNumber + 1} →`
            }
            caseTitle={currentCase.title}
            clinicalDocumentation={currentCase.clinical_documentation}
            question={currentCase.question}
          />
        )}
      </div>
    </div>
  );
}
