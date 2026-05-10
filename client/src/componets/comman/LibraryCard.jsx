import React from "react";

const LibraryCard = ({ lib }) => {
  return (
    <div className="bg-white/70 backdrop-blur-xl p-5 rounded-2xl shadow hover:shadow-lg transition cursor-pointer group mb-8">
      
      {/* Thumbnail (optional gradient for now) */}
      <div className="h-32 bg-gradient-to-br from-emerald-100 to-green-200 rounded-xl mb-4" />

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-600">
        {lib.name}
      </h3>

      {/* Subjects Count */}
      <p className="text-sm text-gray-500 mt-1">
        {lib.subjects.length} Categories
      </p>

      {/* Subjects Preview */}
      <div className="mt-3 flex flex-wrap gap-2">
        {lib.subjects.slice(0, 3).map((sub) => (
          <span
            key={sub.id}
            className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md"
          >
            {sub.title}
          </span>
        ))}
        {lib.subjects.length > 3 && (
          <span className="text-xs text-gray-400">
            +{lib.subjects.length - 3} more
          </span>
        )}
      </div>
    </div>
  );
};

export default LibraryCard;