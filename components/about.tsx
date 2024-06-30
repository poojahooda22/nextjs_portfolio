"use client";

import React, { useEffect} from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 
      sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.175}}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I gathered significant experience in design, where I found my passion for
        <span className="font-medium"> programming </span>{" "}
        <span className=""> and learned full-stack web development.  My favorite part of programming</span> is the
        problem-solving aspect, and I <span className="underline">love</span> developing creative websites and applications with micro-interactions and animations that provide a delightful user experience.
        {" "} I have good knowledge of product design and development. 
        <span className="font-medium"> My core stack is React, Next.js, Node.js, MongoDB and GSAP
        </span>
         {" "}
        <span className="font-medium"></span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching anime, and playing with my dog.{" "}
        <span className="font-medium"></span>{" "}
        <span className="font-medium"></span>
      </p> 
    </motion.section>
  )
}
