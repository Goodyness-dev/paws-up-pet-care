import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { imageManifest } from '../../data/imageManifest';
import ImageFrame from '../common/ImageFrame';

export default function MeetHandlerSection({ onOpenInquiry }) {
  const { owner } = BUSINESS_INFO;

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF6]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Handler Environmental Portrait (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Paper offset framing */}
              <div className="absolute -inset-3 rounded-3xl bg-[#F0F2EC] rotate-1 border border-[#D8DED5] hidden sm:block pointer-events-none" />

              <div className="relative">
                <ImageFrame
                  src={imageManifest.handlerPortrait.src}
                  alt={imageManifest.handlerPortrait.alt}
                  aspectRatio="aspect-[4/5]"
                  rounded="rounded-2xl"
                  title={imageManifest.handlerPortrait.placeholderTitle}
                  subtitle={imageManifest.handlerPortrait.placeholderSubtitle}
                  badge="Lead Handler & Founder"
                  className="shadow-wedding-raised"
                />

                <div className="mt-4 p-4 rounded-xl bg-white/90 border border-[#D8DED5] text-xs text-[#59645E]">
                  <span className="font-semibold text-[#26322D]">Melissa Floyd</span>
                  <p className="mt-0.5">Pet CPR & First Aid Certified � Fully Insured & Bonded</p>
                </div>
              </div>
            </div>
          </div>

          {/* Handler Story & Philosophy (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#345744]">
                // Meet Your Dog�s Wedding Chaperone
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#26322D] mt-2 tracking-tight">
                �Your best friend deserves to be celebrated without the chaos.�
              </h2>
            </div>

            <p className="text-base text-[#59645E] font-sans leading-relaxed">
              {owner.bio}
            </p>

            {/* Approach to nervous / excitable dogs */}
            <div className="card-thick p-6 sm:p-7 border border-[#D8DED5] space-y-3">
              <h4 className="font-serif text-xl text-[#26322D] font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#345744]"></span>
                Our Calm-First Approach
              </h4>
              <p className="text-sm text-[#59645E] leading-relaxed">
                {owner.philosophy}
              </p>
            </div>

            {/* Safety & Protocol Box */}
            <div className="p-5 rounded-2xl bg-[#F0F2EC] border border-[#D8DED5] text-xs sm:text-sm text-[#26322D]">
              <span className="font-semibold uppercase tracking-wider text-[#345744] block mb-1">
                Safety & Emergency Protocol
              </span>
              <p className="text-[#59645E] text-xs leading-relaxed">
                {owner.emergencyProtocol}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry()}
                className="btn-accent text-sm"
              >
                <span>Schedule A Meet & Greet</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
