import React from "react";
import { Sparkles, Clock3, Play } from "lucide-react";

export const recommendedDummyData = {
  id: 1,

  title: "Deep Anxiety Relief",

  description:
    "A complete guided journey to calm your mind, relax your body and reduce emotional stress.",

  duration: "25 min",

  imageUrl:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",

  reasons: [
    "Based on your recent listening patterns",
    "Helps reduce stress & overthinking",
    "Perfect for your current emotional mood",
    "Recommended after your recent journal entries",
  ],
};

const RecommendedForYou = ({ recommendation = recommendedDummyData }) => {
  if (!recommendation) return null;

  return (
    <section>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-primary font-season-medium font-smbold heading-large text-left mt-5 mb-1">
          Recommended For You
        </h2>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.8fr] gap-5">
        
        {/* Left Recommendation Card */}
        <div
          className="
            relative overflow-hidden
            rounded-[30px]
            max-h-[320px]
            bg-cover bg-center
            shadow-sm
          "
          style={{
            backgroundImage: `url(${recommendation.imageUrl})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8 pt-4 text-white">
             <div
                className="
                  max-w-fit
                  mb-5 inline-flex items-center gap-2
                  rounded-full
                  bg-[#C2E7D0]/20
                  border border-white/10
                  px-4 py-2
                  text-greenbase font-dm font-med
                  backdrop-blur-md
                  
                "
              >
                <Sparkles size={16} />
                AI Powered
              </div>
            <div className="mt-4">

              <h2 className="max-w-[420px] text-white font-season-medium font-med text-left heading-large">
                {recommendation.title}
              </h2>

              <p className="mt-4 max-w-[500px] paragraph-secondary text-left text-white/90 font-dm">
                {recommendation.description}
              </p>
            </div>

            {/* Bottom */}
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <button
                className="flex items-center gap-2 bg-[#71AC61]  w-full sm:w-fit text-white font-medium font-dm px-4 py-3 rounded-full hover:bg-[#4F7944] transition-all duration-300 cursor-pointer"
              >
                <Play size={18} fill="white" />
                Start Journey
              </button>

              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  font-dm font-med
                  bg-[#C2E7D0]/20
                  border border-white/10
                  px-4 py-3
                  backdrop-blur-md
                  text-sm
                "
              >
                <Clock3 size={16} />
                {recommendation.duration}
              </div>
            </div>
          </div>
        </div>

        {/* Right Insight Card */}
        <div
          className="
            rounded-[30px]
            border border-gray-200 
           bg-white
            p-6
            shadow-sm
          "
        >
          <h3 className="text-greenbase font-season-medium font-smbold subheading">
            Why we recommended this?
          </h3>

          <div className="mt-2 space-y-2">
            {recommendation.reasons?.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className="
                    mt-1 h-2.5 w-2.5 shrink-0
                    rounded-full
                    bg-greenbase-primary
                  "
                />

                <p className="text-primary paragraph-secondary font-dm text-left max-w-[300px] mt-1">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <button
            className="
              mt-4 px-4
              font-dm font-med
              text-greenbase
              paragraph-secondary
            "
          >
            Learn More →
          </button>

        </div>

      </div>

    </section>
  );
};

export default RecommendedForYou;