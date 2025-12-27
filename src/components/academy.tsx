// "use client";

// import { ArrowRight, Clock } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "./ui/button";
// import { MotionSection } from "./MotionKit/core/MotionSection";
// import { MotionText } from "./MotionKit/core/MotionText";
// import { motion } from "framer-motion";

// export const Academy = ({ onlyCourses = false }: { onlyCourses?: boolean }) => {
//   const router = useRouter();
//   const containerVariants = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };
//   const cardVariants = {
//     hidden: (i: number) => {
//       const directions = [
//         { x: -100, opacity: 0 },
//         { y: -100, opacity: 0 },
//         { x: 100, opacity: 0 },
//       ];
//       return directions[i % directions.length];
//     },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 60,
//         damping: 14,
//       },
//     },
//   };
//   const valueItems = [
//     "In-demand growth skills in sales, strategy, marketing",
//     "Work experience through structured internships",
//     "Mentorship from industry experts and life-long learning opportunities",
//     "Scale your career, increase revenue, connect with businesses in need of your skills",
//     "A community and network of like-minded growth experts",
//   ];
//   return (
//     <MotionSection
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}
//       className="lg:px-14 px-4 lg:py-12 py-6"
//     >
//       {/* Header */}
//       <MotionText
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//         }}
//         className="font-bold text-2xl lg:text-5xl"
//       >
//         {onlyCourses ? "Available Courses" : "ScalePadi Academy"}
//       </MotionText>

//       {/* Academy Overview */}
//       {!onlyCourses && (
//         <MotionSection
//           variants={{
//             hidden: { opacity: 0, scale: 0.95 },
//             show: {
//               opacity: 1,
//               scale: 1,
//               transition: { delay: 0.2, duration: 0.6 },
//             },
//           }}
//           className="mt-6 bg-[#D1DAEC] rounded-[16px] lg:h-[484px] px-2 lg:px-8 py-12 flex gap-8 lg:flex-row flex-col"
//         >
//           <div className="lg:w-[390px] w-full flex flex-col lg:gap-6 gap-3.5">
//             <MotionText
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 show: { opacity: 1, y: 0, transition: { delay: 0.3 } },
//               }}
//               className="lg:text-[32px] text-3xl font-bold text-[#1746A2]"
//             >
//               Unlock Business Growth Expertise
//             </MotionText>
//             <MotionText
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 show: { opacity: 1, y: 0, transition: { delay: 0.4 } },
//               }}
//               className="lg:text-lg text-sm font-normal"
//             >
//               ScalePadi Academy is a structured hands-on learning and career
//               acceleration platform designed to train individuals in business
//               development and growth roles...
//             </MotionText>
//           </div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1 flex flex-col lg:flex-row gap-8"
//           >
//             {["academy1", "academy2"].map((img, i) => (
//               <motion.div
//                 key={img}
//                 custom={i}
//                 variants={cardVariants}
//                 className="card lg:w-[370px] h-[390px] rounded-[32px] p-6 bg-[#FBFCFC]"
//               >
//                 <div className="top flex flex-col gap-1 mb-4">
//                   <div
//                     className={`img relative rounded-[16px] bg-[url('/images/${img}.svg')] lg:w-[322px] h-[207px] bg-cover bg-center`}
//                   >
//                     <div className="absolute bottom-2 right-2 py-1 pl-1 pr-2 flex gap-1 bg-[#FBFCFC] rounded-3xl">
//                       <Clock className="w-[13.33px] h-[13.33px]" />
//                       <span className="text-[#8C8C8C] text-xs">1hr:30min</span>
//                     </div>
//                   </div>
//                   <div className="py-1 w-fit px-4 border bg-[#D2E7FA4D] border-[#D2E7FA] text-[#1E88E5] rounded-3xl">
//                     <span className="text-sm lg:text-base font-normal">
//                       {img === "academy1"
//                         ? "Sales Mastery"
//                         : "Entrepreneurship"}
//                     </span>
//                   </div>
//                 </div>
//                 <span className="text-[#0E1426] text-sm lg:text-lg font-normal">
//                   Learn how to market your business effectively with our
//                   marketing courses
//                 </span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </MotionSection>
//       )}

//       {/* Course Cards */}
//       {onlyCourses && (
//         <MotionSection
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             show: {
//               opacity: 1,
//               y: 0,
//               transition: { delay: 0.2, duration: 0.6 },
//             },
//           }}
//           className="mt-6 bg-[#D1DAEC] rounded-[16px] lg:h-[484px] px-2 lg:px-8 py-12 flex gap-8 lg:flex-row flex-col"
//         >
//           {[1, 2].map((id) => (
//             <Link
//               key={id}
//               href={`/academy/${id}`}
//               className="card lg:w-[370px] h-full rounded-[32px] p-6 bg-[#FBFCFC]"
//             >
//               <div className="top flex flex-col gap-1">
//                 <div
//                   className="relative rounded-[16px] lg:w-[322px] h-[207px] bg-cover bg-center"
//                   style={{ backgroundImage: `url('/images/academy${id}.svg')` }}
//                 >
//                   <div className="absolute bottom-2 right-2 py-1 pl-1 pr-2 flex gap-1 bg-[#FBFCFC] rounded-3xl">
//                     <Clock className="w-[13.33px] h-[13.33px]" />
//                     <span className="text-[#8C8C8C] text-xs">1hr:30min</span>
//                   </div>
//                 </div>
//                 <div className="py-1 my-2 w-fit px-4 border bg-[#D2E7FA4D] border-[#D2E7FA] text-[#1E88E5] rounded-3xl">
//                   <span className="text-sm lg:text-base font-normal">
//                     {id === 1 ? "Sales Mastery" : "Entrepreneurship"}
//                   </span>
//                 </div>
//               </div>
//               <span className="text-[#0E1426] text-sm lg:text-lg font-normal">
//                 {id === 1 ? "Learn how to market your business effectively with our marketing courses" : "Entrepreneurship"}

//               </span>
//             </Link>
//           ))}
//         </MotionSection>
//       )}

//       <MotionSection
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.3 }}
//         variants={{
//           hidden: { opacity: 0, y: 50 },
//           show: {
//             opacity: 1,
//             y: 0,
//             transition: { delay: 0.4, duration: 0.6 },
//           },
//         }}
//         className="lg:mt-16 mt-8 mx-auto lg:w-[1070px] w-full lg:h-[461px] rounded-2xl bg-[#1A1A1A] px-4 lg:pl-20 py-4 lg:pt-0 flex items-center gap-8 flex-col lg:flex-row"
//       >
//         {/* Left Side */}
//         <div className="lg:w-[404px] flex flex-col gap-7">
//           <MotionText
//             variants={{
//               hidden: { opacity: 0, y: 40 },
//               show: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { delay: 0.5, duration: 0.6 },
//               },
//             }}
//             className="font-bold text-white text-3xl lg:text-[64px]"
//           >
//             What You Gain
//           </MotionText>

//           <MotionText
//             variants={{
//               hidden: { opacity: 0, y: 30 },
//               show: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { delay: 0.6, duration: 0.5 },
//               },
//             }}
//             className="font-medium text-white text-sm"
//           >
//             Get in-demand skills and experience
//           </MotionText>

//           <Button
//             onClick={() => router.push("/wait-list")}
//             className="bg-[#FCCE37] text-[#1A1A1A] flex text-base lg:w-[284px] gap-4"
//           >
//             Apply for the Next Cohort <ArrowRight />
//           </Button>
//         </div>

//         {/* Right Side */}
//         <MotionSection
//           variants={{
//             hidden: { opacity: 0, scale: 0.95 },
//             show: {
//               opacity: 1,
//               scale: 1,
//               transition: { delay: 0.7, duration: 0.6 },
//             },
//           }}
//           className="bg-white rounded-2xl lg:w-[569px] p-2 lg:p-6 lg:-mr-8"
//         >
//           <div className="flex flex-col gap-[18px]">
//             {valueItems.map((text, i) => (
//               <MotionText
//                 key={i}
//                 variants={{
//                   hidden: { opacity: 0, x: -20 },
//                   show: {
//                     opacity: 1,
//                     x: 0,
//                     transition: { delay: 0.8 + i * 0.1 },
//                   },
//                 }}
//                 className="flex gap-3"
//               >
//                 <Image
//                   src="/icons/check.svg"
//                   alt="check-icon"
//                   width={24}
//                   height={24}
//                 />
//                 <span className="text-base font-normal lg:w-[382px]">
//                   {text}
//                 </span>
//               </MotionText>
//             ))}
//           </div>
//         </MotionSection>
//       </MotionSection>
//     </MotionSection>
//   );
// };

"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MotionSection } from "./MotionKit/core/MotionSection";
import { MotionText } from "./MotionKit/core/MotionText";
import Image from "next/image";
import { academyCourses } from "@/lib/constants/academyCourses";

export const Academy = () => {
	const router = useRouter();

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
				type: "spring" as const,
				stiffness: 60,
				damping: 14,
			},
		},
	};

	const valueItems = [
		"In-demand growth skills in sales, strategy, marketing",
		"Work experience through structured internships",
		"Mentorship from industry experts and life-long learning opportunities",
		"Scale your career, increase revenue, connect with businesses in need of your skills",
		"A community and network of like-minded growth experts",
	];

	return (
		<MotionSection
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			className="lg:px-14 px-4 lg:py-12 py-6"
		>
			<MotionText
				variants={{
					hidden: { opacity: 0, y: 20 },
					show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
				}}
				className="font-bold text-2xl lg:text-5xl"
			>
				ScalePadi Academy
			</MotionText>

			<MotionSection
				variants={{
					hidden: { opacity: 0, scale: 0.95 },
					show: {
						opacity: 1,
						scale: 1,
						transition: { delay: 0.2, duration: 0.6 },
					},
				}}
				className="mt-6 bg-[#D1DAEC] rounded-2xl px-4 lg:px-8 py-10 flex flex-col lg:flex-row gap-8"
			>
				<div className="lg:w-[390px] w-full flex flex-col gap-4">
					<MotionText className="lg:text-[32px] text-3xl font-bold text-[#1746A2]">
						Unlock Business Growth Expertise
					</MotionText>
					<MotionText className="lg:text-lg text-sm font-normal">
						ScalePadi Academy is a structured hands-on learning and
						career acceleration platform designed to train
						individuals in business development and growth roles...
					</MotionText>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.3 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
				>
					{academyCourses.map((course, i) => (
						<Link
							key={course.id}
							href={`/academy/${course.id}`}
							className="rounded-4xl p-6 bg-[#FBFCFC] flex flex-col h-full"
						>
							<motion.div
								custom={i}
								variants={cardVariants}
								className="flex flex-col h-full"
							>
								<div className="flex flex-col gap-1 mb-4">
									<div className="relative rounded-2xl w-full aspect-3/2 overflow-hidden bg-white">
										<Image
											src={`/academy/academy${course.id}.png`}
											alt={course.title}
											fill
											className="object-contain"
										/>
										<div className="absolute bottom-2 right-2 py-1 pl-1 pr-2 flex gap-1 bg-[#FBFCFC] rounded-3xl">
											<Clock className="w-[13.33px] h-[13.33px]" />
											<span className="text-[#8C8C8C] text-xs">
												{course.duration}
											</span>
										</div>
									</div>

									<div className="py-1 mt-2 w-fit px-4 border bg-[#D2E7FA4D] border-[#D2E7FA] text-[#1E88E5] rounded-3xl">
										<span className="text-sm lg:text-base font-normal">
											{course.category}
										</span>
									</div>
								</div>
								<span className="text-[#0E1426] text-sm lg:text-lg font-normal">
									{course.description}
								</span>
							</motion.div>
						</Link>
					))}
				</motion.div>
			</MotionSection>

			{/* CTA Section */}
			<MotionSection
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.3 }}
				variants={{
					hidden: { opacity: 0, y: 50 },
					show: {
						opacity: 1,
						y: 0,
						transition: { delay: 0.4, duration: 0.6 },
					},
				}}
				className="mt-16 mx-auto w-full max-w-7xl rounded-2xl bg-[#1A1A1A] px-4 lg:px-20 py-10 flex flex-col lg:flex-row gap-8 items-center"
			>
				<div className="lg:w-[404px] flex flex-col gap-7">
					<MotionText className="font-bold text-white text-3xl lg:text-[64px]">
						What You Gain
					</MotionText>

					<MotionText className="font-medium text-white text-sm">
						Get in-demand skills and experience
					</MotionText>

					<Link
						href={"https://forms.gle/GRHoRzEC8QZZTqvR9"}
						target="_blank"
					>
						<Button className="bg-[#FCCE37] text-[#1A1A1A] text-base flex gap-4 w-fit">
							Apply for the Next Cohort <ArrowRight />
						</Button>
					</Link>
				</div>

				<MotionSection className="bg-white rounded-2xl w-full lg:w-[569px] p-4 lg:p-6">
					<div className="flex flex-col gap-4">
						{valueItems.map((text, i) => (
							<MotionText
								key={i}
								variants={{
									hidden: { opacity: 0, x: -20 },
									show: {
										opacity: 1,
										x: 0,
										transition: { delay: 0.8 + i * 0.1 },
									},
								}}
								className="flex gap-3"
							>
								<Image
									src="/icons/check.svg"
									alt="check-icon"
									width={24}
									height={24}
								/>
								<span className="text-base font-normal">
									{text}
								</span>
							</MotionText>
						))}
					</div>
				</MotionSection>
			</MotionSection>
		</MotionSection>
	);
};
