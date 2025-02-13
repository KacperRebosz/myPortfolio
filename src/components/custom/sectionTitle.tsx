import { motion, AnimatePresence } from "framer-motion";

interface ActiveSectionTitleProps {
  title: string;
}

export default function ActiveSectionTitle({ title }: ActiveSectionTitleProps) {
  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <AnimatePresence mode="wait">
        <motion.p
          key={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-4xl font-bold select-none text-gray-100 transform -rotate-90 whitespace-nowrap drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
