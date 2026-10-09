"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { FloatingNav } from './ui/FloatingNavbar'
import ShimmerButton from './ui/ShimmerButton'

const Hero = () => {
  const resumeUrl = "/Ayush_Hrishikesh_Mishra_Resume.pdf";
  const resumeName = "Ayush_Hrishikesh_Mishra_Resume.pdf";

  return (

    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#6699CC"
        />
        <Spotlight
          className="h-[90vh] w-[40vw] top-20 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[70vw]" fill="blue" />
      </div>

      
      
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.07] bg-grid-black-100/[0.3]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-4">
          <TextGenerateEffect
            words="Hi! I'm Ayush Mishra"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="uppercase tracking-widest text-md text-center text-blue-100 max-w-80">
            Data Scientist & AI Engineer
          </p>

          <p className="text-center md:tracking-wider text-sm md:text-md lg:text-xl">
            Building intelligent LLM workflows and scalable AI-driven applications.
          </p>

          <a href={resumeUrl} download={resumeName}>
            <ShimmerButton
              title="Download my Resume"
              position="right" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero