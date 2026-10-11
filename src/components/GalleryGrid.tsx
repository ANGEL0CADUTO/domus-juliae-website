"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "../data/gallery";
import { cn } from "../lib/utils";
import GalleryLightbox from "./GalleryLightbox";

type GalleryGridProps = {
  images: GalleryImage[];
  gridClassName?: string;
  itemClassName?: string;
  imageClassName?: string;
  labels?: {
    openImage: string;
    close: string;
    previous: string;
    next: string;
  };
};

export default function GalleryGrid({
  images,
  gridClassName,
  itemClassName,
  imageClassName,
  labels,
}: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    });
  }, [images.length]);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
          gridClassName,
        )}
      >
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "group overflow-hidden border border-brand-gold/10 bg-brand-warm/30 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40",
              itemClassName,
            )}
            aria-label={`${labels?.openImage ?? "Apri immagine"} ${index + 1}`}
          >
            <div className={cn("relative h-80 w-full", imageClassName)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </button>
        ))}
      </div>

      <GalleryLightbox
        images={images}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onPrevious={showPrevious}
        onNext={showNext}
        labels={labels}
      />
    </>
  );
}
