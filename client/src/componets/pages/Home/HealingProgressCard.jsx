import React from "react";

const HealingProgressCard = ({ progress = 78 }) => {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="min-h-[200px] rounded-[28px] border border-gray-200 bg-white p-4 shadow-sm dark:shadow-black/20">
      
      {/* Top Title */}
      <p className="text-greenbase card-title font-med">
        Your Healing Progress
      </p>

      {/* Content Row */}
      <div className="flex items-center justify-between gap-6">
        
        {/* Left Description */}
        <div className="flex-1 max-w-[280px]">
          <p className="text-gray font-dm paragraph-secondary font-med text-left">
            Keep going, your healing journey matters.
          </p>

          <button className="text-greenbase font-dm font-med paragraph-secondary mt-4 flex items-center gap-1">
            View Insights →
          </button>
        </div>

        {/* Circular Progress */}
        <div className="relative h-[120px] w-[120px] shrink-0">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r={radius}
              strokeWidth="10"
              className="stroke-gray-300"
              fill="none"
            />

            <circle
              cx="60"
              cy="60"
              r={radius}
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              stroke="url(#gradient)"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (circumference * progress) / 100
              }
            />

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#71ac61" />
                <stop offset="100%" stopColor="#71ac6177" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-primary font-smbold font-season-medium paragraph-body">
              {progress}%
            </span>
            <span className="text-secondary font-dm font-med paragraph-secondary">
              Balanced
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealingProgressCard;