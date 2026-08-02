"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.3,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const cookiePolicySections = [
	{
		title: "1. What Are Cookies?",
		content:
			"Cookies are small text files that are stored on your device (computer, mobile phone, tablet) when you visit a website. They help the website recognize your device and store information about your preferences or actions.",
	},
	{
		title: "2. How We Use Cookies",
		content:
			"ScalePadi uses cookies to enhance your user experience, analyze usage patterns, enable core site functionalities, and deliver personalized content. Cookies also help us understand how the platform is used and allow us to improve our services.",
	},
	{
		title: "3. Types of Cookies We Use",
		list: [
			"Essential Cookies: Necessary for the operation of our platform and to enable you to move around it and use its features.",
			"Performance Cookies: Collect anonymous data on how users interact with the platform (e.g., Google Analytics).",
			"Functionality Cookies: Remember your preferences and enhance platform functionality.",
			"Targeting/Advertising Cookies: Used to deliver ads relevant to you and measure the effectiveness of advertising campaigns.",
		],
	},
	{
		title: "4. Third-Party Cookies",
		content:
			"We may allow third-party service providers to place cookies on your device for analytics and advertising purposes. These cookies are subject to the respective privacy policies of these providers.",
	},
	{
		title: "5. Managing Cookie Preferences",
		content:
			"You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies. However, disabling certain cookies may impact the functionality and user experience of our platform.",
	},
	{
		title: "6. Consent",
		content:
			"By using our website and platform, you consent to the use of cookies in accordance with this Cookie Policy. Where required by law, you will be asked to provide explicit consent before cookies are placed on your device.",
	},
	{
		title: "7. Changes to This Policy",
		content:
			"We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We will notify you of any significant changes through a prominent notice on our platform or by email.",
	},
	{
		title: "8. Contact Us",
		content: (
			<>
				If you have any questions or concerns about this Cookie Policy,
				please contact us at:{" "}
				<a
					href="mailto:info@scalepadi.com"
					className="text-[#1746A2] underline hover:text-[#0f356d] focus:outline-none focus:ring-2 focus:ring-[#1746A2]/60 rounded transition"
				>
					info@scalepadi.com
				</a>
				.
			</>
		),
	},
];

export default function Hero() {
	return (
		<section
			id="hero"
			aria-label="ScalePadi hero section"
			className="relative bg-[url('/images/hero-bg.svg')] bg-cover bg-center bg-[#F8F8F8] lg:h-[895px] w-full flex flex-col items-center gap-6 lg:py-10 md:pt-5 px-6 lg:px-0 overflow-hidden"
		>
			{/* Cookie Policy Container */}
			<motion.section
				aria-label="ScalePadi Cookie Policy"
				className="relative bg-opacity-95 w-full my-5 lg:px-20 lg:my-0 mx-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#1746A2]/50 scrollbar-track-transparent"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
				variants={containerVariants}
			>
				<h2 className="text-3xl font-extrabold mb-8 text-[#1746A2] drop-shadow-sm">
					ScalePadi Cookie Policy (July, 2025)
				</h2>
				<p className="mb-10 text-gray-900 leading-relaxed text-lg max-w-prose">
					This Cookie Policy explains how ScalePadi (“we,” “us,” or
					“our”) uses cookies and similar tracking technologies when
					you visit our website and platform. It outlines what cookies
					are, how we use them, the types of cookies we use, and how
					you can control your cookie preferences.
				</p>

				{cookiePolicySections.map(({ title, content, list }, idx) => (
					<motion.article
						key={idx}
						className="mb-10 last:mb-0"
						variants={itemVariants}
					>
						<h3 className="text-2xl font-semibold mb-4 text-gray-900 tracking-wide">
							{title}
						</h3>
						{list ? (
							<ul className="list-disc list-inside text-gray-800 space-y-3 pl-4 max-w-prose">
								{list.map((item, i) => (
									<li key={i} className="leading-relaxed">
										{item}
									</li>
								))}
							</ul>
						) : typeof content === "string" ? (
							<p className="text-gray-800 leading-relaxed text-lg max-w-prose">
								{content}
							</p>
						) : (
							<div className="text-gray-800 leading-relaxed text-lg max-w-prose">
								{content}
							</div>
						)}
					</motion.article>
				))}
			</motion.section>
		</section>
	);
}
