import React from "react";
import { useNavigate } from "react-router-dom";

import data from "../../data/MedifyData.json"

import ContinueRow from "../comman/ContinueRaw"
import SwiperRow from "../comman/SwiperRow"
import TrackRow from '../../componets/comman/TrackRow';
import CategorySection from "../comman/CategorySection"

import "swiper/css";
import "swiper/css/navigation";

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
  const trendingTracks = allTracks.slice(10, 20);

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
    <div className="space-y-8 pb-10">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Continue Journey
        </h2>

        <ContinueRow />
      </div>

      {/* SWIPER ROWS */}
      {libraries.slice(1).map(
        (lib) =>
          lib.subjects.length > 0 && (
            <SwiperRow
              key={lib.id}
              title={lib.subjects[0].title}
              data={lib.subjects[0].tracks}
              onTrackClick={handleTrackClick}
            />
          )
      )}

      {/* QUICK TRACKS */}
      <TrackRow
        title="Quick Start"
        data={quickTracks}
        onTrackClick={handleTrackClick}
      />

      {/* TRENDING */}
      <TrackRow
        title="Trending Tracks"
        data={trendingTracks}
        onTrackClick={handleTrackClick}
      />

      <CategorySection />
    </div>
  );
};

export default Home;