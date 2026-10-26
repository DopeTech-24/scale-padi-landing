"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import GetStartedDropdown from "./getstarted";

// Motion Variants
const sectionVariant = {
	hidden: { opacity: 0, y: 60 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 60,
			damping: 20,
			duration: 0.8,
		},
	},
};

const textStagger = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const textFade = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
};

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: (i: number) => {
		const directions = [
			{ x: -100, opacity: 0 },
			{ y: -100, opacity: 0 },
			{ x: 100, opacity: 0 },
		];
		return directions[i % directions.length];
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 60,
			damping: 14,
		},
	},
};

export const WhoWeServe = () => {
	const router = useRouter();

	return (
		<motion.div
			variants={sectionVariant}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.3 }}
			className="bg-[url('/images/we-serve-bg.svg')] bg-cover bg-center lg:h-[799px] mt-20 flex flex-col items-center justify-center gap-8 text-white py-6 lg:py-0"
		>
			<motion.div
				variants={textStagger}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
				className="top flex flex-col items-center justify-center w-full lg:w-[634px] gap-3.5 px-4 lg:px-0"
			>
				<motion.span
					variants={textFade}
					className="font-bold text-2xl lg:text-5xl"
				>
					Who We Serve
				</motion.span>
				<motion.span
					variants={textFade}
					className="md:text-base text-sm text-center"
				>
					Whether you're a business looking for experts or a talent looking for opportunities, ScalePadi bridges the gap between businesses and qualified growth talents fast.
				</motion.span>
			</motion.div>

			<motion.div
				className="cards flex items-center justify-center w-full lg:gap-6 gap-4 flex-wrap"
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.3 }}
			>
				{[
					{
						title: "For Startups & SMEs",
						description:
							"Hire vetted growth experts, explore qualified talent profiles, or get AI-powered guidance to find the right talent for your business.",
						icon: "/images/we-serve1.svg",
					},
					{
						title: "For Growth Experts",
						description:
							"Create your expert profile, complete verification, and start receiving opportunities that match your skills and experience.",
						icon: "/images/we-serve2.svg",
					},
					{
						title: "For Investors & Partners",
						description:
							"Discover high-growth businesses, explore partnership opportunities, and support the growth of Africa's next generation of businesses.",
						icon: "/images/we-serve3.svg",
					},
				].map((item, i) => (
					<motion.div
						custom={i}
						variants={cardVariants}
						key={i}
						className="card px-5 pt-8 w-[314px] h-[355px] bg-white text-[#1A1A1A] flex flex-col gap-3 items-center rounded-[32px]"
					>
						<div className="w-[100px] h-[100px]">
							<Image
								className="w-[inherit] h-[inherit]"
								src={item.icon}
								alt="icon"
								width={75}
								height={75}
							/>
						</div>
						<span className="heading text-[18px] font-semibold">
							{item.title}
						</span>
						<span className="text-base text-center text-[#333333]">
							{item.description}
						</span>
					</motion.div>
				))}
			</motion.div>

			<GetStartedDropdown
				bg={"bg-[#FCCE37]"}
				text_color={"text-[#1A1A1A]"}
				text="Start for free"
			/>
		</motion.div>
	);
};
