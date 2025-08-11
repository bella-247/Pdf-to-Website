import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { plan: "Free", price: "$0", features: ["Basic template", "Hosting included"] },
            { plan: "Pro", price: "$9/mo", features: ["All templates", "Custom domain", "Analytics"] },
            { plan: "Code Bundle", price: "$29", features: ["Full source code", "One-time payment"] },
          ].map((pkg, i) => (
            <motion.div
              key={i}
              className="bg-[#F1F5F9] p-8 rounded-xl shadow hover:scale-105 transition"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4">{pkg.plan}</h3>
              <p className="text-2xl font-bold mb-4">{pkg.price}</p>
              <ul className="space-y-2">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
