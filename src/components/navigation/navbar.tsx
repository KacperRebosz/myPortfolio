import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

interface NavbarProps {
  activeSection: number;
  onSetActive: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSetActive }) => {
  const sections = ["about", "projects", "skills", "contact"];

  return (
    <div className="fixed w-full top-0 z-20 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2"
          >
            <p className="text-2xl ml-8 xl:ml-0 font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent select-none">
              KR
            </p>
          </motion.div>
          <ul className="hidden sm:mx-auto sm:flex items-center space-x-6">
            {sections.map((section, index) => (
              <li
                key={section}
                className="relative px-3 py-2 text-md font-medium text-gray-600 hover:text-primary transition-colors cursor-pointer"
              >
                <Link
                  to={section}
                  smooth={true}
                  spy={true}
                  offset={-50}
                  onSetActive={() => onSetActive(index)}
                  className="relative"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}

                  {activeSection === index && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center space-x-4 mr-8 xl:mr-0">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/KacperRebosz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/kacper-r%C4%99bosz-a09588287/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
