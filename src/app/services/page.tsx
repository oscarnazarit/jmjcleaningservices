import type { Metadata } from 'next';
import ServiceClient from './ServiceClient';

export const metadata: Metadata = {
  title: 'JMJ Cleaning Services - Our Services',
  description: 'Professional cleaning services for residential and commercial spaces.',
};

export default function ServicesPage() {
  return <ServiceClient />;
}
