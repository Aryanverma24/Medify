import React from "react";
import {  Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 w-full rounded-t-[36px] bg-[#F7FBF8] border-t border-[#E5EFE8] px-6 py-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-[#1f2937]">
              Medify
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500 max-w-[260px]">
              Healing audio sessions designed to calm your mind, improve focus,
              and support your emotional wellness journey.
            </p>

            {/* <div className="mt-5 flex items-center gap-3">
              {[Instagram, Youtube, Twitter, Mail].map((Icon, index) => (
                <button
                  key={index}
                  className="h-10 w-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#18b779] hover:bg-[#18b779] hover:text-white transition"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div> */}
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-[#1f2937] mb-4">Explore</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Home</li>
              <li>Healing Sessions</li>
              <li>Libraries</li>
              <li>Daily Quotes</li>
            </ul>
          </div>

          {/* Wellness */}
          <div>
            <h3 className="font-semibold text-[#1f2937] mb-4">Wellness</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Meditation</li>
              <li>Sleep Better</li>
              <li>Stress Relief</li>
              <li>Mindfulness</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-[#1f2937] mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#E1EDE5] pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Medify. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-500">
            Made with <Heart size={15} className="text-[#18b779]" /> for mindful living
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;