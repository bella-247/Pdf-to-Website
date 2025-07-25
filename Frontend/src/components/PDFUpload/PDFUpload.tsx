// src/components/PDFUpload/PDFUpload.tsx
import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';
import './PDFUpload.css';

export default function PDFUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload your CV / Resume</h2>

      <div className="upload-box">
        <label htmlFor="pdf-upload" className="upload-label">
          <UploadCloud className="upload-icon" />
          <p className="upload-text">
            Click to browse or drag & drop your PDF here
          </p>
        </label>
        <input
          type="file"
          accept="application/pdf"
          id="pdf-upload"
          className="upload-input"
          onChange={handleFileChange}
        />
      </div>

      {file && <p className="upload-filename">📄 {file.name}</p>}
    </div>
  );
}
