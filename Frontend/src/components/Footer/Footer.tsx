// src/components/Footer/Footer.tsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Portafy</h2>
        <p className="footer-tagline">Turn your resume into a stunning portfolio website in seconds.</p>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#templates">Templates</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Portafy. All rights reserved.</p>
      </div>
    </footer>
  );
}
