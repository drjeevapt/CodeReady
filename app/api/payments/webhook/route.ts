import { NextResponse } from 'next/server';
import { verifyRazorpayWebhookSignature } from '@/lib/payments/razorpay';

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-razorpay-signature') || '';

    const isValid = verifyRazorpayWebhookSignature(rawBody, signature);
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid webhook signature' },
        { status: 400 }
      );
    }

    const payload = JSON.parse(rawBody || '{}');
    const event = payload.event;

    switch (event) {
      case 'payment.captured':
      case 'subscription.charged':
        break;
      case 'payment.failed':
        break;
      default:
        break;
    }

    return NextResponse.json({ status: 'ok', received: true });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Webhook processing exception' },
      { status: 500 }
    );
  }
}
