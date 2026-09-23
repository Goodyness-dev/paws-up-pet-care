import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BUSINESS_INFO } from '../../data/businessData';
import { imageManifest } from '../../data/imageManifest';

export default function Hero({ onOpenInquiry }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const badgeRef = useRef(null);
  const ctaRef = useRef(null);
  const photoCardRef = useRef(null);
  const floatBadgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance reveal sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.6,
      })
      .from(headlineRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.8,
      }, '-=0.3')
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
      }, '-=0.4')
      .from(photoCardRef.current, {
        opacity: 0,
        scale: 0.96,
        y: 20,
        duration: 0.9,
      }, '-=0.6')
      .from(floatBadgeRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.6,
      }, '-=0.3');

      // Continuous subtle floating effect on floating badge
      gsap.to(floatBadgeRef.current, {
        y: -6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F8F9F7]"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#284E68_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 5 Cols Text Hierarchy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Category / Location Label */}
            <div ref={badgeRef}>
              <span className="badge-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-[#284E68] animate-pulse" />
                Senatobia & North Mississippi
              </span>
            </div>

            {/* H1 Value Proposition */}
            <div ref={headlineRef} className="space-y-4">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#25323D] tracking-tight leading-[1.12]">
                Their routine. <br />
                <span className="text-[#284E68]">Your peace of mind.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#56636C] font-normal leading-relaxed max-w-xl">
                Personal pet and house-sitting care in Senatobia, Hernando, and surrounding North Mississippi communities, tailored to your household.
              </p>
            </div>

            {/* Trust Line & Key Qualifications */}
            <div className="pt-1 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#56636C]">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#284E68]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>30+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#284E68]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#284E68]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>PSI Member</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenInquiry()}
                className="btn-accent"
              >
                <span>Request Care</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <a
                href="#services"
                className="btn-secondary"
              >
                <span>Explore Care Services</span>
              </a>
            </div>

            {/* Emergency / Notice Footnote */}
            <p className="text-[12px] text-[#56636C] pt-1">
              Serving Senatobia, Hernando, Coldwater & rural acreage. Deposit confirms qualifying dates.
            </p>
          </div>

          {/* Right Column: 6-7 Cols Editorial Photo Composition */}
          <div className="lg:col-span-6 relative">
            
            {/* Backdrop decorative frame */}
            <div className="absolute -inset-3 rounded-3xl bg-[#EDF1F3] -rotate-1 border border-[#D5DDE0] hidden sm:block pointer-events-none" />

            {/* Main Editorial Photo Card */}
            <div
              ref={photoCardRef}
              className="relative rounded-2xl overflow-hidden border border-[#D5DDE0] shadow-boutique-raised bg-[#FDFDFC] group aspect-[4/3] sm:aspect-[14/11]"
            >
              <img
                src={imageManifest.hero.src}
                alt={imageManifest.hero.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                fetchPriority="high"
              />
              
              {/* Soft Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E7EFF4] block">
                    At Home with Paws Up
                  </span>
                  <span className="font-heading font-semibold text-sm sm:text-base text-white block">
                    Zero boarding stress. Their cozy, familiar routine.
                  </span>
                </div>
                <span className="text-[11px] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-white font-medium hidden sm:inline-block">
                  Senatobia, MS
                </span>
              </div>
            </div>

            {/* Floating Reassurance Badge */}
            <div
              ref={floatBadgeRef}
              className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-[#D5DDE0] rounded-2xl p-4 shadow-boutique-raised max-w-xs text-left hidden sm:flex items-center gap-3.5 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-[#E7EFF4] text-[#284E68] flex items-center justify-center font-bold text-sm shrink-0">
                30+
              </div>
              <div>
                <span className="text-xs font-bold text-[#25323D] block">
                  30+ Years Animal Care
                </span>
                <span className="text-[11px] text-[#56636C] block leading-tight">
                  Shalon Parrott treats your animals & home like family.
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
