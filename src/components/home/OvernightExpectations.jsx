import React from 'react';

export default function OvernightExpectations({ onOpenInquiry }) {
  return (
    <section className="py-20 sm:py-24 bg-[#EDF1F3]/80 border-y border-[#D5DDE0] text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="card-thick p-8 sm:p-12 lg:p-14 border border-[#D5DDE0] shadow-boutique-raised bg-[#FDFDFC] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="badge-tag">
              // Overnight In-Home Clarity
            </span>
            <span className="text-xs font-semibold text-[#284E68] bg-[#E7EFF4] px-3 py-1 rounded-full w-fit">
              Approx. 12 Hours In-Home Evening & Morning
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#25323D] tracking-tight">
            A familiar presence while you’re away.
          </h2>

          <p className="text-base text-[#56636C] leading-relaxed">
            Boarding facilities often cause disorientation and anxiety for pets accustomed to their own beds, familiar smells, and quiet evening environments. With Paws Up overnight care, Shalon arrives in the evening to feed dinner, administer medications, take evening walks, and provide affectionate companionship throughout the night.
          </p>

          {/* Clarity & Transparent Scope Box */}
          <div className="p-6 rounded-2xl bg-[#F8F9F7] border border-[#D5DDE0] space-y-3">
            <h4 className="font-heading font-bold text-base text-[#25323D] flex items-center gap-2">
              <svg className="w-5 h-5 text-[#284E68]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              Transparent Expectations & Daytime Routine
            </h4>
            <p className="text-sm text-[#56636C] leading-relaxed">
              To ensure complete mutual understanding: overnight care provides approximately <strong>12 dedicated hours</strong> in your home (typically from evening through breakfast). During daytime hours, Shalon may leave to perform scheduled drop-in care for other clients or attend to personal commitments. If your pet requires midday drop-in visits while you are away, additional daytime visits can be scheduled in your care plan.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-[#56636C]">
              Every household schedule is reviewed and agreed upon during your pre-trip consultation.
            </div>
            <button
              onClick={() => onOpenInquiry({ service: 'overnight' })}
              className="btn-accent text-sm"
            >
              <span>Discuss Overnight Availability</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
