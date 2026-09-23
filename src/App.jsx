import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import AtHomeIntro from './components/home/AtHomeIntro';
import LifePhotoJournal from './components/home/LifePhotoJournal';
import SignatureServiceSelector from './components/home/SignatureServiceSelector';
import EverydayCareSection from './components/home/EverydayCareSection';
import OvernightExpectations from './components/home/OvernightExpectations';
import MeetShalonSection from './components/home/MeetShalonSection';
import ReviewsSection from './components/home/ReviewsSection';
import ServiceAreaSection from './components/home/ServiceAreaSection';
import BookingPolicySection from './components/home/BookingPolicySection';
import ClosingCtaSection from './components/home/ClosingCtaSection';
import Footer from './components/layout/Footer';
import InquiryModal from './components/inquiry/InquiryModal';
import ProposalView from './components/proposal/ProposalView';
import ClientPortalView from './components/client/ClientPortalView';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/AdminLogin';
import { authApi, getStoredToken } from './services/api';
import { BUSINESS_INFO } from './data/businessData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'proposal' | 'portal' | 'admin'
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryScope, setInquiryScope] = useState(null);

  // Admin Auth State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  // Initialize Lenis Kinetic Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const token = getStoredToken();
    if (token) {
      authApi.verify()
        .then((res) => {
          if (res.authenticated) {
            setIsAdminAuthenticated(true);
            setAdminUser(res.user);
          }
        })
        .catch(() => setIsAdminAuthenticated(false));
    }
  }, []);

  // Browser hash routing synchronization
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('admin')) {
        setCurrentPage('admin');
      } else if (hash.includes('proposal')) {
        setCurrentPage('proposal');
      } else if (hash.includes('portal') || hash.includes('client')) {
        setCurrentPage('portal');
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'admin') window.location.hash = '#/admin';
    else if (page === 'proposal') window.location.hash = '#/proposal';
    else if (page === 'portal') window.location.hash = '#/portal';
    else {
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (scope = null) => {
    setInquiryScope(scope);
    setInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryOpen(false);
  };

  // Subpage: Proposal Review
  if (currentPage === 'proposal') {
    return <ProposalView onBackToSite={() => handleNavigate('home')} />;
  }

  // Subpage: Client Portal
  if (currentPage === 'portal') {
    return <ClientPortalView onBackToSite={() => handleNavigate('home')} />;
  }

  // Subpage: Admin Dashboard
  if (currentPage === 'admin') {
    return isAdminAuthenticated ? (
      <AdminLayout
        user={adminUser}
        onLogout={() => {
          setIsAdminAuthenticated(false);
          setAdminUser(null);
        }}
        onBackToSite={() => handleNavigate('home')}
      />
    ) : (
      <AdminLogin
        onLoginSuccess={(user) => {
          setIsAdminAuthenticated(true);
          setAdminUser(user);
        }}
        onBackToSite={() => handleNavigate('home')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F0E7] text-[#24211D] flex flex-col font-sans selection:bg-[#243A31]/15 selection:text-[#1B2D26]">
      
      {/* 01: Sticky Navigation */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Flow (Warm Southern Home Architecture) */}
      <main className="flex-grow">
        {/* 02: Cinematic Hero with Big Background Image, Masked Reveal & Trust Strip */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 03: At Home with Paws Up & Signature Window Motif */}
        <AtHomeIntro onOpenInquiry={handleOpenInquiry} />

        {/* 04: Life With Paws Up — Editorial Photo Journal */}
        <LifePhotoJournal onOpenInquiry={handleOpenInquiry} />

        {/* 05: Interactive Service Discovery & Visit Duration Selector (15/30/45/60 min) */}
        <SignatureServiceSelector onOpenInquiry={handleOpenInquiry} />

        {/* 06: Everyday Care — Editorial Routine Storytelling (4 Alternating Sections) */}
        <EverydayCareSection onOpenInquiry={handleOpenInquiry} />

        {/* 07: Overnight Care — Night Mode Deep Forest Immersion */}
        <OvernightExpectations onOpenInquiry={handleOpenInquiry} />

        {/* 08: Meet Shalon — Founder Story & Qualifications */}
        <MeetShalonSection onOpenInquiry={handleOpenInquiry} />

        {/* 09: Client Stories — Single Large Testimonial Presentation */}
        <ReviewsSection onOpenInquiry={handleOpenInquiry} />

        {/* 10: Service Area — Simplified Regional Map Points & ZIP Code Checker */}
        <ServiceAreaSection onOpenInquiry={handleOpenInquiry} />

        {/* 11: Booking Process (3 Steps) & Operating Policies Accordion */}
        <BookingPolicySection onOpenInquiry={handleOpenInquiry} />

        {/* 12: Final Personal Invitation & Window Portrait */}
        <ClosingCtaSection onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* 13: Deep Forest Footer */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onNavigate={handleNavigate}
      />

      {/* 3-Step Care Consultation & Request Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={handleCloseInquiry}
        initialScope={inquiryScope}
        initialZip={inquiryScope?.zip}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#F5F0E7]/95 backdrop-blur-md border-t border-[#E9E0D1] p-2.5 flex items-center gap-2 shadow-lg">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-full bg-[#FBF9F5] text-[#24211D] border border-[#E9E0D1] font-bold text-xs flex items-center justify-center space-x-1.5 active:scale-95 transition"
        >
          <span>Call Shalon</span>
        </a>
        <button
          onClick={() => handleOpenInquiry()}
          className="flex-1 py-3 px-3 rounded-full bg-[#243A31] hover:bg-[#1B2D26] text-[#F5F0E7] font-bold text-xs flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 transition"
        >
          <span>Request Care</span>
        </button>
      </div>

    </div>
  );
}
