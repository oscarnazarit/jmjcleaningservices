import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'JMJ Cleaning Services - About Us',
  description: 'Learn more about JMJ Cleaning Services and our commitment to excellence.',
};

export default function AboutPage() {
  return <AboutClient />;
}
