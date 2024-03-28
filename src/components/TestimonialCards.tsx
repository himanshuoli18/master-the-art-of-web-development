"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function TestimonialCards() {
  return (
    <div className="h-[50rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-5xl font-bold text-center pb-7 mb-8 z-10 text-white">Main Areas of Full Stack Web Development</p>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Front-end Development",
    name: "Creating the user interface (UI) and user experience (UX) using HTML, CSS, and JavaScript.",
    title: "Ensuring responsiveness and compatibility across various devices and browsers.",
  },
  {
    quote: "Back-end Development",
    name: "Building server-side logic and APIs to handle data processing and business logic.",
    title: "Integrating with databases and external services.",
  },
  {
    quote: "Database Management",
    name: "Designing, implementing, and maintaining databases to store and manage application data.",
    title: "Ensuring data integrity, security, and scalability.",
  },
  {
    quote: "DevOps and Deployment",
    name: "Managing version control, automated testing, continuous integration, and continuous deployment processes.",
    title: "Setting up infrastructure, deploying applications, and monitoring performance and security.",
  },
  {
    quote: "Security and Performance Optimization",
    name: "Implementing security measures to protect against common threats like XSS, CSRF, SQL injection, etc.",
    title: "Optimizing application performance through techniques such as caching, code optimization, and load balancing.",
  },
  {
    quote: "Project Management and Collaboration",
    name: "Planning, organizing, and coordinating development tasks and timelines.",
    title: "Collaborating with team members, stakeholders, and clients to deliver successful projects.",
  },
];
