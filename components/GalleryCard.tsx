"use client";

import Image from "next/image";
import { useState } from "react";

export default function GalleryCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="glass group overflow-hidden rounded-3xl border border-white/10 cursor-pointer transition-transform hover:-translate-y-1"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute right-4 top-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div className="relative h-full w-full max-w-6xl flex flex-col items-center justify-center">
            <div className="relative h-[70vh] w-full md:h-[80vh]">
              <Image
                src={src}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-6 text-center max-w-2xl px-4 pointer-events-none">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
