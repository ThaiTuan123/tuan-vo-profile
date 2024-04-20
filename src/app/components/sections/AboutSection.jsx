"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../TabButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBolt, FaReact, FaCrown, FaJs, FaJava } from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="text-black flex flex-wrap">
        <li className="w-full md:w-auto p-4    flex items-center justify-between md:mr-0 md: mb-2 md:mb-0">
          Flutter
          <FaBolt className="ml-2" color="#61DBFB" />
        </li>
        <li className="w-full md:w-auto p-4    flex items-center justify-between md:mx-0 mt-2 md:mt-0">
          React
          <FaReact className="ml-2" color="#61DBFB" />
        </li>
        <li className="w-full md:w-auto p-4    flex items-center justify-between md:mx-0 mt-2 md:mt-0">
          Kotlin
          <FaCrown className="ml-2" color="#888888" />
        </li>
        <li className="w-full md:w-auto p-4   flex items-center justify-between md:mx-0 mt-2 md:mt-0">
          JavaScript
          <FaJs className="ml-2" color="#F0DB4F" />
        </li>
        <li className="w-full md:w-auto p-4    flex items-center justify-between md:mx-0 mt-2 md:mt-0">
          Java
          <FaJava className="ml-2" color="#F0DB4F" />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-black">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-black">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const ImageContainer = () => {
    return (
      <div className="relative">
        <div className="md:hidden">
          <Image
            alt="About Image"
            src="/images/hero-image.png"
            width={250}
            height={200}
          />
        </div>
        <div className="hidden md:block">
          <Image
            alt="About Image"
            src="/images/hero-image.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    );
  };
  

  return (
    <section className="text-black bg-gray-400 h-full pt-20" id="about">
      <div className="md:grid md:grid-cols-2 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <ImageContainer />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">
            A brief intro, who am I?
          </h2>
          <p className=" text-black text-base lg:text-lg">
            I am a versatile software developer with over two years of
            experience in both mobile application development, specializing in
            Java, Kotlin, and Flutter, as well as WordPress web development. In
            mobile app development, I've honed my skills in Java, Kotlin, and
            Flutter, while in WordPress, I've demonstrated proficiency in all
            aspects of website creation, from design to plug-in implementation.
            My track record reflects a results-driven approach, consistently
            exceeding expectations in web development initiatives..
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
