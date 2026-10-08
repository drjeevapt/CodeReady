'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  PlusCircle,
  Search,
  Filter,
  Edit3,
  Eye,
  ShieldCheck,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { useApp } from '../../../lib/context/AppContext';
import { CaseStatus } from '../../../lib/types';

export default function AdminCasesListPage() {
  const { cases } = useApp();
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const statuses = ['All', 'Published', 'Approved', 'Pending Review', 'Draft', 'Archived'];

  const filtered = cases.filter((c) => {
    if (statusFilter !== 'All' && c.status !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        c.title.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.skill.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/admin"
            className="text-xs text-content-secondary hover:text-navy-900 flex items-center gap-1 mb-1.5"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Admin Hub</span>
          </Link>
          <h1 className="text-2xl font-bold text-navy-950 tracking-tight">
            Case Management &amp; Review Pipeline
          </h1>
          <p className="text-xs text-content-secondary mt-0.5">
            Peer-review, edit, and publish clinical ICD-10-CM documentation cases.
          </p>
        </div>

        <Link href="/admin/cases/new">
          <Button variant="primary" size="md" leftIcon={<PlusCircle className="w-4 h-4" />}>
            Create New Case
          </Button>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <Card className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by code, title, or concept..."
            className="w-full text-xs sm:text-sm bg-slate-50 border border-surface-border rounded-lg pl-9 pr-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                statusFilter === st
                  ? 'bg-navy-900 text-white shadow-subtle'
                  : 'bg-slate-100 text-content-secondary hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </Card>

      {/* Cases Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-content-primary">
            <thead className="bg-slate-50 border-b border-surface-border text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Case Title &amp; Concept</th>
                <th className="py-3 px-4">Specialty / Skill</th>
                <th className="py-3 px-4">Code</th>
                <th className="py-3 px-4">Difficulty</th>
                <th className="py-3 px-4">Review Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-400">
                    {c.case_number}
                  </td>
                  <td className="py-3.5 px-4">
                    <strong className="block font-semibold text-navy-950 text-xs sm:text-sm">
                      {c.title}
                    </strong>
                    <span className="text-[11px] text-slate-400 truncate max-w-xs block">
                      {c.coding_concept}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-navy-900">{c.specialty}</div>
                    <div className="text-[11px] text-slate-500">{c.skill}</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-teal">
                    {c.code}
                  </td>
                  <td className="py-3.5 px-4">
                    <Badge variant="neutral" size="sm">
                      {c.difficulty}
                    </Badge>
                  </td>
                  <td className="py-3.5 px-4">
                    <Badge
                      variant={
                        c.status === 'Published'
                          ? 'success'
                          : c.status === 'Approved'
                          ? 'teal'
                          : c.status === 'Pending Review'
                          ? 'warning'
                          : 'neutral'
                      }
                      size="sm"
                    >
                      {c.status}
                    </Badge>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link href={`/practice/${c.id}`}>
                        <button
                          title="Preview as Learner"
                          className="p-1.5 text-slate-400 hover:text-teal rounded hover:bg-slate-100"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </Link>
                      <Link href={`/admin/cases/${c.id}`}>
                        <button
                          title="Edit / Review"
                          className="p-1.5 text-slate-400 hover:text-navy-900 rounded hover:bg-slate-100"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
