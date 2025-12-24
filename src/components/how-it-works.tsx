"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useInView } from "framer-motion";

const steps = [
	{
		title: "AI-Powered Analysis",
		description:
			"Share your growth challenge. Our AI analyses it in minutes, pinpointing key bottlenecks.",
		video: "/videos/how-works1.mp4",
	},
	{
		title: "Get tailored growth engine",
		description:
			"Receive a vetted strategy and recommended experts, tools, activated within 72 hours.",
		video: "/videos/how-works2.mp4",
	},
	{
		title: "Growth Execution & Tracking",
		description:
			"Implement with your dedicated Growth Engineer and track real-time results.",
		video: "/videos/how-works3.mp4",
	},
];

export default function HowItWorks() {
	const [active, setActive] = useState(0);
	const router = useRouter();
	const titleRef = useRef(null);
	const titleInView = useInView(titleRef, { once: true });

	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev + 1) % steps.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="how-it-works"
			className="relative flex flex-col lg:flex-row items-center gap-4 mt-6 lg:py-16 py-8 bg-gradient-to-br from-[#e5efff] via-white to-[#f9faff] z-0"
		>
			{/* Glow background */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute w-[700px] h-[700px] bg-[#1746A2] opacity-10 blur-[160px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
			</div>

			{/* Left Content */}
			<div className="w-full lg:w-1/2 px-6 lg:px-16 relative z-10">
				<motion.h2
					ref={titleRef}
					initial={{ opacity: 0, y: 20 }}
					animate={titleInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
					className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-6"
				>
					<span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#1746A2] to-[#FCCE37] animate-gradient-x">
						How ScalePadi Works
					</span>
				</motion.h2>

				<div className="relative pl-6 mt-6">
					{/* Progress Line */}
					<div className="absolute left-0 top-0 h-full w-0.5">
						{Array.from({ length: steps.length * 8 }).map(
							(_, i) => {
								const isActive = i < (active + 1) * 8;
								return (
									<div
										key={i}
										className={`w-full h-2 my-0.5 transition-colors duration-300 ${
											isActive
												? "bg-[#1746A2]"
												: "bg-blue-200"
										}`}
									/>
								);
							}
						)}
					</div>

					{steps.map((step, index) => (
						<motion.div
							key={index}
							onClick={() => setActive(index)}
							initial={{ opacity: 0, x: -20 }}
							animate={titleInView ? { opacity: 1, x: 0 } : {}}
							transition={{
								duration: 0.4,
								delay: 0.4 + index * 0.1,
								ease: "easeOut",
							}}
							className={`mb-8 cursor-pointer relative z-10 group ${
								active === index ? "opacity-100" : "opacity-50"
							}`}
						>
							{/* Step Bullet */}
							<div
								className={`absolute -left-[34px] top-1 w-6 h-6 flex items-center justify-center text-sm font-bold rounded-full border-2 shadow-md transition-all duration-300 ${
									active === index
										? "bg-[#1746A2] text-white border-[#1746A2] shadow-blue-400/50"
										: "bg-white text-blue-400 border-blue-300 opacity-60"
								}`}
							>
								{index + 1}
							</div>

							<h3
								className={`text-lg font-semibold mb-1 ${
									active === index
										? "text-gray-900"
										: "text-gray-500"
								}`}
							>
								{step.title}
							</h3>
							<p className="text-sm text-gray-500 max-w-sm">
								{step.description}
							</p>
						</motion.div>
					))}

					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="mt-6"
					>
						<Button
							onClick={() => router.push("/wait-list")}
							className="flex items-center gap-2 font-semibold bg-[#1746A2] text-white px-6 py-2 rounded-md transition-all duration-300 shadow-lg hover:shadow-[#1746A2]/40"
						>
							Get Started for Free
							<ArrowRight size={18} />
						</Button>
					</motion.div>
				</div>
			</div>

			{/* Right: Video with Motion */}
			<div
				className={`hidden lg:flex w-full lg:w-1/2 relative z-10 justify-center items-center rounded-bl-[32px] rounded-tl-[8px] rounded-tr-[8px] overflow-hidden h-[580px] transition-colors duration-700 ${
					active === 0 ? "bg-[#FCCE37]" : "bg-[#1746A2]"
				}`}
			>
				<div className="rounded-[8px] ml-10 mt-10 -mb-10 shadow-2xl h-[580px] w-[90%] overflow-hidden">
					<AnimatePresence mode="wait">
						<motion.video
							key={steps[active].video}
							autoPlay
							muted
							loop
							playsInline
							preload="auto"
							className="w-full h-full object-cover rounded-lg"
							initial={{ opacity: 0.8, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0.6, scale: 0.98 }}
							transition={{ duration: 0.6, ease: "easeInOut" }}
						>
							<source
								src={steps[active].video}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</motion.video>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
