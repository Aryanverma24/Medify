import React from "react";

const CategoryTile = ({ subject }) => {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer group h-28">
      
      {/* Background */}
      <img
        src={subject.thumbnail}
        alt={subject.title}
        className="w-full h-full object-cover group-hover:scale-105 transition"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

      {/* Title */}
      <h3 className="absolute bottom-2 left-3 text-white text-sm font-semibold">
        {subject.title}
      </h3>
    </div>
  );
};

export default CategoryTile;