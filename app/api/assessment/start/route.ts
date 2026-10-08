import { NextResponse } from 'next/server';
import { INITIAL_CASES } from '@/lib/data/initialCases';
import { CaseItem, PublicCaseItem } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const userId = body.userId || 'guest_user';

    // Return sanitized public cases (no answer keys or internal notes exposed!)
    const publicCases: PublicCaseItem[] = INITIAL_CASES.filter(
      (c: CaseItem) => c.status === 'Published'
    ).map((c: CaseItem) => ({
      id: c.id,
      case_number: c.case_number,
      title: c.title,
      specialty: c.specialty,
      difficulty: c.difficulty,
      skill: c.skill,
      clinical_documentation: c.clinical_documentation,
      question: c.question,
      options: c.options,
      target_time_seconds: c.target_time_seconds,
      code_set_year: c.code_set_year,
    }));

    return NextResponse.json({
      success: true,
      assessmentId: `asmt_${Date.now()}`,
      startedAt: new Date().toISOString(),
      timeLimitSeconds: 900,
      totalCases: publicCases.length,
      cases: publicCases,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'We couldn’t start this assessment. Please refresh and try again.' },
      { status: 500 }
    );
  }
}
