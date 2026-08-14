'use client';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BuildingIcon, HouseIcon, PackageOpen, PaintBucket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/app/text';
import { cn } from '@/lib/utils';

const serviceIconMap = [HouseIcon, BuildingIcon, PackageOpen, PaintBucket];

export default function HomePageContent() {
  const { language } = useLanguage();
  const text = copy[language].homepage;

  const services = [
    {
      title: text.services_cards[0].service_name,
      description: text.services_cards[0].service_description,
      href: '/services#residential',
      icon: serviceIconMap[0],
    },
    {
      title: text.services_cards[1].service_name,
      description: text.services_cards[1].service_description,
      href: '/services#commercial',
      icon: serviceIconMap[1],
    },
    {
      title: text.services_cards[2].service_name,
      description: text.services_cards[2].service_description,
      href: '/services#move',
      icon: serviceIconMap[2],
    },
    {
      title: text.services_cards[3].service_name,
      description: text.services_cards[3].service_description,
      href: '/services#deep',
      icon: serviceIconMap[3],
    },
  ];

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: 'url("/placeholder.jpeg")',
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
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'border border-[#D4D4D4] bg-[rgb(86,155,221)] text-white dark:border-[#D4D4D4] dark:text-[#D4D4D4] dark:hover:text-[#D4D4D4]'
                  )}
                >
                  {text.services_button}
                </Link>
              </div>
            </div>
            <div className="order-1 shrink-0 md:order-2">
              <Image
                src="/jmj-logo.png"
                alt="JMJ Cleaning Services Logo"
                width={315}
                height={315}
                className="rounded-2xl object-contain shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <Badge className="mb-4 text-sm font-semibold uppercase tracking-wide">
              {text.services_badge}
            </Badge>
            <h2 className="text-3xl font-bold md:text-4xl">{text.services_heading}</h2>
            <p className="mx-auto mt-3 max-w-xl font-medium">{text.services_description}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group ring-2 ring-[rgb(89,153,204)] transition-colors hover:bg-[rgb(17,39,77)]/10"
                >
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg ring-2 ring-[rgb(89,153,204)] transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
                      <p className="text-sm font-semibold leading-relaxed dark:text-[#D4D4D4]">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      className="mt-auto flex items-center gap-1 text-sm font-semibold text-[rgb(17,39,77)] transition-colors hover:text-[rgb(17,39,77)] dark:text-[#D4D4D4] dark:hover:text-[#D4D4D4]"
                    >
                      {language === 'en' ? 'Learn more' : 'Más información'}{' '}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="mt-8 text-center text-sm font-medium">
            {language === 'en' ? 'View all services' : 'Ver todos los servicios'}{' '}
            <Link
              href="/services"
              className="font-medium underline underline-offset-4 transition-opacity hover:opacity-75"
            >
              {language === 'en' ? 'here.' : 'aquí.'}
            </Link>{' '}
          </p>
        </div>
      </section>
    </>
  );
}
