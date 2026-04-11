"use client";

import {
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	ArrowRight,
	Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import GetStartedDropdown from "./getstarted";
import { XIcon } from "./XIcon";

const navigation = [
	{ title: "How ScalePadi works", href: "#" },
	{ title: "Academy", href: "/academy" },
	{ title: "Blog", href: "/growth-hub" },
	{ title: "About our Growth Hub", href: "/growth-hub" },
	{ title: "Contact us", href: "/contact" },
];

const licence = [
	{ title: "Privacy Policy", href: "privacy-policy" },
	{ title: "Terms of Use", href: "terms&conditions" },
	{ title: "Cookie Policy", href: "cookie" },
];

export default function Footer() {
	const router = useRouter();

	return (
		<footer className="w-full flex flex-col gap-10 bg-[#1746A2] text-white px-4 lg:px-14 py-12 lg:mt-16">
			<div className="scale bg-[#020609] rounded-4xl w-full flex flex-wrap items-center justify-between px-8 py-4 gap-5 lg:px-16 lg:py-8 lg:mb-16">
				<span className="font-semibold text-2xl lg:text-6xl leading-[130%] lg:w-[750px]">
					Looking to Scale your Business?
				</span>
				<GetStartedDropdown text="Get started now" />
			</div>
			<div className="w-full">
				<div className="flex items-center flex-col lg:flex-row justify-between gap-10 lg:gap-[100px]">
					{/* Logo and Description */}
					<div className="flex flex-col gap-3.5 lg:gap-[30px] lg:w-[800px]">
						<Image
							src={"/footer-logo.svg"}
							alt="logo"
							width={186}
							height={49.25}
						/>
						<p className="text-[#DFDFDF] text-sm leading-6 text-center md:text-left">
							We provide end-to-end business growth services that
							tackle every scaling challenge African businesses
							face, from AI-powered strategy development and
							expert talent matching to performance analytics and
							execution frameworks, our platform delivers the
							complete infrastructure to accelerate sustainable
							business growth.
						</p>
						<div className="flex items-center justify-center gap-3 md:items-start md:justify-start">
							<div
								onClick={() =>
									window.open(
										"https://youtube.com/@scalepadi?si=Fdu6MxM6IUVD7T6H",
										"_blank",
										"noopener,noreferrer",
									)
								}
								className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-white"
							>
								<Youtube className="h-4 w-4 text-[#1746A2] hover:text-[#7392ee]" />
							</div>

							<div
								onClick={() =>
									window.open(
										"https://x.com/PadiScale98709?s=20",
										"_blank",
										"noopener,noreferrer",
									)
								}
								className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-white"
							>
								<XIcon className="h-4 w-4 text-[#1746A2] hover:text-[#7392ee]" />
							</div>

							<div
								onClick={() =>
									window.open(
										"https://www.linkedin.com/company/scale-padi/",
										"_blank",
										"noopener,noreferrer",
									)
								}
								className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-white"
							>
								<Linkedin className="h-4 w-4 text-[#1746A2] hover:text-[#7392ee]" />
							</div>

							<div
								onClick={() =>
									window.open(
										"https://www.instagram.com/scalepadi?igsh=eTU3ODFuempuM2ho",
										"_blank",
										"noopener,noreferrer",
									)
								}
								className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-white"
							>
								<Instagram className="h-4 w-4 text-[#1746A2] hover:text-[#7392ee]" />
							</div>
						</div>
					</div>

					<div className="w-full flex flex-col md:flex-row gap-11 lg:gap-[95px]">
						{/* Navigation */}
						<div className="w-full flex flex-col items-center justify-center md:items-start md:justify-start">
							<h4 className="font-semibold text-lg mb-5 lg:mb-10">
								Navigation
							</h4>
							<ul className="flex flex-col items-center justify-center md:items-start md:justify-start gap-3 md:gap-7">
								{navigation.map((item, index) => (
									<li key={index}>
										<Link
											href={item.href}
											className="text-blue-100 hover:text-white text-sm transition-colors"
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Licence */}
						<div className="w-full flex flex-col items-center justify-center md:items-start md:justify-start">
							<h4 className="font-semibold text-lg mb-5 lg:mb-10">
								License
							</h4>
							<ul className="flex flex-col items-center justify-center md:items-start md:justify-start gap-3 md:gap-7">
								{licence.map((item, index) => (
									<li key={index}>
										<Link
											href={item.href}
											className="text-blue-100 hover:text-white text-sm transition-colors"
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Contact */}
						<div className="w-full flex flex-col items-center justify-center md:items-start md:justify-start">
							<h4 className="font-semibold text-lg mb-5 lg:mb-10">
								Contact
							</h4>
							<div className="flex flex-col text-center items-center justify-center md:items-start md:justify-start gap-3 md:gap-7 text-sm text-blue-100">
								<p>+2349134138999</p>
								<p>support@scalepadi.com</p>
								<p>
									13 Akinbola Close Surulere
									<br />
									Lagos, Nigeria
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
