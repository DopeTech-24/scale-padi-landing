// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { QueryProvider } from "@/components/QueryProvider";

export const metadata: Metadata = {
	title: "ScalePadi – Business Growth & Career Acceleration",
	description:
		"ScalePadi helps businesses scale faster and trains professionals in business development and growth roles.",
	openGraph: {
		title: "ScalePadi",
		description:
			"Business growth services and hands-on career acceleration programs.",
		url: "https://scalepadi.com",
		siteName: "ScalePadi",
		images: [
			{
				url: "https://scalepadi.com/logo.svg",
				width: 1200,
				height: 630,
				alt: "ScalePadi Logo",
			},
		],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`antialiased lg:w-[1440px] lg:max-w-[1440px] lg:mx-auto w-screen`}
			>
				<QueryProvider>
					<Toaster richColors />
					<div className="flex flex-col">
						<Navbar />
						{children}
						<Footer />
					</div>
				</QueryProvider>
			</body>
		</html>
	);
}
