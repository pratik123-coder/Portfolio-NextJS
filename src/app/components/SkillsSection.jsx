"use client";
import React, { useState, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import SkillBox from "./SkillBox";



const SkillSection = () => {


  return (
    <section id="skills">
      <h1 className="md:text-5xl text-3xl lg:text-7xl pt-12 font-bold text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20">
        My Skills
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 md:-mx-2">
      <CardContainer className="inter-var p-4">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#131313] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-lg text-neutral-600 dark:text-white"
            >
              Web Programming
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2"
            >
              <div className=" flex items-center justify-center gap-4 pt-2">
              <SkillBox
                backgroundColor="bg-orange-400"
                textColor="text-white"
                logo="/images/skills/html.svg"
                name="HTML" />
              <SkillBox
                backgroundColor="bg-blue-500"
                textColor="text-white"
                logo="/images/skills/css.svg"
                name="CSS" />
              <SkillBox
                backgroundColor="bg-yellow-400"
                textColor="text-white"
                logo="/images/skills/js.svg"
                name="JavaScript" />
                </div>
                <div className=" flex items-center justify-start gap-4 pt-3">
                  <SkillBox
                backgroundColor="bg-[#2F74C0]"
                textColor="text-white"
                logo="/images/skills/typescript.svg"
                name="TypeScript" />
                <SkillBox
                backgroundColor="bg-[#70C8D6]"
                textColor="text-white"
                logo="/images/skills/go-lang.png"
                name="Go" />
                </div>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var p-4">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#131313] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-lg text-neutral-600 dark:text-white"
            >
              Frontend
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2 flex items-center justify-center gap-4 pt-2"
            >
              <SkillBox
                backgroundColor="bg-blue-400"
                textColor="text-black"
                logo="/images/skills/react.svg"
                name="ReactJS" />
              <SkillBox
                backgroundColor="bg-black"
                textColor="text-white"
                logo="/images/skills/nextjs.svg"
                name="NextJS" />
              <SkillBox
                backgroundColor="bg-purple-700"
                textColor="text-white"
                logo="/images/skills/redux.svg"
                name="Redux" />
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var p-4">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#131313] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-lg  text-neutral-600 dark:text-white"
            >
              Backend
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2 flex items-center justify-center gap-4 pt-2"
            >
               <SkillBox
                backgroundColor="bg-[#3C823B]"
                textColor="text-white"
                logo="/images/skills/nodejs.svg"
                name="NodeJS" />
                <SkillBox
                backgroundColor="bg-yellow-500"
                textColor="text-white"
                logo="/images/skills/express.svg"
                name="ExpressJS" />
                <SkillBox
                backgroundColor="bg-[#7377AD]"
                textColor="text-white"
                logo="/images/skills/php.svg"
                name="PHP" />
            </CardItem>

          </CardBody>
          
        </CardContainer>
        <CardContainer className="inter-var p-4">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#131313] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-lg  text-neutral-600 dark:text-white"
            >
              Backend
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2 flex items-center justify-center gap-4 pt-2"
            >
               <SkillBox
                backgroundColor="bg-[#3C823B]"
                textColor="text-white"
                logo="/images/skills/nodejs.svg"
                name="NodeJS" />
                <SkillBox
                backgroundColor="bg-yellow-500"
                textColor="text-white"
                logo="/images/skills/express.svg"
                name="ExpressJS" />
                <SkillBox
                backgroundColor="bg-[#7377AD]"
                textColor="text-white"
                logo="/images/skills/php.svg"
                name="PHP" />
            </CardItem>

          </CardBody>
          
        </CardContainer>
        
        
        
        
      </div>

    </section>
  );
};

export default SkillSection;
