import React from "react";
import { projects } from "@/testData";
import ProjectCard from "@/components/projects/project-card";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface ProjectsProps {
  isActive: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isActive }) => {
  return (
    <div
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-white/80 to-white/60"
    >
      <div className="w-full lg:w-[70%] xl:w-[60%] mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-6xl font-black text-center mb-4"
        >
          <motion.div
            className={`inline-block 
              bg-[length:200%_100%] bg-clip-text 
              bg-gradient-to-r from-black/80 from-40% via-indigo-600 to-pink-600
              transition-all duration-500
              px-4 py-2
              [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]
              hover:[text-shadow:_none]
              transform 
              hover:scale-105 select-none
              ${isActive ? "text-transparent bg-right" : "text-black/80 bg-left hover:text-transparent hover:bg-right"}`}
          >
            Projects
          </motion.div>
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <Separator className="w-48 h-[0.5px] mx-auto bg-primary mb-12" />
        </motion.div>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <React.Fragment key={project.title}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {" "}
                {index === 0 && (
                  <div className="absolute top-56 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                )}
                <div className="w-full xl:w-[70%]">
                  <ProjectCard
                    project={project}
                    isFirst={index === 0}
                    isLast={index === projects.length - 1}
                  />
                </div>
              </motion.div>
              {index !== projects.length - 1 && (
                <div className="w-3/5 mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12" />
              )}
              {index === projects.length - 1 && (
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
