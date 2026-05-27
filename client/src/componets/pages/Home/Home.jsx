import React from "react";
import { useNavigate } from "react-router-dom";

import data from "../../../data/MedifyData.json"

import ContinueRow from "../../comman/ContinueRaw"
import SwiperRow from "../../comman/SwiperRow"
import TrackRow from '../../comman/TrackRow';
import CategorySection from "../../comman/CategorySection"
import HomeSection from "./HeroSection";
import HealingProgressCard from "./HealingProgressCard";
import MoodTrackerCard from "./MoodTrackerCard";

import "swiper/css";
import "swiper/css/navigation";
import StreakCard from "./StreakCard";
import DailyRecommendationCard from "./DailyRecomendation";
import ContinueHealingSlider from "./ContinueHealing";
import RecommendedForYou from "./RecomendedForYou";
import TopLibraries from "./TopLibraries";
import DailyQuoteCard from "./DailyQuoteCard";
import TrackSlider from "./TrackSlider";
import PopularWithAvyaktUsers from "./PopularWithAvyaktUsers";
import UpcomingReminders from "./UpcomingReminders";


const Home = () => {
  const navigate = useNavigate();

  const libraries = data?.libraries;

  // ALL TRACKS
  const allTracks = data.libraries.flatMap((lib) =>
    lib.subjects.flatMap((sub) =>
      sub.tracks.map((track) => ({
        ...track,
        subjectTitle: sub.title,
        subjectId: sub.id,
        libraryName: lib.name,
      }))
    )
  );

  const quickTracks = allTracks.slice(0, 10);

 const trendingTracks = [
  {
    id: 1,
    title: "Anxiety Relief",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 6,
    totalMinutes: 10,
  },

  {
    id: 2,
    title: "Deep Sleep Meditation",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 8,
    totalMinutes: 15,
  },

  {
    id: 3,
    title: "Morning Gratitude",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 4,
    totalMinutes: 10,
  },

  {
    id: 4,
    title: "Focus Booster",
    imageUrl:
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 7,
    totalMinutes: 12,
  },

  {
    id: 5,
    title: "Stress Relief Breathing",
    imageUrl:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 5,
    totalMinutes: 11,
  },

  {
    id: 6,
    title: "Calm Mind Practice",
    imageUrl:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
    completedMinutes: 9,
    totalMinutes: 14,
  },
];

  // HANDLE CLICK
  const handleTrackClick = (track) => {
    navigate(`/player/${track.id}`, {
      state: {
        track,
        tracks: allTracks,
      },
    });
  };

  return (
    <div className="space-y-8 pb-10 w-full">

  <div className="flex justify-center flex-col md:flex-row gap-6 mb-8 w-full">
  
  <div className="relative min-h-screen flex flex-col gap-6 max-w-[72%]">

    <HomeSection user={{ name: "John" }} />
    <ContinueHealingSlider  />  
    <RecommendedForYou />
    <TopLibraries />
    
    <TrackSlider 
    title="Trending Healing Tracks"
    tracks={trendingTracks}
    onTrackClick={handleTrackClick}
     />

     <PopularWithAvyaktUsers />
    </div>


  <div className="h-full flex flex-wrap gap-4 max-w-[300px]">

    <HealingProgressCard progress={78} />
    <MoodTrackerCard />
    <StreakCard streak={5} />
    <DailyRecommendationCard />

    <DailyQuoteCard />
    <UpcomingReminders />

  </div>

</div>

       {/* <TrackRow 
          title="Recommendation Journey"
          data={quickTracks}
          onTrackClick={handleTrackClick}
       />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Continue Journey
        </h2>

        <ContinueRow />
      </div> */}

      {/* SWIPER ROWS */}
      {/* {libraries.slice(1).map(
        (lib) =>
          lib.subjects.length > 0 && (
            <SwiperRow
              key={lib.id}
              title={lib.subjects[0].title}
              data={lib.subjects[0].tracks}
              onTrackClick={handleTrackClick}
              className="mb-8"
            />
          )
      )} */}

      {/* QUICK TRACKS */}
      {/* <TrackRow
        title="Quick Start"
        data={quickTracks}
        onTrackClick={handleTrackClick}
      />
 */}

      {/* TRENDING */}
      {/* <TrackRow
        title="Trending Tracks"
        data={trendingTracks}
        onTrackClick={handleTrackClick}
      /> */}

      {/* <CategorySection /> */}
    </div>
  );
};

export default Home;