"use client";

import { MotionSection } from "./MotionKit/core/MotionSection";
import { MotionText } from "./MotionKit/core/MotionText";
import { fadeIn, fadeInWParameter } from "./MotionKit/variants/fade";
import { staggerContainer } from "./MotionKit/variants/stagger";
import Image from "next/image";

export const WhyChoose = () => {
  const cardData = [
    {
      image: "/images/choose1.svg",
      title: "Vetted and Qualified Experts",
      description:
        "Access Africa’s top 5% growth talent, pre-screened for your specific challenges.",
    },
    {
      image: "/images/choose2.svg",
      title: "Tailored Recommendations and Strategy",
      description:
        "Get strategies tailored by our AI and refined by seasoned Growth Engineers.",
    },
    {
      image: "/images/choose3.svg",
      title: "Fast Expert Matching (72 hrs)",
      description:
        "From challenge to execution in 3 days, 70% faster than traditional consulting.",
    },
    {
      image: "/images/choose4.svg",
      title: "Comprehensive Business Tools",
      description:
        "A full-suite platform combining strategy, expert matching, and performance tracking.",
    },
  ];

  return (
    <MotionSection
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:h-[775px] bg-[url('/images/why-choose-bg.svg')] bg-cover bg-center flex flex-col items-center justify-center gap-5 lg:gap-14 py-6 lg:py-0"
    >
      {/* Header */}
      <div className="top flex flex-col items-center justify-center gap-3.5 text-center">
        <MotionText
        //   text={``}
          variants={fadeInWParameter("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="font-bold text-2xl lg:text-5xl"
        >
            Why Choose <span className="text-[#1746A2]">ScalePadi</span>
        </MotionText>
        <MotionText
          text="More than hiring, we're your growth partner. Find the right talent faster with flexible hiring options, AI-powered recommendations, and dedicated support."
          variants={fadeIn}
          className="md:text-base w-1/2 text-sm text-[#837a7a]"
        />
      </div>

      {/* Cards */}
      <div className="cards flex flex-wrap items-center justify-center lg:gap-6 gap-4">
        {cardData.map((card, index) => (
          <MotionSection
            key={index}
            variants={fadeInWParameter("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white shadow-md"
          >
            <div className="top flex items-center justify-center pt-4">
              <Image
                src={card.image}
                alt={card.title}
                width={248}
                height={104}
              />
            </div>
            <div className="flex flex-col items-center justify-center px-5 gap-2.5 text-center mt-4">
              <MotionText
                text={card.title}
                variants={fadeInWParameter("up", index * 0.2 + 0.2)}
                className="text-[#1A1A1A] text-[18px] font-semibold"
              />
              <MotionText
                text={card.description}
                variants={fadeInWParameter("up", index * 0.2 + 0.3)}
                className="text-[#333333] text-sm"
              />
            </div>
          </MotionSection>
        ))}
      </div>
    </MotionSection>
  );
};
