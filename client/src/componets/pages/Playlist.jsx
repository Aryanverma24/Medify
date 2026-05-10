import React, { useMemo, useState } from "react";
import {
  Plus,
  Music2,
  Clock3,
  Trash2,
  Search,
  Play,
  Heart,
} from "lucide-react";

const allTracks = [
  {
    id: 1,
    title: "Deep Sleep Therapy",
    artist: "Medify Originals",
    duration: "12:45",
    cover:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Morning Calm",
    artist: "Healing Sounds",
    duration: "08:20",
    cover:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Focus Frequency",
    artist: "Mind Waves",
    duration: "10:12",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Ocean Relaxation",
    artist: "Nature Audio",
    duration: "14:30",
    cover:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Stress Relief Session",
    artist: "Medify Originals",
    duration: "11:18",
    cover:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
];

const PlaylistPage = () => {
  const [playlistName, setPlaylistName] = useState("My Healing Playlist");
  const [search, setSearch] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([allTracks[0]]);

  const filteredTracks = useMemo(() => {
    return allTracks.filter((track) =>
      track.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const addTrack = (track) => {
    const alreadyExists = playlistTracks.find((t) => t.id === track.id);

    if (!alreadyExists) {
      setPlaylistTracks((prev) => [...prev, track]);
    }
  };

  const removeTrack = (id) => {
    setPlaylistTracks((prev) => prev.filter((track) => track.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-gray-900 px-4 md:px-8 py-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        {/* LEFT SIDE */}
        <div>
          {/* Playlist Banner */}
          <div className="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-[32px] p-6 md:p-8 shadow-xl">
            <p className="uppercase text-xs tracking-[4px] text-white/80 mb-3">
              Playlist
            </p>

            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              className="bg-transparent outline-none text-3xl md:text-6xl font-bold text-white w-full placeholder:text-white"
            />

            <div className="flex items-center gap-3 mt-5 text-sm text-white/90">
              <Heart size={16} fill="white" />
              <span>{playlistTracks.length} Tracks</span>
            </div>
          </div>

          {/* Playlist Tracks */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Playlist Tracks
              </h2>

              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                Save Playlist
              </button>
            </div>

            <div className="space-y-4">
              {playlistTracks.length > 0 ? (
                playlistTracks.map((track, index) => (
                  <div
                    key={track.id}
                    className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <p className="text-gray-400 w-5">{index + 1}</p>

                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-16 h-16 rounded-2xl object-cover"
                      />

                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">
                          {track.title}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {track.artist}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="hidden md:flex items-center gap-2 text-gray-500">
                        <Clock3 size={16} />
                        <span className="text-sm">{track.duration}</span>
                      </div>

                      <button className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300">
                        <Play size={18} fill="white" />
                      </button>

                      <button
                        onClick={() => removeTrack(track.id)}
                        className="text-red-400 hover:text-red-500 transition-all duration-300"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-3xl p-10 text-center border border-gray-100 text-gray-400">
                  No tracks added yet
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-[32px] p-5 h-fit sticky top-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Add Tracks
          </h2>

          {/* Search */}
          <div className="relative mb-6">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search tracks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#f5f7fb] border border-gray-200 rounded-full py-3 pl-11 pr-4 outline-none focus:border-emerald-500 transition-all duration-300"
            />
          </div>

          {/* Available Tracks */}
          <div className="space-y-3 max-h-[650px] overflow-y-auto pr-1">
            {filteredTracks.map((track) => (
              <div
                key={track.id}
                className="bg-[#f8fafc] hover:bg-[#eef2f7] transition-all duration-300 rounded-2xl p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-14 h-14 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="font-medium text-gray-900">
                      {track.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {track.artist}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => addTrack(track)}
                  className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-300"
                >
                  <Plus size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-4 border border-emerald-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Music2 className="text-emerald-600" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Custom Healing Playlist
                </h4>

                <p className="text-sm text-gray-500">
                  Create your personalized therapy experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PlaylistPage;