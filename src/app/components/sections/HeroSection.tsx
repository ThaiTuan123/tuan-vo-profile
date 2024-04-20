"use client";
import React, { use, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import scrollDown from "../../../../public/gifs/scroll-down.gif";

const HeroSection = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants: Variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 5,
      },
    },
  };

  const hero = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const scrollToBelow = () => {
    window.scrollTo({
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      className="pt-20 mx-auto px-12 h-full w-full bg-gradient-to-br from-gray-900 to-black"
      ref={targetRef}
    >
      <motion.div className="lg:grid lg:grid-cols-12 sm:grid-cols-1 ">
        <motion.div
          style={{ scale, transform: "translate(-50%, 0%)" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <motion.h1
            variants={textVariants}
            className="text-white mb-4 text-2xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold"
          >
            <motion.span
              variants={textVariants}
              className=" bg-clip-text bg-gradient-to-br from purple-500 to-pink-500"
            >
              HI THERE, I&apos;M <span className="text-yellow-500">TUAN</span>
            </motion.span>
            <br></br>
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER ",
                1000,
                "MOBILE DEVELOPER",
                1000,
                "UI/UX DESIGNER ",
                1000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
          >
            I create elevating digital experiences that inspire and connect with
            people through development and design.
          </motion.p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-4 sm:place-self-center sm:justify-center mt-4 lg:mt-0"
        >
          <motion.div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </motion.div>
          {/* <motion.div
            className="slidingTextContainer relative left-0 bottom-20 text-8xl whitespace-nowrap text-coolGray-600 z-20 "
            variants={sliderVariants}
            transition={{ duration: 0.5 }}
            animate="animate"
            initial="initial"
          >
            Welcome to Tuan's Portfolio Welcome to Tuan's Portfolio Welcome to
            Tuan's Portfolio Welcome to Tuan's Portfolio
          </motion.div> */}
        </motion.div>
      </motion.div>
      <motion.div className="relative right-0 left-0 bottom-0 flex justify-center items-center w-full ">
        <Link href={"/#about"} onClick={scrollToBelow}>
          <Image
            width={40}
            height={40}
            className="pt-3"
            src={scrollDown}
            alt="Scroll to top"
          />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
