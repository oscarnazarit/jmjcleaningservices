import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
	const bullets = [
		"Professional cleaning services for homes and businesses.",
		"Tailored cleaning solutions to meet your specific needs.",
		"Experienced and trained cleaning staff.",
		"Eco-friendly and safe cleaning products.",
	];
	const displayValues = [
		{
			icon: Clock,
			title: "Reliability",
			description:
				"We are committed to providing consistent and dependable cleaning services.",
		},
		{
			icon: CheckCircle2,
			title: "Quality",
			description:
				"Our team is dedicated to delivering high-quality cleaning results every time.",
		},
		{
			icon: CheckCircle2,
			title: "Customer Satisfaction",
			description:
				"We prioritize our clients' satisfaction and strive to exceed their expectations.",
		},
		{
			icon: CheckCircle2,
			title: "Trustworthiness",
			description:
				"We prioritize our clients' satisfaction and strive to exceed their expectations.",
		},
	];

	return (
		<div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans dark:bg-black items-center">
			<h1 className="text-3xl font-bold mb-4">About Us</h1>
			<p className="text-lg text-muted-foreground">
				Learn more about our company and what we do.
			</p>
			<div className="flex flex-col">
				{/* Story section — image + bio */}
				<section className="py-16 md:py-24">
					<div className="container mx-auto max-w-6xl px-4 md:px-6">
						<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
							{/* Photo */}
							<div className="lg:col-span-2">
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
							<div className="lg:col-span-3 flex flex-col gap-6">
								<div>
									<p
										className="text-sm font-semibold uppercase tracking-widest mb-2"
									>
										Our Story
									</p>
									{/* name */}
									<h2
										className="text-3xl md:text-4xl font-bold leading-tight"
									>
										Nayeli Nazarit
									</h2>
									{/* title of position */}
									<h2
										className="text-2xl md:text-3xl font-semibold leading-tight"
									>
										Owner & Founder
									</h2>
								</div>

								<div
									className="flex flex-col gap-4 text-base font-medium leading-relaxed"
								>
									<p>This can be a paragraph about owner and how they got started. Can remove any text if necessary, but i think 3 paragraphs is a good amount.</p>
									<p>This can be a paragraph about the company&apos;s mission and values. Can remove any text if necessary, but i think 3 paragraphs is a good amount.</p>
									<p>This can be a paragraph about the company&apos;s history and achievements. Can remove any text if necessary, but i think 3 paragraphs is a good amount.</p>
								</div>

								<ul className="flex flex-col gap-2.5 mt-2">
									{bullets.map((item) => (
										<li
											key={item}
											className="flex items-start gap-2.5 text-sm font-semibold"
										>
											<CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-[#050505]" />
											{item}
										</li>
									))}
								</ul>

								<Button
									size="lg"
									className="bg-[rgb(86,155,221)] font-bold text-base"
								>
									<Link href="/contact">
										Get a Free Quote
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Values */}
				<section className="py-16 md:py-4">
					<div className="container mx-auto max-w-6xl px-4 md:px-6">
						<div className="text-center mb-12">
							<Badge
								className="mb-4 font-semibold uppercase text-sm tracking-wide"
							>
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
										<h3 className="font-bold mb-1">
											{title}
										</h3>
										<p
											className="text-sm font-medium leading-relaxed"
										>
											{description}
										</p>
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
