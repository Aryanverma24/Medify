import { Leaf, Target, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-7 h-7 text-green-700" />,
    title: "Expert Designed",
    description: "Programs crafted by wellness experts",
  },
  {
    icon: <Target className="w-7 h-7 text-green-700" />,
    title: "Step by Step",
    description: "Day by day guidance for real transformation",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-green-700" />,
    title: "Track Progress",
    description: "Monitor your healing and emotional growth",
  },
];

export default function WellnessFeatures() {
  return (
    <div className="w-full bg-white ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 px-6 py-4 ${
              index !== features.length - 1
                ? "md:border-r border-gray-200"
                : ""
            }`}
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center shrink-0">
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}