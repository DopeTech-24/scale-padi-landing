"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

const cardsData = [
  {
    img: "/images/step1.svg",
    title: "Apply and Get Selected",
    desc: "Candidates go through a structured selection process based on experience and growth potential.",
  },
  {
    img: "/images/step2.svg",
    title: "Learn From Industry Experts",
    desc: "Hands-on training in Sales, BD, Marketing and Growth, led by professionals actively working in the industry.",
  },
  {
    img: "/images/step3.svg",
    title: "Gain Real-World Experience",
    desc: "Participants engage in field trips and a paid internship, applying their skills with real businesses.",
  },
  {
    img: "/images/step4.svg",
    title: "Graduate Job Ready",
    desc: "Graduates join the ScalePadi platform as Verified Talents, job ready from day one.",
  },
];

export const AcademyWorks = () => {
  return (
    <motion.section
      className="lg:h-[775px] bg-[url('/images/why-choose-bg.svg')] bg-cover bg-center flex flex-col items-center justify-center gap-5 lg:gap-14 py-6 lg:py-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
      aria-label="How it Works section"
    >
      <motion.div
        className="top flex flex-col items-center justify-center gap-3.5"
        variants={fadeUpVariants}
      >
        <h2 className="font-bold text-2xl lg:text-5xl text-center">
          How it Works
        </h2>
        <p className="md:text-base text-sm text-center">
          A Structured Path Into a Career in Growth
        </p>
      </motion.div>

      <div className="cards flex flex-wrap items-center justify-center lg:gap-6 gap-4">
        {cardsData.map(({ img, title, desc }, index) => {
          // Alternate animation direction left/right on cards
          const variants =
            index % 2 === 0 ? fadeLeftVariants : fadeRightVariants;

          return (
            <motion.div
              key={index}
              className="card w-[280px] h-[355px] flex flex-col rounded-[16px] bg-white"
              variants={variants}
            >
              <div className="top flex items-center justify-center">
                <Image src={img} alt={title} width={248} height={104} />
              </div>
              <div className="flex flex-col items-center justify-center px-5 gap-2.5">
                <h3 className="text-[#1A1A1A] text-[18px] font-semibold text-center">
                  {title}
                </h3>
                <p className="text-[#333333] text-center">{desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default AcademyWorks;
