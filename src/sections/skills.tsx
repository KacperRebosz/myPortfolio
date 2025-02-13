import type React from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Layout, Database, Server, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/custom/sectionHeader";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

interface Skill {
  name: string;
  level: SkillLevel;
  icon: React.ReactNode;
}

interface SkillsProps {
  isActive: boolean;
}

const skillLevels: Record<SkillLevel, { value: number; color: string }> = {
  Beginner: { value: 25, color: "bg-blue-400" },
  Intermediate: { value: 50, color: "bg-green-400" },
  Advanced: { value: 75, color: "bg-yellow-400" },
  Expert: { value: 100, color: "bg-red-400" },
};

const skillCategories = [
  {
    name: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: [
      {
        name: "React",
        level: "Advanced" as SkillLevel,
        icon: <Code className="w-4 h-4" />,
      },
      {
        name: "TypeScript",
        level: "Advanced" as SkillLevel,
        icon: <Code className="w-4 h-4" />,
      },
      {
        name: "Next.js",
        level: "Intermediate" as SkillLevel,
        icon: <Code className="w-4 h-4" />,
      },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      {
        name: "Node.js",
        level: "Intermediate" as SkillLevel,
        icon: <Server className="w-4 h-4" />,
      },
      {
        name: "Python",
        level: "Intermediate" as SkillLevel,
        icon: <Server className="w-4 h-4" />,
      },
    ],
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      {
        name: "PostgreSQL",
        level: "Intermediate" as SkillLevel,
        icon: <Database className="w-4 h-4" />,
      },
      {
        name: "SQL",
        level: "Intermediate" as SkillLevel,
        icon: <Database className="w-4 h-4" />,
      },
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center">
        {skill.icon}
        <span className="ml-2 mb-[0.2rem] text-s font-semibold">
          {skill.name}
        </span>
      </div>
      <span className={`text-s font-light px-2 py-1 rounded`}>
        {skill.level}
      </span>
    </div>
    <Progress
      value={skillLevels[skill.level].value}
      className="h-2"
      indicatorColor={`${skillLevels[skill.level].color}`}
    />
  </div>
);

const SkillLevelLegend: React.FC = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
    viewport={{ once: true }}
    className="flex justify-center space-x-4 mb-8"
  >
    {Object.entries(skillLevels).map(([level, { color }]) => (
      <div key={level} className="flex items-center mb-[-0.75rem]">
        <div className={`w-3 h-3 rounded-full mr-2 mb-[0.2rem] ${color}`}></div>
        <span className="text-sm mb-1 select-none">{level}</span>
      </div>
    ))}
  </motion.div>
);

const Skills: React.FC<SkillsProps> = ({ isActive }) => {
  return (
    <div
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-white/90 to-white/60"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <SectionHeader
          title="My Skills"
          subtitle="Crafting digital experiences with passion and precision"
          isActive={isActive}
        />
        <SkillLevelLegend />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="transform transition-all duration-300 hover:scale-105 shadow-lg h-full flex flex-col select-none">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    {category.icon}
                    <span className="ml-2 mb-[0.125rem]">{category.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-center text-2xl font-semibold mb-4 select-none">
            Other Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3 select-none">
            {[
              "C++",
              "Git",
              "C#",
              "Tailwind CSS",
              "Docker",
              "NestJS",
              "AWS",
              "CMS Strapi",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm py-1 px-3"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Badge variant="outline" className="text-lg py-2 px-4 select-none">
            <Sparkles className="w-5 h-5 mr-2 inline select-none" />
            Always learning and expanding my skill set!
          </Badge>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
