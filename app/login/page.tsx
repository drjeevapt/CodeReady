'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Activity, AlertCircle, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useApp } from '../../lib/context/AppContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }

    setIsLoading(true);
    try {
      await login(email);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err?.message || 'Login failed. Please verify credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemoLogin = async (demoEmail: string) => {
    setIsLoading(true);
    try {
      await login(demoEmail);
      router.push('/dashboard');
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
            Log In to CodeReady
          </h1>
          <p className="text-xs sm:text-sm text-content-secondary mt-1">
            Access your assessments, practice scores, and AI tutor.
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-content-primary mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-content-primary">
                Password
              </label>
              <button
                type="button"
                onClick={() => alert('For this demo build, enter any password or use the 1-click test buttons below.')}
                className="text-[11px] text-teal hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
            />
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
              Log In
            </Button>
          </div>
        </form>

        {/* 1-Click Fast Demo Logins */}
        <div className="mt-6 pt-5 border-t border-slate-200">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block text-center mb-3">
            Quick 1-Click Test Access
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('fresher.learner@codeready.health')}
              className="text-xs text-left p-2.5 rounded-lg border border-slate-200 hover:border-teal hover:bg-teal-50/40 transition-colors flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-teal shrink-0" />
              <div>
                <strong className="block text-navy-950 font-semibold">Learner</strong>
                <span className="text-[10px] text-slate-500">Fresher Account</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemoLogin('admin@codeready.health')}
              className="text-xs text-left p-2.5 rounded-lg border border-slate-200 hover:border-navy-800 hover:bg-navy-50 transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-navy-900 shrink-0" />
              <div>
                <strong className="block text-navy-950 font-semibold">Admin</strong>
                <span className="text-[10px] text-slate-500">Content Lead</span>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-content-secondary">
          Don&apos;t have an account yet?{' '}
          <Link href="/signup" className="text-teal font-semibold hover:underline">
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}
