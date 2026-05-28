import React from "react";
import HealingProgramCard from "./HealingProgramCard";

import Image1 from "../../../assets/Images/21days.png";
import Image2 from "../../../assets/Images/30days.png";
import Image3 from "../../../assets/Images/7days.png";

const programs = [
  {
    image: Image1,
    price: "₹299",
    badge: "MOST POPULAR",
    title: "21 Days Anxiety Recovery",
    description:
      "Reduce overthinking, anxiety and emotional stress with guided meditations.",
  },

  {
    image: Image2,
    price: "₹499",
    badge: "BEST VALUE",
    title: "30 Days Self Healing",
    description:
      "A complete journey of emotional healing and personal growth.",
  },

  {
    image: Image3,
    price: "₹99",
    badge: "BEGINNER FRIENDLY",
    title: "7 Days Better Sleep",
    description:
      "Improve sleep quality and wake up refreshed every morning.",
  },
];

const HealingProgram = () => {
  return (
    <section className="w-full">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Choose Your Healing Journey
        </h2>

        <p className="text-gray-500 mt-2 text-lg">
          Premium programs for deep transformation and emotional wellness
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <HealingProgramCard
            key={index}
            image={program.image}
            price={program.price}
            badge={program.badge}
            title={program.title}
            description={program.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HealingProgram;