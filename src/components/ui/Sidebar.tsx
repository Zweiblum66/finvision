"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaChartLine, 
  FaChartBar, 
  FaRobot, 
  FaNewspaper, 
  FaBriefcase, 
  FaExchangeAlt, 
  FaCog, 
  FaSignOutAlt, 
  FaUser, 
  FaMoon, 
  FaSun, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";

interface SidebarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Sidebar({ isDarkMode, toggleDarkMode }: SidebarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the current route is active
  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if the viewport is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Navigation items
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaChartLine className="w-5 h-5" />,
    },
    {
      name: "Portfolio",
      path: "/dashboard/portfolio",
      icon: <FaBriefcase className="w-5 h-5" />,
    },
    {
      name: "Trading",
      path: "/dashboard/trading",
      icon: <FaExchangeAlt className="w-5 h-5" />,
    },
    {
      name: "Market Data",
      path: "/dashboard/market-data",
      icon: <FaChartBar className="w-5 h-5" />,
    },
    {
      name: "AI Signals",
      path: "/dashboard/ai-signals",
      icon: <FaRobot className="w-5 h-5" />,
    },
    {
      name: "News",
      path: "/dashboard/news",
      icon: <FaNewspaper className="w-5 h-5" />,
    },
  ];

  // Bottom navigation items
  const bottomNavItems = [
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <FaCog className="w-5 h-5" />,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <FaUser className="w-5 h-5" />,
    },
    {
      name: "Logout",
      path: "/auth/login",
      icon: <FaSignOutAlt className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          ) : (
            <FaBars className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Sidebar for desktop and mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobile ? (isMobileMenuOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
            <Link href="/dashboard" className="flex items-center">
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">FinVision</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                  isActive(item.path)
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Bottom section */}
          <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-700">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center w-full px-4 py-3 mb-4 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="mr-3">
                {isDarkMode ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </span>
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>

            {/* Bottom navigation items */}
            {bottomNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                  isActive(item.path)
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
}