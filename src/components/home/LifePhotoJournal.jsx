import React, { useRef } from 'react';
import { imageManifest } from '../../data/imageManifest';

export default function LifePhotoJournal({ onOpenInquiry }) {
  const scrollRef = useRef(null);

  const moments = [
    {
      src: '/images/hero-bg-cinematic.jpg',
      title: 'Living Room Calm & Fireplace Routine',
      location: 'Hernando, MS',
      aspect: 'aspect-[3/4] w-72 sm:w-80',
    },
    {
      src: '/images/service-visits.jpg',
      title: 'Backyard Running & Outdoor Playtime',
      location: 'Senatobia, MS',
      aspect: 'aspect-[3/4] w-72 sm:w-80',
    },
    {
      src: '/images/home-cuddles.jpg',
      title: 'Unrushed Affection & Gentle Chin Cuddles',
      location: 'Senatobia, MS',
      aspect: 'aspect-[3/4] w-72 sm:w-80',
    },
    {
      src: '/images/service-overnight.jpg',
      title: 'Peaceful Overnight Sleep on the Rug',
      location: 'Tate County, MS',
      aspect: 'aspect-[1/1] w-72 sm:w-80',
    },
    {
      src: '/images/routine-senior.jpg',
      title: 'Senior Smiles & Patient Care Pacing',
      location: 'Hernando, MS',
      aspect: 'aspect-[3/4] w-72 sm:w-80',
    },
    {
      src: '/images/wedding-buster.jpg',
      title: 'Cozy Bed & Attentive In-Home Rest',
      location: 'Coldwater, MS',
      aspect: 'aspect-[3/4] w-72 sm:w-80',
    },
    {
      src: '/images/closing-roses.jpg',
      title: 'Fluffy Feline Companionship at Home',
      location: 'Senatobia, MS',
      aspect: 'aspect-[3/4] w-72 sm:w-80',
    },
    {
      src: '/images/service-custom.jpg',
      title: 'Exotic Bearded Dragon & Habitat Care',
      location: 'DeSoto County, MS',
      aspect: 'aspect-[4/3] w-80 sm:w-96',
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F5] border-y border-[#E9E0D1] overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="badge-tag-warm">
              Life With Paws Up
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24211D] font-normal tracking-tight mt-1">
              Comfort, routines & happy tails.
            </h2>
            <p className="text-xs sm:text-sm text-[#5C554E] mt-1 max-w-lg">
              Swipe through authentic care moments across Senatobia, Hernando, and North Mississippi homes.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-[#E9E0D1] bg-[#F5F0E7] hover:bg-[#243A31] hover:text-white transition-colors flex items-center justify-center text-[#24211D]"
              aria-label="Scroll gallery left"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-[#E9E0D1] bg-[#F5F0E7] hover:bg-[#243A31] hover:text-white transition-colors flex items-center justify-center text-[#24211D]"
              aria-label="Scroll gallery right"
            >
              →
            </button>
          </div>
        </div>

      </div>

      {/* Horizontal Photo Journal Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {moments.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onOpenInquiry()}
            className={`relative flex-shrink-0 ${item.aspect} rounded-2xl overflow-hidden border border-[#E9E0D1] shadow-warm-card group cursor-pointer bg-[#F5F0E7]`}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/80 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
            
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C87552] block">
                {item.location}
              </span>
              <span className="font-serif text-sm sm:text-base font-normal text-[#F5F0E7] block truncate">
                {item.title}
              </span>
              <span className="text-[11px] text-[#A9B5A0] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 mt-0.5">
                <span>View Care Routine</span>
                <span>→</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
