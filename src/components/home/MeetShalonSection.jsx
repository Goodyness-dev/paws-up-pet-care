import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { imageManifest } from '../../data/imageManifest';

export default function MeetShalonSection({ onOpenInquiry }) {
  const { owner } = BUSINESS_INFO;

  return (
    <section className="py-24 sm:py-36 bg-[#F5F0E7] text-left relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column (5 Cols) with Soft Rounded Window Framing */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              <div className="absolute -inset-3 rounded-3xl bg-[#E9E0D1] -rotate-2 pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden border border-[#E9E0D1] shadow-warm-raised bg-[#FBF9F5]">
                <img
                  src={imageManifest.ownerPortrait.src}
                  alt={imageManifest.ownerPortrait.alt}
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="p-5 bg-[#FBF9F5] border-t border-[#E9E0D1]">
                  <span className="font-serif text-2xl font-normal text-[#24211D] block">
                    {owner.name}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C87552] block mt-0.5">
                    {owner.role} • Senatobia, MS
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Bio & Story (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="badge-tag-warm">
              Meet Shalon
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#24211D] font-normal tracking-tight leading-[1.1]">
              “I treat your animals and home with the devotion I give my own.”
            </h2>

            <p className="text-base text-[#5C554E] leading-relaxed">
              {owner.bio}
            </p>

            <p className="text-sm text-[#5C554E] leading-relaxed">
              {owner.philosophy}
            </p>

            {/* Restrained Horizontal Credentials Bar */}
            <div className="pt-4 border-t border-[#E9E0D1] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#24211D] font-semibold">
              <div className="p-3 rounded-xl bg-[#FBF9F5] border border-[#E9E0D1] text-center">
                <span className="text-xs text-[#243A31] block">30+ Years</span>
                <span className="text-[10px] text-[#5C554E] uppercase tracking-wider">Experience</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FBF9F5] border border-[#E9E0D1] text-center">
                <span className="text-xs text-[#243A31] block">Insured & Bonded</span>
                <span className="text-[10px] text-[#5C554E] uppercase tracking-wider">Verified</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FBF9F5] border border-[#E9E0D1] text-center">
                <span className="text-xs text-[#243A31] block">Background</span>
                <span className="text-[10px] text-[#5C554E] uppercase tracking-wider">Checked</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FBF9F5] border border-[#E9E0D1] text-center">
                <span className="text-xs text-[#243A31] block">PSI Member</span>
                <span className="text-[10px] text-[#5C554E] uppercase tracking-wider">Pet Sitters Int.</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry()}
                className="btn-forest text-sm py-3 px-6"
              >
                <span>Schedule A Meet & Greet</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-editorial text-sm"
              >
                <span>Call Shalon: {BUSINESS_INFO.phone}</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
