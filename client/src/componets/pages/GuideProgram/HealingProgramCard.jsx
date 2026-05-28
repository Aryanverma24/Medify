import React from "react";

const HealingProgramCard = ({
  image,
  price,
  description,
  badge,
  title,
}) => {
  return (
    <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      <div
        className="relative h-[320px] bg-cover bg-center p-5 flex flex-col justify-between"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

        <div className="relative z-10">
          <span className="bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
            ✨ {badge}
          </span>
        </div>

        <div className="relative z-10 text-white">
          <h2 className="text-4xl font-bold leading-tight max-w-[250px]">
            {title}
          </h2>

          <p className="text-sm text-gray-200 mt-3 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            <span className="bg-white/10 backdrop-blur-md border border-white/10 text-xs px-3 py-1 rounded-full">
              🎧 21 Sessions
            </span>

            <span className="bg-white/10 backdrop-blur-md border border-white/10 text-xs px-3 py-1 rounded-full">
              🧘 Daily Practices
            </span>

            <span className="bg-white/10 backdrop-blur-md border border-white/10 text-xs px-3 py-1 rounded-full">
              ✨ AI Insights
            </span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-4xl font-bold text-green-700">{price}</h3>

            <p className="text-xs text-gray-500 mt-1">
              First 2 days free
            </p>
          </div>

          <button className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-3 rounded-2xl font-semibold shadow-md">
            Start Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealingProgramCard;