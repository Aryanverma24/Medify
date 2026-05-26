import React, { useState } from "react";

const moods = [
  { emoji: "😔", label: "Low", color: "from-red-100 to-red-50" },
  { emoji: "😕", label: "Okay", color: "from-yellow-100 to-yellow-50" },
  { emoji: "🙂", label: "Good", color: "from-green-100 to-green-50" },
  { emoji: "😄", label: "Great", color: "from-emerald-100 to-emerald-50" },
  { emoji: "🤩", label: "Amazing", color: "from-teal-100 to-teal-50" },
];

export default function MoodTrackerCard() {
  const [selected, setSelected] = useState(2);

  return (
    <div className="rounded-[28px] border border-[#E9ECEF] bg-white p-4 shadow-sm">
      
      {/* Heading */}
      <div>
        <h3 className="card-title font-season-medium text-greenbase font-med">
          How are you feeling today?
        </h3>

        <p className="text-primary paragraph-secondary font-dm text-left">
          Track your emotional wellness daily
        </p>
      </div>

      {/* Emoji Row */}
      <div className="flex items-center justify-between gap-2 mt-3">
        {moods.map((mood, index) => {
          const active = selected === index;

          return (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`
                relative flex flex-col items-center justify-center
                rounded-2xl transition-all duration-300
                min-w-[32px] py-2 flex-1
                ${
                  active
                    ? `bg-gradient-to-b ${mood.color} border border-green-300 shadow-md scale-105`
                    : "bg-[#F8FAFC] hover:bg-[#F1F5F9]"
                }
              `}
            >
              {/* Emoji */}
              <span
                className={`
                  transition-transform duration-300
                  ${active ? "scale-110" : "hover:scale-110"}
                `}
              >
                {mood.emoji}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Insight */}
      <div className="mt-4 rounded-2xl bg-[#c2e0ba33] p-2">
        <p className="text-primary font-dm paragraph-secondary text-left px-2 py-1">
          You're feeling{" "}
          <span className="font-semibold text-greenbase">
            {moods[selected].label}
          </span>{" "}
          today. Keep maintaining your healing streak 
        </p>
      </div>
    </div>
  );
}