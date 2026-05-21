import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Waves,
  Sparkles,
  Heart,
  Clock,
  Headphones,
  Smile,
  Loader2,
  User,
} from "lucide-react";

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
    "Reduce anxiety",
    "Sleep better",
    "Improve focus",
    "Feel emotionally balanced",
    "Feel more motivated",
    "Feel more confident",
    "Understand myself better",
    "Heal from past trauma",
  ];

  const experienceLevels = [
  "Beginner",
  "Intermediate",
  "Regular practitioner",
];

  const moods = ["Calm", "Tired", "Overwhelmed", "Distracted", "Low", "Peaceful"];

  const meditationTimes = ["Morning", "Afternoon", "Evening", "Night"];

  const durations = ["5 min", "10 min", "20 min", "30+ min"];

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

      await axios.post(`${API_BASE_URL}/user/preferences`, preferences, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("Failed to save preferences");
    } finally {
      setLoading(false);
    }
  };

  const OptionButton = ({ selected, children, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-[48px] px-4 py-3 rounded-2xl border text-sm font-semibold transition-all duration-300
        ${
          selected
            ? "bg-[#00BFA6] text-white border-[#00BFA6] shadow-[0px_12px_28px_rgba(0,191,166,0.22)]"
            : "bg-white text-[#243044] border-[#DFF3EA] hover:border-[#00BFA6] hover:bg-[#F8FFFB]"
        }`}
    >
      {children}
    </button>
  );

  const renderOptions = (options, field) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
      {options.map((option) => (
        <OptionButton
          key={option}
          selected={preferences[field] === option}
          onClick={() =>
            setPreferences({
              ...preferences,
              [field]: option,
            })
          }
        >
          {option}
        </OptionButton>
      ))}
    </div>
  );

  const Section = ({ icon, title, subtitle, children }) => (
    <div className="bg-white border border-[#DFF3EA] rounded-[26px] p-5 sm:p-6 shadow-[0px_12px_35px_rgba(15,118,90,0.06)]">
      <div className="flex items-start gap-4 mb-1">
        <div className="w-11 h-11 rounded-2xl bg-[#E9FFF7] text-[#00BFA6] flex items-center justify-center shrink-0">
          {icon}
        </div>

        <div>
          <h2 className="text-lg sm:text-xl font-bold text-[#172033]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-[#6B7280] mt-1">{subtitle}</p>
          )}
        </div>
      </div>

      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FFFB] px-4 py-8 sm:py-10 relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-80px] w-[300px] h-[300px] bg-[#00BFA6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-90px] w-[340px] h-[340px] bg-[#71AC61]/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <div className="mb-8 bg-white border border-[#DFF3EA] rounded-[30px] shadow-[0px_20px_60px_rgba(15,118,90,0.08)] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-[68px] h-[68px] rounded-[20px] bg-[#00BFA6] flex items-center justify-center shadow-[0px_14px_32px_rgba(0,191,166,0.25)]">
              <Waves className="text-white" size={36} />
            </div>

            <div>
              <p className="text-[#00BFA6] font-bold text-sm mb-1">
                Medify Healing Platform
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold text-[#172033] tracking-tight">
                Personalize Your Wellness Journey
              </h1>

              <p className="text-[#6B7280] mt-2">
                Choose your goals, mood, timing and audio preference so Medify can recommend the right healing tracks.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <Section
            icon={<Sparkles size={22} />}
            title="Why are you here?"
            subtitle="Select one or more goals"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              {goalOptions.map((goal) => (
                <OptionButton
                  key={goal}
                  selected={preferences.goals.includes(goal)}
                  onClick={() => toggleGoal(goal)}
                >
                  {goal}
                </OptionButton>
              ))}
            </div>
          </Section>

          <Section
            icon={<User size={22} />}
            title="What's your experience level?"
            subtitle="This helps us tailor the content to your needs"
          >
           {renderOptions(experienceLevels, "experienceLevel")}
        </Section>

          <Section
            icon={<Smile size={22} />}
            title="How are you feeling lately?"
            subtitle="This helps us understand your current state"
          >
            {renderOptions(moods, "mood")}
          </Section>

          <Section
            icon={<Clock size={22} />}
            title="When do you usually meditate?"
            subtitle="Pick the time that fits your routine"
          >
            {renderOptions(meditationTimes, "meditationTime")}
          </Section>

          <Section
            icon={<Heart size={22} />}
            title="Preferred meditation duration?"
            subtitle="Choose the session length you like"
          >
            {renderOptions(durations, "duration")}
          </Section>

          <Section
            icon={<Headphones size={22} />}
            title="What type of audio do you prefer?"
            subtitle="Select the sound style that feels best"
          >
            {renderOptions(audioTypes, "audioType")}
          </Section>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-[#00BFA6] hover:bg-[#02AA94] text-white font-bold transition-all duration-300 shadow-[0px_14px_30px_rgba(0,191,166,0.24)] hover:translate-y-[-1px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader2 size={20} className="animate-spin" />}
            {loading ? "Saving preferences..." : "Continue to Medify"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}