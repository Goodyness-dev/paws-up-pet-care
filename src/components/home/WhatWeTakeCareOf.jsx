import React from 'react';
import { imageManifest } from '../../data/imageManifest';
import ImageFrame from '../common/ImageFrame';

export default function WhatWeTakeCareOf({ onOpenInquiry }) {
  const pillars = [
    {
      number: '01',
      title: 'Safe Roundtrip Transit',
      description: 'Pick up from your home, venue transport in crash-tested safety harnesses with climate control, and chauffeured return.'
    },
    {
      number: '02',
      title: 'Photo & Ceremony Coordination',
      description: 'Squeakers, high-value treats, and cues to capture picture-perfect portraits, plus graceful aisle escorting during the ceremony.'
    },
    {
      number: '03',
      title: 'Comfort, Hydration & Breaks',
      description: 'Dedicated potty walks, shaded cooldowns, coat brush-out, eye/drool wipe, and attire styling so your dog stays relaxed.'
    },
    {
      number: '04',
      title: 'Post-Celebration Handover',
      description: 'Return home or to your lodging, dinner feeding, fresh water, bedtime tuck-in, and a confirmation text with photos for the newlyweds.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF6]" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#345744]">
            // Dedicated Wedding Day Care
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#26322D] mt-2 tracking-tight">
            You celebrate. We take care of the details.
          </h2>
          <p className="text-base sm:text-lg text-[#59645E] mt-4 font-sans leading-relaxed">
            Your wedding day moves fast. We give you the joy of having your dog by your side without asking your parents or bridesmaids to hold leashes, pick up waste, or miss toasts.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Image Left/Center, 4 Pillars Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Documentary Photo Column (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ImageFrame
              src={imageManifest.careAction.src}
              alt={imageManifest.careAction.alt}
              aspectRatio="aspect-[4/5]"
              rounded="rounded-2xl"
              title={imageManifest.careAction.placeholderTitle}
              subtitle={imageManifest.careAction.placeholderSubtitle}
              badge="Attentive Chaperoning"
              className="shadow-wedding-card"
            />
            <p className="text-xs text-[#59645E] italic mt-3 text-center sm:text-left">
              Every detail is planned in advance: walks, hydration, attire, and safe transit.
            </p>
          </div>

          {/* Pillars List Column (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="card-thick p-7 flex flex-col justify-between hover:border-[#7C897F] transition-colors"
                >
                  <div>
                    <span className="font-mono text-sm font-bold text-[#345744] tracking-wider">
                      [{pillar.number}]
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#26322D] mt-2 mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#59645E] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* In-context reassurance button */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#F0F2EC] border border-[#D8DED5]">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#345744]">
                  Tailored To Your Venue
                </p>
                <p className="text-sm text-[#26322D] mt-0.5">
                  We coordinate directly with your venue and lead photographer.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="btn-accent text-xs !py-2.5 !px-4 whitespace-nowrap"
              >
                Inquire For Your Venue
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
