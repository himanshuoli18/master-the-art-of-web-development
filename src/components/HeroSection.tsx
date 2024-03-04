"use client"
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import { SparklesCore } from "./ui/sparkles";


function HeroSection() {
    return (
        <div className="h-[50rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <Spotlight 
                className="-top-40 left-0 md:left-60 md:-top-20" 
                fill="white"
            />
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={20}
                className="w-full h-full"
                particleColor="#FFFFFF"
                />
            </div>
            <div className="p-4 relative z-10 w-full text-center">
                <br /><br /><br /><br /><br /><br />
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Master the Art of <br /><div className="text-blue-500 dark:text-blue-500 ">Web Development</div>
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Dive into our comprehensive web development roadmaps, courses and transform your development journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
                </p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                        <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                            Explore
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
