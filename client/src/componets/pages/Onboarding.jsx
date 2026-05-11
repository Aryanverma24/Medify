import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Onboarding() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    goals: [],
    mood: "",
    meditationTime: "",
    duration: "",
    audioType: "",
  });

  const goalOptions = [
    "Stress",
    "Anxiety",
    "Better Sleep",
    "Focus",
    "Motivation",
    "Relaxation",
    "Confidence",
    "Overthinking",
  ];

  const moods = [
    "Calm",
    "Tired",
    "Overwhelmed",
    "Distracted",
    "Low",
    "Peaceful",
  ];

  const meditationTimes = [
    "Morning",
    "Afternoon",
    "Evening",
    "Night",
  ];

  const durations = [
    "5 min",
    "10 min",
    "20 min",
    "30+ min",
  ];

  const audioTypes = [
    "Calm voice",
    "Nature sounds",
    "Soft music",
    "Motivational",
    "Spiritual",
  ];

  const toggleGoal = (goal) => {

    if (preferences.goals.includes(goal)) {

      setPreferences({
        ...preferences,
        goals: preferences.goals.filter((g) => g !== goal),
      });

    } else {

      setPreferences({
        ...preferences,
        goals: [...preferences.goals, goal],
      });
    }
  };

  const handleSubmit = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");
      console.log("Submitting token:", token);


      await axios.post(
        `${API_BASE_URL}/user/preferences`,
        preferences,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/home");

    } catch (error) {

      console.log(error);

      alert("Failed to save preferences");

    } finally {

      setLoading(false);
    }
  };

  const renderOptions = (options, field) => (
    <div className="grid grid-cols-2 gap-3 mt-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() =>
            setPreferences({
              ...preferences,
              [field]: option,
            })
          }
          className={`p-3 rounded-2xl border transition text-sm font-medium
            ${
              preferences[field] === option
                ? "bg-emerald-500 text-white border-emerald-500"
                : "bg-white border-gray-200 hover:border-emerald-300"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex justify-center items-center px-4 py-10">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-8"
      >

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-emerald-700">
            Welcome to Medify 🌿
          </h1>

          <p className="text-gray-500 mt-3">
            Help us personalize your meditation experience
          </p>

        </div>

        {/* Goals */}
        <div className="mb-10">

          <h2 className="text-xl font-semibold text-gray-800">
            What would you like help with?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">

            {goalOptions.map((goal) => (

              <button
                key={goal}
                type="button"
                onClick={() => toggleGoal(goal)}
                className={`p-3 rounded-2xl border transition text-sm font-medium
                  ${
                    preferences.goals.includes(goal)
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-white border-gray-200 hover:border-emerald-300"
                  }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>

        {/* Mood */}
        <div className="mb-10">

          <h2 className="text-xl font-semibold text-gray-800">
            How are you feeling lately?
          </h2>

          {renderOptions(moods, "mood")}
        </div>

        {/* Meditation Time */}
        <div className="mb-10">

          <h2 className="text-xl font-semibold text-gray-800">
            When do you usually meditate?
          </h2>

          {renderOptions(meditationTimes, "meditationTime")}
        </div>

        {/* Duration */}
        <div className="mb-10">

          <h2 className="text-xl font-semibold text-gray-800">
            Preferred meditation duration?
          </h2>

          {renderOptions(durations, "duration")}
        </div>

        {/* Audio Type */}
        <div className="mb-10">

          <h2 className="text-xl font-semibold text-gray-800">
            What type of audio do you prefer?
          </h2>

          {renderOptions(audioTypes, "audioType")}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-4 rounded-2xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
        >
          {loading ? "Saving..." : "Continue"}
        </button>
      </motion.div>
    </div>
  );
}