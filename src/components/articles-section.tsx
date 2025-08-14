"use client";
import { useState } from "react";
import { ArrowDown, Clock, Link2, LucideLink, Newspaper } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import { articleList, selarArticle } from "@/lib/constants/article";
import { calculateReadTime } from "./article-read";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const tabs = [
  "All",
  "Educational Resources",
  "Business Growth",
  "Career Advice",
  "Market Trends",
];

export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const allArticles = [...selarArticle, ...articleList];

const getArticleImage = (article: any) => {
  if (article.image) return article.image;
  if (article.isExternal) return `/selar/${article.id}.png`;
  return `/images/approach${article.id}.svg`;
};

const ArticlesSection = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();

  // Filter articles based on active tab
  const filteredArticles = allArticles.filter(article => {
    if (active === 0) return true; // Show all for "All" tab
    
    // Handle case where article might not have category
    if (!article.category) return false;
    
    // Special case for "Educational Resources" which includes "E-commerce" and "Digital Products"
    if (tabs[active] === "Educational Resources") {
      return article.category === "E-commerce" || 
             article.category === "Digital Products" ||
             article.category === "Educational Resources";
    }
    
    return article.category === tabs[active];
  });

  return (
    <div className="bg-[#F7F7F7] py-5 lg:py-8 overflow-hidden">
      <motion.div
        className="tabs py-2 border-b px-4 lg:px-[119px] border-[#EFF2F3] mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div className="flex items-center gap-5" variants={fadeInUp}>
          {tabs.map((tab, index) => (
            <motion.div
              key={tab}
              onClick={() => setActive(index)}
              className={clsx(
                "text-sm cursor-pointer pb-2 relative transition-colors",
                active === index
                  ? "text-[#1A1A1A] font-medium"
                  : "text-[#878A93] hover:text-[#1A1A1A]"
              )}
              variants={fadeInUp}
            >
              {tab}
              {active === index && (
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#1746A2] rounded-sm" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex px-4 lg:px-[119px] items-center justify-center gap-6 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        {filteredArticles.map((article) => {
          const readTime = calculateReadTime(article.content);
          return (
            <motion.div
              key={article.id}
              variants={fadeInUp}
              className="card lg:w-[370px] h-full rounded-3xl p-6 bg-[#FFFFFF]"
            >
              {article.isExternal ? (
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="top flex flex-col gap-1 mb-2">
                    <div
                      className="img relative rounded-[16px] bg-cover bg-center lg:w-[322px] h-[207px]"
                      style={{
                        backgroundImage: `url(${getArticleImage(article)})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="absolute top-2 right-2 p-2 items-center flex gap-1 bg-[#1746A2] text-white rounded-3xl">
                        <LucideLink className="w-[13.33px] h-[13.33px]" />
                        <span className=" text-xs font-bold">
                          Course
                        </span>
                      </div>
                      {/* <div className="absolute top-2 left-2 p-2 font-bold flex gap-1 bg-[#EFF6FB96] rounded-3xl">
                        <span className="text-[#1746A2] text-xs">
                          {readTime}
                        </span>
                      </div> */}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm lg:text-base font-normal text-[#6C757D]">
                        {article.date}
                      </span>
                      <span className="text-sm capitalize lg:text-base font-normal text-[#1746A2]">
                        by {article.author}
                      </span>
                    </div>
                  </div>
                  <span className="text-[#0E1426] text-sm lg:text-[16px] font-normal line-clamp-2">
                    {article.title}
                  </span>
                </a>
              ) : (
                <Link href={`/growth-hub/${article.id}`}>
                  <div className="top flex flex-col gap-1 mb-2">
                    <div
                      className="img relative rounded-[16px] bg-cover bg-center lg:w-[322px] h-[207px]"
                      style={{
                        backgroundImage: `url(${"/images/article1.svg"})`,
                      }}
                    >
                      <div className="absolute bottom-2 right-2 p-2 items-center flex gap-1 bg-[#FBFCFC] rounded-3xl">
                        <Clock className="w-[13.33px] h-[13.33px]" />
                        <span className="text-[#8c8c8c] text-xs font-bold">
                          {readTime}
                        </span>
                      </div>
                      <div className="absolute top-2 left-2 p-2 font-bold flex items-center gap-1 bg-[#1746A2] rounded-3xl">
                        <Newspaper className="w-[13.33px] h-[13.33px] text-white" />
                        <span className="text-white text-xs">
                          Blog
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm lg:text-base font-normal text-[#6C757D]">
                        {article.date}
                      </span>
                      <span className="text-sm capitalize lg:text-base font-normal text-[#1746A2]">
                        by {article.author}
                      </span>
                    </div>
                  </div>
                  <span className="text-[#0E1426] text-sm lg:text-[16px] font-normal line-clamp-2">
                    {article.title}
                  </span>
                </Link>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Newsletter Section - unchanged */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-6xl py-4 md:py-10 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center lg:text-left max-w-[360px]"
          variants={fadeInUp}
        >
          <span className="text-xl md:text-2xl font-semibold text-[#2F2F2F]">
            <span className="text-[#1746A2]">Download</span> our free guide on
            Business Strategy and Planning, Get other free tools
          </span>
        </motion.div>

        <motion.form
          variants={fadeInUp}
          className="w-full lg:w-[545px] flex items-center border lg:h-[68px] border-[#D1DAEC] rounded-full overflow-hidden px-2 py-1 bg-[#F7F7F7]"
        >
          <input
            type="email"
            placeholder="mayorsuleimankhan1@gmail.com"
            className="flex-grow px-4 py-3 outline-none text-sm placeholder:text-gray-400"
          />

          <Button
            onClick={() =>
              router.push(
                "https://drive.google.com/file/d/1Np6daaWnuW8BJfp-5N-7oJlb3DJWr-Dn/view?usp=drivesdk"
              )
            }
            className="rounded-full bg-[#1746A2] text-white px-6 py-3 text-sm font-semibold flex items-center gap-2"
          >
            Download <ArrowDown className="w-4 h-4" />
          </Button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ArticlesSection;
