import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans dark:bg-black items-center">
      <h1 className="text-3xl font-bold mt-4">Contact Us</h1>
      <p className="text-lg text-muted-foreground px-2">
        Contact us for a free quote or to learn more about our services.
      </p>
      <ContactForm />
    </div>
  );
}
