'use client';

import { useState } from 'react';
import Image from 'next/image';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from './ui/button';

const images = [
  '/banner/photo.webp',
  '/banner/photo2.webp',
  '/banner/photo3.webp',
] as const;

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="3xl:w-291.75 absolute right-0 bottom-0 h-97.5 w-full
        overflow-hidden lg:top-30 lg:h-170 lg:w-125.5 xl:w-171.75"
    >
      <div className="absolute bottom-12 left-12 z-10 flex items-center gap-6">
        <div className="flex gap-4">
          <Button
            onClick={handlePrevSlide}
            className="bg-background hover:bg-background/90 size-8 rounded-full"
          >
            <ChevronLeft className="text-foreground size-4.5" />
          </Button>

          <Button
            onClick={handleNextSlide}
            className="bg-background hover:bg-background/90 size-8 rounded-full"
          >
            <ChevronRight className="text-foreground size-4.5" />
          </Button>
        </div>

        <div>
          <h3 className="mb-2 text-[13px] font-bold tracking-[3px] uppercase">
            Intro
          </h3>
          <p className="text-sm">
            By the same illusion which lifts the <br /> horizon.
          </p>
        </div>
      </div>

      <div
        className="relative flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((image) => (
          <div key={image} className="relative h-full w-full shrink-0">
            <Image
              fetchPriority="high"
              src={image}
              alt="hero image preview"
              fill
              loading="eager"
              className="rounded-[30px] object-cover sm:rounded-none
                sm:rounded-tl-[30px] sm:rounded-br-[30px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
