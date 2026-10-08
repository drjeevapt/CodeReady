'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileText,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  BrainCircuit,
  Award,
  Clock,
  Layers,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface-bg to-surface-bg pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold shadow-subtle animate-fade-in">
              <ShieldCheck className="w-4 h-4 text-teal" />
              <span>Specialized in ICD-10-CM Orthopedics & Rehabilitation</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight max-w-4xl leading-[1.15]">
              Are you really <span className="text-teal underline decoration-teal-300 decoration-wavy decoration-2">job-ready</span> in medical coding?
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-content-secondary max-w-2xl leading-relaxed">
              Practice realistic clinical documentation, test your coding judgment, and discover exactly where you need to improve before your next assessment or interview.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full sm:w-auto">
              <Link href="/assessment" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto text-base px-8 py-4 shadow-elevated"
                >
                  Take 10-Case Assessment →
                </Button>
              </Link>

              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  See How It Works
                </Button>
              </a>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-content-secondary font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal" />
                <span>100% Free Initial Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal" />
                <span>Instant Verified Readiness Score</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal" />
                <span>Guideline Citations & Pitfall Explanations</span>
              </div>
            </div>
          </div>

          {/* Interactive Hero Clinical Note Preview */}
          <div className="mt-14 max-w-3xl mx-auto rounded-2xl border border-surface-border bg-white shadow-elevated overflow-hidden">
            <div className="bg-navy-900 text-white px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-300 ml-2">Sample Assessment Case #01</span>
              </div>
              <Badge variant="teal" size="sm">ICD-10-CM v25/26</Badge>
            </div>
            <div className="p-6 bg-slate-50/70 font-mono text-xs text-content-primary leading-relaxed border-b border-surface-border">
              <strong className="text-navy-900 block mb-1">PATIENT: 67-year-old female • OUTPATIENT ORTHOPEDICS</strong>
              <p className="text-slate-600 mb-2"><strong>ASSESSMENT:</strong> Primary osteoarthritis, right knee.</p>
              <p className="text-slate-600"><strong>PLAN:</strong> Conservative management, physical therapy 2x/wk. Topical NSAID.</p>
            </div>
            <div className="p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider block">Decision Challenge</span>
                <p className="text-sm font-medium text-navy-950">Should you code knee pain (M25.561) in addition to osteoarthritis?</p>
              </div>
              <Link href="/assessment">
                <Button variant="primary" size="sm">
                  Test Your Answer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Core Value Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-navy-950 tracking-tight mb-3">
              Stop memorizing codes. Start practicing decisions.
            </h2>
            <p className="text-sm sm:text-base text-content-secondary">
              Real coding jobs require clinical documentation interpretation, laterality validation, and outpatient uncertainty judgment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="p-6 hover:shadow-elevated transition-shadow border-t-4 border-t-teal">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">
                Real Clinical Documentation
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Practice cases that resemble authentic EHR notes you encounter in real medical coding assessments and hiring evaluations.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="p-6 hover:shadow-elevated transition-shadow border-t-4 border-t-navy-900">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-5">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">
                Instant Rationale Feedback
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Understand why an answer is correct—and exactly why common tempting alternatives violate official coding guidelines.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="p-6 hover:shadow-elevated transition-shadow border-t-4 border-t-teal">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">
                Job-Readiness Score (0–100)
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                Measure 4 core pillars: Coding Accuracy (50%), Documentation Interpretation (25%), Judgment (15%), and Speed (10%).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-surface-bg border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="teal" size="md" className="mb-2">5-Step Mastery</Badge>
            <h2 className="text-2xl sm:text-4xl font-bold text-navy-950 tracking-tight">
              How CodeReady Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Take Assessment', desc: '10 clinical cases in ~10–15 minutes.' },
              { step: '02', title: 'Code Realistic Cases', desc: 'Review notes, pick codes, justify reasoning.' },
              { step: '03', title: 'Understand Mistakes', desc: 'Instant guideline citations & common pitfalls.' },
              { step: '04', title: 'Practice Weak Areas', desc: 'Targeted drills on laterality & aftercare.' },
              { step: '05', title: 'Track Readiness', desc: 'See your readiness curve rise before hiring.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-surface-border rounded-xl p-4 sm:p-5 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-teal block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-navy-950 mb-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-content-secondary mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target User Section: For Students & Freshers */}
      <section className="py-16 sm:py-20 bg-white border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-elevated relative overflow-hidden">
            <div className="max-w-2xl relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/20 text-teal-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>For Medical Coding Students & Freshers</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Bridge the gap between textbook theory and real-world coding assessments.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Most junior coders fail hiring assessments not because they don&apos;t know the codes, but because they struggle to apply guidelines to messy physician notes with missing specificity or conflicting symptoms.
              </p>
              <div className="pt-4">
                <Link href="/assessment">
                  <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Find Your Coding Readiness →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Final CTA */}
      <section className="py-16 sm:py-20 bg-surface-bg text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-navy-950 tracking-tight">
            Ready to know if you&apos;re truly job-ready?
          </h2>
          <p className="text-sm sm:text-base text-content-secondary">
            Join hundreds of coding freshers taking realistic assessments in orthopedic and rehabilitation coding.
          </p>
          <div className="pt-2">
            <Link href="/assessment">
              <Button variant="primary" size="lg" className="px-8 py-4 text-base">
                Start Free 10-Case Assessment →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
