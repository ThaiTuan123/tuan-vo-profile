"use client";
import { useRef } from "react";
//import "../../components/sections/PallaxSection.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import imgMountain from "../../../../public/images/mountain.png";
import imgStar from "../../../../public/images/stars.png";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <div
      className="parallax w-full h-screen relative "
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <div
        className="z-20 flex justify-center text-center items-center w-full h-50 absolute top-1/2 transform -translate-y-1/2"
        style={{ y: yText }}
      >
        <motion.svg
          className="hidden sm:block sm:scale-125 xl:scale-[200%] transition-none"
          width="16"
          height="16"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ rotate: 180 }}
          initial={{ width: 16, height: 16 }} 
          animate={{ width: 16, height: 16 }} 
          transition={{ rotate: { duration: 0.3 } }} 
        >
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
            fill="#eab308"
          ></motion.path>
        </motion.svg>
        <h1 className="text-5xl font-bold text-white mb-4 px-10 up">{type === "aboutUs" ? "ABOUT US" : "MY PROJECTS"}</h1>
        <motion.svg
          className="hidden sm:block sm:scale-125 xl:scale-[200%] transition-none"
          width="16"
          height="16"
          viewBox="0 0 32 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ rotate: 180 }}
          initial={{ width: 16, height: 16 }} 
          animate={{ width: 16, height: 16 }} 
          transition={{ rotate: { duration: 0.3 } }} 
        >
          <motion.path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
            fill="#eab308"
          ></motion.path>
        </motion.svg>
      </div>
      <motion.div
        className="mountains w-full h-full absolute bottom-0 z-10 overflow-hidden  "
        style={{ y: yBg }}
      >
        <Image
          src={imgMountain}
          alt="mountain"
          layout="fill" // Fill the parent container
          objectFit="cover"
        />
      </motion.div>
      <motion.div
      >
        <Image
          src={imgMountain}
          alt="mountain"
          layout="fill" // Fill the parent container
          objectFit="cover"
        />
      </motion.div>
      <motion.div className="stars z-0">
      <Image
          src={imgStar}
          style={{ y: yBg }}
          alt="star"
          layout="fill" // Fill the parent container
          objectFit="cover"
        />
      </motion.div>
    </div>
  );
};

export default Parallax;
