'use client';

import React, { useEffect, useState } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

export interface TimerProps {
  startedAt: string;
  timeLimitSeconds: number;
  onExpire?: () => void;
}

export function Timer({ startedAt, timeLimitSeconds, onExpire }: TimerProps) {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(() => {
    const start = new Date(startedAt).getTime();
    const now = Date.now();
    const elapsed = Math.floor((now - start) / 1000);
    return Math.max(0, timeLimitSeconds - elapsed);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const start = new Date(startedAt).getTime();
      const now = Date.now();
      const elapsed = Math.floor((now - start) / 1000);
      const remaining = Math.max(0, timeLimitSeconds - elapsed);

      setSecondsRemaining(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        if (onExpire) {
          onExpire();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startedAt, timeLimitSeconds, onExpire]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const isLowTime = secondsRemaining <= 120; // under 2 minutes

  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-sm font-semibold transition-colors ${
        isLowTime
          ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
          : 'bg-white text-navy-900 border-surface-border'
      }`}
      role="timer"
      aria-live="polite"
    >
      {isLowTime ? (
        <AlertTriangle className="w-4 h-4 text-rose-600" />
      ) : (
        <Clock className="w-4 h-4 text-teal" />
      )}
      <span>{formatted}</span>
    </div>
  );
}
