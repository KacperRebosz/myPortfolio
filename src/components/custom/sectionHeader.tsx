import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  isActive: boolean;
}

export const SectionHeader = ({
  title,
  subtitle,
  isActive,
}: SectionHeaderProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="text-center mb-12">
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
            transform 
            select-none
            ${isActive ? "text-transparent bg-right" : "text-black/80 bg-left hover:text-transparent hover:bg-right"}`}
        >
          {title}
        </motion.div>
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <Separator className="w-48 h-[0.5px] mx-auto bg-primary mb-4" />
      </motion.div>
      {subtitle && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-xl text-gray-600 select-none"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
