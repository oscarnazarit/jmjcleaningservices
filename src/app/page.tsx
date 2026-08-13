import type { Metadata } from 'next';
import HomePageContent from '@/components/home/HomePageContent';

export const metadata: Metadata = {
  title: 'JMJ Cleaning Services LLC',
  description:
    'JMJ Cleaning Services LLC is a professional cleaning company that provides top-notch cleaning services for residential and commercial properties. Our team of experienced cleaners is dedicated to delivering exceptional results and ensuring customer satisfaction.',
};

export default function Home() {
  return <HomePageContent />;
}
