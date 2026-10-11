"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "../data/gallery";

type GalleryLightboxProps = {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  labels?: {
    close: string;
    previous: string;
    next: string;
  };
};

export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
  labels,
}: GalleryLightboxProps) {
  const currentImage = activeIndex === null ? null : images[activeIndex];
  const hasMultipleImages = images.length > 1;

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && hasMultipleImages) {
      onNext();
    } else if (isRightSwipe && hasMultipleImages) {
      onPrevious();
    }
  };

  useEffect(() => {
    if (!currentImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (hasMultipleImages && event.key === "ArrowLeft") {
        onPrevious();
      }

      if (hasMultipleImages && event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImage, hasMultipleImages, onClose, onNext, onPrevious]);

  return (
    currentImage ? (
      <div
        className="fixed inset-0 z-[100] bg-black/88 backdrop-blur-sm select-none"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
          <div className="relative flex min-h-screen items-center justify-center p-4 md:p-8">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8 md:top-8"
              aria-label={labels?.close ?? "Chiudi galleria"}
            >
              <X size={18} />
            </button>

            {hasMultipleImages ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onPrevious();
                }}
                className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 md:flex"
                aria-label={labels?.previous ?? "Immagine precedente"}
              >
                <ChevronLeft size={20} />
              </button>
            ) : null}

            <figure
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1800}
                height={1200}
                sizes="100vw"
                className="max-h-[80vh] w-full object-contain pointer-events-none select-none"
              />

              <figcaption className="mt-4 flex flex-col gap-2 text-center text-white/80 md:flex-row md:items-center md:justify-between md:text-left">
                <span className="text-sm leading-relaxed">{currentImage.alt}</span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/55">
                  {activeIndex + 1} / {images.length}
                </span>
              </figcaption>
            </figure>

            {hasMultipleImages ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNext();
                }}
                className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 md:flex"
                aria-label={labels?.next ?? "Immagine successiva"}
              >
                <ChevronRight size={20} />
              </button>
            ) : null}
          </div>
      </div>
    ) : null
  );
}
