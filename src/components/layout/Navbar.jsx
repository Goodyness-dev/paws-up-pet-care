import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Navbar({ onOpenInquiry, currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Care Services', href: '#services' },
    { label: 'Meet Shalon', href: '#about' },
    { label: 'Everyday Care', href: '#routine' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Booking & Policy', href: '#booking-policy' },
  ];

  const handleLinkClick = (link) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F9F7]/95 backdrop-blur-md border-b border-[#D5DDE0] py-3.5 shadow-sm'
          : 'bg-[#F8F9F7]/80 backdrop-blur-sm py-4 border-b border-[#D5DDE0]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-full bg-[#284E68] text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-[#1E3E54] transition-colors">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm12 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-9-5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM12 15c-2.3 0-4.3 1.4-5.2 3.4-.2.5.1 1.1.6 1.3.5.2 1.1-.1 1.3-.6.6-1.5 2-2.5 3.3-2.5s2.7 1 3.3 2.5c.2.5.8.8 1.3.6.5-.2.8-.8.6-1.3-.9-2-2.9-3.4-5.2-3.4z"/>
              </svg>
            </div>
            <div>
              <span className="font-heading font-bold text-lg sm:text-xl text-[#25323D] tracking-tight block group-hover:text-[#284E68] transition-colors">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#56636C] block -mt-0.5">
                {BUSINESS_INFO.city}, MS • In-Home Pet & House Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className="text-sm font-medium text-[#56636C] hover:text-[#284E68] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#284E68] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Actions: Phone & Primary CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="tel-btn"
              className="text-xs font-semibold text-[#25323D] hover:text-[#284E68] flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D5DDE0] hover:border-[#284E68] transition-all"
            >
              <svg className="w-3.5 h-3.5 text-[#284E68]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className="btn-accent text-sm py-2.5 px-5"
            >
              <span>Request Care</span>
              <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenInquiry()}
              className="btn-accent text-xs py-2 px-3.5"
            >
              Request Care
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#25323D] hover:bg-[#EDF1F3] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[65px] bg-[#F8F9F7] border-b border-[#D5DDE0] px-4 py-6 shadow-xl animate-fadeIn space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className="text-left text-base font-medium text-[#25323D] hover:text-[#284E68] py-2 border-b border-[#D5DDE0]/50"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-secondary text-sm w-full py-3"
            >
              <svg className="w-4 h-4 mr-2 text-[#284E68]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Call Shalon: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="btn-accent text-sm w-full py-3"
            >
              <span>Schedule & Request Care</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
