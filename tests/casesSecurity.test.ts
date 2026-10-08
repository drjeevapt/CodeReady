import { describe, it, expect } from 'vitest';
import { INITIAL_CASES } from '../lib/data/initialCases';
import { getPublicCase } from '../lib/services/storageService';

describe('Case Content & Security Tests', () => {
  it('contains at least 10 initial clinical cases in Orthopedics & Rehabilitation', () => {
    expect(INITIAL_CASES.length).toBeGreaterThanOrEqual(10);
    INITIAL_CASES.forEach((c) => {
      expect(c.title).toBeDefined();
      expect(c.code).toMatch(/^[A-Z0-9.,\s]+$/);
      expect(c.options.length).toBeGreaterThanOrEqual(4);

      expect(c.correct_answer).toBeDefined();
      expect(c.explanation).toBeDefined();
      expect(c.coding_concept).toBeDefined();
    });
  });

  it('strips correct_answer and internal explanation from public case API responses', () => {
    const publicCase = getPublicCase('case-001');
    expect(publicCase).toBeDefined();

    // Verify sensitive answer key and explanation are stripped
    expect((publicCase as any).correct_answer).toBeUndefined();
    expect((publicCase as any).explanation).toBeUndefined();
    expect((publicCase as any).coding_concept).toBeUndefined();
    expect((publicCase as any).common_mistake).toBeUndefined();

    // Verify public properties are present
    expect(publicCase?.title).toBeDefined();
    expect(publicCase?.clinical_documentation).toBeDefined();
    expect(publicCase?.options.length).toBe(4);
  });
});
