import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenInquiry }) {
  const { reviews } = BUSINESS_INFO;
  const featured = reviews[0];
  const others = reviews.slice(1);

  return (
    <section className="py-20 sm:py-28 bg-[#EDF1F3]/50 border-b border-[#D5DDE0]" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="badge-tag">
            Genuine Client Reassurance
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#25323D] tracking-tight">
            Loved by pets. Trusted by families.
          </h2>
          <p className="text-sm sm:text-base text-[#56636C]">
            Here is what pet parents across Senatobia, Hernando, and North Mississippi have to say about Paws Up.
          </p>
        </div>

        {/* Spacious Asymmetric Review Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Featured Large Typographic Review (7 Cols) */}
          <div className="lg:col-span-7 card-thick p-8 sm:p-12 border border-[#D5DDE0] shadow-boutique-card flex flex-col justify-between space-y-6 bg-[#FDFDFC]">
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-[#284E68]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-heading text-xl sm:text-2xl text-[#25323D] leading-snug font-medium">
                "{featured.quote}"
              </blockquote>
            </div>

            <div className="pt-4 border-t border-[#D5DDE0] flex items-center justify-between">
              <div>
                <span className="font-heading font-bold text-sm text-[#25323D] block">
                  {featured.author}
                </span>
                <span className="text-xs text-[#56636C] block">
                  {featured.location} • {featured.pet}
                </span>
              </div>
              <span className="text-xs font-semibold text-[#284E68] bg-[#E7EFF4] px-2.5 py-1 rounded-full">
                Verified Client
              </span>
            </div>
          </div>

          {/* Supporting Reviews (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {others.map((rev) => (
              <div
                key={rev.id}
                className="card-thick-hover p-6 sm:p-7 border border-[#D5DDE0] bg-[#FDFDFC] flex flex-col justify-between space-y-3 flex-1"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-[#284E68]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-[#56636C] leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-2 border-t border-[#D5DDE0] flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-[#25323D] block">{rev.author}</strong>
                    <span className="text-[#56636C]">{rev.location} • {rev.pet}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Facebook Link Confirmation */}
        <div className="mt-8 text-center">
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#284E68] hover:text-[#1E3E54] hover:underline"
          >
            <span>See more community updates on our Facebook Page</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
