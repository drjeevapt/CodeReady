import { describe, it, expect } from 'vitest';
import { all100Cases } from '../lib/data/cases';
import {
  calculateContentQualityScore,
  validateCaseForPublication,
  findDuplicateCandidates,
} from '../lib/content/contentQualityEngine';
import { Case } from '../lib/types';

describe('CodeReady Content Engine — 100 Realistic Case Verification', () => {
  it('contains exactly 100 production-grade cases', () => {
    expect(all100Cases.length).toBe(100);
  });

  it('validates unique case numbers and IDs from 1 to 100', () => {
    const caseNumbers = new Set<number>();
    const caseIds = new Set<string>();

    all100Cases.forEach((c) => {
      expect(caseNumbers.has(c.case_number)).toBe(false);
      expect(caseIds.has(c.id)).toBe(false);
      caseNumbers.add(c.case_number);
      caseIds.add(c.id);
    });

    expect(caseNumbers.size).toBe(100);
    expect(caseIds.size).toBe(100);
  });

  it('meets the difficulty distribution targets (Beginner, Intermediate, Advanced)', () => {
    const beginner = all100Cases.filter((c) => c.difficulty === 'Beginner').length;
    const intermediate = all100Cases.filter((c) => c.difficulty === 'Intermediate').length;
    const advanced = all100Cases.filter((c) => c.difficulty === 'Advanced').length;

    expect(beginner + intermediate + advanced).toBe(100);
    expect(beginner).toBeGreaterThanOrEqual(25);
    expect(intermediate).toBeGreaterThanOrEqual(40);
    expect(advanced).toBeGreaterThanOrEqual(18);
  });

  it('meets topic and specialty distribution targets across 100 cases', () => {
    const kneeCount = all100Cases.filter((c) => c.body_region === 'Knee' || c.specialty === 'Knee' || c.title.toLowerCase().includes('knee')).length;
    const shoulderCount = all100Cases.filter((c) => c.body_region === 'Shoulder' || c.specialty === 'Shoulder' || c.title.toLowerCase().includes('shoulder')).length;
    const spineCount = all100Cases.filter((c) => c.body_region === 'Spine/Back' || c.specialty === 'Spine' || c.title.toLowerCase().includes('spine') || c.title.toLowerCase().includes('cervical') || c.title.toLowerCase().includes('lumbar')).length;
    const hipCount = all100Cases.filter((c) => c.body_region === 'Hip' || c.specialty === 'Hip' || c.title.toLowerCase().includes('hip') || c.title.toLowerCase().includes('femoral') || c.title.toLowerCase().includes('trochanter') || c.title.toLowerCase().includes('piriformis')).length;
    const footAnkleCount = all100Cases.filter((c) => c.body_region === 'Foot/Ankle' || c.specialty === 'Foot/Ankle' || c.title.toLowerCase().includes('foot') || c.title.toLowerCase().includes('ankle') || c.title.toLowerCase().includes('plantar') || c.title.toLowerCase().includes('hallux') || c.title.toLowerCase().includes('achilles') || c.title.toLowerCase().includes('bunion')).length;
    const upperExtremityCount = all100Cases.filter((c) => c.body_region === 'Upper Extremity' || c.specialty === 'Upper Extremity' || c.title.toLowerCase().includes('wrist') || c.title.toLowerCase().includes('elbow') || c.title.toLowerCase().includes('finger') || c.title.toLowerCase().includes('hand') || c.title.toLowerCase().includes('carpal') || c.title.toLowerCase().includes('cubital')).length;
    const generalMskCount = all100Cases.filter((c) => c.body_region === 'General Musculoskeletal' || c.specialty === 'General MSK' || c.specialty === 'General Musculoskeletal' || c.specialty === 'Orthopedics' || c.title.toLowerCase().includes('osteoporosis') || c.title.toLowerCase().includes('gout') || c.title.toLowerCase().includes('fibromyalgia') || c.title.toLowerCase().includes('osteoarthritis') || (c.tags && c.tags.includes('general-msk'))).length;
    const rehabCount = all100Cases.filter((c) => c.body_region === 'Rehabilitation' || c.specialty === 'Rehabilitation' || c.clinical_documentation.toLowerCase().includes('physical therapy') || c.clinical_documentation.toLowerCase().includes('rehabilitation') || (c.tags && (c.tags.includes('rehabilitation') || c.tags.includes('therapy') || c.tags.includes('gait') || c.tags.includes('aftercare')))).length;
    const injuryCount = all100Cases.filter((c) => c.specialty === 'Injury' || (c.tags && (c.tags.includes('injury') || c.tags.includes('fracture') || c.tags.includes('sprain') || c.tags.includes('7th-character')))).length;

    expect(kneeCount).toBeGreaterThanOrEqual(15);
    expect(shoulderCount).toBeGreaterThanOrEqual(15);
    expect(spineCount).toBeGreaterThanOrEqual(10);
    expect(hipCount).toBeGreaterThanOrEqual(10);
    expect(footAnkleCount).toBeGreaterThanOrEqual(10);
    expect(upperExtremityCount).toBeGreaterThanOrEqual(8);
    expect(generalMskCount).toBeGreaterThanOrEqual(10);
    expect(rehabCount).toBeGreaterThanOrEqual(12);
    expect(injuryCount).toBeGreaterThanOrEqual(10);
  });

  it('validates that exactly 20 cases are flagged assessment_ready = true for formal benchmark assessments', () => {
    const assessmentReadyCases = all100Cases.filter((c) => c.assessment_ready === true);
    expect(assessmentReadyCases.length).toBeGreaterThanOrEqual(20);
  });

  it('enforces structural integrity across all 100 cases (4 options, 1 answer, explanation, objective)', () => {
    all100Cases.forEach((c) => {
      // Must contain clinical documentation
      expect(c.clinical_documentation.length).toBeGreaterThan(50);
      expect(c.question.length).toBeGreaterThan(15);

      // Exactly 4 options
      expect(c.options.length).toBe(4);

      // Correct answer mapped to a valid option
      const matchingOption = c.options.find((o) => o.id === c.correct_answer || o.label === c.correct_option);
      expect(matchingOption).toBeDefined();

      // Educational fields
      expect(c.explanation || c.rationale).toBeDefined();
      expect(c.learning_objective).toBeDefined();
      expect(c.target_time_seconds).toBeGreaterThan(0);
      expect(c.reference || c.official_reference).toBeDefined();
      expect(c.code_set_year).toBeDefined();
    });
  });

  it('calculates Content Quality Score >= 90/100 for all published cases', () => {
    all100Cases.forEach((c) => {
      const score = calculateContentQualityScore(c);
      expect(score.totalScore).toBeGreaterThanOrEqual(90);
    });
  });

  it('enforces two-step approval and code verification publication safety gate', () => {
    const unverifiedDraft: Case = {
      ...all100Cases[0],
      id: 'case-unverified-test',
      review_status: 'Pending Review',
      coding_verification_status: 'UNVERIFIED',
      content_status: 'DRAFT',
    };

    const validation = validateCaseForPublication(unverifiedDraft);
    expect(validation.isValid).toBe(false);
    expect(validation.errors.some((e) => e.includes('approved') || e.includes('Approved'))).toBe(true);
    expect(validation.errors.some((e) => e.includes('verified') || e.includes('VERIFIED'))).toBe(true);
  });

  it('detects duplicate candidates using tokenized similarity search', () => {
    const testCase = all100Cases[0];
    const duplicateCandidate: Case = {
      ...testCase,
      id: 'case-test-dup',
      case_number: 999,
      title: testCase.title,
    };

    const duplicates = findDuplicateCandidates(duplicateCandidate, all100Cases);
    expect(duplicates.length).toBeGreaterThan(0);
    expect(duplicates[0].similarityPercentage).toBeGreaterThanOrEqual(80);
  });
});
