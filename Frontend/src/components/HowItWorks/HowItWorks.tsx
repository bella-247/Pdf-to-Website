// src/components/HowItWorks/HowItWorks.tsx
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="hiw-title">How It Works</h2>
      <div className="hiw-steps">
        <div className="hiw-step">
          <img src="/step1.png" alt="Upload Resume" />
          <h3>1. Upload Resume</h3>
          <p>Choose your PDF or Docx file to begin.</p>
        </div>
        <div className="hiw-step">
          <img src="/step2.png" alt="Choose Template" />
          <h3>2. Choose Template</h3>
          <p>Select a design that fits your style.</p>
        </div>
        <div className="hiw-step">
          <img src="/step3.png" alt="Customize and Launch" />
          <h3>3. Customize & Launch</h3>
          <p>Make edits and publish your portfolio instantly.</p>
        </div>
      </div>
    </section>
  );
}
