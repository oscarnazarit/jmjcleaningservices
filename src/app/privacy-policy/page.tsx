import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/privacy/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How JMJ Cleaning Services collects, uses, and protects the information you share through our website and contact form.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
