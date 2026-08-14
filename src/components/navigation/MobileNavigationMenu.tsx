import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, PhoneIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { companyPhoneNumber } from '@/app/constants';
import { copy } from '@/app/text';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/navigation/LanguageSelector';

export default function MobileNavigationMenu() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const links = copy[language].navbar;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md text-[rgb(17,39,77)] transition hover:bg-[rgb(86,155,221)]/10 hover:text-[rgb(86,155,221)]">
        <MenuIcon className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 sm:w-80">
        <SheetHeader className="text-center">
          <SheetTitle className="mt-1 text-center text-lg font-bold tracking-tight">
            JMJ Cleaning Services
          </SheetTitle>
        </SheetHeader>
        <div className="px-4 text-sm text-[rgb(17,39,77)]">
          <LanguageSelector />
        </div>
        <nav className="flex h-full flex-col gap-4 pt-2">
          <div className="px-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgb(86,155,221)]">
              {language === 'en' ? 'Explore' : 'Explorar'}
            </p>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="bg-[rgb(86,155,221)]/5 p-4 text-center text-lg font-semibold text-[rgb(17,39,77)] transition-all hover:bg-[rgb(86,155,221)]/35 hover:text-[rgb(17,39,77)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <SheetFooter className="flex-col items-stretch gap-2 pt-4">
          <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgb(86,155,221)]">
            {language === 'en' ? 'Quick contact' : 'Contacto rápido'}
          </p>
          <Link
            href={`tel:+1-${companyPhoneNumber}`}
            className={cn(buttonVariants({ variant: 'default' }), 'bg-[rgb(86,155,221)] text-lg')}
          >
            <span className="flex flex-row gap-2">
              {language === 'en' ? 'Call now' : 'Llamar ahora'}{' '}
              <PhoneIcon width={'5'} height={'5'} className="m-auto" />
            </span>
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={cn(buttonVariants({ variant: 'default' }), 'bg-[rgb(86,155,221)] text-lg')}
          >
            {language === 'en' ? 'Get a free quote' : 'Solicitar cotización gratuita'}
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
