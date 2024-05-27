"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export function HomeSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true }),
  );

  return (
    <section className="flex justify-center items-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className=" h-60">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="h-fit">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 h-56">
                    <span className="text-4xl font-semibold ">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
