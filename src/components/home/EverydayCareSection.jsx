import React from 'react';
import { imageManifest } from '../../data/imageManifest';

export default function EverydayCareSection({ onOpenInquiry }) {
  const stories = [
    {
      num: '01',
      tag: '01 / FEEDING',
      title: 'Nutritional schedules & fresh hydration.',
      desc: 'Exact portions, familiar clean bowls, customized wet/dry mixes, and fresh filtered water served at their regular meal times—never rushed.',
      image: '/images/home-cuddles.jpg',
      alt: 'Attentive, gentle head and chin scratches in cozy living room'
    },
    {
      num: '02',
      tag: '02 / HEALTH & WELLNESS',
      title: 'Medication without disrupting their day.',
      desc: 'Careful, gentle administration of oral tablets, topical ointments, ear drops, or senior mobility supplements with patient respect and positive reinforcement.',
      image: '/images/wedding-buster.jpg',
      alt: 'Patient, attentive pet care and medication support'
    },
    {
      num: '03',
      tag: '03 / PHYSICAL ACTIVITY',
      title: 'Unrushed exercise. Familiar routes.',
      desc: 'Neighborhood leash strolls or backyard sniff sessions calibrated to your dog’s age, joint comfort, and energy level. Always secured on leash with hydration.',
      image: '/images/service-visits.jpg',
      alt: 'Happy dog enjoying outdoor exercise and play in yard'
    },
    {
      num: '04',
      tag: '04 / HOUSEHOLD CARE',
      title: 'Your home still feels lived in while you’re away.',
      desc: 'Packages and mail brought inside, houseplants watered, trash bins rolled to the curb, and interior light rotation to preserve complete household peace of mind.',
      image: '/images/closing-roses.jpg',
      alt: 'Content cat and attentive household presence'
    }
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#F5F0E7] text-left relative overflow-hidden" id="routine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-3">
          <span className="badge-tag-warm">
            Everyday Care
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211D] font-normal tracking-tight leading-[1.05]">
            The little things <br />
            <span className="italic text-[#243A31]">aren’t little to them.</span>
          </h2>
          <p className="text-base text-[#5C554E] max-w-xl">
            From the exact way they like their food dish positioned to their favorite evening scratch spot, Shalon respects the subtle routines that make your pets feel safe.
          </p>
        </div>

        {/* 4 Large Alternating Story Sections */}
        <div className="space-y-24 sm:space-y-32">
          {stories.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={item.num}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Large Faint Background Number (0.07 opacity) */}
                <div className={`absolute top-0 font-serif text-[120px] sm:text-[180px] font-bold text-[#24211D]/[0.06] select-none pointer-events-none -translate-y-12 sm:-translate-y-20 ${
                  isEven ? 'right-4 lg:right-12' : 'left-4 lg:left-12'
                }`}>
                  {item.num}
                </div>

                {/* Text Block (6 Cols) */}
                <div className={`lg:col-span-6 space-y-4 relative z-10 ${
                  isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
                }`}>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#C87552] uppercase block">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#24211D] font-normal leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                  
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenInquiry()}
                      className="text-xs font-bold text-[#243A31] hover:text-[#C87552] transition-colors flex items-center gap-1.5 group"
                    >
                      <span>Include in your care plan</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>

                {/* Editorial Photo (6 Cols) */}
                <div className={`lg:col-span-6 relative z-10 ${
                  isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
                }`}>
                  <div className="rounded-2xl overflow-hidden border border-[#E9E0D1] shadow-warm-raised aspect-[4/3] bg-[#FBF9F5] group">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
