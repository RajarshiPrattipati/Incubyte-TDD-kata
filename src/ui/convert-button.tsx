import { motion } from "framer-motion";
import { Button } from "./button";
import { ArrowRightLeft } from "lucide-react";

interface ConvertButtonProps {
  onClick: () => void;
}

export function ConvertButton({ onClick }: ConvertButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={onClick}
        size="lg"
        className="relative group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="flex items-center gap-2">
          <ArrowRightLeft className="w-5 h-5" />
          Convert
        </span>
      </Button>
    </motion.div>
  );
}
