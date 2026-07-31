import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, HouseIcon, BuildingIcon, PackageOpen, PaintBucket } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const services = [
    {
      title: 'Residential Cleaning',
      description:
        'Comprehensive cleaning services for homes, including regular maintenance and deep cleaning.',
      icon: HouseIcon,
      href: '/services#residential-cleaning',
    },
    {
      title: 'Commercial Cleaning',
      description:
        'Professional cleaning solutions for offices, retail spaces, and other commercial establishments.',
      icon: BuildingIcon,
      href: '/services#commercial-cleaning',
    },
    {
      title: 'Move-in/Move-out Cleaning',
      description:
        'Thorough cleaning services for moving in or out of a property, ensuring a fresh start.',
      icon: PackageOpen,
      href: '/services#move-in-move-out',
    },
    {
      title: 'Deep Cleaning',
      description:
        'Intensive cleaning services that target hard-to-reach areas and stubborn dirt for a pristine environment.',
      icon: PaintBucket,
      href: '/services#deep-cleaning',
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden w-full">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: 'url("/placeholder.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />
        <div className="relative container mx-auto max-w-6xl pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-28 lg:pb-36 pl-2 px-2">
          <div className="h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            <div className="max-w-xl flex-1 order-2 md:order-1">
              <Badge className="mb-5 font-semibold tracking-wide uppercase text-base bg-[rgb(86,155,221)] text-[rgb(17,39,77)]">
                100% Satisfaction Guaranteed
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-[rgb(17,39,77)] dark:text-[#D4D4D4]">
                Clean Spaces.
                <br />
                <span style={{ color: 'rgb(86,155,221)' }}>Better Places.</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl text-[rgb(17,39,77)] dark:text-[#D4D4D4]">
                Professional cleaning services for homes and businesses. We provide top-notch
                cleaning solutions tailored to your needs, ensuring a spotless environment every
                time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'bg-[rgb(86,155,221)] text-white dark:text-[#D4D4D4] dark:hover:text-[#D4D4D4]'
                  )}
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'border border-[#D4D4D4] bg-[rgb(86,155,221)] text-white dark:border-[#D4D4D4] dark:text-[#D4D4D4] dark:hover:text-[#D4D4D4]'
                  )}
                >
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 order-1 md:order-2">
              <Image
                src="/jmj-logo.png"
                alt="JMJ Cleaning Services Logo"
                width={315}
                height={315}
                className="object-contain rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services preview */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 font-semibold uppercase text-sm tracking-wide">What We Do</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-3 font-medium max-w-xl mx-auto">
              Professional cleaning services for homes and businesses. We provide top-notch cleaning
              solutions tailored to your needs, ensuring a spotless environment every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="transition-colors group ring-2 ring-[rgb(89,153,204)] hover:bg-[rgb(17,39,77)]/10"
                >
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg ring-2 ring-[rgb(89,153,204)] transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm font-semibold leading-relaxed dark:text-[#D4D4D4]">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      className="text-sm font-semibold flex items-center gap-1 mt-auto transition-colors text-[rgb(17,39,77)] hover:text-[rgb(17,39,77)] dark:text-[#D4D4D4] dark:hover:text-[#D4D4D4]"
                    >
                      Learn more <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-sm font-medium text-center mt-8">
            View all services{' '}
            <Link
              href="/services"
              className="underline underline-offset-4 font-medium hover:opacity-75 transition-opacity"
            >
              here.
            </Link>{' '}
          </p>
        </div>
      </section>
    </>
  );
}
