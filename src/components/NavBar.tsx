"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	return (
		<nav className="w-full z-10 sticky top-0 bg-white border-b border-[#E5E8EB] px-4 py-3 lg:px-14 flex items-center justify-between">
			<div className="flex items-center">
				<Link href="/" className="flex items-center">
					<Image
						src={"/logo.svg"}
						alt="Logo"
						width={104}
						height={27.54}
					/>
				</Link>
			</div>

			<div className="hidden lg:flex items-center space-x-8">
				<Link
					href="/"
					className="text-gray-700 hover:text-[#1746A2] transition-colors"
				>
					Home
				</Link>
				{pathname === "/" ? (
					<ScrollLink
						to="how-it-works"
						smooth={true}
						duration={600}
						className="cursor-pointer text-gray-700 hover:text-[#1746A2] transition-colors"
					>
						How It Works
					</ScrollLink>
				) : (
					<Link
						href="/#how-it-works"
						className="cursor-pointer text-gray-700 hover:text-[#1746A2] transition-colors"
					>
						How It Works
					</Link>
				)}
				<Link
					href="/about"
					className="text-gray-700 hover:text-[#1746A2] transition-colors"
				>
					About us
				</Link>
				<div className="relative">
					<button
						onClick={() => setShowDropdown(!showDropdown)}
						className="flex items-center space-x-1 text-gray-700 hover:text-[#1746A2]"
					>
						<span>Resources</span>
						<ChevronDown className="w-4 h-4" />
					</button>
					{showDropdown && (
						<div className="absolute top-full mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
							<Link
								onClick={() => setShowDropdown(false)}
								href="/academy"
								className="block px-4 py-2 text-left hover:bg-gray-100"
							>
								Academy
							</Link>
							<Link
								onClick={() => setShowDropdown(false)}
								href="/growth-hub"
								className="block px-4 py-2 text-left hover:bg-gray-100"
							>
								Growth Hub
							</Link>
						</div>
					)}
				</div>
				<Link
					href="/contact"
					className="text-gray-700 hover:text-[#1746A2] transition-colors"
				>
					Contact
				</Link>
				<Link
					href="https://expert.scalepadi.com"
					target="_blank"
					className="text-gray-700 hover:text-[#1746A2] transition-colors"
				>
					For Experts
				</Link>
				<div className="flex items-center space-x-4">
					{/* <Button
						onClick={() => router.push("/wait-list")}
						variant="outline"
						className="border-[#1746A2] text-[#1746A2] hover:bg-[#1746A2] hover:text-white bg-transparent"
					>
						Join Waitlist
					</Button> */}
					<Link href="https://business.scalepadi.com" target="_blank">
						<Button className="bg-[#1746A2] hover:bg-[#1746A2] text-white">
							For Business
						</Button>
					</Link>
				</div>
			</div>

			{/* Mobile nav */}
			<div className="flex lg:hidden items-center">
				<Link href="https://business.scalepadi.com" target="_blank">
					<Button className="bg-[#1746A2] hover:bg-[#1746A2] text-white text-xs px-2 py-1">
						For Business
					</Button>
				</Link>
				<Link
					href="https://expert.scalepadi.com"
					target="_blank"
					className="text-gray-700 hover:text-[#1746A2] transition-colors text-xs px-2 py-1"
				>
					For Experts
				</Link>
				<button
					onClick={() => setIsOpen(true)}
					className="text-[#1746A2]"
				>
					<Menu className="w-6 h-6" />
				</button>
			</div>

			{/* Sidebar */}
			{isOpen && (
				<motion.div
					initial={{ x: -300 }}
					animate={{ x: 0 }}
					exit={{ x: -300 }}
					transition={{ duration: 0.3 }}
					className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 px-6 py-4 flex flex-col"
				>
					<div className="flex items-center justify-between mb-6">
						<Link href="/" className="flex items-center">
							<Image
								src={"/logo.svg"}
								alt="Logo"
								width={104}
								height={27.54}
							/>
						</Link>
						<button onClick={() => setIsOpen(false)}>
							<X className="w-5 h-5 text-gray-800" />
						</button>
					</div>
					<nav className="flex flex-col space-y-4">
						<Link
							onClick={() => setIsOpen(false)}
							href="/"
							className="text-gray-700 hover:text-[#1746A2]"
						>
							Home
						</Link>
						{pathname === "/" ? (
							<ScrollLink
								to="how-it-works"
								smooth={true}
								duration={600}
								className="cursor-pointer text-gray-700 hover:text-[#1746A2] transition-colors"
								onClick={() => setIsOpen(false)}
							>
								How It Works
							</ScrollLink>
						) : (
							<Link
								onClick={() => setIsOpen(false)}
								href="/#how-it-works"
								className="cursor-pointer text-gray-700 hover:text-[#1746A2] transition-colors"
							>
								How It Works
							</Link>
						)}
						<div className="relative">
							<button
								onClick={() => setShowDropdown(!showDropdown)}
								className="flex items-center space-x-1 text-gray-700 hover:text-[#1746A2]"
							>
								<span className="cursor-pointer ">
									Resources
								</span>
								<ChevronDown className="w-4 h-4" />
							</button>
							{showDropdown && (
								<div className="absolute top-full mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
									<Link
										onClick={() => setIsOpen(false)}
										href="/academy"
										className="block px-4 rounded-md py-2 text-left hover:bg-[#F4F8FF]"
									>
										Academy
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										href="/growth-hub"
										className="block px-4 py-2 rounded-md text-left hover:bg-[#F4F8FF]"
									>
										Growth Hub
									</Link>
								</div>
							)}
						</div>
						<Link
							onClick={() => setIsOpen(false)}
							href="/contact"
							className="text-gray-700 hover:text-[#1746A2]"
						>
							Contact
						</Link>
						<Link
							href="https://expert.scalepadi.com"
							target="_blank"
							className="text-gray-700 hover:text-[#1746A2] transition-colors"
						>
							For Experts
						</Link>
					</nav>
				</motion.div>
			)}
		</nav>
	);
}
