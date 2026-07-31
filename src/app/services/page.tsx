import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden w-full">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: 'url("/services_pic.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />
        <div className="relative container mx-auto max-w-6xl pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-28 lg:pb-36 pl-2 px-2">
          <div className="h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            <div className="max-w-xl flex-1 order-2 md:order-1">
              <Badge className="mb-5 font-semibold tracking-wide uppercase text-base bg-[rgb(86,155,221)] text-[rgb(17,39,77)]">
                Services for Every Need
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-[rgb(17,39,77)] dark:text-[#D4D4D4]">
                Just Clean.
                <br />
                <span style={{ color: 'rgb(86,155,221)' }}>Just Right.</span>
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
                  Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
