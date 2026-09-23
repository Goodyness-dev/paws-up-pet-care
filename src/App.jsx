import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import VisualProofMarquee from './components/home/VisualProofMarquee';
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
    <div className="min-h-screen bg-[#F8F9F7] text-[#25323D] flex flex-col font-sans selection:bg-[#284E68]/15 selection:text-[#1E3E54]">
      {/* Primary Navigation */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Flow ("At Home with Paws Up") */}
      <main className="flex-grow">
        {/* 01 & 02: Hero with Window-Light Photography & GSAP Stagger */}
        <Hero onOpenInquiry={handleOpenInquiry} />
        
        {/* Dynamic Dual-Track Photo Marquee */}
        <VisualProofMarquee onOpenInquiry={handleOpenInquiry} />

        {/* 04: Signature Interactive Service Selector: "What kind of care do you need?" */}
        <SignatureServiceSelector onOpenInquiry={handleOpenInquiry} />

        {/* 05: Everyday Care, Thoughtfully Explained */}
        <EverydayCareSection onOpenInquiry={handleOpenInquiry} />

        {/* 06: Overnight Expectations: Clarity as Part of the Design */}
        <OvernightExpectations onOpenInquiry={handleOpenInquiry} />

        {/* 03: Meet Shalon Parrott (30+ Years Experience, PSI Member) */}
        <MeetShalonSection onOpenInquiry={handleOpenInquiry} />

        {/* 07: Genuine Client Reassurance */}
        <ReviewsSection onOpenInquiry={handleOpenInquiry} />

        {/* 08: Service Area with Rural Inclusion & ZIP Check */}
        <ServiceAreaSection onOpenInquiry={handleOpenInquiry} />

        {/* 09: Booking Steps & Transparent Policy Summary */}
        <BookingPolicySection onOpenInquiry={handleOpenInquiry} />

        {/* 10: Closing Personal Invitation */}
        <ClosingCtaSection onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onNavigate={handleNavigate}
      />

      {/* 3-Step Care Request Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={handleCloseInquiry}
        initialScope={inquiryScope}
        initialZip={inquiryScope?.zip}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#F8F9F7]/95 backdrop-blur-md border-t border-[#D5DDE0] p-2.5 flex items-center gap-2 shadow-lg">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-full bg-[#EDF1F3] text-[#25323D] border border-[#D5DDE0] font-semibold text-xs flex items-center justify-center space-x-1.5 active:scale-95 transition"
        >
          <span>Call Shalon</span>
        </a>
        <button
          onClick={() => handleOpenInquiry()}
          className="flex-1 py-3 px-3 rounded-full bg-[#284E68] hover:bg-[#1E3E54] text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 transition"
        >
          <span>Request Care</span>
        </button>
      </div>
    </div>
  );
}
