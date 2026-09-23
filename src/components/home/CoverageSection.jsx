import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../../data/servicesData';

gsap.registerPlugin(ScrollTrigger);

export default function CoverageSection({ onOpenInquiry }) {
  const sectionRef = useRef(null);

  const serviceImages = {
    'photo-companion': '/images/moment-portraits.jpg',
    'ceremony-companion': '/images/moment-ceremony.jpg',
    'extended-wedding-care': '/images/gallery-bridal-suite.jpg'
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.coverage-card', {
        y: 45,
        opacity: 0,
        duration: 0.85,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#FAFAF6]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#345744]">
            // Tailored Coverage Options
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#26322D] mt-2 tracking-tight">
            A care plan around your celebration.
          </h2>
          <p className="text-base sm:text-lg text-[#59645E] mt-3 font-sans leading-relaxed">
            Every wedding is distinct. Choose the coverage level that matches your timeline, and we will tailor every detail to your venue and dog's routine.
          </p>
        </div>

        {/* 3 Coverage Cards With Rich Visual Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {SERVICES.map((service) => {
            const cardImg = serviceImages[service.id];
            return (
              <div
                key={service.id}
                className={`coverage-card card-thick flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:-translate-y-2 ${
                  service.popular
                    ? 'border-2 border-[#345744] bg-[#FEFEFB] shadow-wedding-raised ring-1 ring-[#345744]/20'
                    : 'border border-[#D8DED5] bg-[#FEFEFB] hover:border-[#7C897F]'
                }`}
              >
                {/* Visual Header Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img
                    src={cardImg}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {service.popular && (
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#345744] text-white shadow-md">
                        ? Most Requested Scope
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-semibold block">
                      {service.duration} Coverage
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs italic text-[#59645E] mb-3">
                      {service.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#26322D] mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Inclusions List */}
                    <div className="space-y-2.5 pt-4 border-t border-[#D8DED5]">
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#345744]">
                        Key Inclusions:
                      </p>
                      <ul className="space-y-2">
                        {service.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#59645E]">
                            <svg className="w-3.5 h-3.5 text-[#345744] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button & Deposit Note */}
                  <div className="pt-6 mt-6 border-t border-[#D8DED5]">
                    <div className="flex items-center justify-between mb-3 text-xs text-[#59645E]">
                      <span>Typical Investment</span>
                      <span className="font-semibold text-[#26322D]">{service.typicalRange}</span>
                    </div>

                    <button
                      onClick={() => onOpenInquiry(service.id)}
                      className={`w-full py-3 px-5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                        service.popular
                          ? 'bg-[#345744] text-white hover:bg-[#294737] shadow-sm'
                          : 'bg-[#F0F2EC] text-[#26322D] hover:bg-[#345744] hover:text-white border border-[#D8DED5]'
                      }`}
                    >
                      <span>Request Tailored Quote</span>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <p className="text-[11px] text-center text-[#59645E] mt-2">
                      ${service.depositAmount} Date-Lock Deposit upon agreement
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Transparent Quote Notice */}
        <div className="card-thick p-6 sm:p-8 bg-[#F0F2EC]/60 border border-[#D8DED5] max-w-4xl mx-auto text-center">
          <h4 className="font-serif text-xl text-[#26322D] font-medium mb-2">
            How Our Transparent Pricing Works
          </h4>
          <p className="text-xs sm:text-sm text-[#59645E] leading-relaxed max-w-2xl mx-auto">
            We never believe in rigid flat pricing or surprise fees. Your tailored proposal reflects your exact venue mileage, celebration hours, and dog count. Once reviewed and approved by you, your date is locked with a single booking deposit.
          </p>
        </div>

      </div>
    </section>
  );
}
