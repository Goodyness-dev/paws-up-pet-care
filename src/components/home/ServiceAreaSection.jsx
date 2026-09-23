import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ServiceAreaSection({ onOpenInquiry }) {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState(null);

  const primaryZips = ['38668', '38632', '38618', '38619', '38671', '38672'];

  const handleZipCheck = (e) => {
    e.preventDefault();
    const clean = zipInput.trim();
    if (!clean) return;

    if (primaryZips.includes(clean)) {
      setZipResult({
        status: 'primary',
        message: '✓ Great news — your ZIP code is within our primary service coverage area in North Mississippi.'
      });
    } else {
      setZipResult({
        status: 'rural',
        message: 'Your area may be available by custom arrangement. We regularly accept rural acreage and extended distance requests—let’s confirm with Shalon!'
      });
    }
  };

  return (
    <section className="py-24 sm:py-36 bg-[#F5F0E7] text-left relative" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Location Points (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-tag-warm">
              Service Area
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24211D] font-normal tracking-tight leading-[1.05]">
              Based in Senatobia. <br />
              <span className="italic text-[#243A31]">Welcoming rural households.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed max-w-xl">
              Paws Up Pet & House Sitting is centered in Senatobia, Mississippi, providing dedicated care throughout Tate County and Southern DeSoto County. Whether you reside in town or on rural acreage with gravel roads and gates, Shalon provides dependable service.
            </p>

            {/* Region Points with Senatobia Home Base Star */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#FBF9F5] border-2 border-[#243A31] shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C87552] flex items-center gap-1">
                  <span>★</span> HOME BASE
                </span>
                <span className="font-serif text-lg font-normal text-[#24211D] block mt-0.5">
                  Senatobia
                </span>
                <span className="text-[11px] text-[#5C554E] block">Tate County Central</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E9E0D1]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#243A31] block">
                  Regular Route
                </span>
                <span className="font-serif text-lg font-normal text-[#24211D] block mt-0.5">
                  Hernando
                </span>
                <span className="text-[11px] text-[#5C554E] block">DeSoto County South</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E9E0D1]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#243A31] block">
                  Regular Route
                </span>
                <span className="font-serif text-lg font-normal text-[#24211D] block mt-0.5">
                  Coldwater
                </span>
                <span className="text-[11px] text-[#5C554E] block">Tate County North</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E9E0D1]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#243A31] block">
                  Regular Route
                </span>
                <span className="font-serif text-lg font-normal text-[#24211D] block mt-0.5">
                  Como
                </span>
                <span className="text-[11px] text-[#5C554E] block">Panola / Tate Area</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E9E0D1]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C87552] block">
                  Acreage & Farm
                </span>
                <span className="font-serif text-lg font-normal text-[#24211D] block mt-0.5">
                  Tate County
                </span>
                <span className="text-[11px] text-[#5C554E] block">Rural Properties</span>
              </div>

              <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E9E0D1]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C87552] block">
                  Extended Route
                </span>
                <span className="font-serif text-lg font-normal text-[#24211D] block mt-0.5">
                  DeSoto County
                </span>
                <span className="text-[11px] text-[#5C554E] block">Southern Coverage</span>
              </div>
            </div>

            <p className="text-xs text-[#5C554E] pt-1">
              * Rural mileage and distance adjustments are reviewed and confirmed in advance during your consultation.
            </p>
          </div>

          {/* Right ZIP Code Checker (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="card-warm p-8 sm:p-10 border border-[#E9E0D1] bg-[#FBF9F5] shadow-warm-raised space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C87552] block">
                  Are You Within Paws Up Range?
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#24211D] font-normal mt-1">
                  Check your ZIP code
                </h3>
                <p className="text-xs text-[#5C554E] mt-1">
                  Enter your North Mississippi ZIP to confirm our availability for your care dates.
                </p>
              </div>

              <form onSubmit={handleZipCheck} className="space-y-3">
                <input
                  type="text"
                  maxLength={5}
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  placeholder="e.g. 38668 or 38632"
                  className="input-tactile-warm font-mono text-center tracking-widest text-lg font-bold"
                />
                <button
                  type="submit"
                  className="btn-forest w-full text-sm py-3 font-bold"
                >
                  Check Area
                </button>
              </form>

              {zipResult && (
                <div
                  className={`p-4 rounded-xl text-xs leading-relaxed animate-fadeIn ${
                    zipResult.status === 'primary'
                      ? 'bg-[#A9B5A0]/20 text-[#243A31] border border-[#243A31]/20'
                      : 'bg-[#F5F0E7] text-[#24211D] border border-[#E9E0D1]'
                  }`}
                >
                  <p className="font-semibold">{zipResult.message}</p>
                  <button
                    onClick={() => onOpenInquiry({ zip: zipInput })}
                    className="mt-2.5 text-[11px] font-bold text-[#C87552] underline block text-left"
                  >
                    Proceed with this location →
                  </button>
                </div>
              )}

              <div className="pt-2 border-t border-[#E9E0D1] text-[11px] text-[#5C554E]">
                Need immediate help? Call Shalon directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-[#243A31] underline">{BUSINESS_INFO.phone}</a>.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
