"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const router = useRouter();
  const videoRef = useRef(null);

  // Scroll-based parallax for video
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="hero"
      className="relative bg-[url('/images/hero-bg.svg')] bg-cover bg-center bg-[#F8F8F8] lg:h-[895px] w-full flex flex-col items-center gap-4 lg:pt-20 pt-10 px-4 lg:px-0 overflow-hidden"
    >
      <div className="top lg:w-[892px] flex flex-col items-center gap-6">
        {/* Avatars + Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="avatars flex lg:flex-row flex-col items-center gap-2"
        >
          <Image
            src="/images/avatars.svg"
            alt="Avatars"
            width={95}
            height={24}
          />
          <span className="text-[#878A93] text-[10px] lg:text-base text-center">
            Over 6500+ Experts & Business owners use us
          </span>
        </motion.div>

        {/* Headline with glow + typewriter */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative font-bold text-center text-2xl lg:text-[64px] text-[#1A1A1A] lg:leading-[91px]"
        >
          <span className="absolute inset-0 -z-10 blur-[64px] opacity-30 bg-gradient-to-r from-[#1746A2] via-[#5BC0F8] to-[#A6E1FA] rounded-xl" />
          <Typewriter
            words={[
              "Powering Business Growth with Technology and Talent",
              "Unlock Expert Strategies to Scale Smart",
              "Your Growth Starts Here Join the Waitlist",
            ]}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            loop={true}
          />
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xs md:text-sm text-center text-[#1A1A1A]"
        >
          Identify challenges, get expert-backed strategies, and scale efficiently all on one platform.
        </motion.p>

        {/* CTA Buttons */}
        <div className="buttons flex items-center gap-3 justify-center mt-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px #1746A2",
              filter: "blur(0.2px)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/wait-list")}
            className="flex font-semibold items-center gap-2 bg-[#1746A2] text-white px-4 py-2 text-xs md:text-lg md:px-6 md:py-3 rounded-lg transition-all"
          >
            Join waitlist <ArrowRight />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px #5BC0F8",
              filter: "blur(0.2px)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/wait-list")}
            className="flex items-center gap-2 bg-transparent text-[#1746A2] border border-[#1746A2] hover:bg-[#1746A2] hover:text-white px-4 py-2 text-xs md:text-lg md:px-6 md:py-3 rounded-lg transition-all"
          >
            Explore ScalePadi <ArrowRight />
          </motion.button>
        </div>
      </div>

      {/* Scroll-synced Video with preload */}
      <motion.div
      ref={videoRef}
      style={{ y }}
      className="down w-full lg:w-[822px] mt-10 will-change-transform"
    >
      <motion.video
        src="/videos/hero-section.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/video-fallback.jpg"
        className="rounded-xl w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.div>
    </section>
  );
}
