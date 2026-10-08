'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  getFullCaseById,
  submitCaseReview,
  getContentAuditLogs,
  getCaseVersions,
  getCaseReviews,
  initializeStorage,
} from '@/lib/services/storageService';
import { Case, CaseReviewChecklist } from '@/lib/types';
import { calculateContentQualityScore } from '@/lib/content/contentQualityEngine';
import {
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  XCircle,
  ArrowLeft,
  BookOpen,
  FileText,
  Clock,
  History,
  Award,
} from 'lucide-react';

export default function DedicatedReviewerInterface() {
  const params = useParams();
  const router = useRouter();
  const caseId = params.caseId as string;

  const [caseData, setCaseData] = useState<Case | null>(null);
  const [reviewNotes, setReviewNotes] = useState('');
  const [activeTab, setActiveTab] = useState<'checklist' | 'audit' | 'versions'>('checklist');

  // Review Checklist State
  const [checklist, setChecklist] = useState<CaseReviewChecklist>({
    documentation_realistic: true,
    documentation_clear: true,
    documentation_sufficient: true,
    code_verified: true,
    code_description_verified: true,
    laterality_verified: true,
    specificity_verified: true,
    code_set_year_verified: true,
    guidelines_checked: true,
    question_clear: true,
    distractors_plausible: true,
    rationale_accurate: true,
    learning_objective_clear: true,
    no_unsupported_assumptions: true,
  });

  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  const [versions, setVersions] = useState<any[]>([]);
  const [reviewsHistory, setReviewsHistory] = useState<any[]>([]);

  useEffect(() => {
    initializeStorage();
    if (caseId) {
      const c = getFullCaseById(caseId);
      if (c) {
        setCaseData(c);
        setAuditLogs(getContentAuditLogs(caseId));
        setVersions(getCaseVersions(caseId));
        setReviewsHistory(getCaseReviews(caseId));
      }
    }
  }, [caseId]);

  if (!caseData) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6">
        <div className="text-center space-y-4">
          <p className="text-slate-400">Loading case #{caseId}...</p>
          <Link
            href="/admin/content"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Content Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const qualityScore = calculateContentQualityScore(caseData);

  const toggleChecklist = (key: keyof CaseReviewChecklist) => {
    setChecklist((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleDecision = (decision: 'Approved' | 'Changes Requested' | 'Rejected') => {
    if ((decision === 'Changes Requested' || decision === 'Rejected') && !reviewNotes.trim()) {
      alert('Review notes are mandatory when requesting changes or rejecting a case.');
      return;
    }

    try {
      submitCaseReview({
        caseId: caseData.id,
        reviewerId: 'reviewer-001',
        reviewerName: 'Dr. Sarah Mitchell, CPC, CPMA',
        decision,
        reviewNotes,
        checklist,
      });

      alert(`Review recorded successfully: Case status updated to "${decision}".`);
      router.push('/admin/content');
    } catch (e: any) {
      alert(`Error submitting review: ${e.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/content"
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded">
                  Two-Step Editorial Gate
                </span>
                <span className="text-xs text-slate-400">Current Status: {caseData.review_status}</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-white mt-1">
                Review Case #{caseData.case_number}: {caseData.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-800/80 px-3.5 py-1.5 rounded-lg border border-slate-700 text-xs flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-400">Quality Score:</span>
              <span className="font-bold text-emerald-300">{qualityScore.totalScore}/100</span>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Case Left, Review Checklist Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: Clinical Documentation & Case (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Metadata Bar */}
            <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-4 flex flex-wrap gap-4 text-xs">
              <div>
                <span className="text-slate-500 block">Body Region / Specialty:</span>
                <span className="font-semibold text-slate-200">{caseData.body_region || caseData.specialty}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Difficulty:</span>
                <span className="font-semibold text-amber-400">{caseData.difficulty}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Primary Skill:</span>
                <span className="font-semibold text-slate-200">{caseData.primary_skill || caseData.skill}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Code Set:</span>
                <span className="font-semibold text-sky-400">{caseData.code_set_year}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Verification:</span>
                <span className="font-semibold text-emerald-400">{caseData.coding_verification_status || 'VERIFIED'}</span>
              </div>
            </div>

            {/* Clinical Documentation Box */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-400" /> Clinical Documentation
                </span>
                <span className="text-xs text-slate-500">De-identified / Synthetic PHI</span>
              </div>
              <div className="font-mono text-xs text-slate-200 whitespace-pre-line leading-relaxed pt-2">
                {caseData.clinical_documentation}
              </div>
            </div>

            {/* Question & Options */}
            <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-5 space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Question Prompt
                </span>
                <p className="text-sm font-semibold text-white">{caseData.question}</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Options & Distractors
                </span>
                {caseData.options.map((opt) => {
                  const isCorrect = opt.id === caseData.correct_answer || opt.label === caseData.correct_option;
                  return (
                    <div
                      key={opt.id}
                      className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                        isCorrect
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200 font-medium'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300'
                      }`}
                    >
                      <span>
                        <strong className="mr-2 font-mono text-slate-400">[{opt.label}]</strong>
                        {opt.text}
                      </span>
                      {isCorrect && (
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded">
                          DESIGNATED BEST ANSWER
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Educational Content & Coding Concept */}
            <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-5 space-y-3 text-xs">
              <div>
                <span className="font-semibold text-emerald-400 block mb-0.5">Coding Rationale & Documentation Evidence:</span>
                <p className="text-slate-300 leading-relaxed">{caseData.explanation || caseData.rationale}</p>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="font-semibold text-amber-400 block mb-0.5">Common Trap / Misconception:</span>
                <p className="text-slate-300 leading-relaxed">{caseData.common_trap || caseData.common_mistake}</p>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="font-semibold text-sky-400 block mb-0.5">Official Guideline Citation:</span>
                <p className="text-slate-300 font-mono">{caseData.reference || caseData.official_reference}</p>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="font-semibold text-purple-400 block mb-0.5">Learning Objective:</span>
                <p className="text-slate-300">{caseData.learning_objective}</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Review Checklist, Audit & Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Review Tabs */}
            <div className="flex border-b border-slate-800 space-x-2">
              <button
                onClick={() => setActiveTab('checklist')}
                className={`pb-2 text-xs font-semibold border-b-2 transition ${
                  activeTab === 'checklist' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400'
                }`}
              >
                QA Checklist
              </button>
              <button
                onClick={() => setActiveTab('audit')}
                className={`pb-2 text-xs font-semibold border-b-2 transition ${
                  activeTab === 'audit' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400'
                }`}
              >
                Audit Log ({auditLogs.length})
              </button>
              <button
                onClick={() => setActiveTab('versions')}
                className={`pb-2 text-xs font-semibold border-b-2 transition ${
                  activeTab === 'versions' ? 'border-emerald-500 text-emerald-400' : 'border-transparent text-slate-400'
                }`}
              >
                Version History ({versions.length})
              </button>
            </div>

            {activeTab === 'checklist' && (
              <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-5 space-y-5">
                {/* 1. Clinical Documentation */}
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400" /> 1. Documentation Quality
                  </h4>
                  <div className="space-y-2 text-xs">
                    {[
                      { key: 'documentation_realistic', label: 'Clinically realistic & coherent' },
                      { key: 'documentation_clear', label: 'Clear terminology without invalid jargon' },
                      { key: 'documentation_sufficient', label: 'Sufficient information for defensible coding' },
                    ].map(({ key, label }) => (
                      <label key={key} className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white">
                        <input
                          type="checkbox"
                          checked={checklist[key as keyof CaseReviewChecklist]}
                          onChange={() => toggleChecklist(key as keyof CaseReviewChecklist)}
                          className="rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 w-4 h-4"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 2. Coding Accuracy */}
                <div className="pt-3 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> 2. Coding Verification
                  </h4>
                  <div className="space-y-2 text-xs">
                    {[
                      { key: 'code_verified', label: 'ICD-10-CM code verified in active code-set' },
                      { key: 'code_description_verified', label: 'Official tabular description matches code' },
                      { key: 'laterality_verified', label: 'Laterality character fully supported by note' },
                      { key: 'specificity_verified', label: 'Anatomical site specificity supported' },
                      { key: 'code_set_year_verified', label: 'Code active in specified code-set year' },
                      { key: 'guidelines_checked', label: 'Official Coding Guidelines verified' },
                    ].map(({ key, label }) => (
                      <label key={key} className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white">
                        <input
                          type="checkbox"
                          checked={checklist[key as keyof CaseReviewChecklist]}
                          onChange={() => toggleChecklist(key as keyof CaseReviewChecklist)}
                          className="rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 w-4 h-4"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 3. Educational Quality */}
                <div className="pt-3 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-purple-400" /> 3. Educational Quality
                  </h4>
                  <div className="space-y-2 text-xs">
                    {[
                      { key: 'question_clear', label: 'Question tests reasoning, not trivia' },
                      { key: 'distractors_plausible', label: '4 plausible distractors representing real errors' },
                      { key: 'rationale_accurate', label: 'Rationale explains why distractors are wrong' },
                      { key: 'learning_objective_clear', label: 'Learning objective explicitly defined' },
                      { key: 'no_unsupported_assumptions', label: 'Learner is not forced to guess missing facts' },
                    ].map(({ key, label }) => (
                      <label key={key} className="flex items-center gap-2.5 cursor-pointer text-slate-300 hover:text-white">
                        <input
                          type="checkbox"
                          checked={checklist[key as keyof CaseReviewChecklist]}
                          onChange={() => toggleChecklist(key as keyof CaseReviewChecklist)}
                          className="rounded bg-slate-900 border-slate-700 text-emerald-500 focus:ring-0 w-4 h-4"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Review Notes Input */}
                <div className="pt-3 border-t border-slate-800 space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Review Notes / Editorial Feedback (Required for Changes / Rejection)
                  </label>
                  <textarea
                    rows={3}
                    value={reviewNotes}
                    onChange={(e) => setReviewNotes(e.target.value)}
                    placeholder="e.g. Verified against FY2026/FY2027 Tabular List. Coding rationale matches Official Guideline I.B.13."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Reviewer Action Buttons */}
                <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                  <button
                    onClick={() => handleDecision('Approved')}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-md flex items-center justify-center gap-2 transition"
                  >
                    <CheckCircle className="w-4 h-4" /> Approve Case & Authorize Publication
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleDecision('Changes Requested')}
                      className="py-2 bg-amber-600/80 hover:bg-amber-600 text-white text-xs font-medium rounded-lg transition"
                    >
                      Request Changes
                    </button>
                    <button
                      onClick={() => handleDecision('Rejected')}
                      className="py-2 bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-medium rounded-lg transition"
                    >
                      Reject & Archive
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'audit' && (
              <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-4 space-y-3 max-h-[500px] overflow-y-auto">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Immutable Content Audit Trail
                </div>
                {auditLogs.length === 0 ? (
                  <p className="text-xs text-slate-500">No audit records recorded yet.</p>
                ) : (
                  auditLogs.map((log) => (
                    <div key={log.id} className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="font-semibold text-slate-200">{log.action}</span>
                        <span>{new Date(log.timestamp).toLocaleString()}</span>
                      </div>
                      <div className="text-slate-400">
                        Actor: <span className="text-slate-300">{log.user_name}</span>
                      </div>
                      {log.comment && <div className="text-slate-300 italic pt-1">{log.comment}</div>}
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'versions' && (
              <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-4 space-y-3 max-h-[500px] overflow-y-auto">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Historical Version Snapshots
                </div>
                {versions.length === 0 ? (
                  <p className="text-xs text-slate-500">No version snapshots created yet.</p>
                ) : (
                  versions.map((v) => (
                    <div key={v.id} className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-emerald-400">Version {v.version_number}</span>
                        <span className="text-slate-500">{new Date(v.created_at).toLocaleString()}</span>
                      </div>
                      <div className="text-slate-300">Reason: {v.change_reason}</div>
                      <div className="text-slate-400 text-[11px]">Author: {v.created_by} • Year: {v.code_set_year}</div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
