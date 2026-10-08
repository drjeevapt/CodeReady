import { describe, it, expect } from 'vitest';
import { verifyRazorpaySignature, verifyRazorpayWebhookSignature } from '../lib/payments/razorpay';
import crypto from 'crypto';

describe('Payments & Razorpay Verification Tests', () => {
  const testSecret = 'test_secret_1234567890';
  const orderId = 'order_test_98765';
  const paymentId = 'pay_test_12345';

  it('validates authentic HMAC-SHA256 signatures', () => {
    const validSignature = crypto
      .createHmac('sha256', testSecret)
      .update(`${orderId}|${paymentId}`)
      .digest('hex');

    const result = verifyRazorpaySignature(orderId, paymentId, validSignature, testSecret);
    expect(result).toBe(true);
  });

  it('rejects forged payment signatures', () => {
    const forgedSignature = 'forged_fake_signature_abc123';
    const result = verifyRazorpaySignature(orderId, paymentId, forgedSignature, testSecret);
    expect(result).toBe(false);
  });

  it('validates authentic webhook signatures', () => {
    const payload = JSON.stringify({ event: 'payment.captured' });
    const validSig = crypto
      .createHmac('sha256', testSecret)
      .update(payload)
      .digest('hex');

    const result = verifyRazorpayWebhookSignature(payload, validSig, testSecret);
    expect(result).toBe(true);
  });
});
