"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { cn } from "../../../utils/cn";
import { Button } from "./ui/moving-border";
import SkillBox from "./SkillBox";

const HeroSection = () => {
  const logo = {
    src: "/public/images/skills/react.svg",
    width: 200,
    height: 200,
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Pratik Mohanty",
                2000,
                "Web Developer",
                1000,
                "Content Creator",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            A black screen coder who finds joy in coding and passion in content creation.
            <br />
            For every problem in life, let&apos;s develop software to tackle it - that&apos;s my motto.
          </p>
          <div>
            <Link href="/" className="px-1 inline-block py-1 w-full sm:w-fit mt-3">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-gray-800"
              >
                Download CV
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero.jpg"
              alt="hero image"
              className="absolute top-0 left-0 w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </motion.div>
        {/* <SkillBox
          backgroundColor="bg-blue-400"
          textColor="text-black"
          logo="/images/skills/react.svg"
          name="React"
        /> */}
      </div>
    </section>
  );
};

export default HeroSection;