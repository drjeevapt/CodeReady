import { NextResponse } from 'next/server';
import { verifyRazorpaySignature } from '@/lib/payments/razorpay';

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, error: 'Missing payment signature verification tokens.' },
        { status: 400 }
      );
    }

    const isValid = verifyRazorpaySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Payment verification failed. Signatures do not match.',
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified and Pro subscription activated.',
      subscription: {
        userId,
        plan: 'pro',
        status: 'active',
        paymentId: razorpay_payment_id,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: 'Payment could not be completed. Your account has not been charged.',
      },
      { status: 500 }
    );
  }
}
