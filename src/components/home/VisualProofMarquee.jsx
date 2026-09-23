import React from 'react';
import { imageManifest } from '../../data/imageManifest';

export default function VisualProofMarquee({ onOpenInquiry }) {
  const { marqueeRow1, marqueeRow2 } = imageManifest;

  return (
    <section className="py-14 sm:py-20 bg-[#F8F9F7] overflow-hidden border-b border-[#D5DDE0] relative">
      
      {/* Subheader */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-left">
        <div>
          <span className="badge-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-[#284E68] animate-pulse" />
            Live Client Album & Care Moments
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#25323D] tracking-tight mt-1">
            Comfort, routines, and happy tails.
          </h2>
        </div>

        <button
          onClick={() => onOpenInquiry()}
          className="text-xs font-bold text-[#284E68] hover:text-[#1E3E54] flex items-center gap-1.5 transition-colors group"
        >
          <span>Reserve Dates For Your Pet</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Infinite Moving Marquee Container */}
      <div className="space-y-4 marquee-container">
        
        {/* ROW 1: Leftward Infinite Drift */}
        <div className="flex w-[200%] sm:w-[150%] animate-marquee gap-4 sm:gap-6">
          {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-64 sm:w-80 aspect-[16/11] rounded-2xl overflow-hidden border border-[#D5DDE0] shadow-boutique-card group cursor-pointer"
              onClick={() => onOpenInquiry()}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E7EFF4] block">
                  {item.location}
                </span>
                <span className="font-heading font-medium text-xs sm:text-sm text-white block truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: Rightward Infinite Drift */}
        <div className="flex w-[200%] sm:w-[150%] animate-marquee-reverse gap-4 sm:gap-6">
          {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-64 sm:w-80 aspect-[16/11] rounded-2xl overflow-hidden border border-[#D5DDE0] shadow-boutique-card group cursor-pointer"
              onClick={() => onOpenInquiry()}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E7EFF4] block">
                  {item.location}
                </span>
                <span className="font-heading font-medium text-xs sm:text-sm text-white block truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
