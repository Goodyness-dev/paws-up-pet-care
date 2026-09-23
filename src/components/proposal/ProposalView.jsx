import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ProposalView({ onBackToSite }) {
  const [agreementSigned, setAgreementSigned] = useState(false);
  const [signerName, setSignerName] = useState('');
  const [status, setStatus] = useState('review'); // 'review' | 'confirmed' | 'change_requested'
  const [changeNotes, setChangeNotes] = useState('');

  // Sample proposal details honoring At Home with Paws Up
  const proposal = {
    token: 'PUP-2026-HERNANDO-0512',
    client: 'Jennifer & Mark Miller',
    pet: 'Cooper (Golden Retriever, 4 yrs) & Bella (Domestic Shorthair Cat)',
    dates: 'Friday, May 15 – Monday, May 18, 2026',
    address: 'Hernando, MS (DeSoto County)',
    scopeTitle: 'Overnight In-Home Care & Daily Routine Companion',
    scheduleNote: 'Evening arrival around 6:00 PM through morning breakfast at 8:30 AM (~12 Hours presence), with agreed daytime intervals away.',
    items: [
      { name: 'Overnight In-Home Companion (3 Nights @ $85/night)', cost: 255 },
      { name: 'Midday Comfort Drop-In Visit (Saturday & Sunday)', cost: 40 },
      { name: 'Oral Medication Administration (Cooper Evening Joint Supplement)', cost: 0, note: 'Included' },
      { name: 'Household Mail, Amazon Deliveries & Trash Roll-out', cost: 0, note: 'Included' },
      { name: 'Indoor Houseplant Watering', cost: 0, note: 'Included' }
    ],
    total: 295,
    depositDueNow: 75,
    cashBalanceDueFirstDay: 220,
    balanceDueDate: 'May 15, 2026 (Payable in Cash on First Day of Care)',
    expiresAt: '7 days from issuance'
  };

  const handleConfirmCare = (e) => {
    e.preventDefault();
    if (!agreementSigned || !signerName.trim()) {
      alert('Please check the agreement acceptance box and enter your full name as digital signature.');
      return;
    }
    setStatus('confirmed');
  };

  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#25323D] py-12 px-4 sm:px-6 lg:px-8 font-sans text-left">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Navigation back */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToSite}
            className="text-xs font-semibold text-[#56636C] hover:text-[#284E68] flex items-center gap-1.5 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Return to Public Website</span>
          </button>
          <span className="text-xs font-mono text-[#56636C]">Ref: {proposal.token}</span>
        </div>

        {/* Proposal Document Card */}
        <div className="card-thick p-8 sm:p-12 border border-[#D5DDE0] shadow-boutique-raised bg-[#FDFDFC] space-y-8">
          
          {/* Header */}
          <div className="border-b border-[#D5DDE0] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="badge-tag">
                Tailored Care Proposal
              </span>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#25323D] tracking-tight mt-1">
                {BUSINESS_INFO.name}
              </h1>
              <p className="text-xs text-[#56636C]">
                Prepared by Shalon Parrott • Senatobia, MS • {BUSINESS_INFO.phone}
              </p>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#56636C] block">
                Status
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#E7EFF4] text-[#284E68] mt-0.5">
                {status === 'confirmed' ? 'Dates Confirmed ✓' : 'Awaiting Review & Deposit'}
              </span>
            </div>
          </div>

          {/* Client & Booking Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#F8F9F7] border border-[#D5DDE0] text-xs">
            <div>
              <span className="font-bold text-[#56636C] block uppercase tracking-wider text-[10px]">Client & Household:</span>
              <p className="font-heading font-semibold text-sm text-[#25323D] mt-0.5">{proposal.client}</p>
              <p className="text-[#56636C]">{proposal.address}</p>
              <p className="text-[#56636C] mt-1 font-medium">Pets: {proposal.pet}</p>
            </div>
            <div>
              <span className="font-bold text-[#56636C] block uppercase tracking-wider text-[10px]">Requested Dates & Scope:</span>
              <p className="font-heading font-semibold text-sm text-[#25323D] mt-0.5">{proposal.dates}</p>
              <p className="text-[#284E68] font-semibold">{proposal.scopeTitle}</p>
              <p className="text-[#56636C] mt-1 text-[11px] leading-tight">{proposal.scheduleNote}</p>
            </div>
          </div>

          {/* Line Items Breakdown */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-base text-[#25323D]">
              Care Inclusions & Itemized Schedule
            </h3>
            <div className="divide-y divide-[#D5DDE0] border border-[#D5DDE0] rounded-xl overflow-hidden bg-white">
              {proposal.items.map((item, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#25323D] block">{item.name}</span>
                    {item.note && <span className="text-[10px] text-[#284E68] font-bold">{item.note}</span>}
                  </div>
                  <span className="font-mono font-bold text-sm text-[#25323D]">
                    {item.cost === 0 ? '$0.00' : `$${item.cost}.00`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Terms & Policy */}
          <div className="p-6 rounded-2xl bg-[#EDF1F3] border border-[#D5DDE0] space-y-4">
            <div className="flex items-center justify-between border-b border-[#D5DDE0] pb-3">
              <span className="font-heading font-bold text-base text-[#25323D]">Estimated Total Care Investment</span>
              <span className="font-mono font-extrabold text-xl text-[#25323D]">${proposal.total}.00</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-[#D5DDE0] space-y-1">
                <span className="text-[11px] font-bold text-[#284E68] block uppercase tracking-wider">
                  Deposit Due Now (Locks Calendar)
                </span>
                <span className="font-mono font-bold text-lg text-[#284E68] block">
                  ${proposal.depositDueNow}.00
                </span>
                <p className="text-[#56636C] text-[11px]">
                  Required to officially secure your dates on Shalon’s private calendar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#D5DDE0] space-y-1">
                <span className="text-[11px] font-bold text-[#25323D] block uppercase tracking-wider">
                  Remaining Cash Balance Due Day 1
                </span>
                <span className="font-mono font-bold text-lg text-[#25323D] block">
                  ${proposal.cashBalanceDueFirstDay}.00
                </span>
                <p className="text-[#56636C] text-[11px]">
                  Payable in cash on the first day of service: {proposal.balanceDueDate}.
                </p>
              </div>
            </div>
          </div>

          {/* Digital Confirmation Acceptance */}
          {status !== 'confirmed' ? (
            <form onSubmit={handleConfirmCare} className="space-y-4 pt-2 border-t border-[#D5DDE0]">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreementSigned}
                  onChange={(e) => setAgreementSigned(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-[#284E68] border-[#7A8790] focus:ring-[#284E68]"
                />
                <span className="text-xs text-[#56636C] leading-relaxed">
                  I accept this customized care schedule and agree to the booking policy, including the qualifying reservation deposit and the cash balance payment due on the first day of care.
                </span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    required
                    placeholder="Type your full legal name as digital signature"
                    value={signerName}
                    onChange={(e) => setSignerName(e.target.value)}
                    className="input-tactile text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-accent text-sm w-full py-3"
                >
                  Confirm & Reserve Dates
                </button>
              </div>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-[#E7EFF4] border border-[#284E68]/30 text-center space-y-2">
              <span className="font-heading font-bold text-lg text-[#284E68] block">
                ✓ Proposal Confirmed by {signerName}
              </span>
              <p className="text-xs text-[#56636C]">
                Your dates are reserved. Shalon will be in touch to finalize house access and visit details.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
