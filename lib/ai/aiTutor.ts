export interface AITutorContext {
  caseTitle: string;
  clinicalDocumentation: string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  code: string;
  codingConcept: string;
  explanation: string;
  commonMistake: string;
  userReasoning?: string;
  userQuery?: string;
}

export interface AITutorResponse {
  message: string;
  disclaimer: string;
  conceptHighlights: string[];
  suggestedFollowUps: string[];
}

export const AI_TUTOR_DISCLAIMER =
  'AI explanations are educational and should not replace official coding guidelines or professional coding review.';

/**
 * Generates an educational tutoring explanation based on official ICD-10-CM guidelines and case context.
 */
export async function generateAITutorResponse(context: AITutorContext): Promise<AITutorResponse> {
  const provider = process.env.LLM_PROVIDER || 'mock';

  // If Gemini API Key is provided
  if (provider === 'gemini' && process.env.GEMINI_API_KEY) {
    try {
      const response = await callGeminiAPI(context);
      return response;
    } catch (err) {
      console.warn('Gemini API call failed, falling back to educational tutor engine:', err);
    }
  }

  // If OpenAI API Key is provided
  if (provider === 'openai' && process.env.OPENAI_API_KEY) {
    try {
      const response = await callOpenAIAPI(context);
      return response;
    } catch (err) {
      console.warn('OpenAI API call failed, falling back to educational tutor engine:', err);
    }
  }

  // Default robust educational response generator
  return generateDeterministicTutorResponse(context);
}

function generateDeterministicTutorResponse(context: AITutorContext): AITutorResponse {
  const {
    caseTitle,
    userAnswer,
    correctAnswer,
    code,
    codingConcept,
    explanation,
    commonMistake,
    userQuery,
  } = context;

  const highlights = [
    `Official ICD-10-CM Principle: ${codingConcept}`,
    `Supported Code: ${code}`,
    `Documentation Rule: Always code the physician documentation without manufacturing unstated conditions.`,
  ];

  const followUps = [
    'How do I avoid coding associated symptoms when a definitive diagnosis exists?',
    'What documentation is required to assign laterality digits in ICD-10-CM?',
    'How do subsequent encounter (D) and sequela (S) 7th characters differ?',
  ];

  let body = '';

  if (userQuery && userQuery.trim().length > 0) {
    body = `**Medical Coding Tutor Review — ${caseTitle}**\n\n` +
      `Regarding your question: "${userQuery}"\n\n` +
      `In medical coding, your primary objective is to reflect the precise clinical documentation rather than making clinical inferences.\n\n` +
      `**Key Takeaways for this Case:**\n` +
      `1. **The Supported Code:** The correct code is **${code}** (${correctAnswer}).\n` +
      `2. **Why this matters:** ${explanation}\n` +
      `3. **Common Pitfall to Avoid:** ${commonMistake}\n\n` +
      `Always check the official Tabular List and Alphabetic Index for instructional notes such as "Code Also", "Excludes1", and "Excludes2".`;
  } else {
    body = `**Medical Coding Tutor Review — ${caseTitle}**\n\n` +
      `Let's break down the coding logic for this encounter:\n\n` +
      `• **Your Answer:** ${userAnswer}\n` +
      `• **Best Supported Answer:** ${correctAnswer} (Code: ${code})\n\n` +
      `### Core Concept: ${codingConcept}\n` +
      `${explanation}\n\n` +
      `### Why this mistake commonly happens:\n` +
      `${commonMistake}\n\n` +
      `**Remember:** In real-world audits, assigning unsupported codes or overlooking explicit laterality/aftercare rules leads to claim denials and audit scrutiny.`;
  }

  return {
    message: body,
    disclaimer: AI_TUTOR_DISCLAIMER,
    conceptHighlights: highlights,
    suggestedFollowUps: followUps,
  };
}

async function callGeminiAPI(context: AITutorContext): Promise<AITutorResponse> {
  const apiKey = process.env.GEMINI_API_KEY;
  const prompt = `You are an expert Medical Coding Educator for CodeReady SaaS.
Help a learner understand why their coding choice on an ICD-10-CM case was incorrect or how to improve their coding judgment.

STRICT CONSTRAINTS:
1. Explain the official ICD-10-CM coding guideline and why the documentation dictates the correct code (${context.code}).
2. Do not invent coding guidelines.
3. Be encouraging, clinical, and precise.
4. Point back to specific elements of the documentation: "${context.clinicalDocumentation}".
5. Disclose that this is educational advice.

CASE CONTEXT:
Case Title: ${context.caseTitle}
Question: ${context.question}
User's Selected Answer: ${context.userAnswer}
Correct Answer: ${context.correctAnswer} (${context.code})
Coding Concept: ${context.codingConcept}
Explanation: ${context.explanation}
Common Mistake: ${context.commonMistake}
User Query / Reasoning: ${context.userQuery || context.userReasoning || 'Why was my answer wrong?'}`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`Gemini API error: ${res.statusText}`);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

  return {
    message: text || generateDeterministicTutorResponse(context).message,
    disclaimer: AI_TUTOR_DISCLAIMER,
    conceptHighlights: [
      `Official ICD-10-CM Guideline: ${context.codingConcept}`,
      `Verified Code: ${context.code}`,
    ],
    suggestedFollowUps: [
      'How does outpatient coding handle rule-out conditions?',
      'When should aftercare Z-codes be sequenced as primary?',
    ],
  };
}

async function callOpenAIAPI(context: AITutorContext): Promise<AITutorResponse> {
  const apiKey = process.env.OPENAI_API_KEY;
  const prompt = `You are an expert Medical Coding Educator for CodeReady SaaS.
Explain the ICD-10-CM coding reasoning for this case:
Case: ${context.caseTitle}
Documentation: ${context.clinicalDocumentation}
User Answer: ${context.userAnswer}
Correct Answer: ${context.correctAnswer} (${context.code})
Guideline: ${context.codingConcept}
Explanation: ${context.explanation}`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2,
    }),
  });

  if (!res.ok) {
    throw new Error(`OpenAI API error: ${res.statusText}`);
  }

  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content || '';

  return {
    message: text || generateDeterministicTutorResponse(context).message,
    disclaimer: AI_TUTOR_DISCLAIMER,
    conceptHighlights: [
      `Official ICD-10-CM Guideline: ${context.codingConcept}`,
      `Verified Code: ${context.code}`,
    ],
    suggestedFollowUps: [
      'How does outpatient coding handle rule-out conditions?',
      'When should aftercare Z-codes be sequenced as primary?',
    ],
  };
}
