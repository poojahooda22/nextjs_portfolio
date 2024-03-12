import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cubertoImg from "@/public/cubertonew.png";
import youtubeImg from "@/public/youtube-clone.png";
import heroSectionImg from "@/public/hero section.png";
import disneyConeImg from "@/public/disneyConeImg.png";
import webImg from "@/public/webImg.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Product Designer",
    location: "Delhi, India",
    description:
      "Led the product design management for an e-learning Mobile & Web application, overseeing the implementation of various features to enhance user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",

  },
  {
    title: "Post Graduate in Software Development",
    location: "Bangalore, India",
    description:
      "I enrolled in software development course with Upgard, also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Master in Computer Science",
    location: "London, UK",
    description:
      "I enrolled for master's in Computer Science in Liverpool John Moore's University.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Frontend Developer",
    location: "Delhi, India",
    description:
      "Developed 15+ Projects in frontend. My stack includes React, Next.js, TypeScript, Tailwind, Sanity and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Delhi, India",
    description:
      "I'm now a up skilling myself to backend developement. Learning MongoDB, MySql and much more in my pipeline.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  
] as const;

export const projectsData = [
  {
    title: "Cuberto Clone",
    description:
      "I cloned Awwwards winning website Cuberto. It's a single page website with a lot of animations and interactions.",
    tags: ["HTML", "CSS", "Javascript", "GSAP", "Locomotive"],
    imageUrl: cubertoImg,
    imagePath: "https://poojahooda22.github.io/Cuberto-newWebsite-Clone/",
  },
  {
    title: "Youtube Clone",
    description:
      "Clone of youtube homepage, with a search bar that fetches videos from the youtube API.",
    tags: ["React", "Javascript", "API", "Redux"],
    imageUrl: youtubeImg,
  },
  {
    title: "Web Page",
    description:
      "A web page that display a video and animations.",
    tags: ["HTML", "CSS", "Javascript", "GSAP"],
    imageUrl: heroSectionImg,
  },
  {
    title: "Disney+ Clone",
    description:
      "Clone the Disney+ homepage, with a slider that fetches movies from the TMDB API.",
    tags: ["React", "Next js", "Typescript", "Motion"],
    imageUrl: disneyConeImg,
  },
  {
    title: "Portfolio Website",
    description:
      "My portfolio website, built with vanilla javascript and GSAP for motion.",
    tags: ["HTML", "CSS", "Javascript", "GSAP"],
    imageUrl: webImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Sanity",
  "MongoDB",
  "Redux",
  "Framer Motion",
  "GSAP",
  "Locomotive",
  "Java",
  "p5",
  "matter.js"
] as const;