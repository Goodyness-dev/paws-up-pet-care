import React, { useState } from 'react';
import { SERVICES_CATEGORIES } from '../../data/servicesData';
import { imageManifest } from '../../data/imageManifest';

export default function SignatureServiceSelector({ onOpenInquiry }) {
  const [activeTabId, setActiveTabId] = useState('visits');
  const activeService = SERVICES_CATEGORIES.find((s) => s.id === activeTabId) || SERVICES_CATEGORIES[0];

  return (
    <section className="py-20 sm:py-28 bg-[#EDF1F3]/60 border-y border-[#D5DDE0] relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="badge-tag">
            Interactive Service Discovery
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#25323D] tracking-tight">
            What kind of care do you need?
          </h2>
          <p className="text-base text-[#56636C] max-w-xl mx-auto">
            Choose a care model below to explore visit durations, daily inclusions, and how Shalon personalizes routines for your home.
          </p>

          {/* Accessible Tab Selectors */}
          <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist">
            {SERVICES_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeTabId;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTabId(cat.id)}
                  className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#284E68] text-white shadow-md'
                      : 'bg-[#FDFDFC] text-[#56636C] border border-[#D5DDE0] hover:text-[#25323D] hover:border-[#284E68]'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-[#D5DDE0]'}`} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stable Interactive Detail Panel (Zero Vertical Jumping) */}
        <div className="card-thick p-6 sm:p-10 lg:p-12 min-h-[520px] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Columns: Scope, Timing & Duration Breakdown */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#284E68] block">
                  // {activeService.tagline}
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#25323D] mt-1">
                  {activeService.name}
                </h3>
                <p className="text-sm sm:text-base text-[#56636C] mt-2 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Timing & Distance Qualifier Note */}
              <div className="p-4 rounded-xl bg-[#EDF1F3] border border-[#D5DDE0] text-xs text-[#25323D] flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#284E68] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <span className="font-semibold block text-[#25323D]">Service Note & Distance Policy:</span>
                  <span className="text-[#56636C]">{activeService.timingNote}</span>
                </div>
              </div>

              {/* Options Grid (Duration Pills or Cards) */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#56636C] block">
                  Available Scope & Duration Options:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.options.map((opt, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F8F9F7] border border-[#D5DDE0] space-y-1.5 hover:border-[#284E68] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-xs sm:text-sm text-[#25323D]">
                          {opt.title}
                        </span>
                        <span className="text-[11px] font-bold text-[#284E68] bg-[#E7EFF4] px-2 py-0.5 rounded-md">
                          {opt.duration}
                        </span>
                      </div>
                      <p className="text-xs text-[#56636C] leading-snug">
                        {opt.desc}
                      </p>
                      <span className="text-[10px] text-[#56636C] block italic pt-0.5">
                        Ideal for: {opt.idealFor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions List */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#56636C] block mb-2">
                  What’s Always Handled:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#25323D]">
                  {activeService.inclusions.slice(0, 6).map((inc, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#284E68] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Transfer choice into the booking drawer */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenInquiry({ service: activeService.id })}
                  className="btn-accent text-sm"
                >
                  <span>Request {activeService.shortTitle}</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <span className="text-xs text-[#56636C]">
                  Transfers directly to your care consultation
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Representative Care Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#D5DDE0] shadow-boutique-card aspect-[4/3] sm:aspect-[1/1] relative group">
                <img
                  src={imageManifest.services[activeService.id]?.src || activeService.heroImage}
                  alt={imageManifest.services[activeService.id]?.alt || activeService.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E7EFF4] block">
                    {activeService.shortTitle}
                  </span>
                  <span className="font-heading font-medium text-sm text-white block">
                    {imageManifest.services[activeService.id]?.caption || activeService.tagline}
                  </span>
                </div>
              </div>

              {/* Transparent Policy Callout for Overnight */}
              {activeService.id === 'overnight' && (
                <div className="mt-4 p-4 rounded-xl bg-[#F8F9F7] border border-[#D5DDE0] text-xs text-[#56636C] leading-relaxed text-left">
                  <strong className="text-[#25323D] block mb-1">Honest Overnight Scope:</strong>
                  Overnight care includes approximately 12 hours of evening-to-morning presence. Shalon may leave for agreed daytime intervals for other client visits, following a customized plan agreed upon in advance.
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
