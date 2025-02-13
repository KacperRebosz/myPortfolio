import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Code, Rocket, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/custom/sectionHeader";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardHover = {
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.15)",
  },
};

const iconHover = {
  hover: { scale: 1.1, rotate: -5 },
  tap: { scale: 0.95 },
};

interface AboutProps {
  isActive: boolean;
}

const About: React.FC<AboutProps> = ({ isActive }) => {
  const openSocialLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const boxes = [
    {
      icon: Code,
      title: "Frontend Developer",
      text: "Crafting beautiful and responsive web experiences",
      color: "primary",
      gradient: "from-primary/20 to-blue-100/50",
    },
    {
      icon: Rocket,
      title: "Always Learning",
      text: "Constantly expanding my skills and knowledge",
      color: "yellow-400",
      gradient: "from-yellow-400/20 to-amber-100/50",
    },
    {
      icon: Brain,
      title: "Problem Solver",
      text: "Turning complex challenges into elegant solutions",
      color: "purple-500",
      gradient: "from-purple-600/20 to-fuchsia-100/50",
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/documents/Kacper_Rebosz_Resume.pdf";
    link.download = "Kacper_Rebosz_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-white/90 to-white/60"
    >
      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <SectionHeader
          title="Kacper Rebosz"
          subtitle="Aspiring Frontend Developer & Creative Problem Solver"
          isActive={isActive}
        />
        <motion.div
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0px 25px 50px -12px rgba(59, 130, 246, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Card className="shadow-lg overflow-hidden border-2 border-gray-200/50 hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {boxes.map((item, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover="hover"
                      transition={{ duration: 0.05 }}
                      className={`bg-gradient-to-br ${item.gradient} flex flex-col text-center items-center p-6 rounded-xl border select-none border-gray-200/50 hover:border-primary/30 transition-all `}
                      variants={cardHover}
                    >
                      <motion.div
                        variants={iconHover}
                        className={`w-12 h-12 mb-4 text-${item.color} flex items-center justify-center`}
                      >
                        <item.icon className="w-full h-full" />
                      </motion.div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 ">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  className="text-center mb-8"
                >
                  <motion.p
                    className="text-xl text-gray-700 leading-relaxed mb-6 select-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Hi! I'm{" "}
                    <span className="font-semibold text-primary">Kacper</span>,
                    an aspiring frontend developer from Poland. I'm constantly
                    learning and exploring the world of web development, with a
                    focus on creating user-friendly and elegant interfaces.
                  </motion.p>
                  <motion.p
                    className="text-xl text-gray-800 leading-relaxed select-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Let's build something amazing together!
                  </motion.p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      openSocialLink(
                        "https://www.linkedin.com/in/kacper-r%C4%99bosz-a09588287/"
                      )
                    }
                    className="transform transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-white"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      openSocialLink("https://github.com/KacperRebosz")
                    }
                    className="transform transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-white"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                  <Button
                    size="lg"
                    onClick={handleDownloadResume}
                    className="transform transition-all duration-200 hover:scale-110 group bg-primary hover:bg-primary-dark"
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
