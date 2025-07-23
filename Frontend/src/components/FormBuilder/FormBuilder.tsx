// src/components/FormBuilder/FormBuilder.tsx
import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import './FormBuilder.css';

export default function FormBuilder() {
  const [step, setStep] = useState(1);

  return (
    <div className="form-builder">
      <h2 className="form-title">📝 Manually Build Your Portfolio</h2>
      <p className="step-indicator">Step {step} of 3</p>

      <PersonalInfo />
      <Experience />
      <Skills />
      <Education />

      <button
        className="continue-button"
        onClick={() => alert('Go to preview page')}
      >
        Continue to Preview →
      </button>
    </div>
  );
}
