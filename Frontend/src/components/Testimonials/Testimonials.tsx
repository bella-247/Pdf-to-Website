import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    feedback:
      "Portafy transformed my resume into a professional website in minutes! It's intuitive, beautiful, and fast.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    feedback:
      "I love how customizable Portafy is. I got a clean portfolio with zero coding needed!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Amina Hassan",
    role: "Data Scientist",
    feedback:
      "The best tool for showcasing my skills. Recruiters loved my online portfolio.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#f0f4f8] to-[#d0e1f9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Users Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-primary"
              />
              <p className="text-gray-600 italic">"{t.feedback}"</p>
              <h4 className="text-lg font-semibold text-gray-800 mt-4">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
