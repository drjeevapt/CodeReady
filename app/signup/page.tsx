'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Activity, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useApp } from '../../lib/context/AppContext';
import { ExperienceLevel } from '../../lib/types';
import { trackEvent } from '../../lib/analytics/analytics';

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>('Fresher');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (!/\d/.test(password)) {
      setError('Password must contain at least one number.');
      return;
    }

    setIsLoading(true);
    try {
      await signup(fullName, email, experienceLevel);
      // Route directly to Assessment Introduction
      router.push('/assessment');
    } catch (err: any) {
      setError(err?.message || 'Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="bg-white border border-surface-border rounded-2xl p-6 sm:p-10 shadow-card w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-navy-900 text-teal flex items-center justify-center mx-auto mb-3 shadow-subtle">
            <Activity className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-navy-950 tracking-tight">
            Create Your Free Account
          </h1>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            Start your 10-case readiness assessment in Orthopedics & Rehabilitation.
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="priya@example.com"
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1.5">
              Password (Min 8 chars, 1 number)
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
            />
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1.5">
              Experience Level
            </label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value as ExperienceLevel)}
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
            >
              <option value="Student">Student (In Training)</option>
              <option value="Fresher">Fresher (Certified / Seeking 1st Job)</option>
              <option value="<1 year">&lt;1 year Experience</option>
              <option value="1–3 years">1–3 years Experience</option>
              <option value="3+ years">3+ years Experience</option>
            </select>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full"
            >
              Start Free Assessment
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center text-xs text-content-secondary">
          Already have an account?{' '}
          <Link href="/login" className="text-teal font-semibold hover:underline">
            Log In here
          </Link>
        </div>
      </div>
    </div>
  );
}
