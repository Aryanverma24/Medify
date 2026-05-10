import React from "react";
import data from "../../data/MedifyData.json";
import CategoryTile from "./CategoryTile";

const CategorySection = () => {
  //  Flatten all subjects from all libraries
  const allSubjects = data.libraries.flatMap((lib) => lib.subjects);

  // Optional: limit (like Spotify shows ~12)
  const displaySubjects = allSubjects.slice(0, 12);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">
        Browse by Mood
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {displaySubjects.map((subject) => (
          <CategoryTile key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;