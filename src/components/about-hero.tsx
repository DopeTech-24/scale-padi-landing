"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import CountUp from "react-countup";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CounterItem = ({
  number,
  label,
  custom,
}: {
  number: number;
  label: string;
  custom: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: false });
  const [playCount, setPlayCount] = useState(false);

  // Whenever inView changes to true, reset playCount to restart CountUp
  useEffect(() => {
    if (inView) {
      setPlayCount(false); // reset
      // small timeout to force remount
      const timeout = setTimeout(() => setPlayCount(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center"
      variants={fadeUpVariant}
      custom={custom}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <span className="font-bold text-[#1A1A1A] lg:text-[85px] text-3xl">
        {playCount ? (
          <CountUp end={number} duration={5} separator="," suffix="+" />
        ) : (
          "0"
        )}
      </span>
      <span className="text-[#878A93] text-base lg:text-2xl leading-8 text-center max-w-[200px]">
        {label}
      </span>
    </motion.div>
  );
};

const AboutHero = () => {
  const router = useRouter();

  return (
    <div>
      <div className="bg-[url('/images/hero-bg.svg')] bg-cover bg-center lg:h-[909px] lg:w-[1440px] flex w-full flex-col items-center pt-8 lg:pt-16">
        <motion.div
          className="hero-pics lg:w-[1070px] w-full lg:rounded-4xl lg:h-[462px] p-4 bg-[#1A1A1A] lg:pl-14 flex flex-col items-center justify-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariant}
          custom={0}
        >
          <motion.div
            className="flex flex-col lg:gap-8 gap-5 items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <motion.div
              className="flex flex-col gap-3.5 text-white text-center lg:text-left"
              variants={fadeUpVariant}
              custom={0}
            >
              <span className="font-extrabold text-2xl lg:text-5xl lg:leading-[69.19px]">
                Empowering African Businesses with Scalable{" "}
                <motion.span
                  className="text-[#5F91F1]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Growth Solutions
                </motion.span>
              </span>
              <span className="text-xs lg:text-sm leading-[27px] max-w-[600px]">
                At ScalePadi, we’re on a mission to help African startups and
                SMEs overcome growth challenges with the power of AI-driven
                strategy and human-centered expertise.
              </span>
            </motion.div>

            <motion.div
              className="flex items-start w-full"
              variants={fadeUpVariant}
              custom={1}
            >
              <Button
                onClick={() => router.push("/wait-list")}
                className="flex font-semibold w-fit items-center gap-2 bg-[#FCCE37] text-black hover:bg-yellow-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join our Waitlist
                <ArrowRight />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[1070px] lg:h-[462px] px-4 lg:px-0 flex flex-col mt-10 lg:mt-32 gap-4 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={2}
        >
          <motion.span
            className="text-[#1A1A1A] font-semibold text-xl lg:text-4xl"
            variants={fadeUpVariant}
            custom={0}
          >
            Recorded Impacts and Counting
          </motion.span>

          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {[
              { number: 50000, label: "Active community members" },
              { number: 6500, label: "Businesses Empowered" },
              { number: 65, label: "Active Professional Experts" },
            ].map(({ number, label }, idx) => (
              <CounterItem key={label} number={number} label={label} custom={idx + 1} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
