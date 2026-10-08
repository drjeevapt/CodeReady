'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  getAllCases,
  saveCase,
  getAllCaseFlags,
  getAllReviews,
  getContentAuditLogs,
  getAllCodeSets,
  reviewForNewCodeSet,
  initializeStorage,
} from '@/lib/services/storageService';
import { Case, ContentStatus } from '@/lib/types';
import { findDuplicateCandidates, calculateContentQualityScore } from '@/lib/content/contentQualityEngine';
import {
  Sparkles,
  Search,
  Filter,
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  Plus,
  RefreshCw,
  Upload,
  Download,
  Eye,
  Edit,
  ShieldCheck,
  Flag,
  Archive,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export default function AdminContentDashboard() {
  const [cases, setCases] = useState<Case[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'published' | 'pending' | 'drafts' | 'needs_update' | 'archived' | 'flagged'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  
  // Modals
  const [isAiDraftModalOpen, setIsAiDraftModalOpen] = useState(false);
  const [isCodeSetModalOpen, setIsCodeSetModalOpen] = useState(false);
  const [isBulkImportModalOpen, setIsBulkImportModalOpen] = useState(false);
  const [previewCase, setPreviewCase] = useState<Case | null>(null);
  const [showAnswerKeyInPreview, setShowAnswerKeyInPreview] = useState(false);

  // AI Draft Generator state
  const [aiDraftInput, setAiDraftInput] = useState({
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    code_set_year: 'FY2027',
    learning_objective: 'Distinguish left vs right knee pathology and apply verified code specificity',
  });
  const [isGeneratingDraft, setIsGeneratingDraft] = useState(false);

  // Code-set transition state
  const [targetCodeSetYear, setTargetCodeSetYear] = useState('FY2027');
  const [codeSetReviewResults, setCodeSetReviewResults] = useState<{ totalCases: number; flaggedForReview: number } | null>(null);

  // Bulk import state
  const [importJsonText, setImportJsonText] = useState('');
  const [importResult, setImportResult] = useState<{ processed: number; imported: number; duplicates: number; errors: string[] } | null>(null);

  const [flags, setFlags] = useState<any[]>([]);

  useEffect(() => {
    initializeStorage();
    loadCases();
  }, []);

  const loadCases = () => {
    const all = getAllCases();
    setCases(all);
    setFlags(getAllCaseFlags());
  };

  // Filter cases based on tab, search, and dropdown filters
  const filteredCases = cases.filter((c) => {
    // Tab filter
    if (activeTab === 'published' && c.status !== 'Published' && c.content_status !== 'PUBLISHED') return false;
    if (activeTab === 'pending' && c.review_status !== 'Pending Review') return false;
    if (activeTab === 'drafts' && c.content_status !== 'DRAFT' && c.status !== 'Draft') return false;
    if (activeTab === 'needs_update' && c.content_status !== 'NEEDS_UPDATE' && c.review_status !== 'Changes Requested') return false;
    if (activeTab === 'archived' && c.content_status !== 'ARCHIVED' && c.status !== 'Archived') return false;
    if (activeTab === 'flagged') {
      const caseHasFlag = flags.some((f) => f.case_id === c.id && f.status === 'Pending Review');
      if (!caseHasFlag) return false;
    }

    // Specialty filter
    if (selectedSpecialty !== 'all' && c.specialty !== selectedSpecialty && c.body_region !== selectedSpecialty) return false;

    // Difficulty filter
    if (selectedDifficulty !== 'all' && c.difficulty !== selectedDifficulty) return false;

    // Year filter
    if (selectedYear !== 'all' && !c.code_set_year.includes(selectedYear)) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = c.title.toLowerCase().includes(q);
      const matchCode = (c.code || c.icd10cm_code || '').toLowerCase().includes(q);
      const matchDoc = c.clinical_documentation.toLowerCase().includes(q);
      const matchSkill = (c.skill || c.primary_skill || '').toLowerCase().includes(q);
      const matchNum = String(c.case_number).includes(q);
      if (!matchTitle && !matchCode && !matchDoc && !matchSkill && !matchNum) return false;
    }

    return true;
  });

  // Calculate high-level content engine metrics
  const totalCount = cases.length;
  const publishedCount = cases.filter((c) => c.status === 'Published' || c.content_status === 'PUBLISHED').length;
  const draftCount = cases.filter((c) => c.content_status === 'DRAFT' || c.status === 'Draft').length;
  const pendingCount = cases.filter((c) => c.review_status === 'Pending Review').length;
  const needsReviewCount = cases.filter((c) => c.content_status === 'NEEDS_UPDATE' || c.review_status === 'Changes Requested').length;
  const archivedCount = cases.filter((c) => c.content_status === 'ARCHIVED' || c.status === 'Archived').length;
  const pendingFlagsCount = flags.filter((f) => f.status === 'Pending Review').length;

  const handleGenerateAiDraft = () => {
    setIsGeneratingDraft(true);
    setTimeout(() => {
      const newCaseNumber = cases.length + 1;
      const draftCase: Case = {
        id: `case-${String(newCaseNumber).padStart(3, '0')}`,
        case_number: newCaseNumber,
        title: `AI Draft: ${aiDraftInput.body_region} Evaluation`,
        specialty: aiDraftInput.specialty as any,
        body_region: aiDraftInput.body_region,
        difficulty: aiDraftInput.difficulty as any,
        skill: aiDraftInput.skill,
        primary_skill: aiDraftInput.skill,
        clinical_documentation: `PATIENT CLINICAL NOTE (AI DRAFT - REQUIRES CLINICAL VERIFICATION)
Patient: 54-year-old female
Setting: Outpatient Clinic

SUBJECTIVE:
Presents with persistent localized aching in the ${aiDraftInput.body_region.toLowerCase()} for 3 months.

OBJECTIVE:
Exam: Tenderness to palpation over anatomical landmarks. Mild restriction in active range of motion. Diagnostic imaging consistent with degenerative joint changes.

ASSESSMENT:
Primary localized condition, ${aiDraftInput.body_region.toLowerCase()}.

PLAN:
Conservative physical therapy and clinical follow-up.`,
        question: `Based on the documented findings, what is the most appropriate coding decision for this ${aiDraftInput.body_region.toLowerCase()} encounter?`,
        answer_type: 'single_choice',
        options: [
          { id: 'opt_a', label: 'A', text: `Option A — Documented specific condition (${aiDraftInput.body_region})` },
          { id: 'opt_b', label: 'B', text: 'Option B — Unspecified symptom only' },
          { id: 'opt_c', label: 'C', text: 'Option C — Contralateral anatomical site' },
          { id: 'opt_d', label: 'D', text: 'Option D — Unsupported traumatic complication' },
        ],
        correct_answer: 'opt_a',
        correct_option: 'A',
        code: 'NEEDS_REVIEW',
        icd10cm_code: 'NEEDS_REVIEW',
        code_description: 'Pending human coding review verification',
        explanation: 'Educational draft explanation generated. Human coding reviewer must verify tabular index and guidelines.',
        documentation_evidence: 'Assessment: Documented localized condition.',
        coding_concept: aiDraftInput.skill,
        common_mistake: 'Selecting unspecified symptom code over documented definitive diagnosis.',
        common_trap: 'Assuming laterality without documentation proof.',
        learning_objective: aiDraftInput.learning_objective,
        target_time_seconds: 75,
        reference: 'ICD-10-CM Official Guidelines for Coding and Reporting',
        code_set_year: aiDraftInput.code_set_year,
        status: 'Draft',
        content_status: 'DRAFT',
        review_status: 'Pending Review',
        coding_verification_status: 'UNVERIFIED',
        quality_score: 82,
        assessment_ready: false,
        tags: [aiDraftInput.body_region.toLowerCase(), 'ai-draft', 'needs-review'],
        created_by: 'AI Content Assistant',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      saveCase(draftCase, 'ai_assistant', 'AI Content Assistant');
      setIsGeneratingDraft(false);
      setIsAiDraftModalOpen(false);
      loadCases();
      alert(`AI Draft Case #${newCaseNumber} created successfully in DRAFT status. Human coding review is required before publication.`);
    }, 1000);
  };

  const handleSimulateCodeSetReview = () => {
    const res = reviewForNewCodeSet(targetCodeSetYear);
    setCodeSetReviewResults(res);
  };

  const handleBulkImport = () => {
    try {
      const parsed = JSON.parse(importJsonText);
      if (!Array.isArray(parsed)) {
        alert('Invalid JSON: Root must be an array of Case objects.');
        return;
      }
      let imported = 0;
      let duplicates = 0;
      const errors: string[] = [];

      parsed.forEach((item: any, idx: number) => {
        if (!item.title || !item.clinical_documentation || !item.question || !item.options) {
          errors.push(`Record #${idx + 1}: Missing mandatory fields`);
          return;
        }
        if (item.options.length !== 4) {
          errors.push(`Record #${idx + 1} ("${item.title}"): Must contain exactly 4 options.`);
          return;
        }

        const dups = findDuplicateCandidates(item, cases);
        if (dups.length > 0 && dups[0].similarityPercentage > 90) {
          duplicates++;
        }

        const importedCase: Case = {
          ...item,
          id: item.id || `case-${String(cases.length + imported + 1).padStart(3, '0')}`,
          case_number: item.case_number || cases.length + imported + 1,
          status: 'Draft',
          content_status: 'DRAFT',
          review_status: 'Pending Review',
          coding_verification_status: item.coding_verification_status || 'UNVERIFIED',
          quality_score: calculateContentQualityScore(item).totalScore,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        saveCase(importedCase, 'bulk_import', 'Bulk Content Importer');
        imported++;
      });

      setImportResult({
        processed: parsed.length,
        imported,
        duplicates,
        errors,
      });
      loadCases();
    } catch (e: any) {
      alert(`JSON parsing error: ${e.message}`);
    }
  };

  const exportCasesJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(cases, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `codeready_cases_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-8">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                Admin Content Engine
              </span>
              <span className="text-xs text-slate-400">Code-Set: FY2026/FY2027</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">Medical Coding Content Repository</h1>
            <p className="text-sm text-slate-400 mt-0.5">
              Production-grade clinical case management, verification workflow, quality scoring, and versioning.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsCodeSetModalOpen(true)}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 flex items-center gap-2 transition"
            >
              <RefreshCw className="w-4 h-4 text-sky-400" />
              Review for New Code Set
            </button>
            <button
              onClick={() => setIsBulkImportModalOpen(true)}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 flex items-center gap-2 transition"
            >
              <Upload className="w-4 h-4 text-amber-400" />
              Bulk Import / Export
            </button>
            <button
              onClick={() => setIsAiDraftModalOpen(true)}
              className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-medium rounded-lg shadow-md flex items-center gap-2 transition"
            >
              <Sparkles className="w-4 h-4" />
              Generate Draft with AI
            </button>
            <Link
              href="/admin/cases/new"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg shadow-md flex items-center gap-2 transition"
            >
              <Plus className="w-4 h-4" />
              Create Case
            </Link>
          </div>
        </div>

        {/* Metrics Overview Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
            <div className="text-xs font-medium text-slate-400">Content Library</div>
            <div className="text-2xl font-bold text-white mt-1">{totalCount}</div>
            <div className="text-xs text-slate-500 mt-0.5">100 Target Cases</div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
            <div className="text-xs font-medium text-emerald-400">Published & Live</div>
            <div className="text-2xl font-bold text-emerald-400 mt-1">{publishedCount}</div>
            <div className="text-xs text-slate-500 mt-0.5">Verified & active</div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
            <div className="text-xs font-medium text-amber-400">Pending Review</div>
            <div className="text-2xl font-bold text-amber-400 mt-1">{pendingCount}</div>
            <div className="text-xs text-slate-500 mt-0.5">Awaiting editorial signoff</div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
            <div className="text-xs font-medium text-purple-400">Drafts</div>
            <div className="text-2xl font-bold text-purple-400 mt-1">{draftCount}</div>
            <div className="text-xs text-slate-500 mt-0.5">In authoring</div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
            <div className="text-xs font-medium text-rose-400">Needs Review / Flags</div>
            <div className="text-2xl font-bold text-rose-400 mt-1">{needsReviewCount + pendingFlagsCount}</div>
            <div className="text-xs text-slate-500 mt-0.5">{pendingFlagsCount} user reported</div>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
            <div className="text-xs font-medium text-slate-400">Active Code Set</div>
            <div className="text-lg font-bold text-sky-400 mt-1">FY2026/27</div>
            <div className="text-xs text-slate-500 mt-0.5">CMS/CDC Reference</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 space-x-1 overflow-x-auto">
          {[
            { id: 'all', label: `All Cases (${totalCount})` },
            { id: 'published', label: `Published (${publishedCount})` },
            { id: 'pending', label: `Pending Review (${pendingCount})` },
            { id: 'drafts', label: `Drafts (${draftCount})` },
            { id: 'needs_update', label: `Needs Update (${needsReviewCount})` },
            { id: 'flagged', label: `Reported Flags (${pendingFlagsCount})` },
            { id: 'archived', label: `Archived (${archivedCount})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'border-emerald-500 text-emerald-400 bg-slate-800/30'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-800/40 p-4 rounded-xl border border-slate-800">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by case, ICD-10 code (e.g. M17, M75), title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/80 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-400">Filters:</span>
            </div>

            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">All Specialties</option>
              <option value="Knee">Knee</option>
              <option value="Shoulder">Shoulder</option>
              <option value="Spine/Back">Spine/Back</option>
              <option value="Hip">Hip</option>
              <option value="Foot/Ankle">Foot/Ankle</option>
              <option value="Upper Extremity">Upper Extremity</option>
              <option value="General Musculoskeletal">General MSK</option>
              <option value="Rehabilitation">Rehabilitation</option>
              <option value="Injury">Injury</option>
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">All Code Sets</option>
              <option value="FY2026">FY2026</option>
              <option value="FY2027">FY2027</option>
            </select>

            {(searchQuery || selectedSpecialty !== 'all' || selectedDifficulty !== 'all' || selectedYear !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSpecialty('all');
                  setSelectedDifficulty('all');
                  setSelectedYear('all');
                }}
                className="text-xs text-emerald-400 hover:underline"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Case Table */}
        <div className="bg-slate-800/40 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/80 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-700/80">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Case</th>
                  <th className="py-3.5 px-3 font-semibold">Specialty & Region</th>
                  <th className="py-3.5 px-3 font-semibold">Primary Skill</th>
                  <th className="py-3.5 px-3 font-semibold">Difficulty</th>
                  <th className="py-3.5 px-3 font-semibold">ICD-10 Code</th>
                  <th className="py-3.5 px-3 font-semibold">Quality</th>
                  <th className="py-3.5 px-3 font-semibold">Review Status</th>
                  <th className="py-3.5 px-3 font-semibold">Verification</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredCases.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-slate-500 text-sm">
                      No cases match the selected filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredCases.map((c) => {
                    const quality = calculateContentQualityScore(c);
                    const isPublished = c.status === 'Published' || c.content_status === 'PUBLISHED';
                    const isApproved = c.review_status === 'Approved' || c.content_status === 'APPROVED';

                    return (
                      <tr key={c.id} className="hover:bg-slate-800/60 transition group">
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-white group-hover:text-emerald-300 transition">
                            #{c.case_number} — {c.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                            <span>{c.code_set_year}</span>
                            {c.assessment_ready && (
                              <span className="px-1.5 py-0.2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded text-[10px]">
                                Assessment Ready
                              </span>
                            )}
                          </div>
                        </td>

                        <td className="py-3.5 px-3">
                          <span className="inline-block px-2 py-0.5 text-xs rounded bg-slate-700/60 text-slate-200 border border-slate-600/50">
                            {c.body_region || c.specialty}
                          </span>
                        </td>

                        <td className="py-3.5 px-3 text-xs text-slate-300 font-medium">
                          {c.primary_skill || c.skill}
                        </td>

                        <td className="py-3.5 px-3">
                          <span
                            className={`inline-block px-2 py-0.5 text-xs rounded font-medium ${
                              c.difficulty === 'Beginner'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : c.difficulty === 'Intermediate'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                            }`}
                          >
                            {c.difficulty}
                          </span>
                        </td>

                        <td className="py-3.5 px-3">
                          <code className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-900 border border-slate-700 text-sky-300 rounded">
                            {c.code || c.icd10cm_code || 'UNVERIFIED'}
                          </code>
                        </td>

                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-1.5">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                quality.totalScore >= 95
                                  ? 'bg-emerald-400'
                                  : quality.totalScore >= 90
                                  ? 'bg-amber-400'
                                  : 'bg-rose-400'
                              }`}
                            />
                            <span className="text-xs font-semibold text-slate-200">
                              {quality.totalScore}/100
                            </span>
                          </div>
                        </td>

                        <td className="py-3.5 px-3">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded font-medium ${
                              isApproved
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : c.review_status === 'Pending Review'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                : c.review_status === 'Changes Requested'
                                ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                                : 'bg-slate-700/60 text-slate-300'
                            }`}
                          >
                            {isApproved && <CheckCircle className="w-3 h-3" />}
                            {c.review_status === 'Pending Review' && <Clock className="w-3 h-3" />}
                            {c.review_status || 'Draft'}
                          </span>
                        </td>

                        <td className="py-3.5 px-3">
                          <span
                            className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded ${
                              c.coding_verification_status === 'VERIFIED'
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                : 'bg-rose-950 text-rose-400 border border-rose-800'
                            }`}
                          >
                            {c.coding_verification_status || 'UNVERIFIED'}
                          </span>
                        </td>

                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                setPreviewCase(c);
                                setShowAnswerKeyInPreview(false);
                              }}
                              className="p-1.5 text-slate-400 hover:text-sky-400 hover:bg-slate-700 rounded transition"
                              title="Preview as Learner"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <Link
                              href={`/admin/content/review/${c.id}`}
                              className="p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-slate-700 rounded transition"
                              title="Reviewer Interface"
                            >
                              <ShieldCheck className="w-4 h-4" />
                            </Link>
                            <Link
                              href={`/admin/cases/${c.id}`}
                              className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-slate-700 rounded transition"
                              title="Edit Case Details"
                            >
                              <Edit className="w-4 h-4" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Summary */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 py-3 border-t border-slate-800">
          <div>Showing {filteredCases.length} of {totalCount} cases in content database</div>
          <div>CodeReady Content Engine Version 2.4 — Verification Policy Active</div>
        </div>
      </div>

      {/* AI Draft Generator Modal */}
      {isAiDraftModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Generate Draft Case with AI</h3>
              </div>
              <button
                onClick={() => setIsAiDraftModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Mandatory Content Safety Warning */}
            <div className="bg-amber-950/40 border border-amber-500/30 p-3 rounded-lg flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-200">
                <span className="font-semibold">Mandatory Content Safety Rule:</span> AI generates draft cases marked <code className="bg-amber-900 px-1 py-0.5 rounded text-amber-100">DRAFT / UNVERIFIED</code>. AI outputs are never automatically published without formal human coding review and tabular verification.
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Body Region / Specialty</label>
                  <select
                    value={aiDraftInput.body_region}
                    onChange={(e) => setAiDraftInput({ ...aiDraftInput, body_region: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
                  >
                    <option value="Knee">Knee</option>
                    <option value="Shoulder">Shoulder</option>
                    <option value="Spine/Back">Spine/Back</option>
                    <option value="Hip">Hip</option>
                    <option value="Foot/Ankle">Foot/Ankle</option>
                    <option value="Upper Extremity">Upper Extremity</option>
                    <option value="Rehabilitation">Rehabilitation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Difficulty</label>
                  <select
                    value={aiDraftInput.difficulty}
                    onChange={(e) => setAiDraftInput({ ...aiDraftInput, difficulty: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Primary Coding Skill Tested</label>
                <select
                  value={aiDraftInput.skill}
                  onChange={(e) => setAiDraftInput({ ...aiDraftInput, skill: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
                >
                  <option value="Diagnosis vs Symptom">Diagnosis vs Symptom</option>
                  <option value="Laterality & Specificity">Laterality & Specificity</option>
                  <option value="Acute vs Chronic">Acute vs Chronic</option>
                  <option value="Injury & Encounter Phase">Injury & Encounter Phase</option>
                  <option value="Documentation Gap Recognition">Documentation Gap Recognition</option>
                  <option value="Rehabilitation Documentation">Rehabilitation Documentation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Desired Learning Objective</label>
                <input
                  type="text"
                  value={aiDraftInput.learning_objective}
                  onChange={(e) => setAiDraftInput({ ...aiDraftInput, learning_objective: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-slate-200 text-xs"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setIsAiDraftModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200"
              >
                Cancel
              </button>
              <button
                onClick={handleGenerateAiDraft}
                disabled={isGeneratingDraft}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition disabled:opacity-50"
              >
                {isGeneratingDraft ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                {isGeneratingDraft ? 'Synthesizing Draft...' : 'Generate AI Draft'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Code Set Transition Modal */}
      {isCodeSetModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-sky-400" />
                <h3 className="text-lg font-bold text-white">Review for New Code Set Version</h3>
              </div>
              <button onClick={() => setIsCodeSetModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <p className="text-xs text-slate-300">
              Prepare the CodeReady library for an upcoming ICD-10-CM fiscal year code update (e.g. FY2026 → FY2027). The system identifies all cases utilizing potentially revised categories and flags them for editorial re-verification without overwriting historical published attempts.
            </p>

            <div className="bg-slate-800/70 p-3 rounded-lg border border-slate-700 space-y-2">
              <label className="block text-xs font-medium text-slate-300">Target ICD-10-CM Year</label>
              <select
                value={targetCodeSetYear}
                onChange={(e) => setTargetCodeSetYear(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-slate-200"
              >
                <option value="FY2027">ICD-10-CM FY2027 (Effective Oct 1, 2026)</option>
                <option value="FY2028">ICD-10-CM FY2028 (Effective Oct 1, 2027)</option>
              </select>
            </div>

            {codeSetReviewResults && (
              <div className="bg-sky-950/40 border border-sky-500/30 p-3.5 rounded-lg space-y-1">
                <div className="text-xs font-semibold text-sky-300">Code Set Transition Simulation Complete</div>
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white">{codeSetReviewResults.totalCases} cases evaluated.</span> {codeSetReviewResults.flaggedForReview} cases queued for verification against new FY2027 guideline updates.
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
              <button onClick={() => setIsCodeSetModalOpen(false)} className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200">
                Close
              </button>
              <button
                onClick={handleSimulateCodeSetReview}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition"
              >
                Run Code-Set Verification Scan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Import / Export Modal */}
      {isBulkImportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white">Bulk Content Import / Export</h3>
              </div>
              <button onClick={() => setIsBulkImportModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Import structured JSON case schema records into Draft review queue.</span>
              <button
                onClick={exportCasesJson}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 rounded-lg flex items-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                Export Full Library JSON
              </button>
            </div>

            <textarea
              rows={8}
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder='Paste JSON array of cases e.g. [{"title": "...", "clinical_documentation": "...", "question": "...", "options": [...]}]'
              className="w-full bg-slate-950 font-mono text-xs text-slate-200 p-3 border border-slate-800 rounded-lg focus:outline-none focus:border-amber-500"
            />

            {importResult && (
              <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700 text-xs space-y-1">
                <div className="font-semibold text-emerald-400">Import Report:</div>
                <div className="text-slate-300">
                  {importResult.processed} records processed • <span className="text-emerald-400">{importResult.imported} imported</span> • <span className="text-amber-400">{importResult.duplicates} duplicates detected</span>
                </div>
                {importResult.errors.length > 0 && (
                  <div className="text-rose-400 pt-1">
                    {importResult.errors.length} validation errors encountered.
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
              <button onClick={() => setIsBulkImportModalOpen(false)} className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200">
                Done
              </button>
              <button
                onClick={handleBulkImport}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition"
              >
                Validate & Import to Drafts
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Learner Preview Modal */}
      {previewCase && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Learner Preview Mode</span>
                <h3 className="text-xl font-bold text-white">Case #{previewCase.case_number}: {previewCase.title}</h3>
              </div>
              <button onClick={() => setPreviewCase(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            {/* Clinical Documentation Box */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 whitespace-pre-line leading-relaxed">
              {previewCase.clinical_documentation}
            </div>

            {/* Question */}
            <div className="text-sm font-semibold text-white">
              {previewCase.question}
            </div>

            {/* Options */}
            <div className="space-y-2">
              {previewCase.options.map((opt) => {
                const isCorrect = showAnswerKeyInPreview && (opt.id === previewCase.correct_answer || opt.label === previewCase.correct_option);
                return (
                  <div
                    key={opt.id}
                    className={`p-3 rounded-lg border text-xs flex items-center justify-between transition ${
                      isCorrect
                        ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-200'
                        : 'bg-slate-800/50 border-slate-700 text-slate-300'
                    }`}
                  >
                    <span>
                      <strong className="mr-2 font-mono text-slate-400">[{opt.label}]</strong>
                      {opt.text}
                    </span>
                    {isCorrect && (
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded">
                        CORRECT ANSWER
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Admin Toggle Answer Key */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setShowAnswerKeyInPreview(!showAnswerKeyInPreview)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 rounded-lg border border-slate-700 transition"
              >
                {showAnswerKeyInPreview ? 'Hide Answer Key & Rationale' : 'Show Answer Key & Rationale'}
              </button>

              <button
                onClick={() => setPreviewCase(null)}
                className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded-lg"
              >
                Close Preview
              </button>
            </div>

            {showAnswerKeyInPreview && (
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2 text-slate-300">
                <div className="font-semibold text-emerald-400">Coding Rationale:</div>
                <p>{previewCase.explanation || previewCase.rationale}</p>
                <div className="font-semibold text-amber-400 mt-2">Common Trap:</div>
                <p>{previewCase.common_trap || previewCase.common_mistake}</p>
                <div className="font-semibold text-sky-400 mt-2">Official Reference:</div>
                <p>{previewCase.reference || previewCase.official_reference}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
