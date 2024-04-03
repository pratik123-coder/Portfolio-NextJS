"use client";
import React, { useState, useRef } from "react";

import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image"; // Import Image component from next/image

const projectsData = [
  {
    title: "Project 1",
    href: "https://example.com/project1",
    tag: ["All", "Web"],
    description: "Description of Project 1.",
    imageSrc: "/images/projects/3.png", 
  },
  {
    title: "Project 2",
    href: "https://example.com/project2",
    tag: ["All", "Mobile"],
    description: "Description of Project 2.",
    imageSrc: "/images/projects/4.png",
  },
  {
    title: "Project 3",
    href: "https://example.com/project3",
    tag: ["All", "Web"],
    description: "Description of Project 3.",
    imageSrc: "/images/projects/5.png", 
  },
  {
    title: "Project 4",
    href: "https://example.com/project4",
    tag: ["All", "Mobile"],
    description: "Description of Project 4.",
    imageSrc: "/images/projects/6.png", 
  },
  {
    title: "Project 5",
    href: "https://example.com/project4",
    tag: ["All", "Mobile"],
    description: "Description of Project 4.",
    imageSrc: "/images/projects/2.png", 
  },
  {
    title: "Project 5",
    href: "https://example.com/project4",
    tag: ["All", "Mobile"],
    description: "Description of Project 4.",
    imageSrc: "/images/projects/1.png", 
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h1 className="md:text-5xl text-3xl lg:text-7xl p-12 font-bold text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20">
        My Projects
      </h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 justify-center items-center">
        {filteredProjects.map((project, index) => (
          <PinContainer key={index} title={project.title} href={project.href}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {project.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{project.description}</span>
              </div>
              <div className="relative w-full h-full rounded-lg mt-4 overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </PinContainer>
          
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
