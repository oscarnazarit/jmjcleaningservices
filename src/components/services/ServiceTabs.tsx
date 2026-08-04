'use client';

import { useEffect, useMemo, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { serviceTypes, type Service } from '@/app/constants';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/lib/use-mobile';
import TabContents from './TabContents';

const services = serviceTypes;

const getServiceNameFromHash = (hash: string) => {
  const normalized = hash.replace('#', '').toLowerCase();

  if (!normalized) {
    return null;
  }

  const match = services.find((service) => {
    const labelSlug = service.label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const nameSlug = service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    return normalized === nameSlug || normalized === labelSlug;
  });

  return match?.name ?? null;
};

const getHashForServiceName = (serviceName: string) => {
  const service = services.find((item) => item.name === serviceName);

  if (!service) {
    return serviceName;
  }

  return service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
};

export function ServiceTabs() {
  const isMobile = useIsMobile();
  const [activeService, setActiveService] = useState<string>(services[0]?.name ?? 'residential');
  const [startIndex, setStartIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [isResolvingHash, setIsResolvingHash] = useState(true);

  const visibleServices = useMemo(() => {
    const endIndex = Math.min(startIndex + 3, services.length);
    return services.slice(startIndex, endIndex);
  }, [startIndex]);

  const selectService = (serviceName: string) => {
    setActiveService(serviceName);

    if (typeof window !== 'undefined') {
      const hash = getHashForServiceName(serviceName);
      window.history.replaceState(null, '', `#${hash}`);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const syncServiceFromHash = () => {
      const serviceFromHash = getServiceNameFromHash(window.location.hash);

      if (serviceFromHash) {
        setActiveService(serviceFromHash);
      }

      setIsResolvingHash(false);
    };

    const handleHashChange = () => {
      syncServiceFromHash();
    };

    const frameId = window.requestAnimationFrame(() => {
      setHasMounted(true);
      handleHashChange();
    });

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const activeServiceData =
    services.find((service) => service.name === activeService) ?? services[0];

  const renderedService = hasMounted ? activeServiceData : services[0];
  const shouldShowContent = hasMounted && !isResolvingHash;

  const goToPrevious = () => {
    setStartIndex((current) => (current === 0 ? 3 : 0));
  };

  const goToNext = () => {
    setStartIndex((current) => (current === 0 ? 3 : 0));
  };

  if (!hasMounted || isResolvingHash) {
    return (
      <div className="px-4 py-6 md:hidden w-full">
        <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-[rgb(86,155,221)]/20 bg-[rgb(86,155,221)]/10 text-sm font-medium text-[rgb(17,39,77)]">
          Loading service...
        </div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="px-4 py-6 md:hidden w-full">
        <div className="flex items-center justify-between gap-2 w-full">
          <button
            type="button"
            onClick={goToPrevious}
            disabled={startIndex === 0}
            className="rounded-full border border-[rgb(17,39,77)]/20 bg-white p-2 text-[rgb(17,39,77)] shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Show previous services"
          >
            ←
          </button>

          <div className="flex flex-1 items-end justify-center gap-2 overflow-hidden">
            {visibleServices.map((service: Service, index: number) => {
              const isActive = service.name === activeService;
              const isFirst = index === 0;

              return (
                <button
                  key={service.name}
                  type="button"
                  onClick={() => selectService(service.name)}
                  className={cn(
                    'flex flex-col items-center gap-1 rounded-xl border px-3 py-3 text-sm font-semibold transition-all duration-200',
                    isActive
                      ? 'scale-105 border-[rgb(86,155,221)] bg-[rgb(86,155,221)] text-white shadow-md'
                      : 'border-[rgb(17,39,77)]/15 bg-white text-[rgb(17,39,77)]',
                    isFirst && !isActive && 'opacity-70'
                  )}
                >
                  <span>{service.label}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={goToNext}
            disabled={startIndex >= services.length - 3}
            className="rounded-full border border-[rgb(17,39,77)]/20 bg-white p-2 text-[rgb(17,39,77)] shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Show next services"
          >
            →
          </button>
        </div>

        <div className="mt-4">
          {shouldShowContent ? (
            <TabContents service={renderedService} />
          ) : (
            <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-[rgb(86,155,221)]/20 bg-[rgb(86,155,221)]/10 text-sm font-medium text-[rgb(17,39,77)]">
              Loading service...
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden md:block w-screen max-w-none -mx-4 sm:-mx-6 lg:-mx-8">
      <Tabs value={activeService} onValueChange={selectService} className="w-full">
        <TabsList
          variant="line"
          className="w-full justify-between gap-0 rounded-none px-4 sm:px-6 lg:px-8"
        >
          {services.map((service: Service) => (
            <TabsTrigger
              key={service.name}
              value={service.name}
              className="flex-1 min-w-0 rounded-none px-3 py-3"
            >
              {service.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {services.map((service: Service) => (
          <TabsContent
            key={service.name}
            value={service.name}
            className="w-full px-4 sm:px-6 lg:px-8"
          >
            <TabContents service={service} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
