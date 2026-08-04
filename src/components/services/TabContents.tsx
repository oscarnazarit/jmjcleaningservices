import type { Service } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function TabContents({ service }: { service: Service }) {
  return (
    <div className="my-8 flex flex-col items-center justify-center gap-8 px-2 py-4 md:flex-row md:items-center md:justify-center md:px-4">
      <Image
        src={service.image}
        alt={service.label}
        width={440}
        height={360}
        className="flex min-h-[180px] items-center justify-center rounded-lg border border-dashed border-[rgb(86,155,221)]/60 bg-[rgb(86,155,221)]/10 text-sm font-medium text-[rgb(17,39,77)]"
      />

      <div className="flex max-w-[480px] flex-col items-center text-center md:items-start md:text-left">
        <h3 className="text-xl font-semibold tracking-tight text-[rgb(17,39,77)]">
          {service.label}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
        <p className="mt-2 text-sm font-medium text-[rgb(86,155,221)]">
          {service.shortDescription}
        </p>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'bg-[rgb(86,155,221)] text-white dark:text-[#D4D4D4] dark:hover:text-[#D4D4D4] mt-4 px-4'
          )}
        >
          Request
        </Link>
      </div>
    </div>
  );
}
