import FAQ from "@/components/faq";
import { faqs } from "@/lib/constants/faq";

const Faq = () => {
	return (
		<div className="pb-5 min-h-screen">
			<div>
				<FAQ faqs={faqs} />
			</div>
		</div>
	);
};

export default Faq;
