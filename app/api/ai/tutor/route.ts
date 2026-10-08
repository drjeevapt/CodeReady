import { NextResponse } from 'next/server';
import { generateAITutorResponse } from '@/lib/ai/aiTutor';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const tutorResponse = await generateAITutorResponse(body);
    return NextResponse.json({ success: true, data: tutorResponse });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Failed to generate AI tutor explanation.' },
      { status: 500 }
    );
  }
}
