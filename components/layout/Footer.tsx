import React from 'react';
import Link from 'next/link';
import { Activity, ShieldCheck, HeartPulse } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 text-xs border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 rounded-lg bg-teal flex items-center justify-center text-navy-950 font-bold">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-base font-bold tracking-tight">CodeReady</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Practice real-world medical coding. Know when you&apos;re job-ready.
              Bridging the gap between classroom guidelines and real-world clinical documentation assessments.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-teal-400">
              <ShieldCheck className="w-4 h-4 text-teal" />
              <span>Specialized in ICD-10-CM Orthopedics & Rehabilitation</span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/assessment" className="hover:text-teal transition-colors">
                  10-Case Assessment
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-teal transition-colors">
                  Practice Library
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-teal transition-colors">
                  Pro Membership (₹699/mo)
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-teal transition-colors">
                  Readiness Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Compliance & Safety
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-300">Synthetic EHR Records</span>
              </li>
              <li>
                <span className="text-slate-300">HIPAA Compliant Simulation</span>
              </li>
              <li>
                <span className="text-slate-300">ICD-10-CM FY 2025/2026 Guidelines</span>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-teal transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="pt-8 border-t border-navy-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-slate-400 text-center md:text-left leading-relaxed">
            <strong>Educational Disclaimer:</strong> CodeReady is an educational and assessment preparation platform.
            All clinical cases are synthetic and de-identified. Content must be verified against current official coding guidelines before production healthcare billing.
          </p>
          <div className="flex items-center gap-4 shrink-0 text-slate-400">
            <span>© {new Date().getFullYear()} CodeReady Health SaaS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
