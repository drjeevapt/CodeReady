'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronLeft,
  Save,
  ShieldCheck,
  AlertCircle,
  Eye,
  Trash2,
} from 'lucide-react';
import { Button } from '../../../../components/ui/Button';
import { Card } from '../../../../components/ui/Card';
import { Badge } from '../../../../components/ui/Badge';
import { useApp } from '../../../../lib/context/AppContext';
import { getFullCaseById } from '../../../../lib/services/storageService';
import { CaseItem, CaseStatus, Difficulty, OptionItem, SkillCategory, Specialty } from '../../../../lib/types';

export default function EditCasePage() {
  const params = useParams();
  const router = useRouter();
  const caseId = String(params.caseId || '');
  const { cases, upsertCase } = useApp();

  const caseItem = cases.find((c) => c.id === caseId) || getFullCaseById(caseId);

  const [title, setTitle] = useState('');
  const [specialty, setSpecialty] = useState<Specialty>('Orthopedics');
  const [difficulty, setDifficulty] = useState<Difficulty>('Intermediate');
  const [skill, setSkill] = useState<SkillCategory>('Diagnosis Selection');
  const [documentation, setDocumentation] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<OptionItem[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [code, setCode] = useState('');
  const [explanation, setExplanation] = useState('');
  const [codingConcept, setCodingConcept] = useState('');
  const [commonMistake, setCommonMistake] = useState('');
  const [learningObjective, setLearningObjective] = useState('');
  const [targetTime, setTargetTime] = useState(90);
  const [codeSetYear, setCodeSetYear] = useState('2025/2026');
  const [reference, setReference] = useState('');
  const [status, setStatus] = useState<CaseStatus>('Published');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (caseItem) {
      setTitle(caseItem.title);
      setSpecialty(caseItem.specialty);
      setDifficulty(caseItem.difficulty);
      setSkill(caseItem.skill);
      setDocumentation(caseItem.clinical_documentation);
      setQuestion(caseItem.question);
      setOptions(caseItem.options);
      setCorrectAnswer(caseItem.correct_answer);
      setCode(caseItem.code);
      setExplanation(caseItem.explanation);
      setCodingConcept(caseItem.coding_concept);
      setCommonMistake(caseItem.common_mistake);
      setLearningObjective(caseItem.learning_objective);
      setTargetTime(caseItem.target_time_seconds);
      setCodeSetYear(caseItem.code_set_year);
      setReference(caseItem.reference);
      setStatus(caseItem.status);
    }
  }, [caseItem]);

  if (!caseItem) {
    return (
      <div className="py-20 text-center space-y-3">
        <p className="text-content-secondary">Case not found.</p>
        <Link href="/admin/cases">
          <Button variant="outline">Back to Case List</Button>
        </Link>
      </div>
    );
  }

  const handleOptionTextChange = (index: number, val: string) => {
    const next = [...options];
    next[index].text = val;
    setOptions(next);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const updated: CaseItem = {
      ...caseItem,
      title: title.trim(),
      specialty,
      difficulty,
      skill,
      clinical_documentation: documentation.trim(),
      question: question.trim(),
      options,
      correct_answer: correctAnswer,
      code: code.trim(),
      explanation: explanation.trim(),
      coding_concept: codingConcept.trim(),
      common_mistake: commonMistake.trim(),
      learning_objective: learningObjective.trim(),
      target_time_seconds: targetTime,
      reference: reference.trim(),
      code_set_year: codeSetYear,
      status,
      review_status: status === 'Published' || status === 'Approved' ? 'Approved' : 'Pending',
      updated_at: new Date().toISOString(),
    };

    upsertCase(updated);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/admin/cases"
            className="text-xs text-content-secondary hover:text-navy-900 flex items-center gap-1 mb-1"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Case Repository</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-bold text-navy-950">
              Edit Case #{caseItem.case_number}
            </h1>
            <Badge
              variant={status === 'Published' ? 'success' : status === 'Approved' ? 'teal' : 'warning'}
              size="sm"
            >
              {status}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href={`/practice/${caseItem.id}`}>
            <Button variant="outline" size="sm" leftIcon={<Eye className="w-4 h-4" />}>
              Learner Preview
            </Button>
          </Link>
        </div>
      </div>

      {isSaved && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Case changes and review status saved successfully.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Metadata */}
        <Card className="p-6 space-y-4">
          <h2 className="text-sm font-bold text-navy-950 pb-2 border-b border-surface-border">
            Case Metadata &amp; Classification
          </h2>

          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1">
              Case Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2"
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

        {/* Documentation */}
        <Card className="p-6 space-y-4">
          <h2 className="text-sm font-bold text-navy-950 pb-2 border-b border-surface-border">
            Clinical Documentation (EHR Note)
          </h2>
          <textarea
            rows={8}
            required
            value={documentation}
            onChange={(e) => setDocumentation(e.target.value)}
            className="w-full text-xs sm:text-sm font-mono bg-slate-50 border border-surface-border rounded-lg p-3.5"
          />
        </Card>

        {/* Options & Code */}
        <Card className="p-6 space-y-4">
          <h2 className="text-sm font-bold text-navy-950 pb-2 border-b border-surface-border">
            Options &amp; Correct Key
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
                  className="flex-1 text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-content-primary mb-1">
                Official ICD-10-CM Code
              </label>
              <input
                type="text"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full text-sm font-mono bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-content-primary mb-1">
                Review / Workflow Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as CaseStatus)}
                className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
              >
                <option value="Draft">Draft</option>
                <option value="Pending Review">Pending Review</option>
                <option value="Approved">Approved</option>
                <option value="Published">Published (Active for Learners)</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Guideline Explanation */}
        <Card className="p-6 space-y-4">
          <h2 className="text-sm font-bold text-navy-950 pb-2 border-b border-surface-border">
            Guideline Rationale &amp; Explanations
          </h2>

          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1">
              Coding Concept
            </label>
            <input
              type="text"
              value={codingConcept}
              onChange={(e) => setCodingConcept(e.target.value)}
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1">
              Official Explanation
            </label>
            <textarea
              rows={3}
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1">
              Common Mistake
            </label>
            <textarea
              rows={2}
              value={commonMistake}
              onChange={(e) => setCommonMistake(e.target.value)}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg p-3"
            />
          </div>
        </Card>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Link href="/admin/cases">
            <Button variant="ghost" size="md">
              Back
            </Button>
          </Link>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            leftIcon={<Save className="w-4 h-4" />}
          >
            Save Case Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
