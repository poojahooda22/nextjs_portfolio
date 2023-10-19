"use client";


import React, { useEffect} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Intro() {

    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  
  return (
    <section 
        ref={ref} id='home' 
        className=' mb-28 max-w-[50rem] text-center 
    sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image 
                        src="https://images.unsplash.com/photo-1692035053386-76667a66067a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxNHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" alt="Pooja"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                    />
                </motion.div>
                <motion.span className='absolute bottom-0 right-0 text-2xl'
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}
                >
                    👋
                </motion.span>
            </div>
        </div>

        <motion.h1 
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
        >
            <span className='font-bold'>Hello, I'm Pooja.</span> I'm a{" "}<span className='font-bold'>frontend developer, </span> enjoy building <span className='italic'> websites and apps</span> with a lot of<span className='font-bold'> animations and effects</span>. My focus is<span className='underline'> React (Next.js)</span>.
        </motion.h1>

        <motion.div 
            className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{
                delay: 0.1,
            }}
        >
            <Link 
                href="#contact"
                className='group bg-gray-900 text-white px-7 
                py-3 flex items-center gap-2 rounded-full
                outline-none focus:scale-110 hover:scale-110
                hover:bg-gray-950 active:scale-105
                transition'
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                  }}
            >
                Contact me here <BsArrowRight 
                className='opacity-70 group-hover:translate-x-1 transition'/>                
            </Link>
            <a
                className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                hover:bg-white active:scale-105
                transition cursor-pointer dark:bg-white/10' href='/CV.pdf' download
            >Download CV <HiDownload className='opacity-70 group-hover:translate-1 transition' />
            </a>
            <a 
                className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
                transition border-black/10  dark:bg-white/10 dark:text-white/60' href='https://www.linkedin.com/in/pooja-hooda-21b473124/' target='_blank'
            >
                <BsLinkedin />
            </a>
            <a 
                className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
                transition border-black/10 dark:bg-white/10 dark:text-white/60' href='https://github.com/poojahooda22' target='_blank'
            >
                <BsGithub />
            </a>
        </motion.div>
    </section>
  )
}
