'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  FileCheck,
  CreditCard,
  Activity,
  Layers,
  ShieldCheck,
  TrendingUp,
  PlusCircle,
  BookOpen,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { useApp } from '../../lib/context/AppContext';
import { getAllAssessments, getAllAttempts, getAllUsers } from '../../lib/services/storageService';

export default function AdminDashboardPage() {
  const { user, cases } = useApp();

  const isAdmin = user?.role === 'admin' || user?.role === 'content_reviewer';

  const allUsers = getAllUsers();
  const allAssessments = getAllAssessments();
  const allAttempts = getAllAttempts();

  const totalUsers = allUsers.length || 1;
  const activeUsers = allUsers.length || 1;
  const assessmentsCompleted = allAssessments.filter((a) => a.status === 'completed').length || allAssessments.length;
  const casesAttempted = allAttempts.length;
  const publishedCasesCount = cases.filter((c) => c.status === 'Published').length;
  const pendingReviewCount = cases.filter((c) => c.status === 'Pending Review' || c.status === 'Draft').length;

  if (!isAdmin) {
    return (
      <div className="py-16 px-4 max-w-xl mx-auto text-center space-y-4">
        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-navy-950">Access Restricted</h1>
        <p className="text-xs sm:text-sm text-content-secondary">
          You need an Administrator or Content Reviewer role to view this management console.
        </p>
        <Link href="/profile">
          <Button variant="outline" size="sm">
            Switch Role in Profile →
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Top Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="navy" size="sm">
              Admin &amp; Editorial Console
            </Badge>
            <span className="text-xs text-content-secondary">
              Role: <strong className="capitalize text-navy-900">{user?.role}</strong>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            CodeReady Control Center
          </h1>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/admin/cases/new">
            <Button variant="primary" size="md" leftIcon={<PlusCircle className="w-4 h-4" />}>
              Create New Case
            </Button>
          </Link>
          <Link href="/admin/cases">
            <Button variant="outline" size="md" leftIcon={<BookOpen className="w-4 h-4" />}>
              Case Repository
            </Button>
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-content-secondary uppercase">Total Users</span>
            <Users className="w-4 h-4 text-teal" />
          </div>
          <div className="text-2xl font-bold font-mono text-navy-950">{totalUsers}</div>
          <span className="text-[11px] text-emerald-600 font-medium">100% active learners</span>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-content-secondary uppercase">Assessments Taken</span>
            <FileCheck className="w-4 h-4 text-teal" />
          </div>
          <div className="text-2xl font-bold font-mono text-navy-950">{assessmentsCompleted}</div>
          <span className="text-[11px] text-content-secondary font-medium">10-case sets evaluated</span>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-content-secondary uppercase">Total Attempts</span>
            <Activity className="w-4 h-4 text-teal" />
          </div>
          <div className="text-2xl font-bold font-mono text-navy-950">{casesAttempted}</div>
          <span className="text-[11px] text-content-secondary font-medium">Cases submitted</span>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-content-secondary uppercase">Published Cases</span>
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-navy-950">{publishedCasesCount}</div>
          <span className="text-[11px] text-amber-700 font-medium">
            {pendingReviewCount} in review / draft
          </span>
        </Card>
      </div>

      {/* Case Review Workflow Quick Access */}
      <div className="bg-white border border-surface-border rounded-2xl p-6 shadow-subtle space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-navy-950">
              Editorial Workflow &amp; Guidelines Audit
            </h2>
            <p className="text-xs text-content-secondary mt-0.5">
              Strict peer review workflow: Draft → Pending Review → Approved → Published.
            </p>
          </div>
          <Link href="/admin/cases">
            <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Manage All ({cases.length}) Cases
            </Button>
          </Link>
        </div>

        <div className="divide-y divide-slate-100">
          {cases.slice(0, 5).map((c) => (
            <div key={c.id} className="py-3 flex items-center justify-between gap-4 text-xs">
              <div>
                <strong className="text-navy-950 block font-semibold">
                  Case #{c.case_number}: {c.title}
                </strong>
                <span className="text-slate-400 text-[11px]">
                  {c.specialty} • {c.skill} • Code: <code className="text-teal font-mono font-bold">{c.code}</code>
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
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
                <Link href={`/admin/cases/${c.id}`}>
                  <Button variant="ghost" size="sm">
                    Review / Edit
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
