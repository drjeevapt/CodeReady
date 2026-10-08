'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronLeft,
  Save,
  ShieldCheck,
  Plus,
  Trash2,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../../../../components/ui/Button';
import { Card } from '../../../../components/ui/Card';
import { Badge } from '../../../../components/ui/Badge';
import { useApp } from '../../../../lib/context/AppContext';
import { CaseItem, CaseStatus, Difficulty, OptionItem, SkillCategory, Specialty } from '../../../../lib/types';

export default function NewCasePage() {
  const router = useRouter();
  const { cases, upsertCase } = useApp();

  const [title, setTitle] = useState('');
  const [specialty, setSpecialty] = useState<Specialty>('Orthopedics');
  const [difficulty, setDifficulty] = useState<Difficulty>('Intermediate');
  const [skill, setSkill] = useState<SkillCategory>('Diagnosis Selection');
  const [documentation, setDocumentation] = useState('');
  const [question, setQuestion] = useState('Based on the clinical documentation, what is the best coding decision for this encounter?');
  const [options, setOptions] = useState<OptionItem[]>([
    { id: 'opt_a', label: 'A', text: '', codeSnippet: '' },
    { id: 'opt_b', label: 'B', text: '', codeSnippet: '' },
    { id: 'opt_c', label: 'C', text: '', codeSnippet: '' },
    { id: 'opt_d', label: 'D', text: '', codeSnippet: '' },
  ]);
  const [correctAnswer, setCorrectAnswer] = useState('opt_b');
  const [code, setCode] = useState('');
  const [explanation, setExplanation] = useState('');
  const [codingConcept, setCodingConcept] = useState('');
  const [commonMistake, setCommonMistake] = useState('');
  const [learningObjective, setLearningObjective] = useState('');
  const [targetTime, setTargetTime] = useState(90);
  const [codeSetYear, setCodeSetYear] = useState('2025/2026');
  const [reference, setReference] = useState('ICD-10-CM Official Guidelines for Coding and Reporting FY 2025/2026');
  const [status, setStatus] = useState<CaseStatus>('Draft');
  const [error, setError] = useState('');

  const handleOptionTextChange = (index: number, val: string) => {
    const next = [...options];
    next[index].text = val;
    setOptions(next);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim() || !documentation.trim() || !code.trim() || !explanation.trim()) {
      setError('Please fill in all required clinical documentation, diagnosis code, title, and explanation.');
      return;
    }

    const newCaseNumber = cases.length + 1;
    const newCase: CaseItem = {
      id: `case-${Date.now()}`,
      case_number: newCaseNumber,
      title: title.trim(),
      specialty,
      body_region: specialty as any,
      difficulty,
      skill,
      clinical_documentation: documentation.trim(),
      question: question.trim(),
      options,
      correct_answer: correctAnswer,
      code: code.trim(),
      explanation: explanation.trim(),
      coding_concept: codingConcept.trim() || 'ICD-10-CM Clinical Specificity',
      common_mistake: commonMistake.trim(),
      learning_objective: learningObjective.trim(),
      target_time_seconds: targetTime,
      reference: reference.trim(),
      code_set_year: codeSetYear,
      status,
      review_status: status === 'Published' || status === 'Approved' ? 'Approved' : 'Pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    upsertCase(newCase);
    router.push('/admin/cases');
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin/cases"
            className="text-xs text-content-secondary hover:text-navy-900 flex items-center gap-1 mb-1"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Case Repository</span>
          </Link>
          <h1 className="text-2xl font-bold text-navy-950">
            Author New Clinical Coding Case
          </h1>
        </div>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Core Metadata */}
        <Card className="p-6 space-y-4">
          <h2 className="text-sm font-bold text-navy-950 pb-2 border-b border-surface-border">
            Case Metadata &amp; Classification
          </h2>

          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1">
              Case Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Supraspinatus Tendonitis: Symptom vs Primary Diagnosis"
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-content-primary mb-1">
                Specialty
              </label>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value as Specialty)}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
              >
                <option value="Orthopedics">Orthopedics</option>
                <option value="Rehabilitation">Rehabilitation</option>
                <option value="Neurology">Neurology</option>
                <option value="General">General</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-content-primary mb-1">
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-content-primary mb-1">
                Competency Skill
              </label>
              <select
                value={skill}
                onChange={(e) => setSkill(e.target.value as SkillCategory)}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
              >
                <option value="Diagnosis Selection">Diagnosis Selection</option>
                <option value="Documentation Interpretation">Documentation Interpretation</option>
                <option value="Laterality & Specificity">Laterality & Specificity</option>
                <option value="Coding Judgment">Coding Judgment</option>
                <option value="Clinical Reasoning">Clinical Reasoning</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Clinical Note Body */}
        <Card className="p-6 space-y-4">
          <h2 className="text-sm font-bold text-navy-950 pb-2 border-b border-surface-border">
            Clinical Documentation (EHR Simulation) *
          </h2>

          <div>
            <textarea
              rows={8}
              required
              value={documentation}
              onChange={(e) => setDocumentation(e.target.value)}
              placeholder={`PATIENT CLINICAL NOTE\nPatient: 54-year-old male\nSetting: Outpatient Orthopedics\n\nSUBJECTIVE: ...\nOBJECTIVE: ...\nASSESSMENT: ...\nPLAN: ...`}
              className="w-full text-xs sm:text-sm font-mono bg-slate-50 border border-surface-border rounded-lg p-3.5 focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1">
              Assessment Question
            </label>
            <input
              type="text"
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2"
            />
          </div>
        </Card>

        {/* Answer Options & Correct Key */}
        <Card className="p-6 space-y-4">
          <h2 className="text-sm font-bold text-navy-950 pb-2 border-b border-surface-border">
            Multiple Choice Options &amp; Verified Key
          </h2>

          <div className="space-y-3">
            {options.map((opt, idx) => (
              <div key={opt.id} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="correct_answer"
                  checked={correctAnswer === opt.id}
                  onChange={() => setCorrectAnswer(opt.id)}
                  className="text-teal focus:ring-teal h-4 w-4"
                />
                <span className="w-6 text-center font-bold text-xs">{opt.label}</span>
                <input
                  type="text"
                  required
                  value={opt.text}
                  onChange={(e) => handleOptionTextChange(idx, e.target.value)}
                  placeholder={`Option ${opt.label} text and code description`}
                  className="flex-1 text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-content-primary mb-1">
                Official ICD-10-CM Code *
              </label>
              <input
                type="text"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="e.g. M17.11"
                className="w-full text-sm font-mono bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-content-primary mb-1">
                Target Pacing (Seconds)
              </label>
              <input
                type="number"
                value={targetTime}
                onChange={(e) => setTargetTime(parseInt(e.target.value, 10))}
                className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
              />
            </div>
          </div>
        </Card>

        {/* Educational Rationale & Guidelines */}
        <Card className="p-6 space-y-4">
          <h2 className="text-sm font-bold text-navy-950 pb-2 border-b border-surface-border">
            Educational Rationale &amp; Guideline Citations
          </h2>

          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1">
              Official Coding Concept / Principle *
            </label>
            <input
              type="text"
              required
              value={codingConcept}
              onChange={(e) => setCodingConcept(e.target.value)}
              placeholder="e.g. Guideline I.B.4: Signs and Symptoms vs Definitive Diagnosis"
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1">
              Detailed Explanation of the Correct Decision *
            </label>
            <textarea
              rows={3}
              required
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Explain why the documentation requires this code..."
              className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1">
              Common Tempting Mistake / Pitfall
            </label>
            <textarea
              rows={2}
              value={commonMistake}
              onChange={(e) => setCommonMistake(e.target.value)}
              placeholder="Why students frequently pick the wrong option..."
              className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1">
              Publication / Review Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as CaseStatus)}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
            >
              <option value="Draft">Draft (Not visible to learners)</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Approved">Approved</option>
              <option value="Published">Published (Live in Learner Library & Assessment)</option>
            </select>
          </div>
        </Card>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Link href="/admin/cases">
            <Button variant="ghost" size="md">
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            leftIcon={<Save className="w-4 h-4" />}
          >
            Save &amp; Register Case
          </Button>
        </div>
      </form>
    </div>
  );
}
