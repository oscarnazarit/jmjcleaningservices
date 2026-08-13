'use client';

import ContactForm from '@/components/contact/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/app/text';

export default function ContactPage() {
  const { language } = useLanguage();
  const text = copy[language].contact;

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="mt-4 text-3xl font-bold">{text.header}</h1>
      <p className="px-2 text-lg text-muted-foreground">{text.description}</p>
      <ContactForm />
    </div>
  );
}
