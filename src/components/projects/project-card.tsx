"use client";

import type React from "react";
import { useState } from "react";
import TechIcon from "../custom/techIcon";
import { motion } from "framer-motion";
import {
  Globe,
  Github,
  Code2,
  X,
  Hammer,
  CheckCircle,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    liveLink?: string;
    githubLink?: string;
    status?: string;
  };
  isFirst?: boolean;
  isLast?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isFirst,
  isLast,
}) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isImageOpened, setIsImageOpened] = useState(false);

  const openLink = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  const statusConfig = {
    development: {
      icon: Hammer,
      text: "In Development",
      color: "bg-orange-100 text-orange-800",
    },
    production: {
      icon: CheckCircle,
      text: "In Production",
      color: "bg-green-100 text-green-800",
    },
    placeholder: {
      icon: Box,
      text: "Placeholder",
      color: "bg-gray-100 text-gray-800",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative py-16"
    >
      {!isFirst && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      )}

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        onHoverStart={() => setIsCardHovered(true)}
        onHoverEnd={() => setIsCardHovered(false)}
        className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden
                    ${isCardHovered ? "shadow-[0px_0px_20px_rgba(59,130,246,0.5)]" : "shadow-lg"}`}
      >
        <div className="flex flex-col md:flex-row h-full">
          <motion.div
            className="w-full md:w-2/5 relative overflow-hidden md:border-r md:border-gray-200/60"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            onClick={() => setIsImageOpened(true)}
          >
            <img
              src={project.image || "/icons/placeholder.jpg"}
              alt={project.title}
              className="object-scale-down w-full h-full aspect-video md:aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </motion.div>

          <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between mb-3">
                <motion.p
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black/80 from-40% via-indigo-600 to-pink-600 bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: isCardHovered ? "100% 50%" : "0% 50%",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.p>
                {project.status && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`${
                      statusConfig[project.status as keyof typeof statusConfig]
                        .color
                    }  px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5`}
                  >
                    {(() => {
                      const StatusIcon =
                        statusConfig[
                          project.status as keyof typeof statusConfig
                        ].icon;
                      return <StatusIcon className="w-4 h-4" />;
                    })()}
                    <p>
                      {
                        statusConfig[
                          project.status as keyof typeof statusConfig
                        ].text
                      }
                    </p>
                  </motion.div>
                )}
              </div>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>

            <div className="space-y-6 mt-12 md:mt-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-4 h-4 text-gray-400" />
                  <p className="text-sm font-medium text-gray-600">
                    Tech Stack
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      <TechIcon tech={tech} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {project.liveLink && (
                  <Button
                    variant="outline"
                    onClick={() => openLink(project.liveLink)}
                    className="flex-1 gap-2 hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    <Globe className="h-4 w-4" />
                    Live Demo
                  </Button>
                )}
                {project.githubLink && (
                  <Button
                    variant="outline"
                    onClick={() => openLink(project.githubLink)}
                    className="flex-1 gap-2 hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {isImageOpened && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center cursor-pointer backdrop-blur-sm"
          onClick={() => setIsImageOpened(false)}
        >
          <div
            className="relative max-w-[80%] w-full max-h-[90vh] p-4 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsImageOpened(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-fill rounded-lg"
            />
          </div>
        </div>
      )}

      {!isLast && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      )}
    </motion.div>
  );
};

export default ProjectCard;
