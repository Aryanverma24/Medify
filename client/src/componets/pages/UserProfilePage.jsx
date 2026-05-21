import React from "react";
import {
  Settings,
  Bell,
  Clock3,
  Heart,
  Music2,
  PlayCircle,
  Headphones,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";
import EmotionalAnalyticsDashboard from "./EmotionalAnaltics";


const token = localStorage.getItem("token");

let payload = {};

try {
  if (token) {
    payload = JSON.parse(
      atob(token.split(".")[1])
    );
    console.log("User Payload:", payload);
  }
} catch (error) {
  console.log("Invalid token");
}

const recentTracks = [
  {
    id: 1,
    title: "Deep Sleep Therapy",
    artist: "Medify Originals",
    duration: "12 min",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Morning Calm",
    artist: "Healing Sounds",
    duration: "8 min",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Ocean Relaxation",
    artist: "Nature Audio",
    duration: "14 min",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
];

const playlists = [
  {
    id: 1,
    name: "Sleep Healing",
    tracks: 18,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Meditation Mix",
    tracks: 24,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
];

const stats = [
  {
    id: 1,
    title: "Listening Hours",
    value: "124h",
    icon: Headphones,
  },
  {
    id: 2,
    title: "Favorite Tracks",
    value: "86",
    icon: Heart,
  },
  {
    id: 3,
    title: "Playlists",
    value: "12",
    icon: Music2,
  },
];

const UserProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#f7f8fc] px-4 md:px-8 py-6 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADER */}
        <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* LEFT */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="relative">
                <img
                 src={`https://ui-avatars.com/api/?name=${payload?.name || "User"}&background=10b981&color=fff`}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-emerald-100"
                />

                <div className="absolute bottom-2 right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-white"></div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl md:text-4xl font-bold">
                   {payload.name}
                  </h1>

                  <BadgeCheck
                    size={24}
                    className="text-emerald-500"
                  />
                </div>

                <p className="text-gray-500 mt-2 text-lg">
                  Premium Medify Member
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                    Edit Profile
                  </button>

                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                    Share Profile
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <button className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300">
                <Bell size={22} />
              </button>

              <button className="w-12 h-12 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300">
                <Settings size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <Icon className="text-emerald-600" size={26} />
                </div>

                <h2 className="text-3xl font-bold mt-5">
                  {item.value}
                </h2>

                <p className="text-gray-500 mt-1">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 mt-8">
          {/* RECENTLY PLAYED */}
          <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                Recently Played
              </h2>

              <button className="text-emerald-600 font-medium flex items-center gap-1">
                View All
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {recentTracks.map((track, index) => (
                <div
                  key={track.id}
                  className="flex items-center justify-between bg-[#f8fafc] hover:bg-[#eef2f7] transition-all duration-300 rounded-3xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 w-5">
                      {index + 1}
                    </span>

                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-lg">
                        {track.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {track.artist}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="hidden sm:flex items-center gap-2 text-gray-500">
                      <Clock3 size={16} />
                      <span className="text-sm">
                        {track.duration}
                      </span>
                    </div>

                    <button className="w-11 h-11 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-300">
                      <PlayCircle size={22} fill="white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PLAYLISTS */}
          <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                Your Playlists
              </h2>

              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                Create New
              </button>
            </div>

            <div className="space-y-4">
              {playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="flex items-center justify-between bg-[#f8fafc] hover:bg-[#eef2f7] transition-all duration-300 rounded-3xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={playlist.image}
                      alt={playlist.name}
                      className="w-20 h-20 rounded-2xl object-cover"
                    />

                    <div>
                      <h3 className="text-lg font-semibold">
                        {playlist.name}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        {playlist.tracks} Tracks
                      </p>
                    </div>
                  </div>

                  <button className="w-11 h-11 rounded-full bg-white border border-gray-200 hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                    <PlayCircle size={22} />
                  </button>
                </div>
              ))}
            </div>

            {/* SUBSCRIPTION CARD */}
            <div className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[28px] p-5 text-white">
              <h3 className="text-xl font-bold">
                Upgrade to Medify Pro
              </h3>

              <p className="text-white/80 mt-2 text-sm leading-relaxed">
                Unlock unlimited healing tracks, offline mode,
                exclusive therapy sessions and more.
              </p>

              <button className="mt-5 bg-white text-emerald-600 px-5 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default UserProfilePage;