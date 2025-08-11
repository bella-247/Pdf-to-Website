import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
       backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-black/50 absolute inset-0" />
      <motion.div
        className="relative z-10 text-center max-w-2xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Turn Your Resume Into a Stunning Portfolio
        </h1>
        <p className="text-lg mb-6">
          Portafy helps you showcase your skills, experience, and achievements
          through a personalized, professional website.
        </p>
        <button className="bg-[#38BDF8] px-6 py-3 rounded-lg hover:bg-[#0EA5E9] transition">
          Create My Portfolio
        </button>
      </motion.div>
    </section>
  );
}
