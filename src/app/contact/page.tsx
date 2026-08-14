'use client';

import { useState } from 'react';
import ContactForm from '@/components/contact/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/app/text';

export default function ContactPage() {
  const { language } = useLanguage();
  const text = copy[language].contact;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="mt-4 text-3xl font-bold">{text.header}</h1>
      <p className="px-2 text-lg text-muted-foreground">{text.description}</p>

      <div className="relative mt-6 flex justify-center px-4">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-[rgb(17,39,77)] shadow-sm backdrop-blur-sm transition hover:bg-white dark:border-slate-700 dark:bg-slate-950/70 dark:text-white"
          aria-label={text.quote_checklist_title}
          aria-expanded={isOpen}
        >
          <span className="text-[rgb(86,155,221)]">?</span>
          {text.quote_checklist_title}
        </button>

        {isOpen && (
          <div className="absolute left-1/2 top-full z-20 mt-3 w-[min(90vw,24rem)] -translate-x-1/2 rounded-xl border border-slate-200 bg-white/95 p-4 text-left shadow-xl backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/95">
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-sm font-medium text-[rgb(17,39,77)] dark:text-white">
                {text.quote_checklist_title}
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                aria-label="Close quote checklist"
              >
                ×
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              {text.quote_checklist_description}
            </p>

            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {text.recommended_fields.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[rgb(86,155,221)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ContactForm />
    </div>
  );
}
