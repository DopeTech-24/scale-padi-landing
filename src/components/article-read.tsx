// File: components/ArticleRead.tsx
"use client";
import { useParams, notFound } from "next/navigation";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { articleList } from "@/lib/constants/article";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export async function generateStaticParams() {
  return articleList.map((article) => ({
    articleId: article.id,
  }));
}

// src/components/article-read.tsx
export const calculateReadTime = (content?: { text?: string; items?: string[] }[]): string => {
  if (!content) return "1 min read"; // Default value for articles without content
  
  const words = content.reduce((count, block) => {
    if (block.text) {
      count += block.text.trim().split(/\s+/).length;
    }
    if (block.items) {
      count += block.items.join(' ').trim().split(/\s+/).length;
    }
    return count;
  }, 0);

  const minutes = Math.ceil(words / 200);
  return `${minutes} min${minutes > 1 ? 's' : ''} read`;
};


const ArticleRead = () => {
const { articleId } = useParams();
if (!articleId || Array.isArray(articleId)) {
  return notFound();
}
const id = Number(articleId); // safe cast
const article = articleList.find((a) => a.id === id); 

  if (!article) return notFound();

  const { category, title, subtitle, author, date, image, content } = article;
   const readTime = calculateReadTime(article.content);
   console.log(readTime)

  return (
    <div className="pb-5 lg:pb-8 overflow-hidden">
      <motion.div
        className="relative w-full h-[450px] md:h-[500px] lg:h-[580px]"
        initial="visible"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <Image src={image} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-end lg:pb-24 lg:pl-48">
          <motion.div
            className="text-white px-6 md:px-14 pb-12 lg:w-[800px]"
            variants={fadeInUp}
          >
            <p className="text-sm font-medium mb-2 px-[10px] py-[5px] rounded-[8px] bg-[#FFFFFF26] w-fit">
              {category}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">{title}</h1>
            <p className="mt-2 text-sm md:text-base text-[#E5E5E5]">{subtitle}</p>
            <p className="text-sm mt-3 font-light">
              By <span className="font-semibold">{author}</span>
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="px-4 lg:px-[119px] py-10 flex gap-3 flex-col lg:flex-row lg:gap-8"
        initial="visible"
        whileInView="visible"
        viewport={{ once: false }}
        variants={containerVariants}
      >
        <motion.div
          className="flex gap-4 text-sm text-[#1A1A1A] w-fit mb-6 font-bold"
          variants={fadeInUp}
        >
          <span>{date}</span>
          <span>—</span>
          <span>{readTime}</span>
        </motion.div>

        <motion.div className="flex-1" variants={containerVariants}>
          {content.map((block, idx) => {
            if (block.type === "paragraph") {
              return (
                <motion.p
                  key={idx}
                  className="mb-5 text-[15px] leading-6 text-[#495057]"
                  variants={fadeInUp}
                >
                  {block.text}
                </motion.p>
              );
            }
            if (block.type === "heading") {
              return (
                <motion.h2
                  key={idx}
                  className="font-semibold text-[#1A1A1A] text-[17px] mb-2 mt-6"
                  variants={fadeInUp}
                >
                  {block.text}
                </motion.h2>
              );
            }
            if (block.type === "highlight") {
              return (
                <motion.p
                  key={idx}
                  className="bg-[#F3F6FA] p-4 rounded-md text-[#1746A2] text-sm leading-relaxed mb-5"
                  variants={fadeInUp}
                >
                  {block.text}
                </motion.p>
              );
            }
            if (block.type === "list") {
              return (
                <motion.ul
                  key={idx}
                  className="list-disc pl-5 space-y-2 leading-6 text-[#495057] text-[15px] mb-5"
                  variants={fadeInUp}
                >
                  {block.items?.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </motion.ul>
              );
            }
            return null;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ArticleRead;
