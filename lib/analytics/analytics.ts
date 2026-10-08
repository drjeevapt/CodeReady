'use client';

export type EventName =
  | 'landing_view'
  | 'signup_started'
  | 'signup_completed'
  | 'login_completed'
  | 'assessment_started'
  | 'case_viewed'
  | 'case_submitted'
  | 'assessment_completed'
  | 'practice_started'
  | 'practice_completed'
  | 'pricing_viewed'
  | 'checkout_started'
  | 'payment_success'
  | 'payment_failed'
  | 'ai_tutor_opened';

export function trackEvent(eventName: EventName, properties?: Record<string, any>) {
  try {
    const payload = {
      event: eventName,
      properties: {
        ...properties,
        timestamp: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
      },
    };

    // Client-side telemetry log
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics: ${eventName}]`, payload.properties);
    }

    // PostHog or browser event integration
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture(eventName, properties);
    }
  } catch (err) {
    // Fail silently so analytics never interrupts user journey
  }
}
