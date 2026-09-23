import React, { useState, useEffect } from 'react';
import DashboardOverview from './DashboardOverview';
import OrdersView from './OrdersView';
import InboxView from './InboxView';
import AdminSettings from './AdminSettings';
import QuoteDetailModal from './QuoteDetailModal';
import NewOrderModal from './NewOrderModal';
import { authApi, quotesApi } from '../../services/api';
import { BUSINESS_INFO } from '../../data/businessData';

function getInitials(name) {
  if (!name) return 'MF';
  const parts = name.trim().split(/s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function AdminLayout({ user, onLogout, onBackToSite }) {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'orders' | 'inbox' | 'settings'
  const [modalQuote, setModalQuote] = useState(null);
  const [isNewOrderOpen, setIsNewOrderOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ total: 3, pending: 1, quoted: 1, completed: 1 });

  useEffect(() => {
    quotesApi.getStats().then(setStats).catch(() => {});
  }, [activeTab]);

  const handleLogout = async () => {
    try {
      await authApi.logout();
    } catch {}
    onLogout();
  };

  const navItems = [
    { id: 'dashboard', label: 'Pipeline & Overview' },
    { id: 'orders', label: 'Proposals & Deposits', badge: stats.total > 0 ? stats.total : null },
    { id: 'inbox', label: 'Wedding Inquiries', badge: stats.pending > 0 ? stats.pending : null },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF6] text-[#26322D] font-sans flex antialiased">
      {/* Mobile Backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-xs"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* LEFT SIDEBAR */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#FEFEFB] border-r border-[#D8DED5] flex flex-col justify-between transition-transform duration-300 ease-in-out ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6 space-y-7 flex-1 overflow-y-auto">
          {/* Logo Brand */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="w-10 h-10 shrink-0 rounded-full bg-[#345744]/15 text-[#345744] flex items-center justify-center border border-[#345744]/30">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-serif font-medium text-base tracking-tight text-[#26322D] block leading-tight truncate">
                  Happy Pack
                </span>
                <span className="text-[10px] text-[#59645E] font-semibold uppercase tracking-wider block">
                  Owner Portal
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-[#59645E] hover:text-[#26322D] shrink-0"
            >
              ?
            </button>
          </div>

          {/* Navigation Section */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-[#59645E] uppercase tracking-widest px-3 block">
              Management
            </span>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-[#345744] text-white shadow-sm'
                        : 'text-[#59645E] hover:bg-[#F0F2EC] hover:text-[#26322D]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#EAF0EB] text-[#345744]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* General Section */}
          <div className="space-y-1.5 pt-4 border-t border-[#D8DED5]">
            <span className="text-[10px] font-bold text-[#59645E] uppercase tracking-widest px-3 block">
              Actions
            </span>
            <nav className="space-y-1">
              <button
                onClick={() => {
                  setActiveTab('settings');
                  setIsMobileSidebarOpen(false);
                }}
                className={`w-full flex items-center px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'settings'
                    ? 'bg-[#345744] text-white'
                    : 'text-[#59645E] hover:bg-[#F0F2EC] hover:text-[#26322D]'
                }`}
              >
                <span>Settings & Alerts</span>
              </button>

              <button
                onClick={onBackToSite}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#59645E] hover:bg-[#F0F2EC] hover:text-[#26322D] transition"
              >
                <span>View Customer Website</span>
                <span>?</span>
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center px-3.5 py-2.5 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 transition"
              >
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Banner Card */}
        <div className="p-4 m-4 rounded-2xl bg-[#F0F2EC] border border-[#D8DED5] text-[#26322D] space-y-1 text-xs">
          <p className="font-semibold text-[#345744]">Melissa Floyd</p>
          <p className="text-[11px] text-[#59645E]">Central Alabama Wedding Chaperone</p>
        </div>
      </aside>

      {/* MAIN CONTENT CANVAS */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-[#FEFEFB] border-b border-[#D8DED5] px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-[#D8DED5] text-[#26322D]"
            >
              ?
            </button>
            <span className="font-serif text-lg font-medium text-[#26322D]">
              Wedding Booking Pipeline
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsNewOrderOpen(true)}
              className="btn-accent text-xs !py-2 !px-4"
            >
              + Create Proposal
            </button>
            <button
              onClick={onBackToSite}
              className="text-xs text-[#59645E] hover:text-[#26322D] border border-[#D8DED5] px-3 py-1.5 rounded-lg"
            >
              Public Site
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && (
            <DashboardOverview 
              onNavigateTab={(tab) => setActiveTab(tab)}
              onSelectQuote={(q) => setModalQuote(q)}
              onOpenNewOrder={() => setIsNewOrderOpen(true)}
            />
          )}

          {activeTab === 'orders' && <OrdersView />}

          {activeTab === 'inbox' && (
            <InboxView onOpenFullQuote={(q) => setModalQuote(q)} />
          )}

          {activeTab === 'settings' && <AdminSettings />}
        </main>
      </div>

      {modalQuote && (
        <QuoteDetailModal
          quote={modalQuote}
          onClose={() => setModalQuote(null)}
          onUpdate={(updated) => setModalQuote(updated)}
        />
      )}

      <NewOrderModal
        isOpen={isNewOrderOpen}
        onClose={() => setIsNewOrderOpen(false)}
        onCreated={() => {
          quotesApi.getStats().then(setStats).catch(() => {});
        }}
      />
    </div>
  );
}
