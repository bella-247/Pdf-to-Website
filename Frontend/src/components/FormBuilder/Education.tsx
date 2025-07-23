// src/components/FormBuilder/Education.tsx
import React, { useState } from 'react';

export default function Education() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="form-section">
      <h3 onClick={() => setIsOpen(!isOpen)} className="form-section-title">
        🎓 Education {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && (
        <div className="form-section-body">
          <input placeholder="School / University" />
          <input placeholder="Degree / Field" />
        </div>
      )}
    </div>
  );
}
