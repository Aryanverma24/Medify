import React from "react";
import { Play, ArrowRight } from "lucide-react";

const sessions = [
  {
    id: 1,
    title: "Calm Mind Meditation",
    duration: "12 min",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Emotional Balance",
    duration: "10 min",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Self Love Practice",
    duration: "11 min",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Body Scan Relaxation",
    duration: "15 min",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Breathing Exercise",
    duration: "9 min",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
  },
];

const TrendingHealingSession = () => {
  return (
    <section className="w-full bg-white py-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
        <h2 className="text-primary font-season-medium font-smbold heading-large text-left mt-5 mb-1">
          Trending Healing Sessions
        </h2>
        <p className="text-gray font-dm text-left paragraph-secondary mt-1">
          Carefully curated healing audios to relax your mind and soul.
        </p>
        </div>

        <button className="flex items-center gap-1 text-sm font-med font-dm paragraph-secondary text-[#71AC61] hover:text-[#4F7942] transition">
          View All
          <ArrowRight size={15} />
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-3 scrollbar-hide">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="
              min-w-[230px]
              h-[72px]
              rounded-[16px]
              bg-white
              border border-gray-100
              shadow-[0_8px_28px_rgba(0,0,0,0.07)]
              flex items-center gap-3
              p-2
            "
          >
            <img
              src={session.image}
              alt={session.title}
              className="h-[56px] w-[72px] rounded-[12px] object-cover"
            />

            <div className="min-w-0 flex-1 text-left">
              <h3 className="text-[13px] font-bold leading-tight text-[#1f2937] line-clamp-2">
                {session.title}
              </h3>
              <p className="mt-1 text-[12px] font-medium text-gray-500">
                {session.duration}
              </p>
            </div>

            <button className="flex h-8 w-8 items-center justify-center rounded-full text-[#111827]">
              <Play size={17} fill="currentColor" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingHealingSession;