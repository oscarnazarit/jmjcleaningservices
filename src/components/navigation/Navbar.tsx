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

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header className="flex w-full justify-center px-4 py-4">
      <NavigationMenu className="w-full max-w-5xl">
        <div className="flex w-full items-center justify-between md:justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-icon.png" alt="Logo" width={128} height={128} className="shrink-0" />
          </Link>
          {isMobile ? (
            <MobileNavigationMenu />
          ) : (
            <NavigationMenuList className="flex items-center gap-4 justify-end">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={<Link href="/">Home</Link>}
                />
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={<Link href="/services">Services</Link>}
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={<Link href="/about">About</Link>}
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={<Link href="/contact">Contact</Link>}
                />
              </NavigationMenuItem>
            </NavigationMenuList>
          )}
        </div>
      </NavigationMenu>
    </header>
  );
}
