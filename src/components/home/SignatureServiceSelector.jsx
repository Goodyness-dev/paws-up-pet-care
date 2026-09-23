import React, { useState } from 'react';
import { SERVICES_CATEGORIES } from '../../data/servicesData';
import { imageManifest } from '../../data/imageManifest';

export default function SignatureServiceSelector({ onOpenInquiry }) {
  const [activeTabId, setActiveTabId] = useState('visits');
  const [selectedDurationIndex, setSelectedDurationIndex] = useState(1); // Default to 30 Min

  const activeService = SERVICES_CATEGORIES.find((s) => s.id === activeTabId) || SERVICES_CATEGORIES[0];

  const durations = [
    {
      time: "15",
      unit: "MIN",
      title: "Speedy Paws Check-In",
      desc: "Quick potty break, fresh water refill, and gentle head scratches for nearby Senatobia homes.",
      inclusions: ["Potty break & yard relief", "Fresh filtered water refresh", "Quick treat & affection", "Photo update"],
      idealFor: "Senior dogs needing midday relief or self-sufficient cats."
    },
    {
      time: "30",
      unit: "MIN",
      title: "Standard Care Visit",
      desc: "Neighborhood leash walk or yard play, feeding, water refresh, litter box scooping, and photo update.",
      inclusions: ["Leash walk or yard play", "Fresh meal & water bowl clean", "Litter box scooping", "Oral medication support", "Detailed photo update"],
      idealFor: "Most dogs and cats on standard daily schedules.",
      popular: true
    },
    {
      time: "45",
      unit: "MIN",
      title: "Extended Care Visit",
      desc: "Longer walk, medication administration, brushing, multiple pets, and unrushed companion time.",
      inclusions: ["Longer decompression walk", "Multi-pet feeding routines", "Medication administration", "Playtime & brushing", "Photo update"],
      idealFor: "Multi-pet households, puppies, or pets needing extra TLC."
    },
    {
      time: "60",
      unit: "MIN",
      title: "Deluxe Enrichment Visit",
      desc: "High-energy exercise, dedicated interactive play, thorough feeding, and calm relaxation companionship.",
      inclusions: ["Full 60-min dedicated presence", "High energy workout & ball play", "Full meal preparation", "Home security & mail check", "Detailed update"],
      idealFor: "High-energy breeds or anxious pets that crave company."
    }
  ];

  const currentDuration = durations[selectedDurationIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#F5F0E7] text-left relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <span className="badge-tag-warm">
            What Kind Of Care Do They Need?
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211D] font-normal tracking-tight leading-[1.05]">
            Care designed around <br />
            <span className="italic text-[#243A31]">their actual routine.</span>
          </h2>
          <p className="text-base text-[#5C554E] max-w-xl">
            Choose a care category to explore visit lengths, overnight options, and how Shalon adapts to your household.
          </p>
        </div>

        {/* 3 Large Editorial Rows / Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {SERVICES_CATEGORIES.map((cat, idx) => {
            const isSelected = cat.id === activeTabId;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveTabId(cat.id)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                  isSelected
                    ? 'bg-[#243A31] text-[#F5F0E7] border-[#243A31] shadow-warm-raised'
                    : 'bg-[#FBF9F5] text-[#24211D] border-[#E9E0D1] hover:border-[#243A31] opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold tracking-widest ${
                    isSelected ? 'text-[#C87552]' : 'text-[#5C554E]'
                  }`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-xs uppercase tracking-widest font-bold ${
                    isSelected ? 'text-[#A9B5A0]' : 'text-[#C87552]'
                  }`}>
                    {cat.shortTitle}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight">
                  {cat.name}
                </h3>

                <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                  isSelected ? 'text-[#F5F0E7]/80' : 'text-[#5C554E]'
                }`}>
                  {cat.tagline}
                </p>

                <div className="mt-4 pt-4 border-t border-current/15 flex items-center justify-between text-xs font-semibold">
                  <span>{isSelected ? 'Active Care View' : 'Select Category'}</span>
                  <span>{isSelected ? '↓' : '→'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Panel */}
        <div className="card-warm p-8 sm:p-12 lg:p-14 border border-[#E9E0D1] bg-[#FBF9F5] shadow-warm-raised">
          
          {/* TAB 1: VISITS AT HOME WITH INTERACTIVE SLIDER */}
          {activeTabId === 'visits' && (
            <div className="space-y-10 animate-fadeIn">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C87552] block mb-1">
                  How Much Time Do They Need?
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#24211D] font-normal">
                  Interactive Visit Duration Selector
                </h4>
                <p className="text-xs sm:text-sm text-[#5C554E] mt-1 max-w-xl">
                  Click a duration to view visit details, daily inclusions, and suitable pet energy levels.
                </p>
              </div>

              {/* Interactive Duration Track: 15 — 30 — 45 — 60 */}
              <div className="p-6 rounded-2xl bg-[#F5F0E7] border border-[#E9E0D1] space-y-6">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                  {durations.map((d, index) => {
                    const isPicked = selectedDurationIndex === index;
                    return (
                      <button
                        key={d.time}
                        onClick={() => setSelectedDurationIndex(index)}
                        className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 ${
                          isPicked
                            ? 'bg-[#243A31] text-[#F5F0E7] border-[#243A31] shadow-md scale-102'
                            : 'bg-[#FBF9F5] text-[#24211D] border-[#E9E0D1] hover:border-[#243A31]'
                        }`}
                      >
                        <span className="font-serif text-2xl sm:text-3xl block font-normal leading-none">
                          {d.time}
                        </span>
                        <span className={`text-[10px] font-bold tracking-wider uppercase block mt-1 ${
                          isPicked ? 'text-[#C87552]' : 'text-[#5C554E]'
                        }`}>
                          {d.unit}
                        </span>
                        {d.popular && (
                          <span className="hidden sm:inline-block text-[9px] bg-[#C87552] text-white px-2 py-0.5 rounded-full font-bold uppercase mt-1">
                            Popular
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Duration Content Card */}
                <div className="bg-[#FBF9F5] p-6 sm:p-8 rounded-xl border border-[#E9E0D1] space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E9E0D1] pb-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C87552] block">
                        {currentDuration.time} Minute Drop-In
                      </span>
                      <h5 className="font-serif text-xl sm:text-2xl text-[#24211D] font-normal">
                        {currentDuration.title}
                      </h5>
                    </div>
                    <span className="text-xs text-[#5C554E] italic">
                      Ideal for: {currentDuration.idealFor}
                    </span>
                  </div>

                  <p className="text-sm text-[#5C554E] leading-relaxed">
                    {currentDuration.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-[#24211D]">
                    {currentDuration.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#243A31]" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenInquiry({ service: 'visits', duration: currentDuration.time + ' Min' })}
                      className="btn-forest text-xs sm:text-sm py-3 px-6"
                    >
                      <span>Request {currentDuration.time}-Minute Visit</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <span className="text-xs text-[#5C554E]">
                      * Speedy Paws 15-min visits subject to distance review in Senatobia.
                    </span>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: OVERNIGHT CARE */}
          {activeTabId === 'overnight' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C87552] block">
                    ~12 Hours Evening → Morning Presence
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl text-[#243A31] font-normal leading-tight">
                    A familiar presence while you’re away.
                  </h4>
                  <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed">
                    Shalon stays overnight in your home so your animals sleep in their usual beds, hear familiar household sounds, and wake up to their regular morning routine.
                  </p>

                  <div className="p-5 rounded-xl bg-[#F5F0E7] border border-[#E9E0D1] space-y-2 text-xs text-[#5C554E]">
                    <strong className="text-[#24211D] block">Transparent Overnight Expectations:</strong>
                    Overnight care includes approximately 12 hours of evening and morning presence. Shalon may leave for agreed daytime intervals for other client visits, according to a schedule confirmed before your trip.
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenInquiry({ service: 'overnight' })}
                      className="btn-forest text-sm py-3 px-6"
                    >
                      <span>Discuss Overnight Availability</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-[#E9E0D1] aspect-[4/3] shadow-md">
                    <img
                      src="/images/service-overnight.jpg"
                      alt="Two dogs resting peacefully together at home"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: SOMETHING CUSTOM */}
          {activeTabId === 'custom' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C87552] block">
                    Tailored Care Solutions
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl text-[#243A31] font-normal leading-tight">
                    Custom transport, weddings & acreage care.
                  </h4>
                  <p className="text-sm sm:text-base text-[#5C554E] leading-relaxed">
                    Have a special need? From climate-controlled pet taxi rides to the vet, wedding attendance for photos, or rural acreage check-ins for hobby farm animals, Shalon crafts a tailored care plan.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-4 rounded-xl bg-[#F5F0E7] border border-[#E9E0D1]">
                      <strong className="text-[#24211D] block mb-1">Pet Taxi & Transit</strong>
                      Safe rides to vet appointments or groomers in North MS.
                    </div>
                    <div className="p-4 rounded-xl bg-[#F5F0E7] border border-[#E9E0D1]">
                      <strong className="text-[#24211D] block mb-1">Rural Acreage & Farm</strong>
                      Feeding and checking on hobby farm animals and acreage.
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenInquiry({ service: 'custom' })}
                      className="btn-forest text-sm py-3 px-6"
                    >
                      <span>Tell Us What You Need</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden border border-[#E9E0D1] aspect-[4/3] shadow-md">
                    <img
                      src="/images/service-custom.jpg"
                      alt="Safe pet taxi and custom transit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
