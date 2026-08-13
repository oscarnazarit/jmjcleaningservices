'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import MobileNavigationMenu from './MobileNavigationMenu';
import { useIsMobile } from '@/lib/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';
import { copy } from '@/app/text';
import LanguageSelector from '@/components/navigation/LanguageSelector';

export default function Navbar() {
  const isMobile = useIsMobile();

  const { language } = useLanguage();
  const text = copy[language].navbar;

  return (
    <header className="flex w-full justify-center px-4 py-4">
      <NavigationMenu className="w-full max-w-5xl">
        <div className="flex w-full items-center justify-between gap-4 md:justify-center md:gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-icon.png" alt="Logo" width={128} height={128} className="shrink-0" />
          </Link>
          <h1 className="text-lg font-bold tracking-tight text-[rgb(17,39,77)] md:text-xl">
            JMJ Cleaning Services
          </h1>
          {isMobile ? (
            <MobileNavigationMenu />
          ) : (
            <div className="ml-4 flex items-center gap-5">
              <NavigationMenuList className="flex items-center gap-5 justify-end">
                {text.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      render={<Link href={link.href}>{link.label}</Link>}
                    />
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <LanguageSelector
                className="min-w-[150px] px-2 py-1.5"
                selectClassName="text-xs"
                label=""
              />
            </div>
          )}
        </div>
      </NavigationMenu>
    </header>
  );
}
