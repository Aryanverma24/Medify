import {
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
  Link
} from "react-router-dom";

import { useState, useEffect } from "react";


import {
  Home,
  Library,
  Search,
  ListMusic,
  Brain,
  User,
  LogOut,
  Menu,
  X,
  MessageCircle,
  Waves,
  Sun,
  Moon
} from "lucide-react";

export default function MainLayout() {
  const [payload, setPayload] = useState({});

  const [isPlaying, setIsPlaying] = useState(false);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  // NEW
  const [collapsed, setCollapsed] =
    useState(false);

  const location = useLocation();


  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = JSON.parse(
          atob(token.split(".")[1])
        );

        setPayload(decoded);

        console.log("User Payload:", decoded);
      } catch (error) {
        console.log("Invalid token");
      }
    }
  }, []);

  const handleClick = () => {
    navigate("/my-profile");
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Library",
      path: "/library",
      icon: Library,
    },
    {
      name: "Search",
      path: "/search",
      icon: Search,
    },
    {
      name: "Playlist",
      path: "/playlist",
      icon: ListMusic,
    },
    {
      name: "Analytics",
      path: "/emotional-analytics",
      icon: Brain,
    },
    {
      name: "Support",
      path: "/support",
      icon: MessageCircle,
    },
  ];

  return (
    <div className="h-screen flex bg-gradient-to-br from-[#f5fff9] via-white to-[#eefcf4] overflow-hidden">
      
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-full
          ${
            collapsed
              ? "w-[90px]"
              : "w-[240px]"
          }
          bg-white/80 backdrop-blur-2xl
          border-r border-emerald-100
          p-5
          flex flex-col justify-between
          transition-all duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* TOP */}
        <div>
          
          {/* LOGO */}
          <div className="flex items-center justify-between">
            
            {!collapsed && (
            <div
              className={`flex items-center ${
                collapsed ? "justify-center w-full" : "gap-3"
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-greenbase-primary flex items-center justify-center text-white shadow-lg flex-shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                < Waves size={24} />
              </div>

                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Avyakt
                  </h1>

                  <p className="text-xs text-gray-500">
                    Healing Platform
                  </p>
                </div>
            </div>
              )}

            {/* RIGHT BUTTONS */}
            <div className="flex items-center gap-2">
              
              {/* MOBILE CLOSE */}
              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="lg:hidden"
              >
                <X />
              </button>

              {/* DESKTOP TOGGLE */}
              <button
                onClick={() =>
                  setCollapsed(!collapsed)
                }
                className="
                  hidden lg:flex
                  w-10 h-10
                  rounded-xl
                  items-center
                  justify-center
                  hover:bg-[#71AC61]
                  transition-all duration-300
                  flex-shrink-0
                "
              >
                {collapsed ? (
                  <Menu size={18} />
                ) : (
                  <X size={18} />
                )}
              </button>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="mt-10 space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() =>
                    setSidebarOpen(false)
                  }
                  className={({ isActive }) =>
                    `
                    flex items-center
                    ${
                      collapsed
                        ? "justify-center"
                        : "gap-4"
                    }
                    px-4 py-4 rounded-2xl
                    transition-all duration-300
                    group
                    ${
                      isActive
                        ? "bg-greenbase-primary text-white shadow-lg"
                        : "text-gray-700 hover:bg-[#71AC61]"
                    }
                  `
                  }
                >
                  <Icon size={22} />

                  {!collapsed && (
                    <span className="font-medium">
                      {item.name}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="space-y-4">
          
          {/* PREMIUM CARD */}
          {!collapsed && (
            <div className="bg-greenbase-primary rounded-[28px] p-5 text-white">
              <h3 className="font-bold text-lg">
                Medify Premium
              </h3>

              <p className="text-sm text-white/80 mt-2">
                Unlock unlimited healing tracks
                and emotional insights.
              </p>

              <button className="mt-4 bg-white text-[#71ac61] px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300">
                Upgrade
              </button>
            </div>
          )}

          {/* LOGOUT */}
          <button
            onClick={() => {
              localStorage.removeItem("token");

              window.location.href =
                "/auth/login";
            }}
            className={`
              flex items-center
              ${
                collapsed
                  ? "justify-center w-full"
                  : "gap-3"
              }
               hover:text-red-600
              transition-all duration-300
            `}
          >
            <LogOut size={18} />

            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOPBAR */}
        <header className="h-[70px] px-4 border-b border-emerald-100 bg-white/70 backdrop-blur-xl flex items-center w-full justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-4">


            <div
              className={`flex items-center ${
                collapsed ? "justify-center w-full" : "gap-3"
              }`}
            >
            </div>
            
            {/* MOBILE MENU */}
            <button
              onClick={() =>
                setSidebarOpen(true)
              }
              className="lg:hidden w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center"
            >
              <Menu />
            </button>
          </div>

          {/* SEARCH */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            {location.pathname ===
            "/search" ? (
              <input
                type="text"
                placeholder="Search audio, playlist and library..."
                autoFocus
                className="
                  w-full
                  px-5 py-3
                  rounded-2xl
                  bg-[#f7faf8]
                  border border-gray-200
                  focus:outline-none
                  focus:border-emerald-500
                "
              />
            ) : (
              <button
                onClick={() =>
                  navigate("/search")
                }
                className="
                  w-full
                  px-5 py-3
                  rounded-2xl
                  bg-[#f7faf8]
                  border border-gray-200
                  text-left
                  text-gray-500
                  hover:border-emerald-400
                  transition-all duration-300
                "
              >
                Search audio, playlist and
                library...
              </button>
            )}
          </div>

          {/* USER */}
          <button
            onClick={handleClick}
            className="
              flex items-center gap-3
              bg-white
              border border-gray-200
              px-3 py-2
              rounded-2xl
              hover:shadow-md
              transition-all duration-300
            "
          >
            <div className="w-10 h-10 rounded-full bg-greenbase-primary text-white flex items-center justify-center">
              <User size={18} />
            </div>

            <div className="hidden sm:block text-left">
              <h4 className="text-sm font-semibold text-gray-800">
                {payload?.name || "User"}
              </h4>

              <p className="text-xs text-gray-500">
                {payload?.role || "User"}
              </p>
            </div>
          </button>
        </header>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>

        {/* MUSIC PLAYER */}
      </main>
    </div>
  );
}

