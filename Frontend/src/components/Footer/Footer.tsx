import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-primary">Portafy</h3>
          <p className="text-sm text-gray-400 mt-2">
            Transforming resumes into stunning websites.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/services" className="hover:text-primary">Services</a></li>
            <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-primary"><FaFacebook /></a>
            <a href="#" className="hover:text-primary"><FaTwitter /></a>
            <a href="#" className="hover:text-primary"><FaLinkedin /></a>
            <a href="#" className="hover:text-primary"><FaInstagram /></a>
          </div>
          <p className="mt-4 text-gray-400 text-sm">
            📧 contact@portafy.com
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Portafy. All rights reserved.
      </div>
    </footer>
  );
}
