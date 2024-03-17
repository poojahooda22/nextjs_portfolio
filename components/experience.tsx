"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from '@/lib/data';
import './experience.scss';
import { useTheme } from "@/context/theme-context";

export default function Experience() {

  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();


  return (
    <section 
      id='experience' ref={ref} 
      className="scroll-mt-28 mb-28 
      sm:mb-40"
    >
      <SectionHeading>
        My Experience 
      </SectionHeading>
      <VerticalTimeline 
        className="my-custom-class line-class" 
        lineColor=''
      >
        {experiencesData.map((item, index) =>  (
          <React.Fragment  key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow:  "0px 12px 16px -4px rgba(16, 24, 40, 0.08) , 0px 4px 6px -2px rgba(16, 24, 40, 0.03) ",
                border: 
                theme ==="light" ? "1px solid #e4e4e7" : "none",
                textAlign: "left",
                borderRadius: "16px",
                padding: "1.3rem 2rem",
                            
              }}
              contentArrowStyle={{
                borderRight:
                theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                  background:
                  theme === "light" ? "white" : "white",
                  fontSize: "1.5rem",
                  color: "#1f2937",
                  border: 
                  theme ==="light" ? "1px solid #e4e4e7" : "none",
                  zIndex: 
                  theme ==="light" ? "999" : "-1",                           
              }}
            >
              <h3 className="font-semibold capitalize mb-2">{item.title}</h3>
                <p className="font-normal !mt-0  mb-2">{item.location}</p>
                <p 
                  className="!mt-1 !font-normal text-gray-700  mb-2 dark:text-white/75"
                >
                  {item.description}
                </p>
            </ VerticalTimelineElement>
          </React.Fragment>
        ))}    
      </VerticalTimeline>
    </section>
  );
}
