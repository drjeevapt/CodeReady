'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { useApp } from '../../lib/context/AppContext';
import { trackEvent } from '../../lib/analytics/analytics';

export default function CheckoutPage() {
  const router = useRouter();
  const { user, upgradeSubscription } = useApp();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [upiId, setUpiId] = useState('');
  const [error, setError] = useState('');

  const handleRazorpayPayment = async () => {
    setIsProcessing(true);
    setError('');

    trackEvent('checkout_started', { plan: 'pro', amount: 699 });

    try {
      // Simulate real server-side signature verification workflow
      const mockOrderId = `order_${Date.now()}`;
      const mockPaymentId = `pay_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

      // Simulate network verification roundtrip
      await new Promise((resolve) => setTimeout(resolve, 1200));

      upgradeSubscription(mockPaymentId);
      router.push('/checkout/success');
    } catch (err: any) {
      setError('Payment could not be completed. Your account has not been charged.');
      trackEvent('payment_failed', { error: err?.message });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <Badge variant="teal" size="md">
          Secure Checkout
        </Badge>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
          Complete Your Pro Upgrade
        </h1>
        <p className="text-xs sm:text-sm text-content-secondary">
          256-bit SSL encrypted transaction via Razorpay Payments India.
        </p>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Payment Methods (2 Cols) */}
        <div className="md:col-span-2 space-y-5">
          <Card className="p-6 space-y-5">
            <h2 className="text-base font-bold text-navy-950 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-teal" />
              <span>Select Payment Method</span>
            </h2>

            {/* Method Tabs */}
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                  paymentMethod === 'upi'
                    ? 'border-teal bg-teal-50/50 text-teal-900 shadow-subtle'
                    : 'border-surface-border text-content-secondary hover:bg-slate-50'
                }`}
              >
                UPI (GPay / PhonePe)
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                  paymentMethod === 'card'
                    ? 'border-teal bg-teal-50/50 text-teal-900 shadow-subtle'
                    : 'border-surface-border text-content-secondary hover:bg-slate-50'
                }`}
              >
                Cards (Credit/Debit)
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('netbanking')}
                className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                  paymentMethod === 'netbanking'
                    ? 'border-teal bg-teal-50/50 text-teal-900 shadow-subtle'
                    : 'border-surface-border text-content-secondary hover:bg-slate-50'
                }`}
              >
                Net Banking
              </button>
            </div>

            {/* UPI Details */}
            {paymentMethod === 'upi' && (
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-semibold text-content-primary">
                  Enter UPI ID (VPA) or scan QR
                </label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="e.g. yourname@oksbi / 9876543210@paytm"
                  className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal"
                />
                <span className="text-[11px] text-slate-400 block">
                  A payment request will be sent to your UPI app.
                </span>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-content-primary mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="4111 2222 3333 4444"
                    className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-content-primary mb-1">
                      Expiry (MM/YY)
                    </label>
                    <input
                      type="text"
                      placeholder="12/28"
                      className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-content-primary mb-1">
                      CVV
                    </label>
                    <input
                      type="password"
                      placeholder="•••"
                      maxLength={4}
                      className="w-full text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'netbanking' && (
              <div className="space-y-3 pt-2 text-xs text-content-secondary">
                <p>Select your bank on the next step. Supported: HDFC, ICICI, SBI, Axis, Kotak, and 50+ banks.</p>
              </div>
            )}

            {/* Authorize Button */}
            <div className="pt-4 border-t border-slate-100">
              <Button
                variant="primary"
                size="lg"
                onClick={handleRazorpayPayment}
                isLoading={isProcessing}
                rightIcon={<Lock className="w-4 h-4" />}
                className="w-full text-base font-semibold shadow-elevated"
              >
                Pay ₹699 & Unlock CodeReady Pro
              </Button>
            </div>
          </Card>
        </div>

        {/* Order Summary (1 Col) */}
        <div className="space-y-4">
          <Card className="p-6 bg-slate-50/60 space-y-4">
            <h3 className="text-sm font-bold text-navy-950 pb-2 border-b border-surface-border">
              Order Summary
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-content-primary">
                <span>CodeReady Pro Membership</span>
                <span className="font-semibold">₹699.00</span>
              </div>
              <div className="flex justify-between text-content-secondary">
                <span>Billing Period</span>
                <span>Monthly (Recurring)</span>
              </div>
              <div className="flex justify-between text-content-secondary">
                <span>Taxes (GST Included)</span>
                <span>₹0.00</span>
              </div>
            </div>

            <div className="pt-3 border-t border-surface-border flex justify-between items-baseline font-bold">
              <span className="text-sm text-navy-950">Total Amount</span>
              <span className="text-xl text-teal">₹699</span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-surface-border text-[11px] text-content-secondary space-y-1.5">
              <div className="flex items-center gap-1.5 text-teal font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Pro Activation</span>
              </div>
              <p>Unlimited orthopedic cases, instant AI coding tutor, and verified readiness certificates.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
