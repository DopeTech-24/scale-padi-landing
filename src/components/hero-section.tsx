"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function HeroSection() {
	const router = useRouter();
	const videoRef = useRef(null);

	// Scroll-based parallax for video
	const { scrollYProgress } = useScroll({
		target: videoRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<section
			id="hero"
			className="relative bg-[url('/images/hero-bg.svg')] bg-cover bg-center bg-[#F8F8F8] lg:h-[895px] w-full flex flex-col items-center gap-4 lg:pt-20 pt-10 px-4 lg:px-0 overflow-hidden"
		>
			<div className="top lg:w-[892px] flex flex-col items-center gap-6">
				{/* Avatars + Social Proof */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="avatars flex lg:flex-row flex-col items-center gap-2"
				>
					<Image
						src="/images/avatars.svg"
						alt="Avatars"
						width={95}
						height={24}
					/>
					<span className="text-[#878A93] text-[10px] lg:text-base text-center">
						Over 6500+ Experts & Business owners use us
					</span>
				</motion.div>

				{/* Headline with glow + typewriter */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="relative font-bold text-center text-2xl lg:text-[64px] text-[#1A1A1A] lg:leading-[91px]"
				>
					<span className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-linear-to-r from-[#1746A2] via-[#5BC0F8] to-[#A6E1FA] rounded-xl" />
					<Typewriter
						words={[
							"Powering Business Growth with Technology and Talent",
							"Unlock Expert Strategies to Scale Smart",
							"Your Growth Starts Here. Explore ScalePadi",
						]}
						cursor
						cursorStyle="|"
						typeSpeed={80}
						deleteSpeed={50}
						delaySpeed={1000}
						loop={true}
					/>
				</motion.h1>

				{/* Subheadline */}
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="text-xs md:text-sm text-center text-[#1A1A1A]"
				>
					Find talent from vetted pool, get AI-powered support, or let ScalePadi handle the entire hiring, all in one platform. 
				</motion.p>

				<motion.a
					href="https://forms.gle/9aMMdW8ruxjGr2647"
					target="_blank"
					rel="noopener noreferrer"
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					whileHover={{ scale: 1.02, boxShadow: "0px 16px 32px rgba(234, 88, 12, 0.32)" }}
					whileTap={{ scale: 0.98 }}
					className="group relative mt-1 flex w-full items-center justify-between gap-4 overflow-hidden rounded-2xl bg-linear-to-r from-[#F97316] via-[#EA580C] to-[#C2410C] px-4 py-3 text-left text-white shadow-[0_10px_24px_rgba(234,88,12,0.25)] transition-shadow sm:px-5"
				>
					<span className="absolute -right-10 -top-16 h-36 w-36 rounded-full bg-[#FDBA74]/35 blur-xl" />
					<span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
					<span className="relative flex min-w-0 items-center gap-3">
						<span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/20"><BriefcaseBusiness className="size-5" /></span>
						<span><span className="block text-sm font-bold sm:text-base">Hire a Sales Intern</span><span className="block text-[11px] text-orange-50 sm:text-xs">Grow your sales team with fresh, motivated talent.</span></span>
					</span>
					<span className="relative inline-flex shrink-0 items-center gap-1 rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#C2410C] transition-colors group-hover:bg-orange-50">Get started <ArrowRight className="size-4" /></span>
				</motion.a>

				{/* CTA Buttons */}
				<div className="buttons flex flex-wrap items-center gap-3 justify-center mt-4">

					<motion.button
						whileHover={{
							scale: 1.05,
							boxShadow: "0px 0px 12px #1746A2",
							filter: "blur(0.2px)",
						}}
						whileTap={{ scale: 0.95 }}
						className="flex font-semibold items-center gap-2 cursor-pointer bg-[#1746A2] text-white px-4 py-2 text-xs md:text-lg md:px-6 md:py-3 rounded-lg transition-all"
					>
						<Link
							href="https://business.scalepadi.com"
							target="_blank"
							className="flex font-semibold items-center gap-2"
						>
							Sign up as a business <ArrowRight />
						</Link>
					</motion.button>

					<motion.button
						whileHover={{
							scale: 1.05,
							boxShadow: "0px 0px 12px #5BC0F8",
							filter: "blur(0.2px)",
						}}
						whileTap={{ scale: 0.95 }}
						className="flex items-center gap-2 bg-transparent cursor-pointer text-[#1746A2] border border-[#1746A2] hover:bg-[#1746A2] hover:text-white px-4 py-2 text-xs md:text-lg md:px-6 md:py-3 rounded-lg transition-all"
					>
						<Link
							href="https://expert.scalepadi.com"
							target="_blank"
							className="flex font-semibold items-center gap-2"
						>
							Sign up as an expert <ArrowRight />
						</Link>
					</motion.button>
				</div>
			</div>

			{/* Scroll-synced Video with preload */}
			<motion.div
				ref={videoRef}
				style={{ y }}
				className="down w-full lg:w-[822px] mt-10 will-change-transform"
			>
				<motion.video
					src="/videos/hero-section.mp4"
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					poster="/images/video-fallback.jpg"
					className="rounded-xl w-full object-cover"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, ease: "easeInOut" }}
				/>
			</motion.div>
		</section>
	);
}
