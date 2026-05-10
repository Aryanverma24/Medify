import React from "react";
import {
  Brain,
  HeartPulse,
  Moon,
  Flame,
  Activity,
  TrendingUp,
  Smile,
  Frown,
  PlayCircle,
  CalendarDays,
  Waves,
  BadgeCheck,
  Sparkles,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const analyticsCards = [
  {
    title: "Mental Wellness Score",
    value: "82%",
    change: "+12%",
    icon: Brain,
    bg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Stress Reduction",
    value: "68%",
    change: "+18%",
    icon: HeartPulse,
    bg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "Sleep Improvement",
    value: "7.9h",
    change: "+1.3h",
    icon: Moon,
    bg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Focus Level",
    value: "91%",
    change: "+9%",
    icon: Activity,
    bg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

const moodTimeline = [
  { day: "Mon", mood: "Calm", level: "85%" },
  { day: "Tue", mood: "Relaxed", level: "88%" },
  { day: "Wed", mood: "Focused", level: "76%" },
  { day: "Thu", mood: "Happy", level: "92%" },
  { day: "Fri", mood: "Peaceful", level: "90%" },
];

const growthAreas = [
  {
    title: "Stress Management",
    progress: "78%",
  },
  {
    title: "Emotional Balance",
    progress: "85%",
  },
  {
    title: "Meditation Consistency",
    progress: "92%",
  },
  {
    title: "Sleep Routine",
    progress: "69%",
  },
];

const recommendations = [
  {
    title: "Deep Sleep Therapy",
    subtitle: "Recommended for improving sleep consistency",
  },
  {
    title: "Anxiety Relief Frequencies",
    subtitle: "Helps reduce emotional stress",
  },
  {
    title: "Morning Focus Meditation",
    subtitle: "Boost concentration & productivity",
  },
];

const achievements = [
  "7 Day Meditation Streak",
  "100 Hours Listening Completed",
  "Improved Mood Consistency",
  "Top 10% Calmness Score",
];

const EmotionalAnalyticsDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] px-4 md:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-[36px] p-6 md:p-10 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-4xl md:text-5xl font-bold">
                  Emotional Analytics
                </h1>

                <BadgeCheck className="text-white" />
              </div>

              <p className="mt-4 text-white/80 max-w-2xl leading-relaxed">
                Track your emotional wellness journey, mental growth,
                meditation consistency, sleep quality, and overall
                self-improvement with AI-powered wellness insights.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <button className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                  View Full Report
                </button>

                <button className="bg-white/20 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300">
                  Share Progress
                </button>
              </div>
            </div>

            {/* SCORE */}
            <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-[30px] p-8 min-w-[280px]">
              <p className="text-white/70 text-sm uppercase tracking-[3px]">
                Overall Wellness
              </p>

              <h2 className="text-7xl font-bold mt-3">89%</h2>

              <div className="flex items-center gap-2 mt-4 text-white/80">
                <TrendingUp size={18} />
                <span>15% better than last month</span>
              </div>
            </div>
          </div>
        </div>

        {/* ANALYTICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
          {analyticsCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[30px] p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center`}
                >
                  <Icon
                    className={item.iconColor}
                    size={28}
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-gray-500 text-sm">
                    {item.title}
                  </h3>

                  <div className="flex items-end justify-between mt-2">
                    <h2 className="text-4xl font-bold text-gray-900">
                      {item.value}
                    </h2>

                    <div className="flex items-center gap-1 text-emerald-600 font-medium">
                      <ArrowUpRight size={18} />
                      <span>{item.change}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MIDDLE GRID */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mt-8">
          {/* MOOD TRACKER */}
          <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Weekly Emotional State
                </h2>

                <p className="text-gray-500 mt-1">
                  Your emotional consistency over time
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Smile
                  className="text-emerald-600"
                  size={28}
                />
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {moodTimeline.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.day}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.mood}
                      </p>
                    </div>

                    <span className="font-bold text-gray-800">
                      {item.level}
                    </span>
                  </div>

                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                      style={{ width: item.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SELF GROWTH */}
          <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  Self Growth
                </h2>

                <p className="text-gray-500 mt-1">
                  Personal improvement tracking
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center">
                <Sparkles
                  className="text-violet-600"
                  size={26}
                />
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {growthAreas.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-800">
                      {item.title}
                    </h3>

                    <span className="text-sm font-semibold text-emerald-600">
                      {item.progress}
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full"
                      style={{ width: item.progress }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* INSIGHT CARD */}
            <div className="mt-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-[28px] p-5 text-white">
              <div className="flex items-center gap-3">
                <Flame size={28} />

                <div>
                  <h3 className="font-bold text-lg">
                    Growth Insight
                  </h3>

                  <p className="text-white/80 text-sm mt-1">
                    Your emotional stability has improved by
                    23% this month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 mt-8">
          {/* ACHIEVEMENTS */}
          <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  Wellness Achievements
                </h2>

                <p className="text-gray-500 mt-1">
                  Milestones unlocked during your journey
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
                <BadgeCheck
                  className="text-yellow-600"
                  size={28}
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f8fafc] rounded-2xl p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <BadgeCheck
                      className="text-emerald-600"
                      size={22}
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Successfully completed
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI RECOMMENDATIONS */}
          <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  AI Wellness Recommendations
                </h2>

                <p className="text-gray-500 mt-1">
                  Personalized sessions based on your emotions
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center">
                <Waves
                  className="text-cyan-600"
                  size={28}
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {recommendations.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f8fafc] hover:bg-[#eef2f7] transition-all duration-300 rounded-[28px] p-5 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.subtitle}
                    </p>

                    <div className="flex items-center gap-2 mt-3 text-gray-400 text-sm">
                      <Clock3 size={15} />
                      <span>12 min session</span>
                    </div>
                  </div>

                  <button className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all duration-300">
                    <PlayCircle size={28} fill="white" />
                  </button>
                </div>
              ))}
            </div>

            {/* FOOTER CTA */}
            <div className="mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[28px] p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    Emotional Recovery Rate
                  </h3>

                  <p className="text-white/80 mt-2">
                    Your recovery and calmness levels are
                    improving steadily every week.
                  </p>
                </div>

                <div className="text-right">
                  <h2 className="text-5xl font-bold">
                    94%
                  </h2>

                  <p className="text-white/80 text-sm mt-1">
                    Positive Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DAILY WELLNESS */}
        <div className="mt-8 bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Daily Wellness Summary
              </h2>

              <p className="text-gray-500 mt-1">
                AI-generated summary of your emotional health
              </p>
            </div>

            <div className="flex items-center gap-2 text-emerald-600 font-semibold">
              <CalendarDays size={20} />
              <span>May 8, 2026</span>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-[#f8fafc] to-[#eef7f4] rounded-[28px] p-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              You maintained a strong emotional balance today with
              high focus levels and reduced stress patterns.
              Meditation consistency and calming audio sessions
              significantly improved your sleep quality and overall
              mood stability.
            </p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default EmotionalAnalyticsDashboard;