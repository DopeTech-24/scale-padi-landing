"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3, // slightly slower stagger
		},
	},
};

const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 25 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.4, 0, 0.2, 1], // smooth easeOut cubic-bezier
			duration: 0.8, // slower duration for smoothness
		},
	},
};

const bottomTextVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 1.2, delay: 1.8, ease: "easeInOut" },
	},
};

const mouseVariants: Variants = {
	animate: {
		scale: [1, 1.5, 1],
		opacity: [1, 0.75, 1],
		transition: {
			duration: 3.5,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

const AcademyHero = () => {
	return (
		<section className="lg:pb-16 pb-8 overflow-hidden">
			<motion.div
				className="bg-[url('/images/academy-bg.svg')] bg-cover bg-center lg:h-[746px] lg:w-[1229px] flex w-full lg:mx-auto flex-col items-center justify-center relative overflow-hidden"
				aria-label="Academy Hero Section"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.4 }}
				whileHover={{ scale: 1.015 }}
				transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }} // smoother easing + longer
			>
				<div
					className="hero-pics lg:w-[1070px] rounded-4xl lg:h-[553px] bg-[url('/images/academy-hero.svg')] bg-cover bg-center pl-6 lg:pl-14 relative"
					role="img"
					aria-label="Academy hero background"
				>
					<motion.div
						className="flex flex-col lg:gap-8 gap-5 lg:w-[800px] absolute bottom-16 lg:bottom-20 px-4 lg:px-0"
						variants={containerVariants}
					>
						<motion.h1
							className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[69.19px] text-white drop-shadow-lg"
							variants={fadeUpVariants}
						>
							Where Africa's Next Generation of Growth Operators Are Trained
						</motion.h1>

						<motion.p
							className="text-sm sm:text-base leading-relaxed lg:leading-[27px] max-w-lg text-white drop-shadow"
							variants={fadeUpVariants}
						>
							Over 200 million businesses across Africa need skilled sales, marketing, and business development professionals, but formal education doesn't teach this, and scattered online courses never go deep enough. ScalePadi Academy closes that gap with structured training and a paid internship, so students graduate as Verified Talents on the ScalePadi platform, job ready from day one and directly accessible to businesses that are hiring. 
						</motion.p>

						<motion.div
							variants={fadeUpVariants}
							whileHover={{ scale: 1.07 }}
							whileTap={{ scale: 0.96 }}
							transition={{
								type: "spring",
								stiffness: 200,
								damping: 25,
							}}
							className="w-fit flex items-center gap-4"
						>
							<Link
								href={"https://bit.ly/SPA-Cohort5"}
								target="_blank"
							>
								<Button className="flex font-semibold items-center gap-2 bg-[#1746A2] text-white px-5 py-3">
									Join the next cohort
									<ArrowRight size={20} aria-hidden="true" />
								</Button>
							</Link>
							<Link
								href={"https://drive.google.com/file/d/16N4pmfmyF-cVsd8EhziNYhTflEDv11d5/view?usp=drive_link"}
								target="_blank"
							>
								<Button className="flex font-semibold items-center gap-2 bg-[#FCCE37] text-[#1A1A1A] px-5 py-3">
									Apply for Scholarship
									<ArrowRight size={20} aria-hidden="true" />
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>

				<motion.span
					className="text-[#1746A2] text-lg absolute bottom-0 mb-4 lg:mb-6 select-none font-medium"
					variants={bottomTextVariants}
					aria-hidden="true"
				>
					Explore some of our Available Courses
				</motion.span>
			</motion.div>

			<motion.div
				className="pt-10 flex items-center justify-center overflow-hidden"
				variants={mouseVariants}
				animate="animate"
				aria-hidden="true"
			>
				<Image src="/images/mouse.svg" alt="" width={24} height={24} />
			</motion.div>
		</section>
	);
};

export default AcademyHero;
