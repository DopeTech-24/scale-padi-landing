"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollX = useRef(0);
  const router = useRouter();

  const testimonials = [
    {
      name: "Oreofe Ojurereoluwa Daniel",
      title: "Partnerships Lead Mytherapist.ng",
      image: "",
      message: "Working with Growthpadi has been a great experience..."
    },
    {
      name: "Tamaraefieye Isaac",
      title: "Founder Kartam Financial",
      image: "",
      message: "I am the founder of Kartam Financial..."
    },
    {
      name: "Oreofe Ojurereoluwa Daniel",
      title: "Partnerships Lead, Mytherapist.ng",
      image: "",
      message: "Working with Growthpadi has been a great experience..."
    },
    {
      name: "Oreofe Ojurereoluwa Daniel",
      title: "Partnerships Lead Mytherapist.ng",
      image: "",
      message: "Working with Growthpadi has been a great experience..."
    },
    {
      name: "Tamaraefieye Isaac",
      title: "Founder Kartam Financial",
      image: "",
      message: "I am the founder of Kartam Financial..."
    },
    {
      name: "Oreofe Ojurereoluwa Daniel",
      title: "Partnerships Lead, Mytherapist.ng",
      image: "",
      message: "Working with Growthpadi has been a great experience..."
    }
  ];

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Initially center the first testimonial
  useEffect(() => {
    scrollToTestimonial(0);
  }, []);

  const scrollToTestimonial = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = 363; // px
      const gap = 28; // px
      const visibleWidth = sliderRef.current.offsetWidth;
      const offset = (visibleWidth - cardWidth) / 2; // center card
      const scrollPosition = index * (cardWidth + gap) - offset;

      controls.start({
        x: -scrollPosition,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5
        }
      });
      scrollX.current = -scrollPosition;
    }
  };

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    scrollToTestimonial(nextIndex);
  };

  const prevTestimonial = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
    scrollToTestimonial(prevIndex);
  };

  // Drag / Swipe handlers
  const handleDragStart = (clientX: number) => {
    isDragging.current = true;
    startX.current = clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const delta = clientX - startX.current;
    controls.set({ x: scrollX.current + delta });
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = clientX - startX.current;

    if (delta > 50) {
      prevTestimonial();
    } else if (delta < -50) {
      nextTestimonial();
    } else {
      scrollToTestimonial(currentIndex);
    }
  };

  return (
    <div className="w-full lg:py-20 py-6 bg-white text-center flex flex-col gap-5 mt-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-3.5"
      >
        <motion.span className="font-bold text-2xl lg:text-5xl">
          Testimonials
        </motion.span>
        <motion.span className="md:text-base text-sm text-center">
          Here are what our successful customer and talent are saying
        </motion.span>
      </motion.div>

      {/* Controls */}
      <div className="lg:py-10 py-5 flex flex-col gap-8 rounded-4xl px-4 lg:mx-14 bg-[#FEF3CF] lg:h-[549px]">
        <div className="flex items-center justify-center gap-10">
          <motion.button
            onClick={prevTestimonial}
            className="w-14 h-12 bg-white cursor-pointer rounded-[20px] shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border hover:scale-110"
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </motion.button>

          <motion.span
            className="text-gray-500 font-medium"
            key={currentIndex}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </motion.span>

          <motion.button
            onClick={nextTestimonial}
            className="w-14 h-12 bg-[#1746A2] cursor-pointer rounded-[20px] shadow-lg flex items-center justify-center hover:bg-[#1746A2]/90 transition-all duration-300 hover:scale-110"
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Slider */}
        <div
          className="cards w-full overflow-hidden pb-4 cursor-grab"
          ref={sliderRef}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={(e) => handleDragEnd(e.clientX)}
          onMouseLeave={(e) => handleDragEnd(e.clientX)}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
        >
          <motion.div
            animate={controls}
            className="flex gap-7 items-start justify-start min-w-fit"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-2xl border flex flex-col gap-8 border-[#D1DAEC] bg-white w-[363px] h-[300px] shrink-0 ${
                  index % 2 !== 0 ? "mt-14" : "mt-0"
                }`}
                animate={{
                  opacity: Math.abs(index - currentIndex) < 2 ? 1 : 0.6,
                  scale: index === currentIndex ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-[#1A1A1A] font-medium text-base text-left line-clamp-5">
                  {testimonial.message}
                </span>
                <div className="flex items-center gap-3.5 mt-auto">
                  <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full overflow-hidden bg-gray-200">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={70}
                        height={70}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-[16px] text-left">
                      {testimonial.name}
                    </span>
                    <span className="text-base text-left font-medium text-[#878C91]">
                      {testimonial.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Partners + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 lg:pl-14 mt-16 items-center"
      >
        <div className="pattners flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <motion.span
            className="text-[#010205] text-left w-[190px] font-semibold text-base"
          >
            Trusted by the world's biggest brands
          </motion.span>
          <motion.div className="w-full overflow-hidden">
            <motion.div
              className="flex items-center justify-center gap-4 lg:gap-7 animate-scroll"
              animate={{
                x: [0, -1000],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear"
                  }
                }
              }}
            >
              {[
                "afrinolly.png",
                "colad.png",
                "onehealth.jfif",
                "kartam.png",
                "ibomsoups.png",
                "Meekfi.svg",
                "Mytherapist.png",
                "retro.png",
                "s&s.jpg"
              ].map((logo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring" }}
                >
                  <Image
                    src={`/images/logos/${logo}`}
                    alt="partner logo"
                    width={108}
                    height={33}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => router.push("/wait-list")}
            className="flex items-center gap-2 bg-[#1746A2] text-white"
          >
            <motion.span
              animate={{
                x: [0, 5, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2
                }
              }}
            >
              Get Started Now
            </motion.span>
            <ArrowRight />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
