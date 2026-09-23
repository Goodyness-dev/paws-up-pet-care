import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenInquiry }) {
  const { reviews } = BUSINESS_INFO;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  return (
    <section className="py-24 sm:py-36 bg-[#FBF9F5] border-y border-[#E9E0D1] text-left" id="reviews">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="badge-tag-warm">
            Client Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211D] font-normal tracking-tight">
            Loved by pets. Trusted by families.
          </h2>
        </div>

        {/* Big Single Testimonial Showcase */}
        <div className="card-warm p-8 sm:p-14 lg:p-16 border border-[#E9E0D1] shadow-warm-raised bg-[#F5F0E7] relative">
          
          {/* Subtle quotation glyph */}
          <span className="font-serif text-7xl sm:text-8xl text-[#C87552]/20 font-normal leading-none absolute top-6 left-8 sm:left-12 select-none">
            “
          </span>

          <div className="relative z-10 space-y-8 animate-fadeIn" key={current.id}>
            
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#24211D] font-normal leading-snug tracking-tight">
              "{current.quote}"
            </blockquote>

            <div className="pt-6 border-t border-[#E9E0D1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-serif text-xl sm:text-2xl text-[#243A31] font-normal block">
                  {current.author}
                </span>
                <span className="text-xs sm:text-sm text-[#5C554E] block mt-0.5">
                  {current.location} • {current.pet}
                </span>
              </div>

              {/* Navigation Controls: ← 01 / 03 → */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full border border-[#E9E0D1] bg-[#FBF9F5] hover:bg-[#243A31] hover:text-[#F5F0E7] transition-colors flex items-center justify-center text-sm font-bold"
                  aria-label="Previous story"
                >
                  ←
                </button>
                <span className="font-mono text-xs font-semibold text-[#5C554E]">
                  0{currentIndex + 1} / 0{reviews.length}
                </span>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full border border-[#E9E0D1] bg-[#FBF9F5] hover:bg-[#243A31] hover:text-[#F5F0E7] transition-colors flex items-center justify-center text-sm font-bold"
                  aria-label="Next story"
                >
                  →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
