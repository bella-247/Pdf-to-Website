// src/components/Hero/Hero.tsx
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Create Your Resume-Based Portfolio Instantly</h1>
        <p>Turn your resume into a stunning personal website with just a few clicks.</p>
        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">See How It Works</button>
        </div>
      </div>
      <div className="hero-right">
        <img src="/hero-img.png" alt="Hero illustration" />
      </div>
    </section>
  );
}
