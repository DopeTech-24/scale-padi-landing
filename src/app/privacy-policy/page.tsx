"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.2,
			when: "beforeChildren",
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut" },
	},
};

const dropdownVariants: Variants = {
	hidden: { opacity: 0, height: 0 },
	visible: {
		opacity: 1,
		height: "auto",
		transition: { duration: 0.3, ease: "easeInOut" },
	},
	exit: { opacity: 0, height: 0 },
};

const privacyPolicySections = [
	{
		title: "1. Introduction",
		id: "introduction",
		content:
			"Welcome to ScalePadi. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you use our website, platform, and services. This policy is compliant with the General Data Protection Regulation (GDPR), and aligns with global data protection standards.",
	},
	{
		title: "2. Information We Collect",
		id: "information-we-collect",
		content: (
			<>
				<ul className="list-disc list-inside space-y-2 mt-3 text-gray-800 text-sm sm:text-base md:text-lg pl-6 max-w-prose">
					{[
						"Identity Data: Full name, username, title, date of birth, gender.",
						"Contact Data: Email address, phone number, mailing address.",
						"Technical Data: IP address, browser type, operating system, device identifiers.",
						"Usage Data: Information on how you use our platform, features accessed, and engagement metrics.",
						"Marketing and Communications Data: Preferences in receiving marketing from us and your communication preferences.",
						"Profile Data: Business type, sector, growth challenges, expert skillsets, and assessments.",
					].map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</ul>
			</>
		),
	},
	{
		title: "3. How We Use Your Information",
		id: "how-we-use-your-information",
		content: (
			<>
				<ul className="list-disc list-inside space-y-2 mt-3 text-gray-800 text-sm sm:text-base md:text-lg pl-6 max-w-prose">
					{[
						"Provide access to ScalePadi's platform and features.",
						"Match businesses with suitable experts and resources.",
						"Deliver training, academy programs, and internship opportunities.",
						"Analyze usage data for improvement of our services.",
						"Send service updates, marketing communication (if consented), and customer support.",
						"Ensure compliance with applicable laws and platform integrity.",
					].map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</ul>
			</>
		),
	},
	{
		title: "4. Legal Basis for Processing",
		id: "legal-basis-for-processing",
		content: (
			<>
				<ul className="list-disc list-inside space-y-2 mt-3 text-gray-800 text-sm sm:text-base md:text-lg pl-6 max-w-prose">
					<li>Consent: Where you have provided consent.</li>
					<li>
						Contract: Processing necessary for a contract with you.
					</li>
					<li>
						Legal Obligation: To comply with a legal obligation.
					</li>
					<li>
						Legitimate Interest: For our legitimate interests to
						operate and improve our business.
					</li>
				</ul>
			</>
		),
	},
	{
		title: "5. Data Retention",
		id: "data-retention",
		content:
			"We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",
	},
	{
		title: "6. Sharing and Disclosure",
		id: "sharing-and-disclosure",
		content:
			"We do not sell your personal information. We may share your data with verified experts or businesses as part of service delivery, service providers (e.g. hosting, analytics, communication platforms), and legal and regulatory authorities where required. All third parties are bound by confidentiality and data protection obligations.",
	},
	{
		title: "7. International Data Transfers",
		id: "international-data-transfers",
		content:
			"Where your data is transferred outside the EU/EEA, we ensure appropriate safeguards are in place, including Standard Contractual Clauses or other lawful mechanisms under GDPR.",
	},
	{
		title: "8. Your Rights",
		id: "your-rights",
		content: (
			<>
				If you are under GDPR jurisdictions, you have the following
				rights under data protection laws:
				<ul className="list-disc list-inside space-y-2 mt-3 text-gray-800 text-sm sm:text-base md:text-lg pl-6 max-w-prose">
					<li>Right to access your data.</li>
					<li>Right to correct inaccuracies.</li>
					<li>Right to restrict or object to processing.</li>
					<li>Right to data portability.</li>
					<li>Right to withdraw consent at any time.</li>
				</ul>
				To exercise any of these rights, contact us at:{" "}
				<a
					href="mailto:info@scalepadi.com"
					className="text-[#1746A2] underline hover:text-[#0f356d] focus:outline-none focus:ring-2 focus:ring-[#1746A2]/60 rounded transition"
				>
					info@scalepadi.com
				</a>
			</>
		),
	},
	{
		title: "9. Data Security",
		id: "data-security",
		content:
			"We use appropriate technical and organizational security measures including encryption, access controls, and secure data hosting to protect your information.",
	},
	{
		title: "10. Cookies & Tracking Technologies",
		id: "cookies-and-tracking-technologies",
		content:
			"We use cookies and similar technologies to improve user experience, analyze site traffic, and deliver personalized content. You can manage cookie preferences via your browser settings.",
	},
	{
		title: "11. AI and Automated Decision-Making",
		id: "ai-and-automated-decision-making",
		content:
			"ScalePadi uses AI technologies to suggest business growth strategies and match experts with projects. While these decisions may be automated, they do not have legal or significant effects without human oversight.",
	},
	{
		title: "12. Children's Privacy",
		id: "childrens-privacy",
		content:
			"ScalePadi does not knowingly collect data from anyone under 18 years of age. If we learn that we have collected personal data from a child, we will delete it promptly.",
	},
	{
		title: "13. Updates to this Privacy Policy",
		id: "updates-to-this-privacy-policy",
		content:
			"We may update this Privacy Policy from time to time. Material changes will be communicated via email or prominent platform notice.",
	},
	{
		title: "14. Contact Us",
		id: "contact-us",
		content: (
			<>
				If you have questions, concerns, or wish to exercise your
				rights, please contact us at:{" "}
				<a
					href="mailto:info@scalepadi.com"
					className="text-[#1746A2] underline hover:text-[#0f356d] focus:outline-none focus:ring-2 focus:ring-[#1746A2]/60 rounded transition"
				>
					info@scalepadi.com
				</a>
			</>
		),
	},
];

export default function PrivacyPolicy() {
	const [activeId, setActiveId] = useState<string>(
		privacyPolicySections[0].id
	);
	const [isMounted, setIsMounted] = useState(false);
	const [expandedSection, setExpandedSection] = useState<string>(
		privacyPolicySections[0].id
	);

	useEffect(() => {
		setIsMounted(true);

		// Auto-expand the section when scrolled to
		const handleScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight / 3;
			let current = activeId;

			privacyPolicySections.forEach((section) => {
				const el = document.getElementById(section.id);
				if (el) {
					const { offsetTop, offsetHeight } = el;
					if (
						scrollPos >= offsetTop &&
						scrollPos < offsetTop + offsetHeight
					) {
						current = section.id;
					}
				}
			});

			if (current !== activeId) {
				setActiveId(current);
				setExpandedSection(current);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [activeId]);

	const handleNavigation = (id: string) => {
		// Close all sections first to ensure smooth animation
		setExpandedSection("");

		setTimeout(() => {
			setExpandedSection(id);
			setActiveId(id);

			const el = document.getElementById(id);
			if (el) {
				// Calculate position with header offset
				const headerOffset = 120;
				const elementPosition = el.getBoundingClientRect().top;
				const offsetPosition =
					elementPosition + window.pageYOffset - headerOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		}, 10); // Small delay to allow collapse animation to start
	};

	const toggleSection = (id: string) => {
		setExpandedSection((prev) => (prev === id ? "" : id));
	};

	if (!isMounted) {
		return <div className="min-h-screen bg-[#F8F8F8]" />;
	}

	return (
		<div className="relative min-h-screen bg-[#F8F8F8]">
			{/* Background pattern */}
			<div className="absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-fixed bg-center" />

			<div className="relative w-full px-4 sm:px-6 lg:px-20 md:py-8 py-4">
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Sticky Sidebar */}
					<div className="lg:w-64 xl:w-72 hidden lg:block flex-shrink-0">
						<nav
							aria-label="Privacy Policy Table of Contents"
							className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto p-4 bg-white/60 shadow-xs border border-gray-100"
						>
							<h2 className="text-[#1746A2] font-bold text-xl mb-6 px-2">
								Privacy Policy
							</h2>
							<ul className="space-y-2">
								{privacyPolicySections.map(({ id, title }) => (
									<li key={id}>
										<button
											onClick={() => handleNavigation(id)}
											className={`w-full text-left px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
												activeId === id
													? "bg-[#1746A2] text-white font-medium"
													: "text-gray-700 hover:bg-[#1746A2]/10 hover:text-[#1746A2]"
											}`}
										>
											{title}
										</button>
									</li>
								))}
							</ul>
						</nav>
					</div>

					{/* Main Content */}
					<div className="flex-1">
						<motion.div
							className="overflow-hidden shadow-xs bg-white/60"
							initial="hidden"
							animate="visible"
							variants={containerVariants}
						>
							<div className="p-8 md:p-10">
								<motion.h1
									className="text-[#1746A2] font-extrabold md:mb-5 mb-3 text-2xl md:text-4xl"
									variants={itemVariants}
								>
									ScalePadi Privacy Policy
								</motion.h1>

								<div className="space-y-1">
									{privacyPolicySections.map(
										({ id, title, content }) => (
											<motion.div
												key={id}
												id={id}
												className="border-b border-gray-100 last:border-0 scroll-mt-24"
												variants={itemVariants}
											>
												<button
													onClick={() =>
														toggleSection(id)
													}
													className={`w-full text-left px-4 py-5 flex justify-between items-center transition-colors ${
														expandedSection === id
															? "text-[#1746A2]"
															: "text-gray-800"
													}`}
												>
													<h2 className="text-lg cursor-pointer font-semibold">
														{title}
													</h2>
													<svg
														className={`w-5 h-5 transform transition-transform ${
															expandedSection ===
															id
																? "rotate-180"
																: ""
														}`}
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M19 9l-7 7-7-7"
														/>
													</svg>
												</button>

												<AnimatePresence>
													{expandedSection === id && (
														<motion.div
															initial="hidden"
															animate="visible"
															exit="exit"
															variants={
																dropdownVariants
															}
															className="overflow-hidden"
														>
															<div className="px-4 pb-6 text-gray-700">
																{content}
															</div>
														</motion.div>
													)}
												</AnimatePresence>
											</motion.div>
										)
									)}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
