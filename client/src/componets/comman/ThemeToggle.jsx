import React from "react";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        w-12 h-12
        rounded-2xl
        bg-white
        border border-gray-200
        flex items-center justify-center
        hover:shadow-md
        transition-all duration-300
      "
    >
      {theme === "light" ? (
        <Moon
          size={20}
          className="text-gray-700"
        />
      ) : (
        <Sun
          size={20}
          className="text-yellow-500"
        />
      )}
    </button>
  );
};

export default ThemeToggle;