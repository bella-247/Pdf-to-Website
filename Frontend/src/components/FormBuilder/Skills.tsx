// src/components/FormBuilder/Skills.tsx
import React, { useState } from 'react';

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="form-section">
      <h3 onClick={() => setIsOpen(!isOpen)} className="form-section-title">
        🛠️ Skills {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && (
        <div className="form-section-body">
          <input placeholder="Skills (comma-separated)" />
        </div>
      )}
    </div>
  );
}
