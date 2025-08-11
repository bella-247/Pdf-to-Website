import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative py-20 bg-primary text-blue-500 text-center">
      <motion.div
        className="max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Turn Your Resume into a Stunning Portfolio?
        </h2>
        <p className="text-lg mb-8 text-black/90">
          Join thousands of professionals who showcase their work with Portafy.
        </p>
        <a
          href="/get-started"
          className="bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-primary transition"
        >
          Get Started 
        </a>
      </motion.div>
    </section>
  );
}
