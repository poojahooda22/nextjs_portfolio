import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cubertoImg from "@/public/cubertonew.png";
import youtubeImg from "@/public/youtube-clone.png";
import heroSectionImg from "@/public/hero section.png";
import disneyNew from "@/public/disneyNew.png";
import webImg from "@/public/webNew.png";
import moveMouseImg from "@/public/moveMouse.png";
import website3d from "@/public/website3d.png";
import discord from "@/public/discord.png";
import pill_image from "@/public/pil-img.png";
import motion1 from "@/public/motion3.png";
import motion2 from "@/public/motionSig.png";
import obysPick from "@/public/obys.png";
import makeImg from '@/public/pillMake.png'
import pine from '@/public/pine.png'
import brndbt from '@/public/brndbt.png'
import airbnb from '@/public/airbnb.png'

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
      "Developed 10+ Projects in frontend. My stack includes React, Next.js, TypeScript, Tailwind, Sanity and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Delhi, India",
    description:
      "I'm now a up skilling myself to backend developement. Learning MongoDB, MySql and much more in my pipeline.",
    icon: React.createElement(FaServer),
    date: "2024 - present",
  }, 
] as const;

export const projectsData = [
  {
    title: "Cuberto Clone",
    description:
      "I made Awwwards winning website Cuberto. It's a single page website with a lot of animations and interactions.",
    tags: ["HTML", "CSS", "Javascript", "GSAP", "Locomotive"],
    imageUrl: cubertoImg,
    imagePath: "https://poojahooda22.github.io/Cuberto-newWebsite-Clone/",
  },
  {
    title: "Design Agency Website",
    description:
      "An Awwwards winning Brandbeet design studio website, with a lot of animations and interactions.",
    tags: ["Nextjs","React", "Javascript", "Framer Motion", "lenis-locomotive-scroll", "Tailwindcss", "GSAP"],
    imageUrl: brndbt,
    imagePath: "https://designwebsite-nu.vercel.app/"
  },
  {
    title: "Design Studio Clone",
    description:
      "An Awwwards winning Significo design studio website, with a lot of animations and interactions.",
    tags: ["Vite","React", "Javascript", "Framer Motion", "locomotive-scroll", "Tailwindcss", "GSAP"],
    imageUrl: motion2,
    imagePath: "https://motion-project-alpha.vercel.app/"
  },
  {
    title: "Makepill Clone",
    description:
      "An Awwwards winning Makepill studio website, with a lot of animations and interactions.",
    tags: ["Nextjs","React", "Javascript", "Framer Motion", "lenis", "Tailwindcss", "GSAP"],
    imageUrl: makeImg,
    imagePath: "https://makepill-redesign.vercel.app/"
  },  
  {
    title: "Motion Website",
    description:
      "An Awwwards winning Ochi design website, with a lot of animations and interactions.",
    tags: ["Vite","React", "Typescript", "Framer Motion", "locomotive-scroll", "Tailwindcss", 'GSAP'],
    imageUrl: motion1,
    imagePath: "https://motion-website-rose.vercel.app/"
  },
  {
    title: "Obys Agency Clone",
    description:
      "An Awwwards winning Obys design website, with a lot of animations and interactions.",
    tags: ["Vite","React", "Javascript", "Framer Motion", "locomotive-scroll", "Tailwindcss", 'GSAP'],
    imageUrl: obysPick,
    imagePath: "https://obys-clone-ten.vercel.app/"
  },
  {
    title: "Youtube Clone",
    description:
      "Clone of youtube homepage, with a search bar that fetches videos from the youtube API.",
    tags: ["React", "Javascript", "API", "Redux"],
    imageUrl: youtubeImg,
    imagePath: "https://poojahooda22.github.io/youtube-clone/"
  },
  {
    title: "Portfolio Website",
    description:
      "My portfolio website, built with vanilla javascript and GSAP for motion.",
    tags: ["HTML", "CSS", "Javascript", "GSAP"],
    imageUrl: webImg,
    imagePath: "https://poojahooda22.github.io/modern-website/"
  },
  {
    title: "Disney+ Clone",
    description:
      "Clone the Disney+ homepage, with a slider that fetches movies from the TMDB API.",
    tags: ["React", "Next js", "Typescript", "Motion"],
    imageUrl: disneyNew,
    imagePath: "https://disney-clone-eight-azure.vercel.app/"
  },
  {
    title: "Three js Website",
    description:
      "A 3D website with animations and interactions. Used prismic for dynamic content slides.",
    tags: ["React", "Next js", "Typescript", "Three.js", "Prismic", "Framer Motion"],
    imageUrl: website3d,
    imagePath: "https://pooja-portfolio-pink.vercel.app/"
  }, 
  {
    title: "Discord Web App",
    description:
      "Integrated PlanetScale and Prisma/client for seamless database management and employed planetscale with mysql.",
    tags: ["React", "Next js", "Typescript", "Prisma", "Tailwind", "Mysql", "Zustand", "Socket.io" ],
    imageUrl: discord,
    imagePath: "https://discord-clone-git-master-pooja-hoodas-projects.vercel.app/"
  },
  {
    title: "Airbnb Web App",
    description:
      "It is a clone of Airbnb website, with a search bar that fetches hotels from the API.",
    tags: ["React", "Next js", "Typescript", "Three.js", "Prismic", "Framer Motion"],
    imageUrl: airbnb,
    imagePath: "https://airbnb-video-seven.vercel.app/"
  },
  {
    title: "Landing Page",
    description:
      "A web page that display a video and animations.",
    tags: ["HTML", "CSS", "Javascript", "GSAP"],
    imageUrl: heroSectionImg,
    imagePath: "https://poojahooda22.github.io/landing-page-03/"
  },
  {
    title: "Webpage 3D Rotation Animation",
    description:
      "A web page that display a title and 3D rotation animation.",
    tags: ["React", "Javascript", "GSAP", "Framer-motion"],
    imageUrl: pine,
    imagePath: "https://webpage-3danime.vercel.app/"
  },
  {
    title: "GSAP Animation",
    description:
      "A webpage featuring animations, where images emerge from the bottom to the top as the mouse is moved.",
    tags: ["HTML", "CSS", "Javascript", "GSAP"],
    imageUrl: moveMouseImg,
    imagePath: "https://poojahooda22.github.io/mousemove-images-animation/"
  },
  {
    title: "Text-pill Animation",
    description:
      "A webpage featuring animations, where text pills emerge from the top to the bottom and move via mouse move.",
    tags: ["HTML", "CSS", "Javascript", "P5", "Matter.js"],
    imageUrl: pill_image,
    imagePath: "https://poojahooda22.github.io/pill-text-animate/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Nextjs",
  "Nodejs",
  "Git",
  "TailwindCSS",
  "Sanity",
  "MongoDB",
  "MySql",
  "Redux",
  "Framer Motion",
  "GSAP",
  "Locomotive",
  "Java",
  "p5",
  "matter.js",
  "Three js",
  "Prismic",
  "Git",
  "Github",
  "Postman"
] as const;