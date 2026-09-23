import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Navbar({ onOpenInquiry, currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
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
    { label: 'Booking', href: '#booking-policy' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled
          ? 'bg-[#F5F0E7]/92 backdrop-blur-md border-b border-[#E9E0D1] py-3.5 shadow-sm text-[#24211D]'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5 text-[#F5F0E7]'
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
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-sm transition-colors ${
              scrolled ? 'bg-[#243A31] text-[#F5F0E7]' : 'bg-[#F5F0E7] text-[#243A31]'
            }`}>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm12 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-9-5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM12 15c-2.3 0-4.3 1.4-5.2 3.4-.2.5.1 1.1.6 1.3.5.2 1.1-.1 1.3-.6.6-1.5 2-2.5 3.3-2.5s2.7 1 3.3 2.5c.2.5.8.8 1.3.6.5-.2.8-.8.6-1.3-.9-2-2.9-3.4-5.2-3.4z"/>
              </svg>
            </div>
            <div>
              <span className={`font-serif font-semibold text-xl tracking-tight block ${
                scrolled ? 'text-[#24211D]' : 'text-white'
              }`}>
                {BUSINESS_INFO.name}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest block -mt-0.5 ${
                scrolled ? 'text-[#5C554E]' : 'text-[#F5F0E7]/80'
              }`}>
                Senatobia, MS • In-Home Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className={`text-sm font-medium transition-colors py-1 relative group ${
                  scrolled ? 'text-[#5C554E] hover:text-[#243A31]' : 'text-[#F5F0E7]/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  scrolled ? 'bg-[#243A31]' : 'bg-[#C87552]'
                }`} />
              </button>
            ))}
          </nav>

          {/* Actions: Phone & Primary CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="tel-btn"
              className={`text-xs font-semibold flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all ${
                scrolled
                  ? 'border-[#E9E0D1] text-[#24211D] hover:border-[#243A31]'
                  : 'border-white/20 text-white hover:border-white'
              }`}
            >
              <svg className="w-3.5 h-3.5 text-[#C87552]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className={`text-xs sm:text-sm py-2.5 px-5 font-bold rounded-full transition-all shadow-md ${
                scrolled
                  ? 'bg-[#243A31] text-[#F5F0E7] hover:bg-[#1B2D26]'
                  : 'bg-[#F5F0E7] text-[#243A31] hover:bg-white'
              }`}
            >
              <span>Request Care</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenInquiry()}
              className="text-xs py-2 px-3.5 rounded-full font-bold bg-[#F5F0E7] text-[#243A31]"
            >
              Request Care
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
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
        <div className="sm:hidden fixed inset-x-0 top-[65px] bg-[#F5F0E7] border-b border-[#E9E0D1] px-4 py-6 shadow-2xl text-[#24211D] animate-fadeIn space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className="text-left text-base font-serif font-medium text-[#24211D] hover:text-[#243A31] py-2 border-b border-[#E9E0D1]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3 rounded-full text-center text-xs font-bold border border-[#E9E0D1] bg-[#FBF9F5] text-[#24211D] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 text-[#C87552]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Call Shalon: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="btn-forest w-full text-sm py-3 font-bold"
            >
              <span>Schedule & Request Care</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
