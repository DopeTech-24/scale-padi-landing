"use client";

import { ArrowRight } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function GetStartedDropdown({
	bg = "bg-[#1746A2]",
	text = "Get Started for Free",
	text_color = "text-white",
}: {
	bg?: string;
	text?: string;
	text_color?: string;
}) {
	const handleRedirect = (url: string) => {
		window.location.href = url;
	};

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<button
					className={`flex items-center gap-2 cursor-pointer font-semibold ${bg} ${text_color} px-6 py-2 rounded-md transition-all duration-300 shadow-lg hover:shadow-[#1746A2]/40`}
				>
					{text}
					<ArrowRight size={18} />
				</button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align="start"
				side="bottom"
				sideOffset={8}
				className="z-50 w-48 rounded-md bg-white"
				forceMount
			>
				<DropdownMenuItem
					className="cursor-pointer hover:bg-[#FCCE37] text-[#1A1A1A]"
					onClick={() =>
						handleRedirect("https://business.scalepadi.com")
					}
				>
					Sign up as a business
				</DropdownMenuItem>

				<DropdownMenuItem
					className="cursor-pointer hover:bg-[#FCCE37] text-[#1A1A1A]"
					onClick={() =>
						handleRedirect("https://expert.scalepadi.com")
					}
				>
					Sign up as an expert
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
