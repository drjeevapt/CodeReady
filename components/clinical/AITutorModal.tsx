'use client';

import React, { useState } from 'react';
import {
  BrainCircuit,
  X,
  Send,
  Sparkles,
  AlertCircle,
  HelpCircle,
  BookOpen,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { generateAITutorResponse, AI_TUTOR_DISCLAIMER } from '../../lib/ai/aiTutor';
import { trackEvent } from '../../lib/analytics/analytics';

export interface AITutorModalProps {
  isOpen: boolean;
  onClose: () => void;
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
}

export function AITutorModal({
  isOpen,
  onClose,
  caseTitle,
  clinicalDocumentation,
  question,
  userAnswer,
  correctAnswer,
  code,
  codingConcept,
  explanation,
  commonMistake,
  userReasoning,
}: AITutorModalProps) {
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    {
      sender: 'ai',
      text: `Hello! I'm your CodeReady AI Coding Tutor for **${caseTitle}**.\n\nThe key concept for this case is **${codingConcept}**.\n\nHow can I help you break down the documentation or understand the official coding logic?`,
    },
  ]);
  const [query, setQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (userText?: string) => {
    const textToSend = userText || query;
    if (!textToSend.trim() || isGenerating) return;

    trackEvent('ai_tutor_opened', { caseTitle, query: textToSend });

    const newMessages = [...messages, { sender: 'user' as const, text: textToSend }];
    setMessages(newMessages);
    setQuery('');
    setIsGenerating(true);

    try {
      const response = await generateAITutorResponse({
        caseTitle,
        clinicalDocumentation,
        question,
        userAnswer,
        correctAnswer,
        code,
        codingConcept,
        explanation,
        commonMistake,
        userReasoning,
        userQuery: textToSend,
      });

      setMessages([
        ...newMessages,
        {
          sender: 'ai',
          text: response.message,
        },
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          sender: 'ai',
          text: 'I encountered an error retrieving the tutoring explanation. Remember the golden rule of medical coding: strictly code what the provider documented, ensuring laterality and guideline adherence.',
        },
      ]);
    } finally {
      setIsGenerating(false);
    }
  };

  const promptSuggestions = [
    'Why is my answer considered incorrect?',
    'What documentation phrase confirms the code?',
    'How do I remember this ICD-10-CM guideline?',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-elevated border border-surface-border w-full max-w-2xl max-h-[88vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="bg-navy-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-navy-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal/20 text-teal-300 flex items-center justify-center">
              <BrainCircuit className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>AI Coding Tutor</span>
                <span className="text-[10px] uppercase font-semibold bg-teal text-white px-2 py-0.5 rounded-full">
                  Educational
                </span>
              </h3>
              <p className="text-xs text-slate-300">Case: {caseTitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mandatory Disclaimer Callout */}
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-[11px] text-amber-900 flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>{AI_TUTOR_DISCLAIMER}</span>
        </div>

        {/* Chat / Tutoring Body */}
        <div className="p-4 sm:p-5 flex-1 overflow-y-auto space-y-3.5 bg-slate-50/50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[90%] rounded-xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  m.sender === 'user'
                    ? 'bg-teal text-white shadow-sm'
                    : 'bg-white border border-surface-border text-content-primary shadow-subtle'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {isGenerating && (
            <div className="flex items-center gap-2 text-xs text-content-secondary bg-white p-3 rounded-xl border border-surface-border w-fit">
              <span className="w-3.5 h-3.5 border-2 border-teal border-t-transparent rounded-full animate-spin" />
              <span>Analyzing ICD-10-CM guidelines and documentation...</span>
            </div>
          )}
        </div>

        {/* Prompt Suggestions */}
        <div className="p-3 bg-slate-100 border-t border-surface-border flex flex-wrap gap-1.5">
          {promptSuggestions.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-xs bg-white hover:bg-teal-50 hover:text-teal-800 text-content-secondary px-2.5 py-1 rounded-full border border-slate-200 transition-colors text-left flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-teal" />
              <span>{prompt}</span>
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-surface-border flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a question about this coding decision..."
            className="flex-1 text-sm bg-slate-50 border border-surface-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
          />
          <Button
            variant="primary"
            size="md"
            onClick={() => handleSend()}
            isLoading={isGenerating}
            rightIcon={<Send className="w-4 h-4" />}
          >
            Ask
          </Button>
        </div>
      </div>
    </div>
  );
}
