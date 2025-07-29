// src/components/Auth/AuthIllustration.tsx
import React from 'react';

export default function AuthIllustration() {
  return (
    <div className="auth-illustration">
      <h1>Portafy</h1>
      <p>Turn your resume into a stunning personal website.</p>
      {/* Optional: add an illustration image here */}
      <img src="/illustrations/auth-graphic.svg" alt="Portafy illustration" />
    </div>
  );
}
