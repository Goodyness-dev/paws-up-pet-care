import React, { useState } from 'react';

/**
 * Editorial ImageFrame with elegant fallback state
 * Renders the uploaded photo, or an elegant botanical/stationery preview canvas if awaiting photo upload.
 */
export default function ImageFrame({
  src,
  alt = 'Happy Pack Adventures Wedding Photography',
  aspectRatio = 'aspect-[4/3]',
  className = '',
  title = 'Wedding Dog Chaperone',
  subtitle = 'Awaiting uploaded image',
  rounded = 'rounded-2xl',
  badge = null
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${rounded} bg-[#F0F2EC] border border-[#D8DED5] ${className} group`}>
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-105`}
        />
      ) : null}

      {/* Elegant Editorial Canvas Fallback if image is not yet uploaded */}
      {(!src || hasError || !isLoaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAFAF6] via-[#F4F6F1] to-[#EAEFE7] select-none">
          {/* Subtle Botanical / Dog Chaperone Monoline Emblem */}
          <div className="w-14 h-14 mb-3 rounded-full bg-[#345744]/10 text-[#345744] flex items-center justify-center border border-[#345744]/20 transition-transform duration-500 group-hover:scale-110">
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Monoline Heart + Paw/Leaf Wedding Motif */}
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              <path d="M12 7.5c.5-1 1.5-1.5 2.5-1.5" strokeDasharray="1 1" />
            </svg>
          </div>

          <span className="font-serif text-lg md:text-xl font-medium text-[#26322D] leading-tight max-w-[90%]">
            {title}
          </span>
          <span className="text-xs text-[#59645E] mt-1 font-sans tracking-wide uppercase max-w-[85%]">
            {subtitle}
          </span>

          <div className="mt-3 px-3 py-1 rounded-full bg-white/80 border border-[#D8DED5] text-[11px] font-medium text-[#345744] shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#345744] animate-pulse"></span>
            <span>Image slot ready for upload</span>
          </div>
        </div>
      )}

      {/* Optional Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/95 text-[#26322D] backdrop-blur-md shadow-sm border border-[#D8DED5]">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
}
