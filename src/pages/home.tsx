import { useState } from "react";
import { SillyHero } from "@/components/silly-hero";
import { Typography } from "@/components/ui/typography";
import { motion } from "framer-motion";
import { FaRainbow, FaStar, FaUnicorn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const [bounce, setBounce] = useState(false);

  return (
    <main className="min-h-screen">
      <SillyHero
        title="Добро пожаловать в царство абсурда!"
        subtitle="Самый бессмысленный сайт, который вы когда-либо видели"
        onActionClick={() => navigate("/facts")}
      />

      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid gap-8 text-center"
        >
          <Typography.H2 className="flex items-center justify-center gap-3">
            <FaRainbow className="text-accent" />
            Почему мы такие странные?
          </Typography.H2>

          <Typography.Lead>
            Потому что нормальность переоценена! Здесь мы празднуем всё нелепое и забавное!
          </Typography.Lead>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-card p-6 shadow-lg"
            >
              <FaStar className="mb-4 text-4xl text-primary mx-auto" />
              <Typography.H3 className="mb-2">Странные факты</Typography.H3>
              <Typography.P>
                Узнайте факты, которые вам совершенно не нужны в жизни!
              </Typography.P>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-card p-6 shadow-lg"
              onMouseEnter={() => setBounce(true)}
              onMouseLeave={() => setBounce(false)}
            >
              <motion.div
                animate={{ y: bounce ? -10 : 0 }}
                transition={{ type: "spring" }}
              >
                <FaUnicorn className="mb-4 text-4xl text-secondary mx-auto" />
              </motion.div>
              <Typography.H3 className="mb-2">Глупые мемы</Typography.H3>
              <Typography.P>
                Коллекция мемов, над которыми смеёмся только мы!
              </Typography.P>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-card p-6 shadow-lg sm:col-span-2 lg:col-span-1"
            >
              <FaRainbow className="mb-4 text-4xl text-accent mx-auto" />
              <Typography.H3 className="mb-2">Весёлые анимации</Typography.H3>
              <Typography.P>
                Наведите курсор куда угодно - всё двигается!
              </Typography.P>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}