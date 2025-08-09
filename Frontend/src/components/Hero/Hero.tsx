// src/components/HeroSection.tsx
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center"
      >
        Turn Your PDF Resume into a Stunning Website 🚀
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 text-lg text-center max-w-2xl"
      >
        Upload your PDF, choose a design, and get a professional online portfolio instantly.
      </motion.p>
      <motion.a
        href="/upload"
        whileHover={{ scale: 1.05 }}
        className="mt-8 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition"
      >
        Get Started
      </motion.a>
    </section>
  );
}
