"use client"
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function RecommendedTechnologies() {
  return (
    <div className="bg-black">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Recommended Technologies
        </motion.h1>
      </LampContainer>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "C++ / Java / Python",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://www.codingninjas.com/studio/library/java-vs-python-and-c",
  },
  {
    title: "HTML",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://html.com/",
  },
  {
    title: "CSS",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://web.dev/learn/css",
  },
  {
    title: "Bootstrap",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://getbootstrap.com/",
  },
  {
    title: "Tailwind CSS",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "JavaScript",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "React.js / Angular / Vue.js",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://www.browserstack.com/guide/angular-vs-react-vs-vue",
  },
  {
    title: "MySQL / MongoDB",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://aws.amazon.com/compare/the-difference-between-mongodb-vs-mysql/#:~:text=MongoDB%20and%20MySQL%20are%20two,in%20a%20more%20flexible%20format.",
  },
  {
    title: "Version Control",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://www.atlassian.com/git/tutorials/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as,to%20source%20code%20over%20time.",
  },
];
