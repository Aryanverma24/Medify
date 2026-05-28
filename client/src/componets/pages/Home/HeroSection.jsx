import { Play, Crown } from "lucide-react";

export default function HeroSection({
  user,
  image,
  greeting = "Good Evening",
  title,
  subtitle,
  description,

  showBadge = false,
  badgeText = "Premium Programs",

  primaryButtonText = "Resume Last Session",
  secondaryButtonText = "Explore Library",

  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <section className="relative min-h-[240px] overflow-hidden rounded-[28px] shadow-sm">
      <img
        src={image}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

      <div className="relative z-10 max-w-2xl p-8 text-white">
        {showBadge && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-[#9A6400] backdrop-blur-md">
            <Crown size={16} fill="#E6A900" className="text-[#E6A900]" />
            {badgeText}
          </div>
        )}

        <h1 className="heading-large text-left font-season-medium text-white">
          {title || `${greeting}, ${user?.name || "User"}`}
        </h1>

        {subtitle && (
          <p className="paragraph-secondary mt-3 text-left font-dm text-white/90">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="mt-1 font-dm text-white/80">
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={onPrimaryClick}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#71AC61] px-4 py-3 font-dm font-medium text-white transition-all duration-300 hover:bg-[#4F7944] sm:w-[230px]"
          >
            <Play size={18} fill="white" />
            {primaryButtonText}
          </button>

          <button
            onClick={onSecondaryClick}
            className="w-full rounded-full border border-white/80 bg-transparent px-4 py-3 font-dm font-medium text-white transition-all duration-300 hover:bg-white/15 sm:w-[200px]"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}