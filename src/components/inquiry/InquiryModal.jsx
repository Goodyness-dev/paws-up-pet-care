import React, { useState, useEffect } from 'react';
import { SERVICES_CATEGORIES } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function InquiryModal({ isOpen, onClose, initialScope, initialZip }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Care Service & Dates
    serviceCategory: initialScope?.service || 'visits',
    visitDuration: '30 Min',
    startDate: '',
    endDate: '',
    cityZip: initialZip || '',
    isRuralAcreage: 'no',

    // Step 2: Pets & Routine
    petNames: '',
    petTypes: '1 Dog',
    medicationNeeds: 'None',
    temperamentNotes: '',

    // Step 3: Owner Contact
    clientName: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    additionalNotes: ''
  });

  useEffect(() => {
    if (initialScope?.service) {
      setFormData((prev) => ({ ...prev, serviceCategory: initialScope.service }));
    }
    if (initialZip) {
      setFormData((prev) => ({ ...prev, cityZip: initialZip }));
    }
  }, [initialScope, initialZip]);

  if (!isOpen) return null;

  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 text-left">
      <div className="bg-[#FDFDFC] border border-[#D5DDE0] rounded-3xl max-w-2xl w-full p-6 sm:p-9 shadow-boutique-raised relative my-8">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#56636C] hover:text-[#25323D] hover:bg-[#EDF1F3] transition-colors"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <span className="badge-tag">
                Care Consultation & Schedule Check
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#25323D] tracking-tight">
                Request Pet & House Sitting
              </h3>
              <p className="text-xs sm:text-sm text-[#56636C]">
                Step {step} of 3 — Share your schedule, location, and pet preferences.
              </p>
            </div>

            {/* Stepper progress */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-[#284E68]' : 'bg-[#D5DDE0]'
                  }`}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Service Type, Dates, Location */}
              {step === 1 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-2">
                      Select Primary Care Model
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {SERVICES_CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleChange('serviceCategory', cat.id)}
                          className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                            formData.serviceCategory === cat.id
                              ? 'border-[#284E68] bg-[#E7EFF4] text-[#284E68] shadow-sm'
                              : 'border-[#D5DDE0] bg-[#F8F9F7] text-[#56636C] hover:border-[#284E68]'
                          }`}
                        >
                          <span className="block font-bold text-sm text-[#25323D] mb-1">
                            {cat.name}
                          </span>
                          <span className="text-[11px] block opacity-85 leading-tight">
                            {cat.shortTitle}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.serviceCategory === 'visits' && (
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-2">
                        Preferred Drop-In Duration
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['15 Min', '30 Min', '45 Min', '60 Min'].map((dur) => (
                          <button
                            key={dur}
                            type="button"
                            onClick={() => handleChange('visitDuration', dur)}
                            className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                              formData.visitDuration === dur
                                ? 'border-[#284E68] bg-[#284E68] text-white'
                                : 'border-[#D5DDE0] bg-[#F8F9F7] text-[#56636C]'
                            }`}
                          >
                            {dur}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {formData.serviceCategory === 'overnight' && (
                    <div className="p-3.5 rounded-xl bg-[#EDF1F3] border border-[#D5DDE0] text-xs text-[#56636C]">
                      <strong className="text-[#25323D] block mb-0.5">Overnight Scope:</strong>
                      Approx. 12 hours in-home evening to morning, with agreed daytime intervals away.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                        Start Date / First Day *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.startDate}
                        onChange={(e) => handleChange('startDate', e.target.value)}
                        className="input-tactile text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                        End Date / Return Day *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.endDate}
                        onChange={(e) => handleChange('endDate', e.target.value)}
                        className="input-tactile text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                        City & ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Senatobia 38668"
                        value={formData.cityZip}
                        onChange={(e) => handleChange('cityZip', e.target.value)}
                        className="input-tactile text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                        Property Type
                      </label>
                      <select
                        value={formData.isRuralAcreage}
                        onChange={(e) => handleChange('isRuralAcreage', e.target.value)}
                        className="input-tactile text-sm"
                      >
                        <option value="no">Town / Subdivision Neighborhood</option>
                        <option value="yes">Rural Acreage / Gated / Long Driveway</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-accent text-sm"
                    >
                      <span>Continue to Pet Details</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Pet Details & Routine */}
              {step === 2 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                        Pet Name(s) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Cooper & Bella"
                        value={formData.petNames}
                        onChange={(e) => handleChange('petNames', e.target.value)}
                        className="input-tactile text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                        Number of Pets & Species
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 1 Golden Retriever, 2 Cats"
                        value={formData.petTypes}
                        onChange={(e) => handleChange('petTypes', e.target.value)}
                        className="input-tactile text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                      Medication or Special Medical Needs
                    </label>
                    <select
                      value={formData.medicationNeeds}
                      onChange={(e) => handleChange('medicationNeeds', e.target.value)}
                      className="input-tactile text-sm"
                    >
                      <option value="None">No medications required</option>
                      <option value="Oral Tablets / Drops">Oral medications / tablets / food drops</option>
                      <option value="Topical / Eye Care">Topical creams / eye or ear drops</option>
                      <option value="Senior / Mobility Support">Senior dog mobility assistance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                      Temperament & Favorite Habits
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell Shalon about your pet’s routine, favorite sleeping spots, fear of thunder, or walking habits..."
                      value={formData.temperamentNotes}
                      onChange={(e) => handleChange('temperamentNotes', e.target.value)}
                      className="input-tactile text-sm"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary text-xs sm:text-sm py-2 px-4"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn-accent text-sm"
                    >
                      <span>Continue to Contact</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Submission */}
              {step === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First & Last Name"
                      value={formData.clientName}
                      onChange={(e) => handleChange('clientName', e.target.value)}
                      className="input-tactile text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(662) 000-0000"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="input-tactile text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="input-tactile text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#25323D] mb-1">
                      Additional Household Notes (Plants, Packages, Gate Codes)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any additional instructions..."
                      value={formData.additionalNotes}
                      onChange={(e) => handleChange('additionalNotes', e.target.value)}
                      className="input-tactile text-sm"
                    />
                  </div>

                  {/* Payment Transparency Notice */}
                  <div className="p-4 rounded-xl bg-[#EDF1F3] border border-[#D5DDE0] text-xs text-[#56636C] space-y-1">
                    <strong className="text-[#25323D] block">Booking Policy Reminder:</strong>
                    A qualifying deposit reserves your dates on Shalon’s calendar. Remaining balance is due in cash on the first day of care.
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-secondary text-xs sm:text-sm py-2 px-4"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn-accent text-sm"
                    >
                      <span>Submit Care Request</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        ) : (
          /* Submission Confirmation */
          <div className="text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#E7EFF4] text-[#284E68] flex items-center justify-center mx-auto">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#25323D]">
                Care Request Received!
              </h3>
              <p className="text-sm text-[#56636C] max-w-md mx-auto">
                Thank you, <strong>{formData.clientName}</strong>. Shalon Parrott has received your request for <strong>{formData.petNames}</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8F9F7] border border-[#D5DDE0] text-xs text-[#56636C] max-w-md mx-auto text-left space-y-1.5">
              <span className="font-bold text-[#25323D] block">Next Steps:</span>
              <p>• Shalon will review your schedule and location ({formData.cityZip}).</p>
              <p>• You will receive a tailored proposal detailing exact visit times and deposit details.</p>
              <p>• If urgent, call Shalon directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-[#284E68]">{BUSINESS_INFO.phone}</a>.</p>
            </div>

            <div className="pt-3">
              <button
                onClick={handleResetAndClose}
                className="btn-accent text-sm"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
