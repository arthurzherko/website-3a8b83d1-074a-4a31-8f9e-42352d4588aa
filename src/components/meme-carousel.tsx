import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";

interface MemeCarouselProps {
  memes: {
    imageUrl: string;
    caption: string;
  }[];
}

export function MemeCarousel({ memes }: MemeCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
    >
      <CarouselContent>
        {memes.map((meme, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img
                src={meme.imageUrl}
                alt={`Мем ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <Typography.P className="text-center mt-4">
                {meme.caption}
              </Typography.P>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}