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
        message: `Great news! ZIP ${clean} is within our primary service coverage area in North Mississippi.`
      });
    } else {
      setZipResult({
        status: 'rural',
        message: `ZIP ${clean} is considered rural or extended mileage. We frequently accept rural requests—your proposal will include transparent distance details!`
      });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8F9F7]" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
          
          {/* Left Text (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="badge-tag">
                // Service Area & Rural Inquiries
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#25323D] tracking-tight mt-2">
                Based in Senatobia. Welcoming rural households.
              </h2>
            </div>

            <p className="text-base text-[#56636C] leading-relaxed">
              Paws Up Pet & House Sitting is proudly based in Senatobia, Mississippi, providing attentive care throughout Tate County and Southern DeSoto County. Whether you reside in a neighborhood cul-de-sac or on rural acreage with long driveways and gates, Shalon provides reliable service.
            </p>

            {/* Coverage highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {[
                { name: 'Senatobia', type: 'Primary Base' },
                { name: 'Hernando', type: 'Regular Service' },
                { name: 'Coldwater', type: 'Regular Service' },
                { name: 'Como', type: 'Regular Service' },
                { name: 'Tate County', type: 'Acreage & Rural' },
                { name: 'DeSoto County', type: 'South Coverage' }
              ].map((loc, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#EDF1F3] border border-[#D5DDE0] text-left">
                  <span className="font-heading font-bold text-sm text-[#25323D] block">
                    {loc.name}
                  </span>
                  <span className="text-[11px] text-[#56636C] block">
                    {loc.type}
                  </span>
                </div>
              ))}
            </div>

            {/* Rural statement */}
            <p className="text-xs text-[#56636C] leading-relaxed">
              * Rural properties, gravel road access, and extended distance travel are quoted transparently during your consultation. No surprise travel surcharges after booking.
            </p>
          </div>

          {/* Right ZIP Check Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="card-thick p-7 sm:p-9 border border-[#D5DDE0] shadow-boutique-raised bg-[#FDFDFC] space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#284E68] block">
                  Quick Location Check
                </span>
                <h3 className="font-heading font-bold text-xl text-[#25323D] mt-1">
                  Check your ZIP code
                </h3>
                <p className="text-xs text-[#56636C] mt-1">
                  Enter your North Mississippi ZIP to confirm our coverage or rural schedule.
                </p>
              </div>

              <form onSubmit={handleZipCheck} className="space-y-3">
                <div>
                  <input
                    type="text"
                    maxLength={5}
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    placeholder="e.g. 38668 or 38632"
                    className="input-tactile font-mono text-center tracking-widest text-lg font-bold"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-accent w-full text-sm py-3"
                >
                  Verify Area
                </button>
              </form>

              {zipResult && (
                <div
                  className={`p-4 rounded-xl text-xs leading-relaxed animate-fadeIn ${
                    zipResult.status === 'primary'
                      ? 'bg-[#E7EFF4] text-[#284E68] border border-[#284E68]/20'
                      : 'bg-[#F8F9F7] text-[#25323D] border border-[#D5DDE0]'
                  }`}
                >
                  <p className="font-medium">{zipResult.message}</p>
                  <button
                    onClick={() => onOpenInquiry({ zip: zipInput })}
                    className="mt-2.5 text-[11px] font-bold text-[#284E68] underline block text-left"
                  >
                    Proceed with this location →
                  </button>
                </div>
              )}

              <div className="pt-2 border-t border-[#D5DDE0] text-[11px] text-[#56636C]">
                Need immediate help? Call Shalon directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-[#284E68] underline">{BUSINESS_INFO.phone}</a>.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
