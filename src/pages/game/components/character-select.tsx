import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { MainButton } from "@/components/tma/main-button";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const characters = [
  { id: "dog", name: "Dog", image: "/dog.png" },
  { id: "man", name: "Man", image: "/man.png" },
  { id: "woman", name: "Woman", image: "/woman.png" },
];

export function CharacterSelect({ onSelect }: { onSelect: (char: string) => void }) {
  const [selected, setSelected] = useState(characters[0].id);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    
    api.on('select', () => {
      const selectedIndex = api.selectedScrollSnap();
      setSelected(characters[selectedIndex].id);
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <Carousel 
        className="w-full max-w-xs"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent>
          {characters.map((character) => (
            <CarouselItem key={character.id}>
              <div 
                className="flex flex-col items-center p-6"
                onClick={() => onSelect(character.id)}
              >
                <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
                <div className="relative cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-64 h-64 rounded-full border-2 border-primary/20" />
                  <img
                    src={character.image}
                    alt={character.name}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-contain"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <MainButton onClick={() => onSelect(selected)}>
        {`Play as ${characters.find(c => c.id === selected)!.name}`}
      </MainButton>
    </div>
  );
} 