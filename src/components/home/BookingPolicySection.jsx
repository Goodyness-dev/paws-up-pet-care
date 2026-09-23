import React, { useState } from 'react';

export default function BookingPolicySection({ onOpenInquiry }) {
  const [openPolicy, setOpenPolicy] = useState(null);

  const togglePolicy = (idx) => {
    setOpenPolicy(openPolicy === idx ? null : idx);
  };

  const steps = [
    {
      num: '01',
      title: 'Care Request',
      desc: 'Tell us about your pets, daily routines, household location, and requested travel dates.'
    },
    {
      num: '02',
      title: 'Tailored Care Plan',
      desc: 'Receive a clear proposal detailing exact visit times, scope of care, and transparent pricing.'
    },
    {
      num: '03',
      title: 'Confirmation & Care',
      desc: 'Lock in your dates with a qualifying deposit. The cash balance is due on the first day of care.'
    }
  ];

  const policies = [
    {
      title: 'Qualifying Booking Deposit',
      content: 'A deposit is required for qualifying holiday, extended, or overnight bookings to officially lock out other requests on Shalon’s calendar and ensure guaranteed availability.'
    },
    {
      title: 'When Dates Become Confirmed',
      content: 'Dates are officially locked once the reservation deposit is received and your customized care plan, emergency veterinary backup, and contact details are finalized.'
    },
    {
      title: 'First-Day Cash Balance',
      content: 'Per our standard operating agreement, the remaining balance of your booking is payable in cash on the first day of care.'
    },
    {
      title: 'Rural / Extended Distance Adjustments',
      content: 'For rural acreage, gated properties, or locations beyond our central route in Senatobia and Hernando, travel adjustments are quoted clearly upfront before booking.'
    }
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#FBF9F5] border-y border-[#E9E0D1] text-left" id="booking-policy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="badge-tag-warm">
            Booking
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#24211D] font-normal tracking-tight">
            Three simple steps. Total clarity.
          </h2>
          <p className="text-xs sm:text-sm text-[#5C554E]">
            How we prepare for your trip, confirm your dates, and ensure complete peace of mind.
          </p>
        </div>

        {/* 3 Step Cards with Progress Connecting Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="card-warm p-8 border border-[#E9E0D1] bg-[#F5F0E7] space-y-4 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl text-[#243A31] font-normal block">
                  {step.num}
                </span>
                <h3 className="font-serif text-2xl text-[#24211D] font-normal mt-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5C554E] leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E0D1] text-[11px] font-bold text-[#C87552] uppercase tracking-wider">
                {idx === 0 && 'Simple Form • No Obligation'}
                {idx === 1 && 'Transparent Scope & Timing'}
                {idx === 2 && 'Deposit Confirms Calendar'}
              </div>
            </div>
          ))}
        </div>

        {/* Elegant Policies Accordion */}
        <div className="max-w-3xl mx-auto card-warm p-8 sm:p-10 border border-[#E9E0D1] bg-[#F5F0E7] space-y-4">
          <div className="mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#243A31] block">
              Clear Operating Policies
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[#24211D] font-normal mt-1">
              Frequently Asked Policy Questions
            </h4>
          </div>

          <div className="divide-y divide-[#E9E0D1]">
            {policies.map((p, idx) => {
              const isOpen = openPolicy === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => togglePolicy(idx)}
                    className="w-full flex items-center justify-between text-left text-sm font-semibold text-[#24211D] hover:text-[#243A31] transition-colors py-1"
                  >
                    <span>{p.title}</span>
                    <span className="font-mono text-base font-bold text-[#C87552]">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-2 text-xs text-[#5C554E] leading-relaxed animate-fadeIn">
                      {p.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E9E0D1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-[#5C554E]">
              Ready to verify availability for your upcoming dates?
            </span>
            <button
              onClick={() => onOpenInquiry()}
              className="btn-forest text-xs py-2.5 px-5 font-bold"
            >
              Start Care Request
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
