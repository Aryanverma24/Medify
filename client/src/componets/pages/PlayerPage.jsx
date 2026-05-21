import React, { useEffect, useRef, useState } from "react";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  Repeat,
  Shuffle,
  X,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

const PlayerModal = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // SAFE DATA
  const track = location.state?.track || null;
  const tracks = location.state?.tracks || [];

  const [currentTrack, setCurrentTrack] = useState(track);

  const [isPlaying, setIsPlaying] = useState(false);

  const [progress, setProgress] = useState(0);

  const [volume, setVolume] = useState(70);

  const audioRef = useRef(null);

  // CLOSE MODAL
  const closeModal = () => {
    navigate(-1);
  };

  // SAFETY CHECK
  if (!currentTrack) {
    return (
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-800">
            No Track Selected
          </h2>

          <button
            onClick={closeModal}
            className="mt-5 px-5 py-3 bg-emerald-500 text-white rounded-2xl"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // PLAY / PAUSE
  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      await audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // UPDATE PROGRESS
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateProgress = () => {
      const current =
        (audio.currentTime / audio.duration) * 100;

      setProgress(current || 0);
    };

    audio.addEventListener(
      "timeupdate",
      updateProgress
    );

    return () => {
      audio.removeEventListener(
        "timeupdate",
        updateProgress
      );
    };
  }, []);

  // NEXT TRACK
  const handleNext = () => {
    if (!tracks.length) return;

    const currentIndex = tracks.findIndex(
      (t) => t.id === currentTrack.id
    );

    const nextTrack =
      tracks[(currentIndex + 1) % tracks.length];

    setCurrentTrack(nextTrack);
    setIsPlaying(true);
  };

  // PREVIOUS TRACK
  const handlePrev = () => {
    if (!tracks.length) return;

    const currentIndex = tracks.findIndex(
      (t) => t.id === currentTrack.id
    );

    const prevTrack =
      tracks[
        (currentIndex - 1 + tracks.length) %
          tracks.length
      ];

    setCurrentTrack(prevTrack);
    setIsPlaying(true);
  };

  // AUTO PLAY ON TRACK CHANGE
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  // VOLUME
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center px-4 py-6">
      
      {/* MODAL */}
      <div className="relative w-full max-w-7xl bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2 animate-in fade-in zoom-in duration-300">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 z-50 w-12 h-12 rounded-full bg-white/90 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg"
        >
          <X size={24} />
        </button>

        {/* LEFT */}
        <div className="relative bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 p-10 flex items-center justify-center min-h-[500px]">
          
          <div className="absolute w-[500px] h-[500px] rounded-full bg-white/20 blur-3xl"></div>

          <img
            src={
              currentTrack?.audioThumbnail ||
              "https://via.placeholder.com/400"
            }
            alt={currentTrack?.title}
            className="relative z-10 w-[380px] h-[380px] rounded-[40px] object-cover shadow-2xl"
          />
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-12 flex flex-col justify-between">
          
          {/* INFO */}
          <div>
            <p className="uppercase tracking-[4px] text-sm text-emerald-500 font-semibold">
              Now Playing
            </p>

            <h1 className="text-5xl font-bold text-gray-900 mt-6 leading-tight">
              {currentTrack?.title}
            </h1>

            <p className="text-gray-500 text-lg mt-4">
              Deep Meditation • Healing Frequency
            </p>

            {/* AUDIO WAVE */}
            <div className="flex items-end gap-2 h-28 mt-12">
              {[40, 70, 50, 90, 60, 85, 55, 95, 45].map(
                (height, index) => (
                  <div
                    key={index}
                    className={`w-2 bg-emerald-400 rounded-full ${
                      isPlaying
                        ? "animate-pulse"
                        : ""
                    }`}
                    style={{ height }}
                  ></div>
                )
              )}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="mt-10">
            
            {/* PROGRESS */}
            <div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>0:00</span>
                <span>{currentTrack?.duration}</span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center justify-center gap-5 mt-10">
              
              <button className="w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center">
                <Shuffle />
              </button>

              <button
                onClick={handlePrev}
                className="w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
              >
                <SkipBack size={28} />
              </button>

              <button
                onClick={togglePlay}
                className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                {isPlaying ? (
                  <Pause size={38} fill="white" />
                ) : (
                  <Play size={38} fill="white" />
                )}
              </button>

              <button
                onClick={handleNext}
                className="w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
              >
                <SkipForward size={28} />
              </button>

              <button className="w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center">
                <Repeat />
              </button>
            </div>

            {/* EXTRA */}
            <div className="flex items-center justify-between mt-10">
              
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-all duration-300">
                <Heart />
                Favorite
              </button>

              {/* VOLUME */}
              <div className="flex items-center gap-3">
                <Volume2 className="text-gray-500" />

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) =>
                    setVolume(e.target.value)
                  }
                  className="w-32 accent-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* AUDIO */}
          <audio
            ref={audioRef}
            src={currentTrack?.audioUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;