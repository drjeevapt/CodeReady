'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Activity,
  Shield,
  User,
  LogOut,
  Sparkles,
  BookOpen,
  LayoutDashboard,
  CheckCircle2,
  Menu,
  X,
  CreditCard,
  Settings,
} from 'lucide-react';
import { useApp } from '../../lib/context/AppContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export function Navbar() {
  const { user, subscription, logout, switchRole } = useApp();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const isPro = subscription?.plan === 'pro' && subscription?.status === 'active';
  const isAdmin = user?.role === 'admin';

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/assessment', label: 'Assessment', icon: Activity },
    { href: '/practice', label: 'Practice Library', icon: BookOpen },
    { href: '/pricing', label: 'Pricing', icon: CreditCard },
  ];

  if (isAdmin) {
    navLinks.push({ href: '/admin', label: 'Admin Hub', icon: Settings });
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-navy-900 flex items-center justify-center text-teal shadow-subtle group-hover:bg-navy-950 transition-colors">
                <Activity className="w-5 h-5 text-teal" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-navy-900 leading-none">
                  Code<span className="text-teal">Ready</span>
                </span>
                <span className="text-[10px] font-medium text-content-secondary tracking-wider uppercase mt-0.5">
                  Job-Readiness SaaS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-teal-50 text-teal-800 font-semibold'
                        : 'text-content-secondary hover:text-navy-900 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-teal/80" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Header: User / Auth / Pro Badge / Role Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {user ? (
              <>
                {/* Pro / Free Badge */}
                {isPro ? (
                  <Badge variant="teal" size="md" className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-teal fill-teal/20" />
                    <span>PRO Plan</span>
                  </Badge>
                ) : (
                  <Link href="/pricing">
                    <Badge variant="neutral" size="md" className="hover:bg-teal-50 hover:text-teal cursor-pointer">
                      Free Starter • Upgrade
                    </Badge>
                  </Link>
                )}

                {/* Role Switcher for QA/Demo convenience */}
                <div className="relative">
                  <button
                    onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-surface-border text-xs font-medium text-content-secondary hover:bg-slate-50"
                  >
                    <Shield className="w-3.5 h-3.5 text-teal" />
                    <span>Role: <strong className="capitalize text-content-primary">{user.role}</strong></span>
                  </button>

                  {roleDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-elevated border border-surface-border p-1.5 z-50">
                      <div className="px-2 py-1 text-[11px] font-semibold text-slate-400 uppercase">
                        Switch View Role
                      </div>
                      <button
                        onClick={() => {
                          switchRole('learner');
                          setRoleDropdownOpen(false);
                        }}
                        className="w-full text-left px-2 py-1.5 text-xs rounded hover:bg-slate-50 text-content-primary"
                      >
                        Learner (Standard)
                      </button>
                      <button
                        onClick={() => {
                          switchRole('admin');
                          setRoleDropdownOpen(false);
                        }}
                        className="w-full text-left px-2 py-1.5 text-xs rounded hover:bg-slate-50 text-content-primary"
                      >
                        Admin (Full Control)
                      </button>
                      <button
                        onClick={() => {
                          switchRole('content_reviewer');
                          setRoleDropdownOpen(false);
                        }}
                        className="w-full text-left px-2 py-1.5 text-xs rounded hover:bg-slate-50 text-content-primary"
                      >
                        Content Reviewer
                      </button>
                    </div>
                  )}
                </div>

                {/* User Profile & Logout */}
                <div className="flex items-center gap-2 pl-2 border-l border-surface-border">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 text-xs font-medium text-navy-900 hover:text-teal"
                  >
                    <div className="w-7 h-7 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xs">
                      {user.full_name?.charAt(0) || 'U'}
                    </div>
                    <span className="max-w-[120px] truncate">{user.full_name}</span>
                  </Link>
                  <button
                    onClick={logout}
                    title="Log out"
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Log In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="primary" size="sm">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-content-secondary hover:text-navy-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-surface-border px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-content-primary hover:bg-slate-50 rounded-lg"
            >
              <link.icon className="w-4 h-4 text-teal" />
              <span>{link.label}</span>
            </Link>
          ))}

          <div className="pt-3 border-t border-surface-border flex flex-col gap-2">
            {user ? (
              <>
                <div className="flex items-center justify-between text-xs text-content-secondary px-2">
                  <span>{user.full_name} ({user.role})</span>
                  <button onClick={logout} className="text-rose-600 font-medium">
                    Log out
                  </button>
                </div>
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full">
                    Upgrade to Pro (₹699/mo)
                  </Button>
                </Link>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" size="sm" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
