'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/app/text';
import { companyEmail, companyPhoneNumber } from '@/app/constants';

const LAST_UPDATED = 'July 25, 2026';

export default function PrivacyPolicyContent() {
  const { language } = useLanguage();
  const text = copy[language].privacy;

  return (
    <div className="flex flex-col">
      <section className="border-b py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <Badge className="mb-4 font-medium uppercase text-xs tracking-wide">
            {text.legal_badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{text.title}</h1>
          <p className="text-sm">
            {text.updated} {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 flex flex-col gap-10 leading-relaxed">
          <p>{text.intro}</p>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold">{text.info_title}</h2>
            <p>{text.info_intro}</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {text.info_list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{text.info_note}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold">{text.use_title}</h2>
            <p>{text.use_intro}</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {text.use_list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{text.use_note}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold">{text.share_title}</h2>
            <p>{text.share_intro}</p>
            <p>{text.share_note}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold">{text.security_title}</h2>
            <p>{text.security_intro}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold">{text.choices_title}</h2>
            <p>{text.choices_intro}</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              {text.choices_list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{text.choices_note}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold">{text.children_title}</h2>
            <p>{text.children_intro}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold">{text.changes_title}</h2>
            <p>{text.changes_intro}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold">{text.contact_title}</h2>
            <p>{text.contact_intro}</p>
            <ul className="flex flex-col gap-1">
              <li>{text.business_name}</li>
              <li>
                {text.phone_label}{' '}
                <a
                  href={`tel:+1-${companyPhoneNumber}`}
                  className="hover:opacity-75 transition-opacity"
                >
                  {companyPhoneNumber}
                </a>
              </li>
              <li>
                {text.email_label}{' '}
                <a href={`mailto:${companyEmail}`} className="hover:opacity-75 transition-opacity">
                  {companyEmail}
                </a>
              </li>
              <li>{text.location}</li>
            </ul>
            <p className="pt-2">
              {text.contact_form_prefix}{' '}
              <Link
                href="/contact"
                className="underline underline-offset-4 font-medium hover:opacity-75 transition-opacity"
              >
                {text.contact_form_link}
              </Link>
              {text.contact_form_suffix}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
