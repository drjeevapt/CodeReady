'use client';

import React, { useState } from 'react';
import {
  User,
  Mail,
  Shield,
  CreditCard,
  CheckCircle2,
  Sparkles,
  Save,
  Award,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { useApp } from '../../lib/context/AppContext';
import { ExperienceLevel, UserRole } from '../../lib/types';

export default function ProfilePage() {
  const { user, subscription, switchRole } = useApp();

  const [fullName, setFullName] = useState(user?.full_name || 'Medical Coder');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>(
    user?.experience_level || 'Fresher'
  );
  const [selectedRole, setSelectedRole] = useState<UserRole>(user?.role || 'learner');
  const [isSaved, setIsSaved] = useState(false);

  const isPro = subscription?.plan === 'pro' && subscription?.status === 'active';

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      switchRole(selectedRole);
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
          Your Profile &amp; Settings
        </h1>
        <p className="text-xs sm:text-sm text-content-secondary mt-1">
          Manage your account credentials, experience level, and subscription.
        </p>
      </div>

      {isSaved && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Profile preferences updated successfully.</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Form (2 Cols) */}
        <div className="md:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-base font-bold text-navy-950 mb-4 pb-2 border-b border-surface-border">
              Personal Details
            </h2>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-content-primary mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-content-primary mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  disabled
                  value={user?.email || 'learner@codeready.health'}
                  className="w-full text-sm bg-slate-100 border border-surface-border rounded-lg px-3.5 py-2.5 text-slate-500 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-content-primary mb-1">
                  Experience Level
                </label>
                <select
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value as ExperienceLevel)}
                  className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal"
                >
                  <option value="Student">Student (In Training)</option>
                  <option value="Fresher">Fresher (Seeking 1st Job)</option>
                  <option value="<1 year">&lt;1 year Experience</option>
                  <option value="1–3 years">1–3 years Experience</option>
                  <option value="3+ years">3+ years Experience</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-content-primary mb-1">
                  System Role (Demo Switcher)
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                  className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal"
                >
                  <option value="learner">Learner (Standard Coder)</option>
                  <option value="admin">Admin (Platform Lead)</option>
                  <option value="content_reviewer">Content Reviewer (Editor)</option>
                </select>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Switching to Admin or Content Reviewer grants access to the `/admin` case management suite.
                </span>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  leftIcon={<Save className="w-4 h-4" />}
                >
                  Save Profile Settings
                </Button>
              </div>
            </form>
          </Card>
        </div>

        {/* Right Subscription Card (1 Col) */}
        <div>
          <Card className="p-6 space-y-4">
            <h3 className="text-sm font-bold text-navy-950 pb-2 border-b border-surface-border flex items-center justify-between">
              <span>Subscription Status</span>
              {isPro ? (
                <Badge variant="teal" size="sm">PRO</Badge>
              ) : (
                <Badge variant="neutral" size="sm">FREE</Badge>
              )}
            </h3>

            {isPro ? (
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg text-teal-900 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-4 h-4 text-teal" />
                    <span>CodeReady Pro Active</span>
                  </div>
                  <p className="text-[11px] text-teal-800">
                    Unlimited case library, AI tutor, and continuous readiness tracking.
                  </p>
                </div>
                <div className="flex justify-between text-content-secondary">
                  <span>Billing Cycle</span>
                  <span>₹699 / month</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs">
                <p className="text-content-secondary">
                  You are currently on the Free Starter plan (limited to 5 practice cases).
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => window.location.href = '/pricing'}
                  className="w-full"
                >
                  Upgrade to Pro (₹699)
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
