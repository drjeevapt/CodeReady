import { describe, it, expect } from 'vitest';
import { generateAITutorResponse, AI_TUTOR_DISCLAIMER } from '../lib/ai/aiTutor';

describe('AI Tutor Educational Engine Tests', () => {
  it('generates compliant educational responses with mandatory disclaimer', async () => {
    const response = await generateAITutorResponse({
      caseTitle: 'Knee Osteoarthritis: Diagnosis vs Symptom',
      clinicalDocumentation: 'Assessment: Primary osteoarthritis, right knee.',
      question: 'What is the best coding decision?',
      userAnswer: 'M25.561 — Pain in right knee',
      correctAnswer: 'M17.11 — Unilateral primary osteoarthritis, right knee',
      code: 'M17.11',
      codingConcept: 'Definitive Diagnosis vs Associated Symptom',
      explanation: 'Signs and symptoms routinely associated with a disease process should not be separately coded.',
      commonMistake: 'Coding both osteoarthritis and knee pain.',
      userQuery: 'Why can I not code knee pain too?',
    });

    expect(response.message).toContain('M17.11');
    expect(response.disclaimer).toBe(AI_TUTOR_DISCLAIMER);
    expect(response.conceptHighlights.length).toBeGreaterThan(0);
    expect(response.suggestedFollowUps.length).toBeGreaterThan(0);
  });
});
