import React from "react";
import { Play } from "lucide-react";

const TrackRow = ({ title, data, onTrackClick }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>

        <button className="text-emerald-600 font-medium">
          View All
        </button>
      </div>

  <div className="flex gap-5 overflow-x-auto custom-scrollbar pb-2">
        {data.map((track) => (
          <div
            key={track.id}
            onClick={() => onTrackClick(track)}
            className="min-w-[240px] bg-white rounded-[28px] p-3 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group mb-4"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src={track.audioThumbnail}
                alt={track.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-black/10"></div>

              {/* PLAY BUTTON */}
              <button className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                <Play
                  className="text-emerald-600 ml-1"
                  fill="#10b981"
                  size={22}
                />
              </button>
            </div>

            {/* CONTENT */}
            <div className="mt-4">
              <h3 className="font-bold text-gray-900 line-clamp-1">
                {track.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Meditation • Healing
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-medium text-emerald-600">
                  {track.duration}
                </span>

                <span className="text-xs text-gray-400">
                  Premium Audio
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackRow;