import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaRocket, FaRegLaughBeam } from "react-icons/fa";

interface SillyHeroProps {
  title: string;
  subtitle: string;
  onActionClick: () => void;
}

export function SillyHero({ title, subtitle, onActionClick }: SillyHeroProps) {
  return (
    <div className="relative overflow-hidden bg-background py-24 px-6 text-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10"
      >
        <Typography.H1 className="mb-8 flex items-center justify-center gap-4">
          <FaRegLaughBeam className="text-accent text-4xl" />
          {title}
        </Typography.H1>
        <Typography.Lead className="mb-12">{subtitle}</Typography.Lead>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            size="lg"
            onClick={onActionClick}
            className="rounded-full font-bold"
          >
            Поехали! <FaRocket className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Забавный фоновый паттерн */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-12 rounded-full bg-secondary/30"
            initial={{ x: Math.random() * 100, y: Math.random() * 100 }}
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}