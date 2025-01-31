import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { FaLaughSquint } from "react-icons/fa";

interface SillyFactCardProps {
  title: string;
  fact: string;
}

export function SillyFactCard({ title, fact }: SillyFactCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="bg-accent/20">
          <CardTitle className="flex items-center gap-2">
            <FaLaughSquint className="text-accent" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Typography.P>{fact}</Typography.P>
        </CardContent>
      </Card>
    </motion.div>
  );
}