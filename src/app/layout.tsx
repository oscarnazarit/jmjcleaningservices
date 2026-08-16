import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'JMJ Cleaning Services LLC',
  description:
    'JMJ Cleaning Services LLC is a professional cleaning company that provides top-notch cleaning services for residential and commercial properties. Our team of experienced cleaners is dedicated to delivering exceptional results and ensuring customer satisfaction.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navbar />
          <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans dark:bg-black">
            <main className="flex w-full flex-col bg-white dark:bg-black items-center">
              {children}
              <Analytics />
            </main>
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
