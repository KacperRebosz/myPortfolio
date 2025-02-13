import { motion } from "framer-motion";

interface PaginationProps {
  activeSection: number;
  onDotClick: (index: number) => void;
  totalSections: number;
}

export default function Pagination({
  activeSection,
  onDotClick,
  totalSections,
}: PaginationProps) {
  return (
    <div className="hidden xl:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-3">
        {Array.from({ length: totalSections }, (_, index) => (
          <motion.button
            key={index}
            onClick={() => onDotClick(index)}
            className={`rounded-full border-2 ${
              activeSection === index
                ? "w-4 h-4 bg-primary border-primary"
                : "w-3 h-3 bg-transparent border-gray-400"
            }`}
            animate={{
              scale: activeSection === index ? 1.1 : 1,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <motion.div
              className="w-full h-full rounded-full bg-primary"
              initial={false}
              animate={{
                scale: activeSection === index ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
