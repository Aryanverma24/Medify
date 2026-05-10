import React, { useMemo, useState } from "react";
import {
  Search,
  Heart,
  Brain,
  Moon,
  Sparkles,
  Music2,
  Waves,
  Activity,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Sleep",
    icon: Moon,
    color: "from-indigo-500 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Meditation",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Stress Relief",
    icon: Heart,
    color: "from-orange-500 to-red-500",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Focus",
    icon: Brain,
    color: "from-cyan-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Healing Sounds",
    icon: Waves,
    color: "from-emerald-500 to-teal-600",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Nature Music",
    icon: Music2,
    color: "from-lime-500 to-green-600",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Anxiety Relief",
    icon: Activity,
    color: "from-violet-500 to-fuchsia-600",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1200&auto=format&fit=crop",
  },
];

const mockAudios = [
  "Deep Sleep Therapy",
  "Morning Meditation",
  "Stress Relief Music",
  "Mind Focus Session",
  "Calm Ocean Waves",
  "Healing Frequency",
  "Night Relaxation",
  "Peaceful Piano",
];

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];

    return mockAudios.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 md:px-8 py-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl py-3">
          <div className="relative max-w-2xl">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="What do you want to listen to?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white border border-gray-300 focus:border-emerald-500 outline-none rounded-full py-3 pl-12 pr-4 text-sm md:text-base transition-all duration-300"
            />
          </div>
        </div>

        {/* Search Results */}
        {query.trim() ? (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Top Results</h2>

            <div className="space-y-4">
              {filteredResults.length > 0 ? (
                filteredResults.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#181818] hover:bg-[#242424] transition-all duration-300 rounded-2xl p-4 flex items-center gap-4 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                      <Music2 size={24} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">{item}</h3>
                      <p className="text-sm text-gray-400">
                        Guided audio • Medify
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 text-gray-400">
                  No results found
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Browse Categories */}
            <div className="mt-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Browse All
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {categories.map((category) => {
                  const Icon = category.icon;

                  return (
                    <div
                      key={category.id}
                      className={`relative overflow-hidden rounded-3xl p-5 h-44 bg-gradient-to-br ${category.color} cursor-pointer hover:scale-[1.03] transition-all duration-300 group`}
                    >
                      {/* Background Image */}
                      <img
                        src={category.image}
                        alt={category.title}
                        className="absolute bottom-0 right-0 w-28 h-28 object-cover rotate-12 translate-x-4 translate-y-4 rounded-2xl opacity-90 group-hover:scale-110 transition-all duration-300"
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center">
                          <Icon size={24} />
                        </div>

                        <h3 className="text-xl font-bold leading-tight">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;