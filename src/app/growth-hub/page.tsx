import ArticlesSection from "@/components/articles-section";
import FAQ from "@/components/faq";
import GrowthHero from "@/components/growth-hero";
import { faqs } from "@/lib/constants/faq";

const GrowthHub = () => {
	return (
		<div className="pb-5">
			<GrowthHero />
			<ArticlesSection />
			<FAQ faqs={faqs.slice(0, 5)} />
		</div>
	);
};

export default GrowthHub;
