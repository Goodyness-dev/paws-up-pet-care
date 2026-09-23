import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ClientPortalView({ onBackToSite }) {
  const [activeTab, setActiveTab] = useState('overview');

  const booking = {
    code: 'HPA-2026-COOPER-CONFIRMED',
    status: 'Confirmed & Deposit Paid',
    couple: 'Savannah & Tyler Mitchell',
    dog: 'Cooper (Golden Retriever, 3 yrs)',
    weddingDate: 'Saturday, October 17, 2026',
    venue: 'Birmingham Botanical Gardens (Rose Garden)',
    handler: 'Melissa Floyd (Founder & Lead Chaperone)',
    handlerPhone: '(205) 555-PAWS',
    balanceDue: '$500.00',
    balanceDeadline: 'October 3, 2026',
    depositPaid: '$150.00 (Processed)',
    timeline: [
      { time: '1:30 PM', action: 'Melissa arrives at Mountain Brook residence for greeting & decompression walk' },
      { time: '2:15 PM', action: 'Secure climate-controlled transit to Birmingham Botanical Gardens' },
      { time: '2:45 PM', action: 'Arrival at Rose Garden, attire dressing (sage floral collar), water break' },
      { time: '3:15 PM', action: 'Couple First Look & Sunset photo session staging with squeakers and beef treats' },
      { time: '4:00 PM', action: 'Ceremony escort with best man, quiet holding in shaded garden seat' },
      { time: '4:45 PM', action: 'Wedding party & family portraits' },
      { time: '5:30 PM', action: 'Chauffeured departure back to Mountain Brook residence' },
      { time: '6:15 PM', action: 'Dinner fed, fresh water, tucked into bed with confirmation photo text sent' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF6] text-[#26322D] py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#D8DED5]">
          <div>
            <span className="font-serif text-2xl font-medium tracking-tight text-[#26322D]">
              Happy Pack Adventures
            </span>
            <span className="block text-xs uppercase tracking-widest text-[#59645E]">
              Couple & Pet Care Portal
            </span>
          </div>

          <button
            onClick={onBackToSite}
            className="text-xs font-semibold text-[#59645E] hover:text-[#26322D] px-3 py-1.5 rounded-lg border border-[#D8DED5]"
          >
            ? Return To Site
          </button>
        </div>

        {/* Welcome & Status Header */}
        <div className="card-thick p-6 sm:p-8 bg-[#FEFEFB] border border-[#D8DED5] mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF0EB] text-[#345744] text-xs font-semibold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#345744]"></span>
                <span>{booking.status}</span>
              </div>
              <h1 className="font-serif text-3xl font-medium text-[#26322D]">
                Welcome, {booking.couple}!
              </h1>
              <p className="text-xs text-[#59645E] mt-1">
                Booking ID: {booking.code} � Wedding on {booking.weddingDate}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F0F2EC] text-right">
              <span className="text-[11px] text-[#59645E] block">Remaining Balance</span>
              <span className="font-serif text-2xl font-bold text-[#26322D] block">{booking.balanceDue}</span>
              <span className="text-[10px] text-[#59645E] block">Due {booking.balanceDeadline}</span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2 mb-6 border-b border-[#D8DED5] pb-3 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'overview' ? 'bg-[#345744] text-white' : 'text-[#59645E] hover:text-[#26322D]'
            }`}
          >
            Day-of Timeline
          </button>
          <button
            onClick={() => setActiveTab('logistics')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'logistics' ? 'bg-[#345744] text-white' : 'text-[#59645E] hover:text-[#26322D]'
            }`}
          >
            Emergency & Vet Details
          </button>
        </div>

        {/* Tab Content: Timeline */}
        {activeTab === 'overview' && (
          <div className="card-thick p-6 sm:p-8 bg-[#FEFEFB] border border-[#D8DED5] space-y-4">
            <h3 className="font-serif text-2xl font-medium text-[#26322D] mb-4">
              {booking.dog}�s Wedding Day Care Plan
            </h3>

            <div className="space-y-3">
              {booking.timeline.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl bg-[#F0F2EC]/60 border border-[#D8DED5] text-xs">
                  <span className="font-mono font-bold text-[#345744] w-20 flex-shrink-0 pt-0.5">
                    {item.time}
                  </span>
                  <span className="text-[#26322D] leading-relaxed">
                    {item.action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Logistics & Emergency */}
        {activeTab === 'logistics' && (
          <div className="card-thick p-6 sm:p-8 bg-[#FEFEFB] border border-[#D8DED5] space-y-6">
            <h3 className="font-serif text-2xl font-medium text-[#26322D]">
              Emergency Contacts & Day-of Logistics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#F0F2EC] border border-[#D8DED5]">
                <span className="font-semibold text-[#345744] uppercase tracking-wider block mb-1">
                  Lead Handler
                </span>
                <p className="font-medium text-[#26322D] text-sm">{booking.handler}</p>
                <p className="text-[#59645E] mt-1">Direct Day-of Phone: {booking.handlerPhone}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F0F2EC] border border-[#D8DED5]">
                <span className="font-semibold text-[#345744] uppercase tracking-wider block mb-1">
                  Emergency Veterinary Hospital
                </span>
                <p className="font-medium text-[#26322D] text-sm">Emergency Animal Clinic of Birmingham</p>
                <p className="text-[#59645E] mt-1">280 Health Center � Open 24/7 on Call</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAFAF6] border border-[#D8DED5] text-xs text-[#59645E] leading-relaxed">
              <strong className="text-[#26322D]">Need to make a schedule change?</strong><br />
              Timeline adjustments should be made at least 72 hours before the ceremony so Melissa can coordinate smoothly with your wedding planner.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
