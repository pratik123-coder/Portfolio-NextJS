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
      <div className="flex flex-wrap items-center justify-center gap-2 md:-mx-2 border border-red-500 space-y-2 sm:space-y-0 sm:space-x-2">
      <CardContainer className="inter-var p-2 border border-red-500">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#131313] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border flex flex-col items-center justify-center">
            <CardItem
              translateZ="50"
              className="text-lg text-neutral-600 dark:text-white "
            >
              Programming
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2"
            >
              <div className=" flex flex-wrap items-center justify-center gap-4 pt-2">
                <SkillBox
                  backgroundColor="bg-blue-500"
                  textColor="text-white"
                  logo="/images/skills/c.png"
                  name="C Programming"
                />
                <SkillBox
                  backgroundColor="bg-blue-500"
                  textColor="text-white"
                  logo="/images/skills/cpp.svg"
                  name="C++"
                />
                <SkillBox
                  backgroundColor="bg-[#376C99]"
                  textColor="text-white"
                  logo="/images/skills/python.svg"
                  name="Python"
                />
                <SkillBox
                  backgroundColor="bg-[#507E9C]"
                  textColor="text-white"
                  logo="/images/skills/java.svg"
                  name="Java"
                />
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

                  <SkillBox
                backgroundColor="bg-[#2F74C0]"
                textColor="text-white"
                logo="/images/skills/typescript.svg"
                name="TypeScript" />
                <SkillBox
                backgroundColor="bg-[#70C8D6]"
                textColor="text-white"
                logo="/images/skills/go-lang.png"
                name="Go Lang" />
                </div>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var p-2">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#131313] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border flex flex-col items-center justify-center">
            <CardItem
              translateZ="50"
              className="text-lg text-neutral-600 dark:text-white"
            >
              Frontend
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2 flex flex-wrap items-center justify-center gap-4 pt-2"
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
                <SkillBox
                backgroundColor="bg-black"
                textColor="text-white"
                logo="/images/skills/ace.webp"
                name="Aceternitiy UI" />
                <SkillBox
                backgroundColor="bg-[#38BDF8]"
                textColor="text-white"
                logo="/images/skills/tailwindcss.svg"
                name="Tailwind CSS" />
                <SkillBox
                backgroundColor="bg-pink-500"
                textColor="text-white"
                logo="/images/skills/scss.svg"
                name="SCSS" />
                <SkillBox
                backgroundColor="bg-black"
                textColor="text-white"
                logo="/images/skills/framer.svg"
                name="Framer Motion" />
                <SkillBox
                backgroundColor="bg-[#007FFF]"
                textColor="text-white"
                logo="/images/skills/materialui.svg"
                name="Material UI" />
                <SkillBox
                backgroundColor="bg-black"
                textColor="text-white"
                logo="/images/skills/shadcn.svg"
                name="Shadcn UI" />
                
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var p-2">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#131313] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border flex flex-col items-center justify-center">
            <CardItem
              translateZ="50"
              className="text-lg  text-neutral-600 dark:text-white"
            >
              Backend
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2 flex flex-wrap items-center justify-center gap-4 pt-2"
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
                <SkillBox
                backgroundColor="bg-red-500"
                textColor="text-white"
                logo="/images/skills/sql.svg"
                name="MySQL" />
                <SkillBox
                backgroundColor="bg-[#69F65B]"
                textColor="text-white"
                logo="/images/skills/neondb.svg"
                name="NeonDB" />
                <SkillBox
                backgroundColor="bg-green-500"
                textColor="text-white"
                logo="/images/skills/mongodb.svg"
                name="MongoDB" />
                <SkillBox
                backgroundColor="bg-[#3B6594]"
                textColor="text-white"
                logo="/images/skills/postgres.svg"
                name="Postgres" />
                <SkillBox
                backgroundColor="bg-[#44D092]"
                textColor="text-white"
                logo="/images/skills/supabase.svg"
                name="SupaBase" />
                
            </CardItem>

          </CardBody>
          
        </CardContainer>
        <CardContainer className="inter-var p-2">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#131313] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border flex flex-col items-center justify-center">
            <CardItem
              translateZ="50"
              className="text-lg  text-neutral-600 dark:text-white"
            >
              Tools
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2 flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <SkillBox
                backgroundColor="bg-[#47AEF3]"
                textColor="text-white"
                logo="/images/skills/vscode.svg"
                name="VS Code" />
               <SkillBox
                backgroundColor="bg-blue-500"
                textColor="text-white"
                logo="/images/skills/adobeps.svg"
                name="PhotoShop" />
                <SkillBox
                backgroundColor="bg-purple-600"
                textColor="text-white"
                logo="/images/skills/adobeae.svg"
                name="AfterEffects" />
                <SkillBox
                backgroundColor="bg-cyan-500"
                textColor="text-white"
                logo="/images/skills/adobelr.png"
                name="Lightroom" />
                <SkillBox
                backgroundColor="bg-purple-700"
                textColor="text-white"
                logo="/images/skills/adobepp.svg"
                name="Premire Pro" />
                <SkillBox
                backgroundColor="bg-[#FF7767]"
                textColor="text-white"
                logo="/images/skills/figma.svg"
                name="Figma" />
            </CardItem>

          </CardBody>
          
        </CardContainer>
        <CardContainer className="inter-var p-2">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#131313] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border flex flex-col items-center justify-center">
            <CardItem
              translateZ="50"
              className="text-lg  text-neutral-600 dark:text-white"
            >
              Platforms
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="max-w-sm mt-2 flex flex-wrap items-center justify-center gap-4 pt-2"
            >
               <SkillBox
                backgroundColor="bg-white"
                textColor="black"
                logo="/images/skills/cloud.svg"
                name="Google Cloud" />
                <SkillBox
                backgroundColor="bg-gray-500"
                textColor="text-white"
                logo="/images/skills/vercel.svg"
                name="Vercel" />
                <SkillBox
                backgroundColor="bg-[#F79C28]"
                textColor="text-white"
                logo="/images/skills/aws.svg"
                name="AWS" />
                <SkillBox
                backgroundColor="bg-[#1CA2DC]"
                textColor="text-white"
                logo="/images/skills/docker.svg"
                name="Docker" />
                <SkillBox
                backgroundColor="bg-[#FD713E]"
                textColor="text-white"
                logo="/images/skills/postman.svg"
                name="Postman" />
            </CardItem>

          </CardBody>
          
        </CardContainer>
        
        
        
      </div>

    </section>
  );
};

export default SkillSection;
