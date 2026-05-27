import React, { useRef } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Play,
  ArrowRight,
} from "lucide-react";

const TrackSlider = ({
  title = "Continue Healing",
  tracks = [],
  onTrackClick,
}) => {
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
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-primary font-season-medium font-smbold heading-large text-left mt-5 mb-1">
          {title}
        </h2>

        <button
          className="
            flex items-center gap-2
            text-greenbase
            font-dm font-med
            paragraph-secondary
            hover:gap-3
            transition-all duration-300
          "
        >
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Empty State */}
      {tracks.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
          <p className="text-gray-500">No tracks available</p>
        </div>
      ) : (
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
            {tracks.map((track, index) => {
              const completedMinutes = track.completedMinutes || 0;
              const totalMinutes = track.totalMinutes || 0;

              const progress =
                totalMinutes > 0
                  ? (completedMinutes / totalMinutes) * 100
                  : 0;

              return (
                <div
                  key={track.id || index}
                  onClick={() => onTrackClick?.(track)}
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
                    cursor-pointer
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
                      <Play
                        size={14}
                        fill="#71ac61"
                        stroke="#71ac61"
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-primary font-dm font-med text-left paragraph-body">
                      {track.title}
                    </h3>

                    <p className="mt-2 text-primary font-med paragraph-secondary font-dm text-left">
                      {completedMinutes} / {totalMinutes} min
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
      )}
    </section>
  );
};

export default TrackSlider;