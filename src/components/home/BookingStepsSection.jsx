import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function BookingStepsSection({ onOpenInquiry }) {
  const steps = [
    {
      num: '01',
      title: 'Share Your Wedding Details',
      desc: 'Tell us your wedding date, venue, and tell us about your dog�s personality and requested coverage.'
    },
    {
      num: '02',
      title: 'Receive Your Tailored Proposal',
      desc: 'Melissa reviews your date and prepares an itemized care proposal with exact times, travel, and clear terms.'
    },
    {
      num: '03',
      title: 'Sign Agreement & Lock Deposit',
      desc: 'Review your proposal online, sign your digital care agreement, and submit your date-lock deposit.'
    },
    {
      num: '04',
      title: 'Finalize Timeline & Celebrate',
      desc: 'We coordinate with your planner and photographer. On the wedding day, every single detail is handled.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F0F2EC]/40 border-t border-[#D8DED5]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#345744]">
            // Seamless Four-Step Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#26322D] mt-2 tracking-tight">
            How booking your dog�s care works.
          </h2>
          <p className="text-base text-[#59645E] mt-3 font-sans">
            Calm, transparent, and organized from your first message to your wedding recessional.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step) => (
            <div
              key={step.num}
              className="card-thick p-7 flex flex-col justify-between hover:border-[#7C897F] transition-all bg-[#FEFEFB]"
            >
              <div>
                <span className="font-mono text-2xl font-light text-[#345744] block mb-3">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl font-medium text-[#26322D] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#59645E] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Golden Commitment Banner */}
        <div className="card-thick p-6 sm:p-8 bg-[#FAFAF6] border-2 border-[#345744]/20 max-w-3xl mx-auto text-center shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF0EB] text-[#345744] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#345744]"></span>
            <span>Official Booking Guarantee</span>
          </div>
          <p className="font-serif text-xl sm:text-2xl font-medium text-[#26322D] leading-snug">
            �{BUSINESS_INFO.bookingPolicy}�
          </p>
          <p className="text-xs text-[#59645E] mt-2 max-w-xl mx-auto">
            We never double-book dates. Once your deposit is received, Melissa is exclusively reserved for your celebration.
          </p>
          <div className="mt-5">
            <button
              onClick={() => onOpenInquiry()}
              className="btn-accent text-xs !py-2.5 !px-6"
            >
              Check Availability For Your Date
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
