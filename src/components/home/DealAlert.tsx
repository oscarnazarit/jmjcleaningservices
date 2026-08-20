'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/app/text';

const SESSION_STORAGE_KEY = 'jmj-special-offer-seen';

function subscribeToOfferSession(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === SESSION_STORAGE_KEY) {
      callback();
    }
  };

  window.addEventListener('storage', handleStorage);
  return () => window.removeEventListener('storage', handleStorage);
}

function getOfferSessionSnapshot() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.sessionStorage.getItem(SESSION_STORAGE_KEY) === 'true';
}

function getOfferSessionServerSnapshot() {
  return false;
}

export default function DealAlert() {
  const { language } = useLanguage();
  const text = copy[language].homepage;
  const hasSeenOffer = useSyncExternalStore(
    subscribeToOfferSession,
    getOfferSessionSnapshot,
    getOfferSessionServerSnapshot
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (hasSeenOffer) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    }, 250);

    return () => window.clearTimeout(timer);
  }, [hasSeenOffer]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  if (!isOpen && !hasSeenOffer) {
    return null;
  }

  return (
    <>
      {!isOpen && hasSeenOffer && (
        <button
          type="button"
          onClick={handleOpen}
          className="fixed bottom-5 right-5 z-40 rounded-full bg-[rgb(86,155,221)] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[rgb(72,136,200)] focus:outline-none focus:ring-2 focus:ring-[rgb(86,155,221)] focus:ring-offset-2 hover:cursor-pointer"
          aria-label={text.offer_reopen}
        >
          {text.offer_reopen}
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 backdrop-blur-sm sm:p-4"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-[min(90vw,52rem)] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl dark:border-slate-700 dark:bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 hover:cursor-pointer"
              aria-label={text.offer_close}
            >
              <X className="h-4 w-4" />
            </Button>

            <h2 className="px-3 pb-3 pt-2 text-center text-xl font-bold text-[rgb(17,39,77)] sm:text-2xl dark:text-white">
              {text.offer_title}
            </h2>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
              <div className="relative mx-auto max-h-[75vh] w-full max-w-full overflow-hidden rounded-xl">
                <Image
                  src={language === 'en' ? '/popup-img-en.png' : '/popup-img-sp.png'}
                  alt="JMJ Cleaning Services September special offer"
                  width={1200}
                  height={1500}
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 900px"
                  className="h-auto max-h-[75vh] w-full object-contain"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center gap-4">
              <Link href="/contact" className="w-full">
                <Button className="w-full rounded-full bg-[rgb(86,155,221)] px-8 py-4 text-base font-bold text-white transition hover:bg-[rgb(72,136,200)]">
                  {text.offer_cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
