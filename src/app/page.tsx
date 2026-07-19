import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col bg-white dark:bg-black">
        <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: 'url("/placeholder.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />
        <div className="relative container mx-auto max-w-6xl pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-28 lg:pb-36">
            <div className="h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              <div className="max-w-xl flex-1 order-2 md:order-1">
                <Badge
                  className="mb-5 font-semibold tracking-wide uppercase text-base bg-[rgb(86,155,221)] text-[rgb(17,39,77)]"
                >
                  100% Satisfaction Guaranteed
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-[rgb(17,39,77)] dark:text-[#D4D4D4]">
                  Clean Spaces.
                  <br />
                  <span style={{ color: 'rgb(86,155,221)' }}>Better Places.</span>
                </h1>
                <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl text-[rgb(17,39,77)] dark:text-[#D4D4D4]">
                  Professional cleaning services for homes and businesses. We provide top-notch cleaning solutions tailored to your needs, ensuring a spotless environment every time.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className=" bg-[rgb(86,155,221)] dark:text-[#D4D4D4] dark:hover:text-[#D4D4D4] font-semibold transition-colors"
                  >
                    <Link href="/contact">
                      Get a Free Quote
                    </Link>
                  </Button>
                  <Button
                    className="bg-[rgb(86,155,221)] border-[#D4D4D4] dark:border-[#D4D4D4] dark:text-[#D4D4D4] dark:hover:text-[#D4D4D4] font-semibold"
                  >
                    <Link href="/services">View Our Services</Link>
                  </Button>
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
      </main>
    </div>
  );
}
