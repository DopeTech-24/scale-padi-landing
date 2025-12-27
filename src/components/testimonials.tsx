"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import GetStartedDropdown from "./getstarted";

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const controls = useAnimation();
	const sliderRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollX = useRef(0);
	const router = useRouter();

	const testimonials = [
		{
			name: "Oreofe Ojurereoluwa Daniel",
			title: "Partnerships Lead Mytherapist.ng",
			image: "",
			message: "Working with Growthpadi has been a great experience...",
		},
		{
			name: "Tamaraefieye Isaac",
			title: "Founder Kartam Financial",
			image: "",
			message: "I am the founder of Kartam Financial...",
		},
		{
			name: "Oreofe Ojurereoluwa Daniel",
			title: "Partnerships Lead, Mytherapist.ng",
			image: "",
			message: "Working with Growthpadi has been a great experience...",
		},
		{
			name: "Oreofe Ojurereoluwa Daniel",
			title: "Partnerships Lead Mytherapist.ng",
			image: "",
			message: "Working with Growthpadi has been a great experience...",
		},
		{
			name: "Tamaraefieye Isaac",
			title: "Founder Kartam Financial",
			image: "",
			message: "I am the founder of Kartam Financial...",
		},
		{
			name: "Oreofe Ojurereoluwa Daniel",
			title: "Partnerships Lead, Mytherapist.ng",
			image: "",
			message: "Working with Growthpadi has been a great experience...",
		},
	];

	// Auto-slide every 5s
	useEffect(() => {
		const interval = setInterval(() => {
			nextTestimonial();
		}, 5000);
		return () => clearInterval(interval);
	}, [currentIndex]);

	// Initially center the first testimonial
	useEffect(() => {
		scrollToTestimonial(0);
	}, []);

	const scrollToTestimonial = (index: number) => {
		if (sliderRef.current) {
			const cardWidth = 363; // px
			const gap = 28; // px
			const visibleWidth = sliderRef.current.offsetWidth;
			const offset = (visibleWidth - cardWidth) / 2; // center card
			const scrollPosition = index * (cardWidth + gap) - offset;

			controls.start({
				x: -scrollPosition,
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 30,
					mass: 0.5,
				},
			});
			scrollX.current = -scrollPosition;
		}
	};

	const nextTestimonial = () => {
		const nextIndex = (currentIndex + 1) % testimonials.length;
		setCurrentIndex(nextIndex);
		scrollToTestimonial(nextIndex);
	};

	const prevTestimonial = () => {
		const prevIndex =
			(currentIndex - 1 + testimonials.length) % testimonials.length;
		setCurrentIndex(prevIndex);
		scrollToTestimonial(prevIndex);
	};

	// Drag / Swipe handlers
	const handleDragStart = (clientX: number) => {
		isDragging.current = true;
		startX.current = clientX;
	};

	const handleDragMove = (clientX: number) => {
		if (!isDragging.current) return;
		const delta = clientX - startX.current;
		controls.set({ x: scrollX.current + delta });
	};

	const handleDragEnd = (clientX: number) => {
		if (!isDragging.current) return;
		isDragging.current = false;
		const delta = clientX - startX.current;

		if (delta > 50) {
			prevTestimonial();
		} else if (delta < -50) {
			nextTestimonial();
		} else {
			scrollToTestimonial(currentIndex);
		}
	};

	return (
		<div className="w-full lg:py-20 py-6 bg-white text-center flex flex-col gap-5 mt-8">
			{/* Heading */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="flex flex-col items-center justify-center gap-3.5"
			>
				<motion.span className="font-bold text-2xl lg:text-5xl">
					Testimonials
				</motion.span>
				<motion.span className="md:text-base text-sm text-center">
					Here are what our successful customer and talent are saying
				</motion.span>
			</motion.div>

			{/* Controls */}
			<div className="lg:py-10 py-5 flex flex-col gap-8 rounded-4xl px-4 lg:mx-14 bg-[#FEF3CF] lg:h-[549px]">
				<div className="flex items-center justify-center gap-10">
					<motion.button
						onClick={prevTestimonial}
						className="w-14 h-12 bg-white cursor-pointer rounded-[20px] shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border hover:scale-110"
						whileTap={{ scale: 0.9 }}
					>
						<ArrowLeft className="w-5 h-5 text-gray-600" />
					</motion.button>

					<motion.span
						className="text-gray-500 font-medium"
						key={currentIndex}
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ type: "spring", stiffness: 500 }}
					>
						{String(currentIndex + 1).padStart(2, "0")} /{" "}
						{String(testimonials.length).padStart(2, "0")}
					</motion.span>

					<motion.button
						onClick={nextTestimonial}
						className="w-14 h-12 bg-[#1746A2] cursor-pointer rounded-[20px] shadow-lg flex items-center justify-center hover:bg-[#1746A2]/90 transition-all duration-300 hover:scale-110"
						whileTap={{ scale: 0.9 }}
					>
						<ArrowRight className="w-5 h-5 text-white" />
					</motion.button>
				</div>

				{/* Slider */}
				<div
					className="cards w-full overflow-hidden pb-4 cursor-grab"
					ref={sliderRef}
					onMouseDown={(e) => handleDragStart(e.clientX)}
					onMouseMove={(e) => handleDragMove(e.clientX)}
					onMouseUp={(e) => handleDragEnd(e.clientX)}
					onMouseLeave={(e) => handleDragEnd(e.clientX)}
					onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
					onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
					onTouchEnd={(e) =>
						handleDragEnd(e.changedTouches[0].clientX)
					}
				>
					<motion.div
						animate={controls}
						className="flex gap-7 items-start justify-start min-w-fit"
					>
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								className={`p-8 rounded-2xl border flex flex-col gap-8 border-[#D1DAEC] bg-white w-[363px] h-[300px] shrink-0 ${
									index % 2 !== 0 ? "mt-14" : "mt-0"
								}`}
								animate={{
									opacity:
										Math.abs(index - currentIndex) < 2
											? 1
											: 0.6,
									scale: index === currentIndex ? 1.05 : 1,
								}}
								transition={{ duration: 0.3 }}
								whileHover={{ scale: 1.02 }}
							>
								<span className="text-[#1A1A1A] font-medium text-base text-left line-clamp-5">
									{testimonial.message}
								</span>
								<div className="flex items-center gap-3.5 mt-auto">
									<div className="w-[70px] h-[70px] flex items-center justify-center rounded-full overflow-hidden bg-gray-200">
										{testimonial.image ? (
											<Image
												src={testimonial.image}
												alt={testimonial.name}
												width={70}
												height={70}
												className="w-full h-full object-cover"
											/>
										) : (
											<Image
												src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9mZmZqampdXV1jY2NgYGBaWlr7+/u1tbX5+fltbW3f39+pqanBwcHw8PD29vaKiop6enro6Oienp7Dw8OxsbHLy8t/f3/X19eQkJC7u7ugoKDY2NiWlpZycnKFhYXYhBSfAAAGuUlEQVR4nO2d2XbqOgyGIR6AJJABSBnD+7/ldpqGUsbYkSzlHH9XXb3oyl/ZkiXb8mQSCAQCgUAgEAgEAoFAIBAIBMbFIit31eGbZZWsMurvASVLlsdLrLUWHVpPi/N2t6L+MhDKQx4LoeT0DqmUkZmeqL9vIKt5LcSDuFuZQq4T6q90Z5frd/J+ULo+jHJWzpaF/iyvtaSYHsc3JTdxD/PdGFIex2XHU9zXfjeDdTuj/uzerM7W+hpEvaP+8p5spHLQZ5B6vaD++B4s9tpNX4OK+IeOJHI0YGfGObWCD1RWHvQZ+sza4WzFQH0G8cU4bqwHTMFf1JRt+N8DWLBBxiW1lOecgQQaiRFLK67BBDYSGc7FFGQOXiXW7GL/BlSgcTc5taI7EsAh2iJSak1/yOKhgf4RXVGrumU/aKn2SiIjh7oEnoQt8kKt60qGItBMxQO1so4cY4w2SCbjtAL3ox1qT62tpYD3ox2aRcF4iWZCM0wLanWGBZ4FDZpBceqAaEJjxC9qfZNJhCnQRAxyI+I50hZJ7k4vqNPQIIjz/RIr2F9RW1qFW3SFMqJViBjtOzRpGbxEWnPfokhT4TmyJ22QNaXCL/xBaoxI6E1nHgapiRcbOoUnLwrVmU4h7pq0gzLB2PuYhga6VL/2o5AuImZe9FG6GvxFaQvd0vTkxdEYhWsqhdi5YQddjohZg/qjkKyUgZ86/SgkC4ipL4Vka29fCqdTqiM2QSEY0X9dIZ2n8ZNaUCr0Fg/JzmXsvCTAlClw4mvlTVZtW3lKgAn385H3nToINxG9FBNJy4l+AqKM6Q4qbvzU2ggP8fnYtiDeX/MhkHaje+1jIkrKw7SVh2FKOQ0nk8xDuKDcmJl4qetr2hPf+AVF2kGKc/z5L+SHobGXNTKmvui1Qvamgvg4zQTd1zA4JpygGpH2qMkPKDcRrgo53H8qEQMGk4szRzwjSmpH2oK32U28YPsF+t5aB6NLM0j1GurDszfglBU1m0tBE5wFOLM7lkdwiZQVtqcU0CFDcOuQsQBOo8iTpkfKKaREVl6m4/TYscxdIH3O9IzEqbPQU4FHai0vSICsyNSCDUkEIZF1E55VPThoSIZe9A9DO7iMoFPUfNBk1Dm7jh+PJLWzGSWfG/jvOTqGDVHwSZc+kFwcWn6JaEn93TZsasu8X4mUWS7xidlyajFWlR5he09jx0L0io5STNMx6mtI1pH+IFIKddnwqBm6kVWNyBfDVSotLofR+M+XzJJ5LrQWSsofpeYHpcyvirQamXd5w2p3OOZFHbfUl/O2Yr86c2Ixa6D+isAD5XGPY5YNi/47k+pLK1UjTKrZWeuaPpBUbVtyqcCTgu8URYr4QJpO7YrrClvksMuS7c9flpQL8vJyu/JUkGZMit8cU5L1+Z7fZ0j6C2g2ZncJptRngpVB+fWYyUuxhhiqy/jhT6vIe3nq8HytqWQ61PlVxbPs2fzzQL67L7P8ZX4r1HbIiNrVr7JK5bN9cvm2Kipk6vgt2ebdkxhSehupu0+7TErlDt4vST88iSGFp2J41aM6YaJYauVYs2WfgoCfHZtDzxKT0nF66jUlZ+Xh0udBGoPwcIvNom+SSeGj/Tx5r7Ks1kVPed8Sc+yF6tyySCiFiIr18vQkTmZJlea1evIU1FuJyKeIbAW2KlXzSFdU7Nfbecvx3Dzh1bxz5VA4Rh2og453NcWZKw7SrhIRY//O073fD+AdyfTVjuYjGimfykC2sEFAai984WJCrPcvUh6TsEUhdKzxcUvNAgG+fss4WbAB/MQGo0nYATsVffX4sAD2gC2bSHgLaFREb/jshIAbp1i3DQYCN04zjmO0AcyfermS7oKsYdJhX11oHAC6fpmzdDMtIPcvfbVKcgKkK6anPrOO6OGFcGYr7nsAGn/yNiHA/TZfTVidGfxgkoe3Dwaihm3LsnakLQPdKc8l918GPbGH200AiEFNCc58F2w3CHeBizGYcNCddoa1i2cMaG/KPdp3OF+ohX8fFgnlWjxF7HcBTOx2ui+LqT+8N47ljBGsZzoc2/CyLc88QTgVbEYkcCpchumIBqljIuyvaT4E0kEhejM9UByCPmZ/KwQcEgxfHeWBcHioxddzXGDY5sGzsay6O6y7mrPcE32H9URkX0W8x7rz2biiYUNkmV9w3nB6juUOBnTXJw9YLk2xO8siYNmb3s8Do6BIuxzRz6MHoFhW3Oajc6VmmFopHE8R6hdtleefR+dKbXdoPD0gA4rdi7P/A4XR+Bi4GRwIBAKBQCAQCAQCgUAgEAgE3vMPq794sQEsO00AAAAASUVORK5CYII=`}
												alt={testimonial.name}
												width={70}
												height={70}
												className="w-full h-full object-cover"
											/>
										)}
									</div>
									<div className="flex flex-col gap-1">
										<span className="font-bold text-[16px] text-left">
											{testimonial.name}
										</span>
										<span className="text-base text-left font-medium text-[#878C91]">
											{testimonial.title}
										</span>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Partners + CTA */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				viewport={{ once: true }}
				className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 lg:pl-14 mt-16 items-center"
			>
				<div className="pattners flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
					<motion.span className="text-[#010205] text-left w-[190px] font-semibold text-base">
						Trusted by the world's biggest brands
					</motion.span>
					<motion.div className="w-full overflow-hidden">
						<motion.div
							className="flex items-center justify-center gap-4 lg:gap-7 animate-scroll"
							animate={{
								x: [0, -1000],
								transition: {
									x: {
										repeat: Infinity,
										repeatType: "loop",
										duration: 30,
										ease: "linear",
									},
								},
							}}
						>
							{[
								"afrinolly.png",
								"colad.png",
								"onehealth.jfif",
								"kartam.png",
								"ibomsoups.png",
								"Meekfi.svg",
								"Mytherapist.png",
								"retro.png",
								"s&s.jpg",
							].map((logo, i) => (
								<motion.div
									key={i}
									whileHover={{ scale: 1.1, y: -5 }}
									transition={{ type: "spring" }}
								>
									<Image
										src={`/images/logos/${logo}`}
										alt="partner logo"
										width={108}
										height={33}
									/>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
				<GetStartedDropdown text="Get Started Now" />
			</motion.div>
		</div>
	);
};

export default Testimonials;
