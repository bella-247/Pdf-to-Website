import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1581090700227-4c4f50b9f09b?auto=format&fit=crop&w=800&q=80
"
          alt="Portfolio creation"
          className="rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <ul className="space-y-4">
            <li>✔ Professional portfolio creation</li>
            <li>✔ Multiple responsive templates</li>
            <li>✔ Optional downloadable source code</li>
            <li>✔ Hosting & custom domain options</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
