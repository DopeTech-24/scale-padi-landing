"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { academyCourses } from "@/lib/constants/academyCourses";

const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeSlideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const starVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

export default function AcademyId() {
  const { academyId } = useParams();
  if (!academyId || Array.isArray(academyId)) {
    return notFound();
  }
  const id = Number(academyId);
  const course = academyCourses.find((c) => c.id === id);
  console.log(course)

  if (!course) {
    return (
      <div className="text-center text-lg font-semibold text-red-500 py-10">
        Course not found.
      </div>
    );
  }

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-10 items-center"
      aria-labelledby="course-title"
    >
      {/* Left Image Preview */}
      <motion.div
        className="relative overflow-hidden cursor-pointer"
        variants={fadeSlideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        aria-label="Course preview image"
      >
        <Image
          src={course.image}
          alt={`course preview`}
          width={800}
          height={200}
          className="w-full object-cover"
          priority
        />
        <div className="absolute bottom-4 right-4 bg-white text-sm px-3 py-1 rounded-full shadow font-medium select-none">
          {course.previewDuration}
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="space-y-5"
        variants={fadeSlideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1
          id="course-title"
          className="text-3xl font-bold text-gray-900"
          tabIndex={-1}
        >
          {course.title}
        </h1>

        <div className="flex items-center gap-2" aria-label="Instructor Info">
          <Image
            src={course.instructor.avatar}
            alt={course.instructor.name}
            width={24}
            height={24}
            className="rounded-full"
            priority
          />
          <p className="text-sm font-medium text-gray-700">
            {course.instructor.name}
          </p>
        </div>

        <p className="text-[#878A93] leading-6">{course.description}</p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={"https://forms.gle/GRHoRzEC8QZZTqvR9"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-[#1746A2] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#123c8d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123c8d]"
              aria-label={`Apply now for ${course.title}`}
            >
              Apply Now
              <ArrowRight className="ml-2" />
            </Button>
          </a>

          <a
            href={course.curriculumLink}
            className="text-[#1746A2] underline text-sm font-medium hover:text-[#0f3578] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f3578]"
          >
            View Curriculum
          </a>
        </div>

        <div className="flex text-yellow-500" aria-label="Course rating">
          {Array.from({ length: course.rating }).map((_, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={starVariants}
              initial="hidden"
              animate="visible"
            >
              <Star className="w-5 h-5 fill-yellow-400" aria-hidden="true" />
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Image
            src={"/images/avatars.svg"}
            alt="Participants"
            width={95}
            height={23}
            className="rounded-full border-2 border-white shadow-sm"
            priority
          />
          <p className="text-sm text-[#878A93] select-none">
            Over {course.participants}+ certificates issued
          </p>
        </div>
      </motion.div>
    </section>
  );
}
