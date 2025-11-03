import React, { useState } from "react";
import {
  Dumbbell,
  HeartPulse,
  Apple,
  BookOpen,
  HelpCircle,
  Bot,
  Menu,
  X,
} from "lucide-react";
import type { Page } from "../App";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: HeartPulse },
  { id: "planner", label: "Workout Planner", icon: HeartPulse },
  { id: "library", label: "Exercise Library", icon: Dumbbell },
  { id: "nutrition", label: "Nutrition", icon: Apple },
  { id: "articles", label: "Articles", icon: BookOpen },
  { id: "guide", label: "Beginner's Guide", icon: HelpCircle },
  {
    id: "coach",
    label: "AI Coach",
    icon: Bot,
    featured: true, // 👈 mark this item as special
  },
];

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [open, setOpen] = useState(false);

  const handleNav = (page: Page) => {
    setPage(page);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Glass container */}
        <div className="flex justify-between items-center mt-4 rounded-full bg-gradient-to-r from-white/[0.03] to-white/[0.05] border border-white/[0.08] shadow-lg px-6 py-3 transition-all duration-500">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-6 h-6 text-indigo-400" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              IronForm
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => {
              const active = currentPage === item.id;
              const isFeatured = item.featured;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id as Page)}
                  className={`flex items-center gap-2 font-medium transition-all duration-300 relative group ${
                    active
                      ? "text-white border-b-2 border-indigo-400 pb-1"
                      : "text-gray-400 hover:text-white hover:border-b hover:border-white/20 pb-1"
                  }`}
                >
                  {/* AI Coach special glow */}
                  {isFeatured ? (
                    <span className="relative flex items-center">
                      <span className="absolute inset-0 rounded-full blur-md bg-indigo-500/40 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <item.icon
                        className={`w-4 h-4 ${
                          active ? "text-indigo-400" : "text-indigo-300"
                        } animate-pulse`}
                      />
                    </span>
                  ) : (
                    <item.icon className="w-4 h-4" />
                  )}
                  <span
                    className={
                      isFeatured
                        ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                        : ""
                    }
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-gray-200 hover:text-white"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-3 mx-6 bg-[#0a0b0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const active = currentPage === item.id;
            const isFeatured = item.featured;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id as Page)}
                className={`flex items-center w-full gap-3 px-4 py-2 rounded-lg transition-all ${
                  active
                    ? "bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    isFeatured ? "text-indigo-400 animate-pulse" : ""
                  }`}
                />
                {isFeatured ? (
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
