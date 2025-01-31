import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { SillyFactCard } from "@/components/silly-fact-card";

const sillyFacts = [
  {
    title: "Факт дня",
    fact: "Если бы пингвины умели летать, они бы всё равно ходили пешком, потому что они большие лентяи!",
  },
  {
    title: "Научный факт",
    fact: "Если собрать все макароны, съеденные в мире, можно построить мост до Луны! (Это неправда, но звучит забавно)",
  },
  {
    title: "Исторический факт",
    fact: "В средневековье люди боялись бананов, потому что никогда их не видели. Представляете, жизнь без бананового хлеба?",
  },
  {
    title: "Космический факт",
    fact: "На Марсе нет комаров! Это единственная причина, по которой люди хотят туда полететь.",
  },
  {
    title: "Факт о животных",
    fact: "Ленивцы настолько медленные, что иногда принимают свою руку за ветку и падают с дерева!",
  },
];

export function Facts() {
  return (
    <main className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography.H1 className="text-center mb-12">
          🤓 Самые бесполезные факты в мире
        </Typography.H1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sillyFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SillyFactCard {...fact} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}