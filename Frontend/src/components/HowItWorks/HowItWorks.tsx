import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Upload Your Resume",
              desc: "Easily upload your CV or input details manually.",
              img: "https://images.unsplash.com/photo-1581091215367-4f0c4e45f2ab",
            },
            {
              title: "Choose a Template",
              desc: "Pick from modern, responsive portfolio designs.",
              img: "https://images.unsplash.com/photo-1504691342899-8d2d2d29f643",
            },
            {
              title: "Publish & Share",
              desc: "Get a custom link to showcase your portfolio.",
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition transform hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <img
                src={step.img}
                alt={step.title}
                className="rounded-lg mb-4 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
