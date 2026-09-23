import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function FaqSection({ onOpenInquiry }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF6]" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#345744]">
            // Practical Questions Answered
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#26322D] mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#59645E] mt-3 font-sans">
            Everything you need to know about venue permissions, transport, and wedding day care.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {BUSINESS_INFO.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`card-thick transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#345744]/40 bg-[#FEFEFB]' : 'border-[#D8DED5] hover:border-[#7C897F]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#26322D]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-[#D8DED5] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#345744] text-white border-transparent' : 'text-[#59645E] bg-[#F0F2EC]'
                  }`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm text-[#59645E] leading-relaxed border-t border-[#D8DED5]/60 pt-4 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have another question? */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#59645E]">
          <span>Have a specific venue question or special request? </span>
          <button
            onClick={() => onOpenInquiry()}
            className="font-semibold text-[#345744] hover:underline"
          >
            Ask Melissa directly ?
          </button>
        </div>

      </div>
    </section>
  );
}
