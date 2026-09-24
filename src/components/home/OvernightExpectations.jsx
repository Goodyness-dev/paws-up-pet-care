import React from 'react';

export default function OvernightExpectations({ onOpenInquiry }) {
  const inclusions = [
    'Evening meal & fresh filtered water refresh',
    'Bedtime medications & calming routines',
    'Evening outdoor stroll & safe potty break',
    'Continuous overnight companionship in your home',
    'Morning breakfast & wake-up routine',
    'Full household presence, mail retrieval & plant care'
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#243A31] text-[#F5F0E7] text-left relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2E4B40] rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#A9B5A0] bg-white/10 border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C87552]" />
              Overnight In-Home Care
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.05]">
              A familiar presence <br />
              <span className="italic text-[#A9B5A0]">while you’re away.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F5F0E7]/80 leading-relaxed max-w-xl">
              Boarding kennels can cause profound disorientation for pets accustomed to their own beds, familiar smells, and quiet evening environments. With Paws Up overnight care, Shalon arrives in the evening to maintain your pet's bedtime comfort and morning joy.
            </p>

            {/* Checklist of evening routines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#F5F0E7]/90">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C87552] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Transparent Daytime Note */}
            <div className="p-5 rounded-2xl bg-black/25 border border-white/15 text-xs text-[#F5F0E7]/80 leading-relaxed max-w-xl">
              <strong className="text-white block mb-1">Clear Daytime Schedule:</strong>
              Overnight care provides approximately 12 dedicated hours of evening-to-morning presence. Shalon may leave for agreed periods during the day for other scheduled client drop-in visits or personal commitments, as confirmed in your tailored pre-trip plan.
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry({ service: 'overnight' })}
                className="btn-forest bg-[#F5F0E7] text-[#243A31] hover:bg-white text-sm py-3.5 px-8 font-bold shadow-xl"
              >
                <span>Discuss Overnight Availability</span>
                <svg className="w-4 h-4 text-[#243A31]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Visual (5 Cols): Big Display '12' & Cozy Sleeping Pet Image */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] group">
              <img
                src="/images/service-overnight.jpg"
                alt="Black Labrador resting comfortably on the living room rug during overnight care"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C87552] block">
                  Peaceful Evening Care
                </span>
                <span className="font-serif text-base text-[#F5F0E7] block">
                  Resting comfortably in their usual beds.
                </span>
              </div>
            </div>

            {/* Display Badge: 12 Hours */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
              <div>
                <span className="font-serif text-5xl sm:text-6xl font-normal text-[#F5F0E7] leading-none block">
                  ~12
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-[#A9B5A0] block mt-1">
                  Hours In-Home Presence
                </span>
              </div>
              <div className="text-right text-xs text-[#F5F0E7]/70">
                <span>Evening Arrival</span>
                <span className="mx-1.5">→</span>
                <span>Morning Routine</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
