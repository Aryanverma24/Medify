import React from "react";
import {
  Brain,
  Moon,
  HeartHandshake,
  Target,
  ArrowRight,
} from "lucide-react";

const libraries = [
  {
    id: 1,
    title: "Mental Wellness",
    sessions: 12,
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Sleep Better",
    sessions: 8,
    icon: Moon,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Stress Relief",
    sessions: 10,
    icon: HeartHandshake,
    image:
      "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Focus & Productivity",
    sessions: 7,
    icon: Target,
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
  },
];

const TopLibraries = () => {
  return (
    <section className="w-full">
      {/* Heading */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-primary font-season-medium font-smbold heading-large text-left mt-5 mb-1">
            Top Libraries
          </h2>

          <p className="text-gray font-dm text-left paragraph-secondary mt-1">
            Explore healing collections curated for your journey
          </p>
        </div>

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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {libraries.map((library) => {
          const Icon = library.icon;

          return (
            <div
              key={library.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                h-[220px]
                cursor-pointer
                border border-white/40
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              "
            >
              {/* Background */}
              <img
                src={library.image}
                alt={library.title}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  group-hover:scale-110
                  transition-transform duration-700
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/25
                  to-transparent
                "
              />

              {/* Floating Blur */}
              <div
                className="
                  absolute
                  -top-10
                  -right-10
                  h-32
                  w-32
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              {/* Content */}
              <div className="relative z-10 h-full p-5 flex flex-col justify-between">
                {/* Top Icon */}
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-white/75
                    backdrop-blur-xl
                    border border-[#7AAC66]/90
                    flex items-center justify-center
                    shadow-lg
                  "
                >
                  <Icon size={26} className="text-greenbase" />
                </div>

                {/* Bottom Content */}
                <div>
                  <h3 className="text-white subheading font-dm font-med text-left">
                    {library.title}
                  </h3>

                  <div className="flex items-center justify-between mt-3">
                    <p className="text-white/80 text-white font-dm font-med text-left paragraph-secondary">
                      {library.sessions} Sessions
                    </p>

                    <button
                      className="
                        opacity-0 translate-y-4
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        transition-all duration-300
                        w-11 h-11
                        rounded-full
                        bg-white text-black
                        flex items-center justify-center
                      "
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Border */}
              <div
                className="
                  absolute inset-0
                  rounded-[28px]
                  border border-white/0
                  group-hover:border-white/20
                  transition-all duration-300
                "
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopLibraries;