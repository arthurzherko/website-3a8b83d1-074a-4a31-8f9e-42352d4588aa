import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "light" ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {theme === "light" ? (
          <FaSun className="text-accent" />
        ) : (
          <FaMoon className="text-accent" />
        )}
      </motion.div>
    </Button>
  );
}