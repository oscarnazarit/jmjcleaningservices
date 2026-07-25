import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileNavigationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md text-[rgb(17,39,77)] transition hover:bg-[rgb(86,155,221)]/10 hover:text-[rgb(86,155,221)]">
        <MenuIcon className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 sm:w-80">
        <SheetHeader className="text-left">
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-[rgb(17,39,77)] transition hover:bg-[rgb(86,155,221)]/10 hover:text-[rgb(86,155,221)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
