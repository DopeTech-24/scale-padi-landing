import AboutHero from "@/components/about-hero";
import OurApproach from "@/components/approach";
import MissionVision from "@/components/mission-vision";
import OurStory from "@/components/our-story";
import Testimonials from "@/components/testimonials";

const About = () => {
	return (
		<div>
			<AboutHero />
			<OurStory />
			<MissionVision />
			<OurApproach />
			<Testimonials filterBy="others" />
		</div>
	);
};

export default About;
