import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const bullets = [
    'Professional cleaning services for homes and businesses.',
    'Tailored cleaning solutions to meet your specific needs.',
    // 'Experienced and trained cleaning staff.',
    'Eco-friendly and safe cleaning products.',
  ];
  const displayValues = [
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We are committed to providing consistent and dependable cleaning services.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality',
      description: 'Our team is dedicated to delivering high-quality cleaning results every time.',
    },
    {
      icon: CheckCircle2,
      title: 'Customer Satisfaction',
      description:
        "We prioritize our clients' satisfaction and strive to exceed their expectations.",
    },
    {
      icon: CheckCircle2,
      title: 'Trustworthiness',
      description:
        "We prioritize our clients' satisfaction and strive to exceed their expectations.",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans dark:bg-black items-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-muted-foreground">Learn more about our company and what we do.</p>
      <div className="flex flex-col">
        {/* Story section — image + bio */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Photo */}
              <div className="lg:col-span-2 my-auto">
                <div
                  className="relative overflow-hidden rounded-2xl border"
                  style={{ aspectRatio: '4/5' }}
                >
                  <Image
                    src="/about_pic.PNG"
                    alt="Owner of JMJ Cleaning Services"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                <div className="flex flex-row gap-1">
                  {/* name */}
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">Nayeli Nazarit</h2>
                  {/* title of position */}
                  <h3 className="text-2xl md:text-3xl font-semibold leading-tight my-auto italic">
                    - Owner & Founder
                  </h3>
                </div>

                <div className="flex flex-col gap-2 text-base font-medium leading-relaxed">
                  <p>
                    Hi, I&apos;m the owner of <b>JMJ Cleaning Services LLC</b>, proudly born and
                    raised in Des Moines, Iowa. At 25 years old, I&apos;ve built this company on the
                    values that matter most to me—hard work, integrity, and treating every space
                    with the same care and attention I would give my own.
                  </p>
                  <p>
                    Outside of work, I enjoy traveling, spending time with family and friends, and
                    attending church. Those experiences have shaped who I am and inspire the way I
                    serve others—with kindness, respect, and a commitment to excellence. My goal is
                    simple: provide dependable, high-quality cleaning services that leave every
                    customer with peace of mind and a space they can truly enjoy.
                  </p>
                  <p>
                    At JMJ Cleaning Services LLC, our slogan is &quot;Joyful, Meticulous, and Just
                    Clean.&quot; Those three words reflect the standard I strive to bring to every
                    job. Whether it&apos;s a one-time deep clean or recurring service, you can count
                    on careful attention to detail, reliable service, and a positive attitude every
                    step of the way.
                  </p>
                  <p>
                    Thank you for considering JMJ Cleaning Services LLC. I look forward to helping
                    you keep your home or business clean, fresh, and welcoming.
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 mt-2">
                  {bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-semibold">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-[#050505]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'bg-[rgb(86,155,221)] font-bold text-base text-white'
                  )}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-4">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4 font-semibold uppercase text-sm tracking-wide">
                What We Stand For
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Professional Cleaning Services with a Personal Touch
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {displayValues.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-xl ring-2 ring-[rgb(86,155,221)] hover:bg-[rgb(17,39,77)]/10 p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-2 ring-[rgb(86,155,221)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{title}</h3>
                    <p className="text-sm font-medium leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
