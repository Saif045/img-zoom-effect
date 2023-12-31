"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSearchParams } from "next/navigation";
import ScrollForMore from "@/components/scrollForMore";

const Page = () => {
  const SearchParams = useSearchParams();
  const x = SearchParams.get("x");
  const topParam = SearchParams.get("top");

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <motion.div
      className="single"
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="app-container fluid w-full">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.2,
                  duration: 1.4,
                },
              }}
              className="details  sm:!flex ">
              <div className="location ">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className="mua">MUA: @mylifeascrystall</div>
            </motion.div>
            <motion.div className="model">
              <motion.span className="first" variants={firstName}>
                <motion.span variants={letter}>Y</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </motion.span>
              <motion.span className="last" variants={lastName}>
                <motion.span variants={letter}>T</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>q</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <motion.div
              initial={{
                top: topParam ? topParam + "px" : 0,
                x: x ? x + "px" : 0,
                width: 524,
                height: 650,
              }}
              animate={{
                top: "50%",
                x: 0,
                width: "100%",
                height: "50vh",
                transition: { delay: 0.2, ...transition },
              }}
              className="thumbnail-single">
              <motion.div
                className="frame-single"
                whileHover="hover"
                transition={transition}>
                <motion.img
                  src={"/yasmeen.webp"}
                  placeholder={"/compressed-image.jpg"}
                  alt="an image"
                  style={{ scale: scale }}
                  initial={{ scale: 1.0 }}
                  animate={{
                    transition: { delay: 0.2, ...transition },
                    y: 0,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="app-container">
          <div className="row">
            <h2 className="title">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
              Malorum&quot; (The Extremes of Good and Evil) by Cicero, written
              in 45 BC. This book is a treatise on the theory of ethics, very
              popular during the Renaissance. The first line of Lorem Ipsum,
              &ldquo;Lorem ipsum dolor sit amet..&rdquo;, comes from a line in
              section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    //@ts-ignore
    transition: { duration: 1, ...transition },
  },
};
