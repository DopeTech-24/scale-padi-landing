import { Academy } from "@/components/academy";
import AcademyHero from "@/components/academy-hero";
import AcademyWorks from "@/components/academy-works";
import FAQ from "@/components/faq";
import Testimonials from "@/components/testimonials";
import { faqs } from "@/lib/constants/faq";

const Page = () => {
	return (
		<div className="pb-5">
			<AcademyHero />
			<AcademyWorks />
			<Academy onlyCourses={true} />
			<Testimonials filterBy="ScalePadi Academy" />
			<FAQ faqs={faqs.slice(0, 5)} />
		</div>
	);
};

export default Page;
