// src/components/Navbar.tsx
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
        Portafy
      </h1>
      <div className="flex items-center gap-4">
        <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-500">
          Features
        </a>
        <a href="#how" className="text-gray-700 dark:text-gray-300 hover:text-purple-500">
          How It Works
        </a>
        <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-500">
          Contact
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
