'use client';

import React from 'react';
import Link from 'next/link';
import {
  Check,
  Sparkles,
  ShieldCheck,
  CreditCard,
  Zap,
  HelpCircle,
  Clock,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { SUBSCRIPTION_PLANS } from '../../lib/payments/razorpay';
import { useApp } from '../../lib/context/AppContext';

export default function PricingPage() {
  const { subscription, user } = useApp();
  const isPro = subscription?.plan === 'pro' && subscription?.status === 'active';

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <Badge variant="teal" size="md">
          Simple, Transparent Pricing
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
          Invest in Your Medical Coding Career
        </h1>
        <p className="text-sm sm:text-base text-content-secondary">
          No hidden fees. Unlimited clinical practice and AI tutoring to help you ace your next coding assessment.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Free Starter */}
        <Card className="p-6 sm:p-8 flex flex-col justify-between border-surface-border">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-navy-950">Free Starter</h3>
              <Badge variant="neutral" size="sm">Baseline</Badge>
            </div>
            <div className="mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-navy-950">₹0</span>
              <span className="text-xs text-content-secondary ml-1">/ forever</span>
            </div>
            <p className="text-xs text-content-secondary mb-6 leading-relaxed">
              Get your baseline readiness score and practice essential orthopedic cases.
            </p>

            <ul className="space-y-3 text-xs text-content-primary mb-8">
              {SUBSCRIPTION_PLANS.free.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Link href="/assessment">
              <Button variant="outline" size="md" className="w-full">
                Take Free Assessment
              </Button>
            </Link>
          </div>
        </Card>

        {/* Pro Plan (Highlighted) */}
        <Card className="p-6 sm:p-8 flex flex-col justify-between border-2 border-teal shadow-elevated relative bg-gradient-to-b from-teal-50/20 to-white">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Most Popular</span>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4 pt-1">
              <h3 className="text-lg font-bold text-navy-950">CodeReady Pro</h3>
              <Badge variant="teal" size="sm">Recommended</Badge>
            </div>
            <div className="mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-navy-950">₹699</span>
              <span className="text-xs text-content-secondary ml-1">/ month</span>
            </div>
            <p className="text-xs text-content-secondary mb-6 leading-relaxed">
              Master clinical judgment with unlimited cases and instant AI tutor explanations.
            </p>

            <ul className="space-y-3 text-xs text-content-primary mb-8">
              {SUBSCRIPTION_PLANS.pro.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {isPro ? (
              <div className="p-3 bg-teal-50 text-teal-900 border border-teal-200 rounded-lg text-xs font-semibold text-center">
                ✓ Currently Active on Pro
              </div>
            ) : (
              <Link href="/checkout">
                <Button variant="primary" size="lg" className="w-full shadow-elevated">
                  Upgrade to Pro (₹699/mo)
                </Button>
              </Link>
            )}
          </div>
        </Card>

        {/* Career Pass (Coming Soon) */}
        <Card className="p-6 sm:p-8 flex flex-col justify-between border-surface-border bg-slate-50/50 opacity-80">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-700">Career Pass</h3>
              <Badge variant="warning" size="sm">Coming Soon</Badge>
            </div>
            <div className="mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-700">₹1,499</span>
              <span className="text-xs text-content-secondary ml-1">/ month</span>
            </div>
            <p className="text-xs text-content-secondary mb-6 leading-relaxed">
              Comprehensive assessment portfolio with hiring institute benchmarking and verified readiness certification.
            </p>

            <ul className="space-y-3 text-xs text-slate-600 mb-8">
              {SUBSCRIPTION_PLANS.career.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Button variant="secondary" size="md" disabled className="w-full">
              Coming Soon
            </Button>
          </div>
        </Card>
      </div>

      {/* Trust Guarantee Box */}
      <div className="bg-white border border-surface-border rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-navy-950">
              Zero Risk. Secure Payments via Razorpay.
            </h4>
            <p className="text-xs text-content-secondary mt-0.5">
              Supports UPI, Google Pay, PhonePe, Debit/Credit cards, and Net Banking. Cancel anytime with one click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
