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
			staggerChildren: 0.3,
		},
	},
};

const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 25 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.4, 0, 0.2, 1],
			duration: 0.8,
		},
	},
};

const bottomTextVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 1.2,
			delay: 1.8,
			ease: "easeInOut",
		},
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
		<section className="pb-8 lg:pb-16 overflow-hidden">
			<motion.div
				className="
					bg-[url('/images/academy-bg.svg')]
					bg-cover
					bg-center

					min-h-[720px]
					md:min-h-[700px]

					lg:h-[746px]
					lg:w-[1229px]

					flex
					w-full
					lg:mx-auto
					flex-col
					items-center
					justify-center
					relative
					overflow-hidden

					px-4
					md:px-8
					lg:px-0
				"
				aria-label="Academy Hero Section"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.4 }}
				whileHover={{ scale: 1.015 }}
				transition={{
					duration: 1,
					ease: [0.4, 0, 0.2, 1],
				}}
			>
				<div
					className="
						hero-pics

						w-full
						h-[610px]

						md:h-[560px]

						lg:w-[1070px]
						lg:h-[553px]

						rounded-2xl
						md:rounded-3xl
						lg:rounded-4xl

						bg-[url('/images/academy-hero.svg')]
						bg-cover
						bg-center

						pl-6 lg:pl-14

						relative
						overflow-hidden
					"
					role="img"
					aria-label="Academy hero background"
				>
					<motion.div
						className="
							flex
							flex-col

							gap-4
							md:gap-5
							lg:gap-8

							w-full
							md:w-[85%]
							lg:w-[800px]

							absolute

							left-0
							lg:left-14
							bottom-8
							md:bottom-12
							lg:bottom-20

							px-5
							sm:px-6
							md:px-8
							lg:px-0
						"
						variants={containerVariants}
					>
						<motion.h1
							className="
								font-extrabold

								text-2xl
								sm:text-3xl
								md:text-4xl
								lg:text-5xl

								leading-[1.15]
								md:leading-tight
								lg:leading-[69.19px]

								text-white
								drop-shadow-lg

								max-w-[650px]
								lg:max-w-none
							"
							variants={fadeUpVariants}
						>
							Where Africa&apos;s Next Generation of Growth Operators Are
							Trained
						</motion.h1>

						<motion.p
							className="
								text-xs
								sm:text-sm
								md:text-base

								leading-[20px]
								sm:leading-[22px]
								md:leading-[25px]
								lg:leading-[27px]

								w-full
								max-w-[600px]
								lg:max-w-lg

								text-white
								drop-shadow
							"
							variants={fadeUpVariants}
						>
							Over 200 million businesses across Africa need skilled sales,
							marketing, and business development professionals, but formal
							education doesn&apos;t teach this, and scattered online courses
							never go deep enough. ScalePadi Academy closes that gap with
							structured training and a paid internship, so students graduate
							as Verified Talents on the ScalePadi platform, job ready from day
							one and directly accessible to businesses that are hiring.
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
							className="
								w-full
								sm:w-fit

								flex
								flex-col
								sm:flex-row

								sm:items-center

								gap-3
								sm:gap-4
							"
						>
							<Link
								href="https://bit.ly/SPA-Cohort5"
								target="_blank"
								className="w-full sm:w-auto"
							>
								<Button
									className="
										w-full
										sm:w-auto

										flex
										font-semibold
										items-center
										justify-center
										gap-2

										bg-[#1746A2]
										text-white

										text-sm
										sm:text-base

										px-4
										sm:px-5

										py-3
									"
								>
									Join the next cohort

									<ArrowRight
										size={18}
										className="sm:w-5 sm:h-5"
										aria-hidden="true"
									/>
								</Button>
							</Link>

							<Link
								href="https://drive.google.com/file/d/16N4pmfmyF-cVsd8EhziNYhTflEDv11d5/view?usp=drive_link"
								target="_blank"
								className="w-full sm:w-auto"
							>
								<Button
									className="
										w-full
										sm:w-auto

										flex
										font-semibold
										items-center
										justify-center
										gap-2

										bg-[#FCCE37]
										text-[#1A1A1A]

										text-sm
										sm:text-base

										px-4
										sm:px-5

										py-3
									"
								>
									Apply for Scholarship

									<ArrowRight
										size={18}
										className="sm:w-5 sm:h-5"
										aria-hidden="true"
									/>
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</div>

				<motion.span
					className="
						text-[#1746A2]

						text-sm
						sm:text-base
						lg:text-lg

						absolute

						bottom-2
						md:bottom-1
						lg:bottom-0

						mb-2
						md:mb-3
						lg:mb-6

						text-center
						px-4

						select-none
						font-medium
					"
					variants={bottomTextVariants}
					aria-hidden="true"
				>
					Explore some of our Available Courses
				</motion.span>
			</motion.div>

			<motion.div
				className="pt-8 lg:pt-10 flex items-center justify-center overflow-hidden"
				variants={mouseVariants}
				animate="animate"
				aria-hidden="true"
			>
				<Image
					src="/images/mouse.svg"
					alt=""
					width={24}
					height={24}
				/>
			</motion.div>
		</section>
	);
};

export default AcademyHero;