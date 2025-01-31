import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";
import { FaHome, FaBookOpen, FaGamepad } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", icon: FaHome, label: "Главная" },
  { path: "/facts", icon: FaBookOpen, label: "Факты" },
  { path: "/memes", icon: FaGamepad, label: "Мемы" },
];

export function SillyNav() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl font-bold text-primary"
          >
            🤪 SillySite
          </motion.div>

          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                asChild
              >
                <Link to={item.path} className="gap-2">
                  <item.icon />
                  {item.label}
                </Link>
              </Button>
            ))}
            <div className="ml-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}