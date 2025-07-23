// src/components/FormBuilder/PersonalInfo.tsx
import React, { useState } from 'react';

export default function PersonalInfo() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="form-section">
      <h3 onClick={() => setIsOpen(!isOpen)} className="form-section-title">
        👤 Personal Info {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && (
        <div className="form-section-body">
          <input placeholder="Full Name" />
          <input placeholder="Title (e.g. Frontend Developer)" />
          <textarea placeholder="Short Bio" rows={3}></textarea>
        </div>
      )}
    </div>
  );
}
