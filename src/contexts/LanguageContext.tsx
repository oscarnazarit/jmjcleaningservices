'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react';

export type Language = 'en' | 'es';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const STORAGE_KEY = 'jmj-language';
const STORAGE_EVENT = 'jmj-language-change';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'en' || saved === 'es' ? saved : 'en';
}

function subscribeToLanguage(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      callback();
    }
  };

  const handleCustomEvent = () => callback();

  window.addEventListener('storage', handleStorage);
  window.addEventListener(STORAGE_EVENT, handleCustomEvent);

  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(STORAGE_EVENT, handleCustomEvent);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language | null>(
    subscribeToLanguage,
    getStoredLanguage,
    () => null
  );

  const setLanguage = useCallback((nextLanguage: Language) => {
    if (typeof window === 'undefined') return;

    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(STORAGE_EVENT));
  }, []);

  const value = useMemo<LanguageContextValue | undefined>(() => {
    if (language === null) {
      return undefined;
    }

    return {
      language,
      setLanguage,
    };
  }, [language, setLanguage]);

  if (language === null || value === undefined) {
    return null;
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }

  return context;
}
