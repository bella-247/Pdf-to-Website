import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🚀",
    title: "Fast & Easy",
    desc: "Create your website in less than 5 minutes.",
  },
  {
    icon: "🎨",
    title: "Beautiful Designs",
    desc: "Choose from professionally crafted templates.",
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    desc: "Your portfolio looks amazing on all devices.",
  },
];

export default function WhyChoose() {
  return (
    <section id="whychoose" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-neutral-dark">Why People Love Portafy</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              className="bg-neutral-light rounded-xl shadow p-6 hover:bg-primary hover:text-white cursor-pointer transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
