import { NextResponse } from 'next/server';
import { INITIAL_CASES } from '@/lib/data/initialCases';
import { calculateSpeedScore, evaluateReasoningQuality } from '@/lib/scoring/scoringEngine';
import { CaseItem } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const { caseId, selectedAnswer, reasoning, timeTakenSeconds } = await req.json();

    const caseItem = INITIAL_CASES.find((c: CaseItem) => c.id === caseId);
    if (!caseItem) {
      return NextResponse.json(
        { success: false, error: 'Case not found' },
        { status: 404 }
      );
    }

    const isCorrect = selectedAnswer === caseItem.correct_answer;
    const speedScore = calculateSpeedScore(caseItem.target_time_seconds, timeTakenSeconds || 60);
    const reasoningQuality = evaluateReasoningQuality(reasoning || '', isCorrect);

    return NextResponse.json({
      success: true,
      feedback: {
        isCorrect,
        selectedAnswer,
        correctAnswer: caseItem.correct_answer,
        code: caseItem.code,
        explanation: caseItem.explanation,
        codingConcept: caseItem.coding_concept,
        commonMistake: caseItem.common_mistake,
        learningObjective: caseItem.learning_objective,
        reference: caseItem.reference,
        reasoningQuality,
        speedScore,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Your answer could not be submitted. Please try again.' },
      { status: 500 }
    );
  }
}
