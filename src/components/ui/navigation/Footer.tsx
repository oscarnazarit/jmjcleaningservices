import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 text-zinc-400">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] gap-y-10 gap-x-12 md:gap-x-16 lg:gap-x-24">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit group">
              <div className="flex h-30 w-30 items-center justify-center rounded">
                <Image
                  src="/logo-icon.png"
                  alt="JMJ Cleaning Services Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-base tracking-tight leading-none text-[#494848] dark:text-[#D4D4D4]">
                JMJ
                <span
                  className="block text-xs font-semibold tracking-widest uppercase"
                  //   style={{ color: palette.text.primary }}
                >
                  Cleaning Services
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-[#D4D4D4]">
              Professional cleaning services for homes and businesses. We provide top-notch cleaning
              solutions tailored to your needs, ensuring a spotless environment every time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-semibold text-sm mb-4 uppercase tracking-widest"
              //   style={{ color: palette.text.primary }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: 'Deep Cleaning', href: '/services#deep-cleaning' },
                { label: 'Regular Cleaning', href: '/services#regular-cleaning' },
                { label: 'Move-in/Move-out', href: '/services#move-in-move-out' },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors text-[#636363] dark:text-[#D4D4D4] hover:text-[#C79B3A] dark:hover:text-[#C79B3A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-semibold text-sm mb-4 uppercase tracking-widest"
              //   style={{ color: palette.text.primary }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone
                  className="h-4 w-4 mt-0.5 shrink-0"
                  //   style={{ color: palette.text.primary }}
                />
                <span className="text-[#494848] dark:text-[#D4D4D4]">515-123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-[#494848] dark:text-[#D4D4D4]">
                  jmjcleaningservices@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  className="h-4 w-4 mt-0.5 shrink-0"
                  //   style={{ color: palette.text.primary }}
                />
                <span className="text-[#494848] dark:text-[#D4D4D4]">Des Moines, IA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-zinc-600 dark:text-[#D4D4D4]">
          <p>© {new Date().getFullYear()} JMJ Cleaning Services LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#C79B3A] dark:hover:text-[#C79B3A]"
            >
              Privacy Policy
            </Link>
            <p>Licensed &amp; Insured</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
