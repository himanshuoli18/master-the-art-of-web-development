"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Himanshu Oli",
    designation: "Software Engineer",
    image: "https://media.licdn.com/dms/image/D5603AQHc4imIRGpjJg/profile-displayphoto-shrink_400_400/0/1709582836475?e=1717027200&v=beta&t=e6WDwOX6UBgGLpY2zwQ0CyMUcNw5xjcDvpxjZYMigh0"  
  },
];
export function AboutSection() {
  return (
    <div className="relative h-[50rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet the Developer</h2>
        <p className="text-base md:text-lg text-white font-bold text-center mb-8">Engineering: the only profession where you can get excited about finding a solution to a problem that shouldn&apos;t exist in the first place.</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
}
