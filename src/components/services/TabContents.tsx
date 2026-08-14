import type { Service } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TabContents({ service }: { service: Service }) {
  const { language } = useLanguage();

  return (
    <div className="my-8 flex flex-col items-center justify-center gap-8 px-2 py-4 md:flex-row md:items-center md:justify-center md:px-4">
      <Image
        src={service.image}
        alt={service.label}
        width={440}
        height={360}
        className="flex min-h-[180px] items-center justify-center rounded-lg border border-dashed border-[rgb(86,155,221)]/60 bg-[rgb(86,155,221)]/10 text-sm font-medium text-[rgb(17,39,77)]"
      />

      <div className="flex max-w-[560px] flex-col items-center text-center md:items-start md:text-left">
        <h3 className="text-xl font-semibold tracking-tight text-[rgb(17,39,77)]">
          {service.label}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
        <p className="mt-2 text-sm font-medium text-[rgb(86,155,221)]">
          {service.shortDescription}
        </p>
        {(service.includes.length > 0 || service.optionalServices.length > 0) && (
          <div className="mt-4 grid w-full gap-4 md:grid-cols-2">
            {service.includes.length > 0 && (
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[rgb(17,39,77)]">
                  {language === 'en' ? 'Includes' : 'Incluye'}
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[rgb(86,155,221)]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.optionalServices.length > 0 && (
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[rgb(17,39,77)]">
                  {language === 'en' ? 'Add-ons' : 'Addicionales'}
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.optionalServices.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[rgb(86,155,221)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'bg-[rgb(86,155,221)] text-white dark:text-[#D4D4D4] dark:hover:text-[#D4D4D4] mt-4 px-4'
          )}
        >
          {language === 'en' ? 'Request Quote' : 'Solicitar Cotización'}
        </Link>
      </div>
    </div>
  );
}
