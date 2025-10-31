"use client";

import { faqs } from "@/lib/constants/faq";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const dropdownVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="lg:h-[594px] bg-[url('/images/why-choose-bg.svg')] bg-cover bg-center flex flex-col gap-5 lg:gap-14 lg:py-14 py-4 px-4 lg:pl-16"
      aria-label="Frequently Asked Questions"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2
          className="font-bold text-2xl lg:text-5xl lg:w-[465px] lg:leading-14 mb-6"
          variants={itemVariants}
        >
          Frequently Asked <span className="text-[#1746A2]">Questions</span>
        </motion.h2>

        <motion.div
          className="w-full flex flex-col items-center justify-center"
          variants={containerVariants}
        >
          <div className="card w-full lg:w-[504px]">
            {faqs.slice(0, 5).map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  className="border border-[#E0E0E0] rounded-2xl mb-3.5 overflow-hidden shadow-sm"
                  variants={itemVariants}
                >
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                    id={`faq-header-${index}`}
                  >
                    <span className="text-[#2F2F2F]">{faq.question}</span>

                    <motion.div
                      animate={{ rotate: isOpen ? 360 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{ display: "flex" }}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 cursor-pointer" />
                      ) : (
                        <Plus className="w-5 h-5 cursor-pointer" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={`faq-content-${index}`}
                        role="region"
                        aria-labelledby={`faq-header-${index}`}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="px-5 pt-4 pb-4 text-[#000000] border-t border-gray-200"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQ;
