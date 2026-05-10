import React from "react";

const TrackCard = ({ track }) => {
  return (
    <div className="min-w-[180px] bg-white/70 p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer group snap-start">
      
      <img
        src={track.audioThumbnail}
        alt={track.title}
        className="h-32 w-full object-cover rounded-lg mb-3"
      />

      <h3 className="text-sm font-medium text-gray-800 group-hover:text-emerald-600">
        {track.title}
      </h3>

      <p className="text-xs text-gray-500">
        {track.subjectTitle}
      </p>

      <p className="text-xs text-gray-400 mt-1">
        {track.duration}
      </p>

      {/* Play Hover */}
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition text-emerald-600 text-sm">
        ▶ Play
      </div>
    </div>
  );
};

export default TrackCard;