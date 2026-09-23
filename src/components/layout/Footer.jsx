import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Footer({ onOpenInquiry, onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#243A31] text-[#F5F0E7] border-t border-[#1B2D26] pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-3xl tracking-tight text-[#F5F0E7] block font-normal">
              {BUSINESS_INFO.name}
            </span>
            <p className="text-xs uppercase tracking-widest text-[#A9B5A0] font-bold">
              Senatobia & North Mississippi Pet & House Sitting
            </p>
            <p className="text-sm text-[#F5F0E7]/80 leading-relaxed max-w-sm">
              Attentive in-home care for dogs, cats, and households across Senatobia, Hernando, Coldwater, and Tate/DeSoto Counties. Insured, bonded, background-checked, and Member of Pet Sitters International.
            </p>
            <p className="text-xs text-[#C87552] font-semibold">
              {BUSINESS_INFO.bookingPolicy}
            </p>
          </div>

          {/* Care Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A9B5A0]">
              Care Services
            </h4>
            <ul className="space-y-2 text-sm text-[#F5F0E7]/80">
              <li><a href="#services" className="hover:text-white transition-colors">Drop-In Visits (15–60m)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Overnight Care (~12h)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Something Custom</a></li>
              <li><a href="#routine" className="hover:text-white transition-colors">Everyday Care Routines</a></li>
            </ul>
          </div>

          {/* About & Proof */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A9B5A0]">
              Trust & Community
            </h4>
            <ul className="space-y-2 text-sm text-[#F5F0E7]/80">
              <li><a href="#about" className="hover:text-white transition-colors">Meet Shalon Parrott</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Testimonials</a></li>
              <li><a href="#service-area" className="hover:text-white transition-colors">Service Area & Rural Coverage</a></li>
              <li><a href="#booking-policy" className="hover:text-white transition-colors">Booking & Deposit Terms</a></li>
            </ul>
          </div>

          {/* Direct Contact & Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A9B5A0]">
              Contact & Portal
            </h4>
            <ul className="space-y-2 text-sm text-[#F5F0E7]/80">
              <li>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-white hover:text-[#C87552] transition-colors block text-base">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xs hover:text-white transition-colors block truncate">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('admin')}
                  className="text-xs font-bold text-[#A9B5A0] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>Operator Admin Portal</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F0E7]/60 gap-4">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Senatobia, MS 38668</span>
            <span>Insured & Bonded</span>
            <span>PSI Member</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
