import React, { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Headphones } from "lucide-react";


export const popularWithAvyaktUsers = [
  {
    id: 1,
    title: "Inner Peace Collection",
    description: "Deep calming sessions for emotional balance.",
    plays: "18.2K Plays",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Sleep Sounds Therapy",
    description: "Relaxing night meditations for deep sleep.",
    plays: "24.8K Plays",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Stress Relief Essentials",
    description: "Reduce anxiety and emotional overload.",
    plays: "31.7K Plays",
    imageUrl:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1400&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Focus & Flow Playlist",
    description: "Boost concentration and productivity.",
    plays: "16.3K Plays",
    imageUrl:
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1400&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "Morning Gratitude Journey",
    description: "Start your day with calm and positivity.",
    plays: "12.4K Plays",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1400&auto=format&fit=crop",
  },
];

const PopularWithAvyaktUsers = ({ playlists = popularWithAvyaktUsers }) => {


    
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
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-primary font-season-medium font-smbold heading-large text-left mt-5 mb-1">
            Popular With Avyakt Users
          </h2>

          <p className="text-gray mt-2 font-dm paragraph-secondary text-left">
            Most loved healing playlists by the community
          </p>
        </div>

        <button className=" flex items-center gap-2
            text-greenbase 
            font-dm font-med
            paragraph-secondary
            hover:gap-3
            transition-all duration-300">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Slider */}
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
          <ChevronLeft size={20} />
        </button>

        {/* Cards */}
        <div
          ref={sliderRef}
          className="
            flex gap-5 overflow-x-auto
            scroll-smooth no-scrollbar
            pb-2
          "
        >
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="
                group relative
                min-w-[280px]
                h-[220px]
                overflow-hidden
                rounded-[28px]
                shadow-sm
                cursor-pointer
              "
            >
              {/* Background Image */}
              <img
                src={playlist.imageUrl}
                alt={playlist.title}
                className="
                  absolute inset-0
                  h-full w-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/50
                  to-transparent
                "
              />

              {/* Glow */}
              <div
                className="
                  absolute -bottom-10 -right-10
                  h-40 w-40 rounded-full
                  bg-[#C2E8D966] blur-3xl
                "
              />

              {/* Content */}
              <div
                className="
                  relative z-10
                  flex h-full flex-col justify-between
                  p-5 text-white
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div
                    className="
                      rounded-full
                      bg-black/30
                      border border-white/10
                      px-3 py-1
                      backdrop-blur-sm
                      text-white font-season-medium
                      paragraph-secondary font-med
                    "
                  >
                    Trending
                  </div>

                  <div
                    className="
                      flex items-center gap-1
                      rounded-full
                      bg-black/30
                      px-3 py-1
                      font-dm font-med 
                      paragraph-secondary text-white
                      backdrop-blur-md
                    "
                  >
                    <Headphones size={13} />
                    {playlist.plays}
                  </div>
                </div>

                {/* Bottom */}
                <div className="max-w-[220px] mt-2 ">
                  <h3 className="text-white font-season-medium font-med text-left subheading">
                    {playlist.title}
                  </h3>

                  <p className="mt-1 text-white/90 font-dm font-med text-left paragraph-secondary">
                    {playlist.description}
                  </p>

                </div>
              </div>
            </div>
          ))}
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
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default PopularWithAvyaktUsers;