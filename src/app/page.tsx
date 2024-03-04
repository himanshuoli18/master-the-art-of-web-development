"use client"
import { AboutSection } from "@/components/AboutSection";
import { RecommendedTechnologies } from "@/components/FeaturedCourses";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import { TestimonialCards } from "@/components/TestimonialCards";

export default function Home() {
    return (
        <>
            <HeroSection />
            <TestimonialCards />
            <RecommendedTechnologies />
            <AboutSection />
            <FooterSection />
        </>
    );
}
