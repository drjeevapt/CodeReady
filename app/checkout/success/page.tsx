'use client';

import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  LayoutDashboard,
  BrainCircuit,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';
import { useApp } from '../../../lib/context/AppContext';

export default function CheckoutSuccessPage() {
  const { user } = useApp();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="bg-white border border-surface-border rounded-3xl p-8 sm:p-12 shadow-elevated w-full max-w-xl text-center space-y-6 animate-fade-in">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-subtle">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <Badge variant="teal" size="md" className="mb-2">
            Payment Verified &amp; Active
          </Badge>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Welcome to CodeReady Pro!
          </h1>
          <p className="text-xs sm:text-sm text-content-secondary mt-1.5 max-w-md mx-auto">
            Your Pro membership is now live. You have unlocked unlimited clinical practice cases, complete diagnostic metrics, and the interactive AI Coding Tutor.
          </p>
        </div>

        {/* Benefits Box */}
        <div className="bg-slate-50 border border-surface-border rounded-xl p-4 text-left text-xs space-y-2.5">
          <div className="flex items-center gap-2 text-navy-950 font-semibold">
            <Sparkles className="w-4 h-4 text-teal" />
            <span>What you can do right now:</span>
          </div>
          <div className="flex items-center gap-2 text-content-secondary">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Practice all 10+ orthopedic & rehabilitation cases without limits</span>
          </div>
          <div className="flex items-center gap-2 text-content-secondary">
            <BrainCircuit className="w-3.5 h-3.5 text-teal" />
            <span>Ask the AI Tutor for custom guideline explanations on any case</span>
          </div>
          <div className="flex items-center gap-2 text-content-secondary">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Track your readiness score progression on your dashboard</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/practice" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto px-8 shadow-card"
            >
              Start Unlimited Practice
            </Button>
          </Link>
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
