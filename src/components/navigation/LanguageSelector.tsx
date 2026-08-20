'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

type LanguageSelectorProps = {
  className?: string;
  label?: string;
  selectClassName?: string;
};

export default function LanguageSelector({
  className,
  label,
  selectClassName,
}: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const resolvedLabel = label ?? (language === 'en' ? 'Language' : 'Idioma');

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 rounded border border-dashed border-[rgb(17,39,77)]/15 bg-[rgb(86,155,221)]/2 px-3 py-2 text-[rgb(17,39,77)] text-sm',
        className
      )}
    >
      {resolvedLabel ? <span className="font-medium">{resolvedLabel}</span> : null}
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as 'en' | 'es')}
        className={cn(
          'rounded border border-[rgb(17,39,77)]/20 bg-white px-2 py-1 text-sm font-medium text-[rgb(17,39,77)] outline-none',
          selectClassName
        )}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}
