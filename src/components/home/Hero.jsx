import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_INFO } from '../../data/businessData';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenInquiry }) {
  const heroRef = useRef(null);
  const bgImageRef = useRef(null);
  const overlayRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineLine1Ref = useRef(null);
  const headlineLine2Ref = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const trustRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 5-Stage Cinematic Entrance Sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Stage 1: Big Background Image settles
      tl.fromTo(
        bgImageRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: 'power2.out' }
      )
      // Stage 2: Eyebrow tag
      .fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.9'
      )
      // Stage 3: Main Heading line-by-line overflow mask reveal
      .fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current],
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.14, ease: 'power3.out' },
        '-=0.5'
      )
      // Stage 4: Paragraph + CTA Buttons
      .fromTo(
        [textRef.current, ctaRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
        '-=0.4'
      )
      // Stage 5: Trust Indicators
      .fromTo(
        trustRef.current?.children || [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        '-=0.3'
      );

      // Scroll Parallax Effect
      gsap.to(bgImageRef.current, {
        scale: 1.05,
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(overlayRef.current, {
        opacity: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[94svh] lg:min-h-screen flex flex-col justify-between pt-32 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#243A31]"
    >
      {/* Big Cinematic Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          ref={bgImageRef}
          src="/images/hero-bg-cinematic.jpg"
          alt="Warm, peaceful pet resting happily in a home setting"
          className="w-full h-full object-cover object-center will-change-transform"
          fetchPriority="high"
        />
        {/* Warm Forest & Ivory Gradient Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-[#243A31] via-[#243A31]/55 to-[#243A31]/75 transition-opacity"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#243A31]/30 to-[#243A31]/80" />
      </div>

      {/* Spacer for top alignment */}
      <div className="hidden sm:block" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 my-auto">
        
        {/* Eyebrow Label */}
        <div ref={eyebrowRef} className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#F5F0E7] bg-white/10 backdrop-blur-md border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C87552] animate-pulse" />
            Senatobia • North Mississippi
          </span>
        </div>

        {/* Huge Fraunces Headline with Mask Overflow */}
        <div className="space-y-1 sm:space-y-2">
          <div className="overflow-hidden">
            <h1
              ref={headlineLine1Ref}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F5F0E7] font-normal tracking-tight leading-[0.95]"
            >
              Their routine.
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              ref={headlineLine2Ref}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#A9B5A0] font-normal italic tracking-tight leading-[0.95]"
            >
              Your peace of mind.
            </h1>
          </div>
        </div>

        {/* Narrative Subtitle */}
        <p
          ref={textRef}
          className="text-base sm:text-xl text-[#F5F0E7]/90 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Personal in-home pet and house care designed around the routines, comforts, and spaces your animals already know.
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => onOpenInquiry()}
            className="btn-forest bg-[#F5F0E7] text-[#243A31] hover:bg-white shadow-xl hover:shadow-2xl text-sm sm:text-base py-3.5 px-8 font-bold"
          >
            <span>Request Care</span>
            <svg className="w-4 h-4 text-[#243A31]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <a
            href="#services"
            className="text-sm sm:text-base font-semibold text-[#F5F0E7] hover:text-[#A9B5A0] flex items-center gap-2 transition-colors py-2 group"
          >
            <span>Explore Care Services</span>
            <span className="transition-transform group-hover:translate-x-1.5">→</span>
          </a>
        </div>

      </div>

      {/* Trust Indicators Strip (Integrated at Bottom of Hero Viewport) */}
      <div
        ref={trustRef}
        className="relative z-10 max-w-4xl mx-auto w-full pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs font-semibold text-[#F5F0E7]/80"
      >
        <div className="flex items-center justify-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#C87552]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>30+ Years Experience</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#C87552]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>Insured & Bonded</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#C87552]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>Background Checked</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#C87552]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>PSI Member</span>
        </div>
      </div>
    </section>
  );
}
