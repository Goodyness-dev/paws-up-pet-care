import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function BookingPolicySection({ onOpenInquiry }) {
  const { bookingSteps } = BUSINESS_INFO;

  return (
    <section className="py-20 sm:py-28 bg-[#EDF1F3]/60 border-y border-[#D5DDE0] text-left" id="booking-policy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="badge-tag">
            Simple 3-Step Process
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#25323D] tracking-tight">
            Booking with total clarity and trust.
          </h2>
          <p className="text-sm sm:text-base text-[#56636C]">
            How we prepare for your trip, confirm your dates, and ensure your home and pets are completely cared for.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {bookingSteps.map((step, idx) => (
            <div
              key={idx}
              className="card-thick p-7 border border-[#D5DDE0] bg-[#FDFDFC] space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-heading font-bold text-[#284E68] block">
                  {step.step}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#25323D] mt-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#56636C] leading-relaxed mt-2">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D5DDE0]/50 text-[11px] font-semibold text-[#284E68]">
                {idx === 0 && 'Quick Online Form • No Obligation'}
                {idx === 1 && 'Transparent Scope & Timing'}
                {idx === 2 && 'Deposit Confirms Dates'}
              </div>
            </div>
          ))}
        </div>

        {/* Clear Policy Summary Panel */}
        <div className="card-thick p-6 sm:p-8 border border-[#D5DDE0] bg-[#FDFDFC] space-y-4">
          <div className="flex items-center gap-2 text-[#284E68]">
            <svg className="w-5 h-5 text-[#284E68]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 className="font-heading font-bold text-base text-[#25323D]">
              Clear Booking & Balance Policy
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#56636C] leading-relaxed">
            <div className="p-4 rounded-xl bg-[#F8F9F7] border border-[#D5DDE0]">
              <strong className="text-[#25323D] block mb-1">1. Qualifying Booking Deposit</strong>
              A deposit is required for qualifying holiday, extended, or overnight bookings to officially lock out other requests on Shalon's calendar.
            </div>

            <div className="p-4 rounded-xl bg-[#F8F9F7] border border-[#D5DDE0]">
              <strong className="text-[#25323D] block mb-1">2. Confirmation Conditions</strong>
              Dates are guaranteed once the deposit is received and your customized care plan & emergency contacts are confirmed.
            </div>

            <div className="p-4 rounded-xl bg-[#F8F9F7] border border-[#D5DDE0]">
              <strong className="text-[#25323D] block mb-1">3. First-Day Cash Balance</strong>
              Per our standard operating agreement, the remaining balance of your booking is payable in cash on the first day of care.
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs text-[#56636C]">
              Have questions about your specific dates or multi-week arrangements?
            </span>
            <button
              onClick={() => onOpenInquiry()}
              className="btn-accent text-xs py-2.5 px-5"
            >
              Start Your Request
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
