"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  image: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
}

export default function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
  current,
  total,
}: LightboxProps) {
  return (
    <div
      className="
      fixed
      inset-0
      bg-black/95
      z-[999]
      flex
      items-center
      justify-center
      "
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="
        absolute
        top-6
        right-6
        text-white
        z-20
        "
      >
        <X size={40} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="
        absolute
        left-6
        text-white
        z-20
        "
      >
        <ChevronLeft size={50} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="
        absolute
        right-6
        text-white
        z-20
        "
      >
        <ChevronRight size={50} />
      </button>

      {/* Image */}
      <div
        className="
        relative
        w-full
        max-w-6xl
        h-[80vh]
        "
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={image} alt="Preview" fill className="object-contain" />
      </div>

      {/* Counter */}
      <div
        className="
        absolute
        bottom-8
        text-white
        text-lg
        "
      >
        {current + 1} / {total}
      </div>
    </div>
  );
}
