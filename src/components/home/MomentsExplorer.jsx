import React, { useState } from 'react';
import { MOMENTS_DATA } from '../../data/servicesData';
import { imageManifest } from '../../data/imageManifest';
import ImageFrame from '../common/ImageFrame';

export default function MomentsExplorer({ selectedMoments, onToggleMoment, onOpenInquiry }) {
  const [activeTabId, setActiveTabId] = useState('portraits');

  const activeMoment = MOMENTS_DATA.find((m) => m.id === activeTabId) || MOMENTS_DATA[0];

  const momentImageMap = {
    portraits: imageManifest.momentPortraits,
    ceremony: imageManifest.momentCeremony,
    after: imageManifest.momentReturn
  };

  const currentImage = momentImageMap[activeTabId] || imageManifest.momentPortraits;
  const isIncluded = selectedMoments.includes(activeTabId);

  return (
    <section className="py-20 sm:py-28 bg-[#F0F2EC]/50 border-t border-[#D8DED5]" id="moments-planner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#345744]">
            // Interactive Planning Aid
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#26322D] mt-2 tracking-tight">
            Picture their part in your day.
          </h2>
          <p className="text-base sm:text-lg text-[#59645E] mt-3 font-sans">
            Explore how professional wedding day dog chaperoning fits into each moment of your celebration.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#FAFAF6] border border-[#D8DED5] shadow-sm max-w-full overflow-x-auto">
            {MOMENTS_DATA.map((tab) => {
              const isActive = tab.id === activeTabId;
              const hasSelected = selectedMoments.includes(tab.id);
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#345744] text-white shadow-md'
                      : 'text-[#59645E] hover:text-[#26322D]'
                  }`}
                >
                  <span>{tab.shortLabel}</span>
                  {hasSelected && (
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-300' : 'bg-[#345744]'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Card Canvas */}
        <div className="card-thick p-6 sm:p-10 lg:p-12 shadow-wedding-raised">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Photo Preview (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative">
                <ImageFrame
                  src={currentImage.src}
                  alt={currentImage.alt}
                  aspectRatio="aspect-[16/10]"
                  rounded="rounded-2xl"
                  title={currentImage.placeholderTitle}
                  subtitle={currentImage.placeholderSubtitle}
                  badge={`Moment 0${MOMENTS_DATA.findIndex(m => m.id === activeTabId) + 1}`}
                />
              </div>

              {/* Illustrative Micro-Timeline Sequence */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeMoment.timelineSteps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F0F2EC]/80 border border-[#D8DED5] text-left">
                    <span className="font-mono text-[11px] font-bold text-[#345744]">
                      {step.time}
                    </span>
                    <p className="text-xs font-semibold text-[#26322D] mt-0.5">
                      {step.title}
                    </p>
                    <p className="text-[11px] text-[#59645E] mt-1 leading-tight line-clamp-2">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description & Selection Area (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#345744]">
                  // {activeMoment.shortLabel} Focus
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#26322D] font-medium mt-1 mb-3">
                  {activeMoment.title}
                </h3>
                <p className="text-sm sm:text-base italic text-[#345744] font-serif mb-3">
                  �{activeMoment.lead}�
                </p>
                <p className="text-sm text-[#59645E] leading-relaxed mb-6 font-sans">
                  {activeMoment.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {activeMoment.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#26322D]">
                      <svg className="w-4 h-4 text-[#345744] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selection Control: Connects directly to the qualification form */}
              <div className="pt-6 border-t border-[#D8DED5]">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    onClick={() => onToggleMoment(activeTabId)}
                    className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      isIncluded
                        ? 'bg-[#345744] text-white shadow-sm'
                        : 'bg-white text-[#26322D] border border-[#D8DED5] hover:border-[#7C897F]'
                    }`}
                  >
                    {isIncluded ? (
                      <>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Included In My Inquiry</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        <span>Include This In My Inquiry</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onOpenInquiry()}
                    className="text-xs font-semibold text-[#345744] hover:text-[#294737] underline underline-offset-4 text-center sm:text-right"
                  >
                    Build Full Plan ?
                  </button>
                </div>

                <p className="text-[11px] text-[#59645E] mt-3 italic">
                  *Illustrative schedule. Your final timeline is tailored to your venue and photography schedule.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
