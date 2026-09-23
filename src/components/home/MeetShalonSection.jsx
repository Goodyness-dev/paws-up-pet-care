import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { imageManifest } from '../../data/imageManifest';

export default function MeetShalonSection({ onOpenInquiry }) {
  const { owner } = BUSINESS_INFO;

  return (
    <section className="py-20 sm:py-28 bg-[#F8F9F7]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Offset frame */}
              <div className="absolute -inset-3 rounded-3xl bg-[#EDF1F3] rotate-1 border border-[#D5DDE0] hidden sm:block pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-[#D5DDE0] shadow-boutique-raised bg-[#FDFDFC]">
                <img
                  src={imageManifest.ownerPortrait.src}
                  alt={imageManifest.ownerPortrait.alt}
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-white/95 border-t border-[#D5DDE0] text-left">
                  <span className="font-heading font-bold text-base text-[#25323D] block">
                    {owner.name}
                  </span>
                  <span className="text-xs text-[#56636C] block">
                    {owner.role} • Senatobia, MS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Credentials (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div>
              <span className="badge-tag">
                // Meet Your Pet’s Caregiver
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#25323D] mt-2 tracking-tight">
                “I treat your animals and home with the devotion I give my own.”
              </h2>
            </div>

            <p className="text-base text-[#56636C] leading-relaxed">
              {owner.bio}
            </p>

            <p className="text-sm text-[#56636C] leading-relaxed">
              {owner.philosophy}
            </p>

            {/* Verified Credentials as Clean Text (No Fake Clipart Badges) */}
            <div className="card-thick p-6 border border-[#D5DDE0] space-y-3 bg-[#FDFDFC]">
              <h4 className="font-heading font-bold text-base text-[#25323D] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#284E68]" />
                Verified Qualifications & Memberships
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#25323D]">
                {owner.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#284E68] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => onOpenInquiry()}
                className="btn-accent text-sm"
              >
                <span>Schedule A Meet & Greet</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-xs font-semibold text-[#284E68] hover:underline"
              >
                Or Call Direct: {BUSINESS_INFO.phone}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
