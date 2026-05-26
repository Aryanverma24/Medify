import { Play } from "lucide-react";
import HeroImage from "../../../assets/Images/HomeHeroSection.png"

export default function HeroSection({ user }) {
  return (
    <section className="relative overflow-hidden rounded-[28px] min-h-[240px] shadow-sm">
        <img    
            src={HeroImage}
            alt="Hero"
            className="absolute w-full h-full object-cover"
        />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

      <div className="relative z-10 p-8 max-w-xl text-white">
        <h1 className="text-white heading-large text-left font-season-medium">
          Good Evening, {user?.name || "User"} 
        </h1>

        <p className="paragraph-secondary text-left mt-3 font-dm text-white/90">
          Take a deep breath and let today go.
        </p>

        <p className="mt-1 text-white/80 font-dm ">
          You've come this far, and that matters.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="flex items-center gap-2 bg-[#71AC61]  w-full sm:w-[230px] text-white font-medium font-dm px-4 py-3 rounded-full hover:bg-[#4F7944] transition-all duration-300 cursor-pointer">
            <Play size={18} fill="white" />
            Resume Last Session
          </button>

          <button className="bg-transparent border w-full sm:w-[200px] text-greenbase-light font-medium font-dm px-4 py-3 cursor-pointer rounded-full hover:bg-[#4F7944] transition-all duration-300">
            Explore Library
          </button>
        </div>
      </div>
      
    </section>
  );
}