import { Academy } from "@/components/academy";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import { WhoWeServe } from "@/components/who-we-serve";
import { WhyChoose } from "@/components/why-choose";

export default function Home() {
	return (
		<div className="pb-5">
			<HeroSection />
			<HowItWorks />
			<WhoWeServe />
			<WhyChoose />
			<Academy />
			<Testimonials filterBy="others" />
		</div>
	);
}
