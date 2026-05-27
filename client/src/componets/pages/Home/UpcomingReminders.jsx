import React from "react";
import {
  Bell,
  CalendarCheck,
  Moon,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

const iconMap = {
  journal: CalendarCheck,
  meditation: Moon,
  gratitude: HeartHandshake,
  default: Bell,
};

export const upcomingReminders = [
  {
    id: 1,
    type: "journal",
    title: "Journal Reminder",
    time: "Today, 7:00 PM",
    badge: "2/5",
    iconBg: "bg-emerald-100 dark:bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-pink-100 dark:bg-pink-500/10",
    badgeColor: "text-pink-600 dark:text-pink-400",
  },
  {
    id: 2,
    type: "meditation",
    title: "Evening Meditation",
    time: "Today, 8:30 PM",
    badge: "18",
    iconBg: "bg-orange-100 dark:bg-orange-500/10",
    iconColor: "text-orange-500 dark:text-orange-400",
    badgeBg: "bg-emerald-100 dark:bg-emerald-500/10",
    badgeColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: 3,
    type: "gratitude",
    title: "Gratitude Check-in",
    time: "Today, 9:00 PM",
    badge: "+23%",
    iconBg: "bg-yellow-100 dark:bg-yellow-500/10",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    badgeBg: "bg-emerald-100 dark:bg-emerald-500/10",
    badgeColor: "text-emerald-600 dark:text-emerald-400",
  },
];


const UpcomingReminders = ({ reminders = upcomingReminders }) => {
  return (
    <div
      className="
        rounded-[28px]
        border border-gray-200
        bg-white 
        p-5
        shadow-sm
      "
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-greenbase font-season-medium font-smbold text-left subheading">
            Upcoming Reminders
          </h3>
           
          <p className="text-gray-500 font-dm text-left paragraph-secondary mt-1">
            Stay consistent with your healing routine
          </p>
        </div>

      
      </div>

      <div className="space-y-4">
        {reminders.map((reminder) => {
          const Icon = iconMap[reminder.type] || iconMap.default;

          return (
            <div
              key={reminder.id}
              className="
                flex items-center gap-4
                rounded-2xl
                border border-gray-100
                bg-[#c2e7d0]/30 
                p-4
                hover:bg-[#c2e7d0]/80
                transition-all duration-300
              "
            >
              <div
                className={`
                  flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-2xl
                  ${reminder.iconBg}
                  ${reminder.iconColor}
                `}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1">
                <h4 className="text-primary font-dm font-med text-left paragraph-secondary">
                  {reminder.title}
                </h4>

                <p className="text-gray-500 font-dm text-left paragraph-secondary mt-1">
                  {reminder.time}
                </p>
              </div>

              {reminder.badge && (
                <span
                  className={`
                    rounded-full px-3 py-1
                    font-dm font-med paragraph-secondary
                    ${reminder.badgeBg}
                    ${reminder.badgeColor}
                  `}
                >
                  {reminder.badge}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingReminders;