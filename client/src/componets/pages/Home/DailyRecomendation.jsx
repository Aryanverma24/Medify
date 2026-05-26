import React, { useEffect, useState } from "react";
import { Play, Clock, Headphones } from "lucide-react";
import axios from "axios";

const dummyRecommendation = {
  id: 1,
  title: "Letting Go Meditation",
  duration: "12 min",
  category: "Meditation",
  description:
    "A gentle guided meditation to release stress, relax your mind, and reconnect with inner peace.",
  imageUrl:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
  audioUrl: "/audio/letting-go.mp3",
};

const DailyRecommendationCard = () => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchDailyRecommendation = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/recommendations/daily`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data && Object.keys(res.data).length > 0) {
          setTrack(res.data);
        } else {
          setTrack(dummyRecommendation);
        }
      } catch (error) {
        console.error("Daily recommendation error:", error);
        setTrack(dummyRecommendation);
      }
    };

    fetchDailyRecommendation();
  }, []);

  if (!track) {
    return (
      <div className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-gray paragraph-secondary text-center font-dm">
          Loading daily recommendation...
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-[#E9ECEF] bg-white p-5 shadow-sm">
      <h3 className="text-greenbase font-season-medium font-smbold card-title">
        Daily Recommendation
      </h3>

      <div className="relative mt-4 overflow-hidden rounded-2xl">
        <img
          src={track.imageUrl || dummyRecommendation.imageUrl}
          alt={track.title || "Daily recommendation"}
          className="h-[150px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <button className="absolute right-4 top-1/2 flex h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111827] shadow-lg">
          <Play size={22} fill="#71ac61" stroke={"#71ac61"} />
        </button>
      </div>

      <div className="mt-4">
        <h4 className="text-primary font-dm font-med text-left paragraph-body">
          {track.title || dummyRecommendation.title}
        </h4>

        <div className="mt-2 flex items-center gap-5 text-greenbase paragraph-secondary font-dm">
          <span className="flex items-center gap-1.5">
            <Clock size={15}  stroke="#71ac61"/>
            {track.duration || dummyRecommendation.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <Headphones size={15} stroke="#71ac61"/>
            {track.category || dummyRecommendation.category}
          </span>
        </div>

        <p className="mt-3 text-gray paragraph-secondary font-dm text-left">
          {track.description || dummyRecommendation.description}
        </p>

        <button className="bg-[#71AC61]  w-full sm:w-[250px] text-white font-medium font-dm px-4 py-2 rounded-full hover:bg-[#4F7944] transition-all duration-300 cursor-pointer mt-3">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default DailyRecommendationCard;