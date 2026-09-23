import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { REAL_WEDDINGS } from '../../data/servicesData';
import { imageManifest } from '../../data/imageManifest';
import ImageFrame from '../common/ImageFrame';

gsap.registerPlugin(ScrollTrigger);

export default function RealWeddingsSection({ onOpenInquiry }) {
  const [selectedStory, setSelectedStory] = useState(null);
  const sectionRef = useRef(null);

  const featuredStory = REAL_WEDDINGS[0];
  const supportingStories = REAL_WEDDINGS.slice(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wedding-story-card', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#F0F2EC]/40 border-t border-[#D8DED5]" id="weddings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#345744] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#345744]" />
              Authentic Alabama Celebrations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#26322D] mt-2 tracking-tight">
              A few very important wedding guests.
            </h2>
            <p className="text-base text-[#59645E] mt-3 max-w-xl font-sans">
              Real Alabama couples who included their four-legged best friends in their celebrations�seamlessly, safely, and joyfully.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry()}
            className="btn-accent text-sm whitespace-nowrap self-start md:self-auto"
          >
            <span>Plan Something Similar</span>
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Album Layout: 1 Dominant Feature Card + 2 Supporting Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Dominant Featured Story: Cooper (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col wedding-story-card">
            <div className="card-thick p-6 sm:p-8 flex-1 flex flex-col justify-between hover:border-[#7C897F] transition-all group overflow-hidden">
              <div>
                <div className="overflow-hidden rounded-2xl aspect-[16/10] relative">
                  <img
                    src={imageManifest.realWeddings.cooper.src}
                    alt={imageManifest.realWeddings.cooper.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#26322D] backdrop-blur-md shadow-sm border border-[#D8DED5]">
                    Featured Celebration
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#59645E]">
                  <span className="px-2.5 py-1 rounded-md bg-[#F0F2EC] text-[#345744] font-semibold">
                    {featuredStory.coverage}
                  </span>
                  <span>{featuredStory.venue}</span>
                  <span>�</span>
                  <span>{featuredStory.location}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#26322D] mt-3 mb-3">
                  {featuredStory.headline}
                </h3>

                <p className="text-sm text-[#59645E] leading-relaxed mb-4">
                  {featuredStory.story}
                </p>

                <blockquote className="p-4 rounded-xl bg-[#F0F2EC]/60 border-l-2 border-[#345744] text-xs sm:text-sm italic text-[#26322D] my-4">
                  {featuredStory.testimonial}
                  <span className="block not-italic text-[11px] font-semibold text-[#345744] mt-1">
                    � {featuredStory.couple} with {featuredStory.dog}
                  </span>
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#D8DED5] flex items-center justify-between text-xs text-[#59645E]">
                <span>{featuredStory.photographer}</span>
                <button
                  onClick={() => setSelectedStory(featuredStory)}
                  className="font-semibold text-[#345744] hover:text-[#294737] flex items-center gap-1"
                >
                  <span>View Day-of Timeline</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 2 Supporting Stories: Buster + Luna & Bear (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            {supportingStories.map((story) => {
              const imageInfo = story.id.includes('buster')
                ? imageManifest.realWeddings.buster
                : imageManifest.realWeddings.lunaBear;

              return (
                <div
                  key={story.id}
                  className="wedding-story-card card-thick p-6 flex flex-col justify-between hover:border-[#7C897F] transition-all flex-1 group overflow-hidden"
                >
                  <div>
                    <div className="overflow-hidden rounded-xl aspect-[16/9] relative">
                      <img
                        src={imageInfo.src}
                        alt={imageInfo.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                      />
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs text-[#59645E]">
                      <span className="font-semibold text-[#345744]">{story.couple}</span>
                      <span>�</span>
                      <span>{story.venue}</span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#26322D] mt-2 mb-2">
                      {story.headline}
                    </h4>

                    <p className="text-xs text-[#59645E] line-clamp-2 leading-relaxed mb-3">
                      {story.story}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D8DED5] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#59645E] font-medium">{story.dog} ({story.breed})</span>
                    <button
                      onClick={() => setSelectedStory(story)}
                      className="font-semibold text-[#345744] hover:text-[#294737] flex items-center gap-1"
                    >
                      <span>Timeline</span>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Modal for Day-of Story Timeline */}
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#FEFEFB] rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#D8DED5] shadow-2xl relative">
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-5 right-5 text-[#59645E] hover:text-[#26322D] p-1 rounded-full hover:bg-[#F0F2EC]"
                aria-label="Close story timeline"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <span className="text-xs font-semibold uppercase tracking-wider text-[#345744]">
                Wedding Day Timeline
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#26322D] mt-1 mb-2">
                {selectedStory.couple} with {selectedStory.dog}
              </h3>
              <p className="text-xs text-[#59645E] mb-5">
                {selectedStory.venue} � {selectedStory.coverage}
              </p>

              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {selectedStory.timeline.map((entry, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#F0F2EC]/60 border border-[#D8DED5] text-xs text-[#26322D]">
                    {entry}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8DED5] flex justify-end">
                <button
                  onClick={() => {
                    setSelectedStory(null);
                    onOpenInquiry();
                  }}
                  className="btn-accent text-xs !py-2.5 !px-5"
                >
                  Plan Your Wedding Day
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
