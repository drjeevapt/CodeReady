import { NextResponse } from 'next/server';
import { SUBSCRIPTION_PLANS } from '@/lib/payments/razorpay';

export async function POST(req: Request) {
  try {
    const { planId = 'pro', userId } = await req.json();

    const plan = SUBSCRIPTION_PLANS[planId];
    if (!plan || !plan.isAvailable) {
      return NextResponse.json(
        { success: false, error: 'Invalid or unavailable plan selected.' },
        { status: 400 }
      );
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_mock123';
    const amountInPaise = plan.priceInr * 100;
    const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    return NextResponse.json({
      success: true,
      order: {
        id: orderId,
        amount: amountInPaise,
        currency: 'INR',
        receipt: `rcpt_${userId || 'guest'}_${Date.now()}`,
        keyId,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Could not create payment order.' },
      { status: 500 }
    );
  }
}
