import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";

/* =========================================================
   Quotes List
========================================================= */

const quotes = [
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "Peace begins with a deep breath.",
    author: "Unknown",
  },
  {
    text: "You are allowed to rest without guilt.",
    author: "Unknown",
  },
  {
    text: "Within you, there is a stillness and a sanctuary.",
    author: "Hermann Hesse",
  },
  {
    text: "Feelings come and go like clouds in a windy sky.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "Quiet the mind, and the soul will speak.",
    author: "Ma Jaya Sati Bhagavati",
  },
  {
    text: "Your calm is your power.",
    author: "Unknown",
  },
  {
    text: "One breath at a time is still progress.",
    author: "Unknown",
  },
  {
    text:
      "You do not have to control your thoughts, only stop letting them control you.",
    author: "Dan Millman",
  },
  {
    text: "The quieter you become, the more you can hear.",
    author: "Ram Dass",
  },
  {
    text:
      "Breathe. Let go. And remind yourself this moment is the only one you know you have.",
    author: "Oprah Winfrey",
  },
  {
    text: "Sometimes the most productive thing you can do is relax.",
    author: "Mark Black",
  },
  {
    text: "Self-care is how you take your power back.",
    author: "Lalah Delia",
  },
  {
    text: "Nothing can bring you peace but yourself.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Smile, breathe, and go slowly.",
    author: "Thich Nhat Hanh",
  },
  {
    text:
      "You are not a drop in the ocean. You are the entire ocean in a drop.",
    author: "Rumi",
  },
  {
    text: "Wherever you are, be there totally.",
    author: "Eckhart Tolle",
  },
  {
    text: "Awareness is the greatest agent for change.",
    author: "Eckhart Tolle",
  },
  {
    text:
      "The best way to capture moments is to pay attention.",
    author: "Jon Kabat-Zinn",
  },
  {
    text: "Every day is a fresh beginning.",
    author: "Unknown",
  },
  {
    text: "Rest is not idleness; it is restoration.",
    author: "Unknown",
  },
  {
    text: "Small steps every day become a healing journey.",
    author: "Unknown",
  },
  {
    text: "Let your breath be your anchor.",
    author: "Unknown",
  },
  {
    text:
      "Calm mind brings inner strength and self-confidence.",
    author: "Dalai Lama",
  },
  {
    text: "Inhale peace. Exhale worry.",
    author: "Unknown",
  },
  {
    text: "Slow down. You are healing.",
    author: "Unknown",
  },
  {
    text: "Your nervous system deserves kindness too.",
    author: "Unknown",
  },
  {
    text: "You are doing better than you think.",
    author: "Unknown",
  },
  {
    text: "Give yourself permission to pause.",
    author: "Unknown",
  },
  {
    text: "Peace is this moment without judgment.",
    author: "Dorothy Hunt",
  },
  {
    text:
      "The body benefits from movement, and the mind benefits from stillness.",
    author: "Sakyong Mipham",
  },
  {
    text: "Let silence take you to the core of life.",
    author: "Rumi",
  },
  {
    text: "A calm heart creates a clear mind.",
    author: "Unknown",
  },
  {
    text: "Today, choose peace over pressure.",
    author: "Unknown",
  },
  {
    text:
      "Almost everything will work again if you unplug it for a few minutes, including you.",
    author: "Anne Lamott",
  },
  {
    text:
      "The present moment is filled with joy and happiness.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "Be where you are; otherwise you will miss your life.",
    author: "Buddha",
  },
  {
    text:
      "Healing takes time, and asking for help is courageous.",
    author: "Mariska Hargitay",
  },
  {
    text: "Today, your peace matters more than perfection.",
    author: "Unknown",
  },
  {
    text:
      "A peaceful mind leads to a meaningful life.",
    author: "Unknown",
  },
];

/* =========================================================
   Get Daily Quote
========================================================= */

const getTodayQuote = () => {
  const today = new Date();

  const dayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  let hash = 0;

  for (let i = 0; i < dayKey.length; i++) {
    hash = dayKey.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % quotes.length;

  return quotes[index];
};

/* =========================================================
   Component
========================================================= */

const DailyQuoteCard = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const todayQuote = getTodayQuote();
    setQuote(todayQuote);
  }, []);

  if (!quote) return null;

  return (
    <div
      className="
        relative overflow-hidden
        rounded-[28px]
        border border-gray-200/50
        bg-white
        p-6
        shadow-sm
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute -right-10 -bottom-10
          h-40 w-40
          rounded-full
          bg-[#71AC61]/20
          blur-3xl
        "
      />

    <div className="flex justify-between items-start">
        {/* Icon */}
      <div
        className="
          flex h-12 w-12
          items-center justify-center
          rounded-2xl
          font-dm font-med
          bg-greenbase
          text-[#71AC61] 
        "
      >
        <Quote size={20} strokeWidth={2}/>

      
      </div>

         <span
          className="
            rounded-full
            font-dm font-med
            bg-[#C2E7D0]/20
            border border-white/10
            px-3 py-1
            text-greenbase mt-2
          "
        >
          Daily Reflection
        </span>
    </div>

      {/* Quote */}
      <p
        className="
          relative z-10
          mt-5
          text-primary  
          paragraph-secondary
          font-dm font-med
          italic text-left
        "
      >
        “{quote.text}”
      </p>

      {/* Author */}
      <div className="mt-3 flex items-center justify-between">
        <p
          className="
            text-greenbase font-dm font-med paragraph-body
          "
        >
          — {quote.author}
        </p>

      </div>
    </div>
  );
};

export default DailyQuoteCard;