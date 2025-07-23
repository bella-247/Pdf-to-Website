// src/components/FormBuilder/Experience.tsx
import React, { useState } from 'react';

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="form-section">
      <h3 onClick={() => setIsOpen(!isOpen)} className="form-section-title">
        💼 Experience {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && (
        <div className="form-section-body">
          <input placeholder="Company Name" />
          <input placeholder="Position" />
          <textarea placeholder="Work Description" rows={3}></textarea>
        </div>
      )}
    </div>
  );
}
