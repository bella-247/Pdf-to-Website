import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#6C63FF]">Portafy</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-[#6C63FF] cursor-pointer">Home</li>
          <li className="hover:text-[#6C63FF] cursor-pointer">Services</li>
          <li className="hover:text-[#6C63FF] cursor-pointer">Pricing</li>
          <li className="hover:text-[#6C63FF] cursor-pointer">Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
}
