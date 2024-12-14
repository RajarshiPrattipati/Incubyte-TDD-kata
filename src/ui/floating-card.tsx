import { motion } from "framer-motion";
import { Card } from "./card";

interface FloatingCardProps {
  children: React.ReactNode;
}

export function FloatingCard({ children }: FloatingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-6 backdrop-blur-sm bg-white/90 shadow-lg hover:shadow-xl transition-shadow">
        {children}
      </Card>
    </motion.div>
  );
}
