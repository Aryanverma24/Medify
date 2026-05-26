import React, { useRef } from "react";
import { ChevronRight, ChevronLeft, Play, ArrowRight } from "lucide-react";

export const continueHealingDummyData = [
  {
    id: 1,
    title: "Anxiety Relief",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 6,
    totalMinutes: 10,
  },

  {
    id: 2,
    title: "Deep Sleep Meditation",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 8,
    totalMinutes: 15,
  },

  {
    id: 3,
    title: "Morning Gratitude",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 4,
    totalMinutes: 10,
  },

  {
    id: 4,
    title: "Focus Booster",
    imageUrl:
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 7,
    totalMinutes: 12,
  },

  {
    id: 5,
    title: "Stress Relief Breathing",
    imageUrl:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 5,
    totalMinutes: 11,
  },

  {
    id: 6,
    title: "Calm Mind Practice",
    imageUrl:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 9,
    totalMinutes: 14,
  },
];



const ContinueHealingSlider = ({ tracks = continueHealingDummyData }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between ">
        <h2 className="text-primary font-season-medium font-smbold heading-large text-left mt-5 mb-1">
          Continue Healing
        </h2>

        <button className="flex items-center gap-2
            text-greenbase 
            font-dm font-med
            paragraph-secondary
            hover:gap-3
            transition-all duration-300">
          View All 
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Slider Wrapper */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="
            hidden md:flex
            absolute -left-4 top-1/2 z-20
            h-8 w-8 -translate-y-1/2
            items-center justify-center
            rounded-full
            bg-greenbase
            border border-[#71AC61]
            shadow-md
            hover:scale-105
            transition-all
          "
        >
          <ChevronLeft size={22} />
        </button>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="
            flex gap-4
            overflow-x-auto
            scroll-smooth
            pb-2
            no-scrollbar
          "
        >
          {tracks.map((track) => {
            const progress =
              track.totalMinutes > 0
                ? (track.completedMinutes / track.totalMinutes) * 100
                : 0;

            return (
              <div
                key={track.id}
                className="
                  min-w-[260px] sm:min-w-[300px]
                  flex items-center gap-4
                  rounded-[22px]
                bg-white/90
                border border-gray-200
                  p-3
                  shadow-sm
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {/* Image */}
                <div className="relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-2xl">
                  <img
                    src={track.imageUrl}
                    alt={track.title}
                    className="h-full w-full object-cover"
                  />

                  <button
                    className="
                      absolute bottom-2 right-2
                      flex h-8 w-8 items-center justify-center
                      rounded-full
                      bg-white text-gray-900
                      shadow-md
                    "
                  >
                    <Play size={14} fill="#71ac61" stroke="#71ac61" />
                  </button>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="line-clamp-2 text-primary font-dm font-med text-left paragraph-body">
                    {track.title}
                  </h3>

                  <p className="mt-2 text-primary font-med paragraph-secondary font-dm text-left">
                    {track.completedMinutes} / {track.totalMinutes} min
                  </p>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-greenbase-primary transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="
            hidden md:flex
            absolute -right-4 top-1/2 z-20
            h-8 w-8 -translate-y-1/2
            items-center justify-center
            rounded-full
           bg-greenbase
            border border-[#71AC61]
            shadow-md
            hover:scale-105
            transition-all
          "
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default ContinueHealingSlider;