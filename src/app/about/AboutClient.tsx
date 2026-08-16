'use client';

import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/app/text';

export default function AboutClient() {
  const { language } = useLanguage();
  const text = copy[language].about;

  const displayValues = [
    {
      icon: CheckCircle2,
      title: text.values_cards[0].card_name,
      description: text.values_cards[0].card_description,
    },
    {
      icon: CheckCircle2,
      title: text.values_cards[1].card_name,
      description: text.values_cards[1].card_description,
    },
    {
      icon: CheckCircle2,
      title: text.values_cards[2].card_name,
      description: text.values_cards[2].card_description,
    },
    {
      icon: CheckCircle2,
      title: text.values_cards[3].card_name,
      description: text.values_cards[3].card_description,
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="mt-4 text-3xl font-bold">{text.header}</h1>
      <div className="flex flex-col">
        <section className="pt-4">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
              <div className="my-auto lg:col-span-2">
                <div
                  className="relative overflow-hidden rounded-2xl border"
                  style={{ aspectRatio: '4/5' }}
                >
                  <Image
                    src="/about_pic.PNG"
                    alt="Owner of JMJ Cleaning Services"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:col-span-3">
                <div className="flex flex-row gap-1">
                  <h2 className="text-3xl font-bold leading-tight md:text-4xl">Nayeli Nazarit</h2>
                  <h3 className="my-auto text-2xl font-semibold italic leading-tight md:text-3xl">
                    - {text.owner_title}
                  </h3>
                </div>

                <div
                  className="flex flex-col gap-2 text-base font-medium leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: text.para_one + text.para_two + text.para_three + text.para_four,
                  }}
                />

                <ul className="mt-2 flex flex-col gap-2.5">
                  {text.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-semibold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#050505]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 pt-16">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <Badge className="mb-4 text-sm font-semibold uppercase tracking-wide">
                {text.values_badge}
              </Badge>
              <h2 className="text-3xl font-bold md:text-4xl">{text.values_header}</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {displayValues.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-xl p-6 ring-2 ring-[rgb(86,155,221)] hover:bg-[rgb(17,39,77)]/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-2 ring-[rgb(86,155,221)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold">{title}</h3>
                    <p className="text-sm font-medium leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'mb-4 bg-[rgb(86,155,221)] py-8 text-base font-bold text-white'
          )}
        >
          {copy[language].homepage.quote_button}
        </Link>
      </div>
    </div>
  );
}
