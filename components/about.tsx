"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from "@/app/lib/hooks";

export default function About() {
  const { ref } = useSectionInView ("About"); 

  return ( 
  <motion.section 
    ref={ref}
    id="about"
    className="mb-5 max-w-[45rem] text-center leading-8 sm:mb-2 scroll-mt-5"
    initial={{ opacity: 0, y:100 }}
    animate={{ opacity:1, y:0 }}
    transition= {{delay: 0.175 }}
    
  >
       <SectionHeading>About Me</SectionHeading>
    <p className="mb-">
        In 2022, I decided to try out programming as a hobby, with the long-term aspiration to build <span className="font-medium">audio effect plugins</span> .
        I enrolled in Harvard's <span className="font-medium">
        CS50 - Introduction to Computer Science</span> online course and was hooked. My favorite part of programming is the <span className="italic">
        creative problem-solving </span>
        aspect. I embrace the struggle of difficult problems and find contentment in solving them step-by-step in a <span className="underline">
        logical</span> way.
    </p>
    <p className="mb-3">
        I have a fondness for <span className="font-medium">C</span> since it was the first language I learnt,
         fell in love with JavaScript whilst building my first project - Breathe with Bella, but have become most familiar with Python. 
    </p>
    <p className="mb-3">
          I am currently looking for a <span className="font-medium">full-time position</span> as a software developer, in an organisation 
          which welcomes enthusiasm to learn.
    </p>
    <p className="mb-3">
    In my spare time, I love creating <span className="font-medium">music, </span>and unwinding by practicing <span className="font-medium"> 
    yoga </span> and <span className="font-medium"> reading </span>. Next on my list to learn are:  
    <span className="font-medium"> C++ and Java</span>.
    </p>
  </motion.section>
   
  );
}
