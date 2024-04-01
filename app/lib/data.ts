import React from "react";
import BWB from "@/public/BWB.jpg";
import FiT from "@/public/FiT.jpg";
import CS50SL from "@/public/CS50SL.jpg";

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  export const projectsData = [
    {
      title: "Breathe with Bella",
      description:
        "My first project - a breathwork web application featuring the calming animation of a sleeping cat.",
      tags: ["JavaScript", "HTML", "CSS"],
      imageURL: BWB,
    },
    {
      title: "CS50W project - TBC",
      description:
        "I'm currently working through my next course - CS50 Web Programming with Javascript and Python. For my final project, I plan to make a Menstruation Cycle tracker, using Django.",
      tags: ["Django", "Python"],
      imageURL: FiT,
    },
    {
      title: "This website!",
      description:
        "This website has been a project in itself! My first hosted website, and first time testing out Next.js.",
      tags: ["Next.js", "React", "Web-hosting"],
      imageURL: CS50SL,
    },
    
  ] as const;
  
  export const skillsData = [
    "JavaScript",
    "Python",
    "C",
    "Django",
    "SQL",
    "Next.js", 
    "HTML",
    "CSS",
    "Tailwind",
    "TypeScript",
    "React",
    "Git",
  ] as const;