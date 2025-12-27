"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const fadeUpVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const OurStory = () => {
	return (
		<div className="flex items-center justify-between flex-col lg:flex-row gap-8 py-5 lg:py-0 lg:h-[844px] bg-white px-4 lg:pl-14 relative overflow-hidden">
			<motion.div
				className="flex flex-col gap-2 lg:gap-3.5 w-full lg:w-[567px] relative"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
				variants={fadeUpVariant}
			>
				<span className="font-bold text-2xl lg:text-[32px] text-[#1A1A1A]">
					Our Story
				</span>
				<span className="text-base font-medium leading-[137%]">
					For years, African businesses have faced recurring growth
					bottlenecks, ineffective strategies, and limited access to
					the right resources. At GrowthPadi, we worked with over 50
					businesses and realized they needed more than just advice —
					they needed a repeatable system. That led to the creation of
					ScalePadi — a scalable AI-powered platform that blends
					strategy, verified expertise, and actionable frameworks to
					help businesses grow smarter and faster.
				</span>
			</motion.div>

			<motion.div
				className="hidden lg:block h-[575px] w-[615px] bg-[#083690] rounded-tl-2xl rounded-bl-2xl overflow-visible pt-14 relative"
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: false, amount: 0.3 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="w-[749px] -ml-[134px]">
					<Image
						src={"/images/people.svg"}
						alt="people"
						width={749}
						height={409}
					/>
				</div>
			</motion.div>

			<motion.div
				className="block lg:hidden w-full relative z-10"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.3 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="w-full">
					<Image
						src={"/images/people.svg"}
						alt="people"
						width={749}
						height={409}
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default OurStory;
