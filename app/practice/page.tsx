'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Filter,
  Search,
  Sparkles,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { CaseCard } from '../../components/clinical/CaseCard';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { useApp } from '../../lib/context/AppContext';
import { Specialty, Difficulty, SkillCategory } from '../../lib/types';

export default function PracticeLibraryPage() {
  const { publishedCases, userAttempts, canUnlimitedPractice, practiceLimit } = useApp();

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const specialties = ['All', 'Orthopedics', 'Rehabilitation'];
  const skills = [
    'All',
    'Documentation Interpretation',
    'Diagnosis Selection',
    'Laterality & Specificity',
    'Coding Judgment',
    'Clinical Reasoning',
  ];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCases = publishedCases.filter((c) => {
    if (selectedSpecialty !== 'All' && c.specialty !== selectedSpecialty) return false;
    if (selectedSkill !== 'All' && c.skill !== selectedSkill) return false;
    if (selectedDifficulty !== 'All' && c.difficulty !== selectedDifficulty) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        c.title.toLowerCase().includes(q) ||
        c.clinical_documentation.toLowerCase().includes(q) ||
        c.skill.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="teal" size="sm">
              ICD-10-CM Case Library
            </Badge>
            <span className="text-xs text-content-secondary">
              FY 2025/2026 Guidelines
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Practice Real Coding Cases
          </h1>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            Build coding judgment through self-paced clinical documentation challenges with AI tutoring.
          </p>
        </div>

        {/* Free vs Pro Entitlement Status */}
        {!canUnlimitedPractice ? (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-center justify-between gap-3 text-xs shrink-0">
            <div>
              <span className="font-bold text-amber-900 block">Free Starter Tier</span>
              <span className="text-amber-800">
                {practiceLimit.remaining} of {practiceLimit.limit} free practice cases remaining
              </span>
            </div>
            <Link href="/pricing">
              <Button variant="primary" size="sm">
                Unlock Pro
              </Button>
            </Link>
          </div>
        ) : (
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-3.5 flex items-center gap-2.5 text-xs text-teal-900 shrink-0">
            <Sparkles className="w-4 h-4 text-teal" />
            <div>
              <span className="font-bold block">Pro Membership Active</span>
              <span className="text-teal-700">Unlimited Practice & AI Tutor unlocked</span>
            </div>
          </div>
        )}
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-surface-border rounded-xl p-4 sm:p-5 shadow-subtle space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cases by diagnosis, condition, keyword, or note snippet..."
            className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Specialty */}
          <div>
            <label className="block text-[11px] font-semibold text-content-secondary uppercase tracking-wider mb-1">
              Specialty
            </label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal"
            >
              {specialties.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Skill */}
          <div>
            <label className="block text-[11px] font-semibold text-content-secondary uppercase tracking-wider mb-1">
              Competency Skill
            </label>
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal"
            >
              {skills.map((sk) => (
                <option key={sk} value={sk}>{sk}</option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-[11px] font-semibold text-content-secondary uppercase tracking-wider mb-1">
              Difficulty Level
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal"
            >
              {difficulties.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Cases Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-content-secondary">
          <span>Showing <strong>{filteredCases.length}</strong> clinical cases</span>
          <span>Self-paced mode with immediate guideline feedback</span>
        </div>

        {filteredCases.length === 0 ? (
          <div className="bg-white border border-surface-border rounded-xl p-12 text-center space-y-3">
            <p className="text-sm font-semibold text-navy-950">No cases match your filters.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedSpecialty('All');
                setSelectedSkill('All');
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCases.map((c) => (
              <CaseCard
                key={c.id}
                caseItem={c}
                attempts={userAttempts}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
