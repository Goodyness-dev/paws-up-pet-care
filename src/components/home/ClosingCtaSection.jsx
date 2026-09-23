import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { imageManifest } from '../../data/imageManifest';

export default function ClosingCtaSection({ onOpenInquiry }) {
  return (
    <section className="py-24 sm:py-36 bg-[#F5F0E7] text-left relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="card-warm p-8 sm:p-14 lg:p-16 border border-[#E9E0D1] shadow-warm-raised bg-[#FBF9F5] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left Copy (8 Cols) */}
            <div className="md:col-span-8 space-y-5">
              <span className="badge-tag-warm">
                A Personal Invitation
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#24211D] font-normal tracking-tight leading-[1.08]">
                “I’d love to be your best friend’s new best friend.”
              </h2>

              <p className="text-sm sm:text-base text-[#5C554E] max-w-lg leading-relaxed">
                Tell Shalon about your pets, their routines, and your upcoming dates in Senatobia, Hernando, and North Mississippi.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInquiry()}
                  className="btn-forest text-sm sm:text-base py-3.5 px-8 font-bold"
                >
                  <span>Request Care With Shalon</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5C554E]">
                  <span>or call direct:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="font-bold text-[#243A31] hover:underline"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Window-Shaped Portrait (4 Cols) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-40 h-52 sm:w-48 sm:h-64 window-motif overflow-hidden border-2 border-[#E9E0D1] shadow-md relative bg-[#F5F0E7]">
                <img
                  src={imageManifest.ownerPortrait.src}
                  alt={BUSINESS_INFO.owner.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
