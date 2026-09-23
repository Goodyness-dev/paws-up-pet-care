import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AtHomeIntro({ onOpenInquiry }) {
  const sectionRef = useRef(null);
  const windowRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Signature Window Motif Clip-Path Reveal
      gsap.fromTo(
        windowRef.current,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        imgRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#F5F0E7] text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-tag-warm">
              At Home With Paws Up
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211D] font-normal tracking-tight leading-[1.05]">
              Zero boarding stress. <br />
              <span className="italic text-[#243A31]">Just their familiar world.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed max-w-xl">
              Pets remain surrounded by the rooms, smells, favorite sleeping spots, and quiet daily comforts they already know. Rather than sending your animals to an unfamiliar kennel, Shalon steps in as a dedicated, experienced companion in your home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#E9E0D1] space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C87552] block">
                  Familiar Environment
                </span>
                <p className="text-xs text-[#5C554E] leading-relaxed">
                  No barking kennels, strange smells, or disruption to their usual resting spots.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FBF9F5] border border-[#E9E0D1] space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#243A31] block">
                  One-On-One Devotion
                </span>
                <p className="text-xs text-[#5C554E] leading-relaxed">
                  Care tailored to their individual feeding times, walks, and emotional habits.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry()}
                className="btn-forest text-sm py-3 px-6"
              >
                <span>Schedule An In-Home Consultation</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Signature Window Motif (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative offset backing */}
              <div className="absolute -inset-3 window-motif bg-[#E9E0D1] rotate-2 pointer-events-none" />

              {/* Window-Shaped Image Container (180px top border-radius) */}
              <div
                ref={windowRef}
                className="window-motif relative shadow-warm-raised border border-[#E9E0D1] aspect-[3/4] bg-[#FBF9F5]"
              >
                <img
                  ref={imgRef}
                  src="/images/hero-paws-home.jpg"
                  alt="Golden retriever resting comfortably in soft home window light"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A9B5A0] block">
                    North Mississippi In-Home Care
                  </span>
                  <span className="font-serif text-base font-normal text-[#F5F0E7] block">
                    Resting safely in their favorite room.
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
