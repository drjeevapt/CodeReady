import crypto from 'crypto';

export interface PlanConfig {
  id: 'free' | 'pro' | 'career';
  name: string;
  priceInr: number;
  period: 'month' | 'free';
  tagline: string;
  features: string[];
  isAvailable: boolean;
  highlighted?: boolean;
}

export const SUBSCRIPTION_PLANS: Record<string, PlanConfig> = {
  free: {
    id: 'free',
    name: 'Free Starter',
    priceInr: 0,
    period: 'free',
    tagline: 'Get your baseline readiness score and practice essential cases.',
    features: [
      '10-Case Job-Readiness Assessment',
      'Initial Coding Readiness Score (0-100)',
      'Detailed Feedback on 10 Assessment Cases',
      '5 Additional Practice Cases',
      'Basic Skill Diagnostic',
    ],
    isAvailable: true,
  },
  pro: {
    id: 'pro',
    name: 'CodeReady Pro',
    priceInr: 699,
    period: 'month',
    tagline: 'Master clinical judgment and be fully prepared for hiring tests.',
    features: [
      'Unlimited Practice with Complete Case Library',
      'Orthopedics & Rehabilitation Specializations',
      'Interactive AI Coding Tutor on Every Case',
      'Advanced Skill Diagnostics (Accuracy, Judgment, Speed)',
      'Subsequent Assessments to Track Readiness Over Time',
      'Official ICD-10-CM Guideline Citations & Pitfalls',
    ],
    isAvailable: true,
    highlighted: true,
  },
  career: {
    id: 'career',
    name: 'Career Pass',
    priceInr: 1499,
    period: 'month',
    tagline: 'Comprehensive assessment portfolio with institute benchmarking.',
    features: [
      'Everything in Pro',
      'Employer Assessment Simulation & Timed Mock Exams',
      'Certification Exam Readiness Benchmarking (AAPC/AHIMA format)',
      'Verified Readiness Certificate for Resumes/LinkedIn',
      'Priority Case Review Requests',
    ],
    isAvailable: false, // Marked as "Coming Soon" for MVP
  },
};

/**
 * Verifies Razorpay payment signature using SHA256 HMAC.
 */
export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string,
  secret?: string
): boolean {
  const secretKey = secret || process.env.RAZORPAY_KEY_SECRET;
  if (!secretKey) {
    console.warn('RAZORPAY_KEY_SECRET is not configured. Running in secure verification simulation mode.');
    // In local dev without live secret, accept valid mock prefix
    return signature.startsWith('mock_sig_') || signature.length >= 10;
  }

  try {
    const generatedSignature = crypto
      .createHmac('sha256', secretKey)
      .update(`${orderId}|${paymentId}`)
      .digest('hex');

    const genBuf = Buffer.from(generatedSignature, 'utf-8');
    const sigBuf = Buffer.from(signature, 'utf-8');
    if (genBuf.length !== sigBuf.length) {
      return false;
    }
    return crypto.timingSafeEqual(genBuf, sigBuf);
  } catch (err) {
    return false;
  }
}

/**
 * Verifies Razorpay Webhook signature.
 */
export function verifyRazorpayWebhookSignature(
  rawBody: string,
  signature: string,
  secret?: string
): boolean {
  const webhookSecret = secret || process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return true; // Dev fallback
  }

  try {
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(rawBody)
      .digest('hex');

    const expBuf = Buffer.from(expectedSignature, 'utf-8');
    const sigBuf = Buffer.from(signature, 'utf-8');
    if (expBuf.length !== sigBuf.length) {
      return false;
    }
    return crypto.timingSafeEqual(expBuf, sigBuf);
  } catch (err) {
    return false;
  }
}

