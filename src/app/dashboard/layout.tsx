"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/ui/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== "undefined") {
      // Check localStorage first
      const storedDarkMode = localStorage.getItem("darkMode");
      
      if (storedDarkMode !== null) {
        setIsDarkMode(storedDarkMode === "true");
      } else {
        // If no localStorage value, check system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(prefersDark);
      }
    }
  }, []);

  // Update localStorage and apply dark mode class when isDarkMode changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Update localStorage
      localStorage.setItem("darkMode", isDarkMode.toString());
      
      // Apply or remove dark mode class to/from document
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="md:ml-64 p-4 md:p-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}