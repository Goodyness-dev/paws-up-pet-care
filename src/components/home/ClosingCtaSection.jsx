import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { imageManifest } from '../../data/imageManifest';

export default function ClosingCtaSection({ onOpenInquiry }) {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F9F7] text-left relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="card-thick p-8 sm:p-14 border border-[#D5DDE0] shadow-boutique-raised bg-[#FDFDFC] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Text (8 Cols) */}
            <div className="md:col-span-8 space-y-4">
              <span className="badge-tag">
                A Personal Invitation
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#25323D] tracking-tight leading-tight">
                “I’d love to be your best friend’s new best friend.”
              </h2>
              <p className="text-sm sm:text-base text-[#56636C] max-w-lg">
                Let’s talk about your upcoming travel, daily work schedule, or special pet needs in Senatobia, Hernando, and North Mississippi.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInquiry()}
                  className="btn-accent"
                >
                  <span>Request Care With Shalon</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="btn-secondary text-xs sm:text-sm"
                >
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Mini Portrait (4 Cols) */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#EDF1F3] shadow-md">
                <img
                  src={imageManifest.ownerPortrait.src}
                  alt={BUSINESS_INFO.owner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading font-bold text-sm text-[#25323D] mt-3 block">
                {BUSINESS_INFO.owner.name}
              </span>
              <span className="text-xs text-[#56636C] block">
                Lead Caregiver • Senatobia, MS
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
