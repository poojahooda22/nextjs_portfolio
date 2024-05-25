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
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a master's course with<span className="font-medium"> Upgrad</span> and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . Recently, I have expanded my skill set to include backend development, completing two projects in this domain with plans to complete five more. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a full-stack
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching anime, and playing with my dog.{" "}
        <span className="font-medium"></span>{" "}
        <span className="font-medium"></span>
      </p> 
    </motion.section>
  )
}
