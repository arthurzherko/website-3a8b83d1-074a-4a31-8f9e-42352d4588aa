import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { MemeCarousel } from "@/components/meme-carousel";

const memes = [
  {
    imageUrl: "https://placekitten.com/800/600",
    caption: "Когда пытаешься объяснить маме, что такое мемы",
  },
  {
    imageUrl: "https://placekitten.com/801/600",
    caption: "Программист после 10 чашек кофе",
  },
  {
    imageUrl: "https://placekitten.com/802/600",
    caption: "Когда код работает с первого раза",
  },
  {
    imageUrl: "https://placekitten.com/803/600",
    caption: "Я через 5 минут после того, как сказал 'Ещё 5 минут'",
  },
];

export function Memes() {
  return (
    <main className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Typography.H1 className="mb-6">
          😂 Мемная галерея
        </Typography.H1>
        
        <Typography.Lead className="mb-12">
          Внимание: от просмотра этих мемов вы не станете умнее!
        </Typography.Lead>

        <MemeCarousel memes={memes} />

        <motion.div
          className="mt-12 p-6 bg-card rounded-lg"
          whileHover={{ scale: 1.02 }}
        >
          <Typography.P>
            Примечание: Мы используем фотографии котиков вместо настоящих мемов,
            потому что котики делают всё лучше! 🐱
          </Typography.P>
        </motion.div>
      </motion.div>
    </main>
  );
}