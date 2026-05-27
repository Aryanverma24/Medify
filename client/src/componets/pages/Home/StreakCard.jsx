import React, { useEffect, useState } from "react";
import axios from "axios";

const weekDays = [
  { short: "M", value: "MONDAY" },
  { short: "T", value: "TUESDAY" },
  { short: "W", value: "WEDNESDAY" },
  { short: "T", value: "THURSDAY" },
  { short: "F", value: "FRIDAY" },
  { short: "S", value: "SATURDAY" },
  { short: "S", value: "SUNDAY" },
];

const StreakCard = () => {

  const [streak, setStreak] = useState(0);

  const [joinedDays, setJoinedDays] = useState([]);

  const [loading, setLoading] = useState(true);

  const [lastCompletedDate, setLastCompletedDate] =
    useState(null);

  useEffect(() => {

    const fetchStreak = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/user/streak`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStreak(res.data.streakCount || 0);

        setJoinedDays(
          res.data.joinedDays || []
        );

        setLastCompletedDate(
          res.data.lastCompletedDate || null
        );

      } catch (error) {

        console.error(
          "Error fetching streak:",
          error
        );

      } finally {

        setLoading(false);
      }
    };

    fetchStreak();

  }, []);

  const today =
    new Date().toISOString().split("T")[0];

  const completedToday =
    lastCompletedDate === today;

  // JS:
  // 0 = Sunday
  // 1 = Monday

  const currentDayIndex =
    new Date().getDay();

  // convert to Monday-first index

  const adjustedTodayIndex =
    currentDayIndex === 0
      ? 6
      : currentDayIndex - 1;

  return (

    <div className="rounded-[28px] border border-[#E9ECEF] bg-gradient-to-br from-[#FFF8E7] via-white to-[#ECFDF5] p-4 shadow-sm">

      <div className="flex items-start gap-4">

        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
          🔥
        </div>

        <div>

          <h3 className="card-title font-season-medium text-greenbase font-smbold">

            {
              loading
                ? "Loading..."
                : `${streak} Day Streak`
            }

          </h3>

          <p className="text-primary paragraph-secondary font-dm text-left">

            {
              streak > 0
                ? "You’re doing amazing!"
                : "Start your healing streak"
            }

          </p>

        </div>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-3">

        {weekDays.map((day, index) => {

          const isJoined =
            joinedDays.includes(day.value);

          const isPastDay =
            index < adjustedTodayIndex;

          const isMissed =
            isPastDay && !isJoined;

          return (

            <div
              key={index}
              className="flex flex-col items-center gap-2"
            >

              <span className="text-primary text-xs font-dm font-med">
                {day.short}
              </span>

              <div
                className={`
                  flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold
                  ${
                    isJoined
                      ? "bg-greenbase-primary text-white shadow-md shadow-emerald-500/90"
                      : isMissed
                      ? "bg-red-100 text-red-500"
                      : "bg-greenbase text-greenbase"
                  }
                `}
              >

                {
                  isJoined
                    ? "✓"
                    : isMissed
                    ? "✗"
                    : ""
                }

              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl bg-[#C2E0BA33] mt-4 px-4 py-2">

        <p className="text-primary font-dm paragraph-secondary text-left">

          {
            completedToday
              ? "Amazing work! You've completed today's healing session ✨"
              : streak > 0
              ? "Complete today’s session to keep your healing journey alive"
              : "Play your first daily session and begin your streak"
          }

        </p>
      </div>
    </div>
  );
};

export default StreakCard;