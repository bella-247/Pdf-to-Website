import React from 'react';
import './Footer.css';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <h2 className="footer__brand">Portafy</h2>
        <p className="footer__desc">
          Transform your resume into a beautiful website effortlessly.
        </p>
      </div>

      <div className="footer__links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/faq">FAQ</a>
        <a href="/privacy">Privacy</a>
        <a href="/support">Support</a>
      </div>

      <div className="footer__socials">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
        </a>
      </div>

      <div className="footer__bottom">
        <p>© 2025 Portafy. All rights reserved.</p>
      </div>
    </footer>
  );
}
