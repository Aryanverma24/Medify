import React from 'react'

const Cards = ({ title, desc }) => {
  return (
    <div className="snap-start min-w-[180px] max-w-[180px] bg-white/70 backdrop-blur-xl p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer group">
      <div className="h-28 bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg mb-3 relative">
        {/* Play Button */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition bg-emerald-600 text-white p-2 rounded-full text-xs">
          ▶
        </div>
      </div>

      <h3 className="text-sm font-medium text-gray-800 group-hover:text-emerald-600">
        {title}
      </h3>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  );
};
export default Cards