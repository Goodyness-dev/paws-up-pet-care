import React from 'react';
import { imageManifest } from '../../data/imageManifest';

export default function EverydayCareSection({ onOpenInquiry }) {
  const careRoutines = [
    {
      title: "Nutritional Schedules & Fresh Hydration",
      desc: "Exact portioning, customized wet/dry mixes, and fresh filtered water served in their usual clean bowls at their regular meal times.",
      tag: "Feeding Routines"
    },
    {
      title: "Medication & Gentle Medical Support",
      desc: "Careful administration of oral tablets, topical ointments, eye drops, or supplements with gentle patience and zero stress.",
      tag: "Health & Wellness"
    },
    {
      title: "Unrushed Exercise & Backyard Safety",
      desc: "Leashed neighborhood strolls or secure yard playtime tailored to your dog’s age, energy level, and weather conditions.",
      tag: "Physical Activity"
    },
    {
      title: "Thoughtful Home Security & Mail Retrieval",
      desc: "Packages brought inside, mail gathered, indoor house plants watered, and trash bins rolled out to maintain a lived-in appearance.",
      tag: "Household Care"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8F9F7]" id="routine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <span className="badge-tag">
            // Everyday Routine & Attentive Care
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#25323D] tracking-tight mt-3">
            Everyday care, thoughtfully explained.
          </h2>
          <p className="text-base text-[#56636C] font-normal leading-relaxed mt-3">
            Pets feel safest when their daily rhythm remains intact. Shalon coordinates each visit around the habits, comforts, and household routines your animals already know.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Photo Spread on Left, Routine Breakdown on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo Spread (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-[#D5DDE0] shadow-boutique-card aspect-[4/5] relative group">
              <img
                src={imageManifest.everydayCare[0].src}
                alt={imageManifest.everydayCare[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E7EFF4] block">
                  Home Comfort
                </span>
                <span className="font-heading font-semibold text-xs sm:text-sm text-white block">
                  {imageManifest.everydayCare[0].title}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#D5DDE0] shadow-boutique-card aspect-[1/1] relative group">
                <img
                  src={imageManifest.everydayCare[1].src}
                  alt={imageManifest.everydayCare[1].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <span className="font-heading font-semibold text-xs text-white block">
                    {imageManifest.everydayCare[1].title}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#D5DDE0] shadow-boutique-card aspect-[1/1] relative group">
                <img
                  src={imageManifest.everydayCare[2].src}
                  alt={imageManifest.everydayCare[2].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <span className="font-heading font-semibold text-xs text-white block">
                    {imageManifest.everydayCare[2].title}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Routine Breakdown (6 Cols) */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {careRoutines.map((routine, idx) => (
              <div
                key={idx}
                className="card-thick-hover p-6 border border-[#D5DDE0] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#284E68]">
                    {routine.tag}
                  </span>
                  <span className="text-xs font-mono text-[#56636C]">0{idx + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#25323D]">
                  {routine.title}
                </h3>
                <p className="text-sm text-[#56636C] leading-relaxed">
                  {routine.desc}
                </p>
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry()}
                className="btn-accent text-sm"
              >
                <span>Customize Your Pet's Routine</span>
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
