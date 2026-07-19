'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { CircleAlertIcon, CircleCheckIcon, CircleDashedIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Home',
    href: '/',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

export default function Navbar() {
  return (
    <header className="flex w-full justify-center px-4 py-4">
      <NavigationMenu className="w-full max-w-5xl justify-center">
        <div className="flex items-center gap-24">
          <Image src="/jmj-logo.png" alt="Logo" width={64} height={64} className="shrink-0" />
          <NavigationMenuList className="flex items-center gap-4">
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
        </div>
      </NavigationMenu>
    </header>
  );
}
