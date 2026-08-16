import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'JMJ Cleaning Services - Contact Us',
  description: 'Get in touch with JMJ Cleaning Services for all your cleaning needs.',
};

export default function ContactPage() {
  return <ContactClient />;
}
