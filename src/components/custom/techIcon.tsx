import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGit,
  FaVuejs,
  FaCss3Alt,
  FaAngular,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiHtml5,
  SiRedux,
  SiExpo,
  SiCplusplus,
  SiNestjs,
  SiStrapi,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiDjango } from "react-icons/di";

const techIcons: { [key: string]: JSX.Element } = {
  JavaScript: <SiJavascript className="w-5 h-5 text-yellow-500" />,
  TypeScript: <SiTypescript className="w-5 h-5 text-blue-500" />,
  Python: <FaPython className="w-5 h-5 text-yellow-500" />,
  "Next.js": <SiNextdotjs className="w-5 h-5 text-black" />,
  React: <FaReact className="w-5 h-5 text-blue-400" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-teal-500" />,
  "Node.js": <FaNodeJs className="w-5 h-5 text-green-600" />,
  MongoDB: <SiMongodb className="w-5 h-5 text-green-500" />,
  PostgreSQL: <SiPostgresql className="w-5 h-5 text-blue-600" />,
  AWS: <FaAws className="w-5 h-5 text-orange-500" />,
  Docker: <FaDocker className="w-5 h-5 text-blue-500" />,
  Git: <FaGit className="w-5 h-5 text-orange-600" />,
  HTML: <SiHtml5 className="w-5 h-5 text-black" />,
  "Vue.js": <FaVuejs className="w-5 h-5 text-green-600" />,
  Firebase: <IoLogoFirebase className="w-5 h-5 text-yellow-500" />,
  CSS: <FaCss3Alt className="w-5 h-5 text-blue-600" />,
  Redux: <SiRedux className="w-5 h-5 text-purple-500" />,
  Angular: <FaAngular className="w-5 h-5 text-red-500" />,
  Bootstrap: <FaBootstrap className="w-5 h-5 text-purple-600" />,
  Django: <DiDjango className="w-5 h-5 text-green-700" />,
  "React Native": <FaReact className="w-5 h-5 text-blue-400" />,
  Expo: <SiExpo className="w-5 h-5 text-black" />,
  "C++": <SiCplusplus className="w-5 h-5 text-blue-400" />,
  Java: <FaJava className="w-5 h-5 text-blue-400" />,
  NestJS: <SiNestjs className="w-5 h-5 text-red-500" />,
  "CMS Strapi": <SiStrapi className="w-5 h-5 text-blue-500" />,
};

const TechIcon = ({ tech }: { tech: string }) => {
  return (
    <div className="group flex items-center gap-1.5 bg-gray-50/80 hover:bg-gray-100/80 px-2.5 py-1.5 rounded-full transition-all duration-200 hover:shadow-sm">
      <div className="transition-transform duration-200 group-hover:scale-110">
        {techIcons[tech] || (
          <div className="w-5 h-5 bg-gray-300/80 rounded-full" />
        )}
      </div>
      <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
        {tech}
      </span>
    </div>
  );
};

export default TechIcon;
