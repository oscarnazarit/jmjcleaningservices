'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { companyName, companyEmail, companyPhoneNumber, serviceTypes } from '@/app/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/app/text';

export default function Footer() {
  const { language } = useLanguage();
  const footerText = copy[language].footer;

  return (
    <footer className="border-t border-zinc-800 text-zinc-400">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] md:gap-x-16 lg:gap-x-24">
          <div className="flex flex-col gap-4">
            <Link href="/" className="group flex w-fit items-center gap-2">
              <div className="flex h-30 w-30 items-center justify-center rounded">
                <Image
                  src="/logo-icon.png"
                  alt="JMJ Cleaning Services Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold leading-none tracking-tight text-[#494848] dark:text-[#D4D4D4]">
                JMJ
                <span className="mt-1 block text-xs font-semibold uppercase tracking-widest">
                  Cleaning Services
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-[#D4D4D4]">
              {footerText.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">Services</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {serviceTypes.map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={`/services#${link.name}`}
                    className="text-[#636363] transition-colors hover:text-[rgb(17,39,77)] dark:text-[#D4D4D4] dark:hover:text-[rgb(17,39,77)]"
                  >
                    {footerText.services[index] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="text-[#494848] dark:text-[#D4D4D4]">{companyPhoneNumber}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="text-[#494848] dark:text-[#D4D4D4]">{companyEmail}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="text-[#494848] dark:text-[#D4D4D4]">Des Moines, IA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-zinc-800 pt-6 text-xs text-zinc-600 dark:text-[#D4D4D4] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[rgb(17,39,77)] dark:hover:text-[rgb(17,39,77)]"
            >
              Privacy Policy
            </Link>
            <p>Licensed &amp; Insured</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
