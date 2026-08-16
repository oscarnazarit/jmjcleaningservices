'use client';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ServiceTabs } from '@/components/services/ServiceTabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/app/text';

export default function ServiceClient() {
  const { language } = useLanguage();
  const text = copy[language].services;

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: 'url("/services_pic.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />
        <div className="container relative mx-auto max-w-6xl px-2 pb-20 pl-2 pt-12 md:pb-28 md:pt-16 lg:pb-36 lg:pt-20">
          <div className="flex h-full flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
            <div className="order-2 max-w-xl flex-1 md:order-1">
              <Badge className="mb-5 bg-[rgb(86,155,221)] text-base font-semibold uppercase tracking-wide text-[rgb(17,39,77)]">
                {text.hero_badge}
              </Badge>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[rgb(17,39,77)] md:text-5xl lg:text-6xl dark:text-[#D4D4D4]">
                {text.hero_slogan1}
                <br />
                <span style={{ color: 'rgb(86,155,221)' }}>{text.hero_slogan2}</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-[rgb(17,39,77)] md:text-xl dark:text-[#D4D4D4]">
                {text.hero_description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'bg-[rgb(86,155,221)] text-white dark:text-[#D4D4D4] dark:hover:text-[#D4D4D4]'
                  )}
                >
                  {text.quote_button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ServiceTabs />
      </section>
    </>
  );
}
