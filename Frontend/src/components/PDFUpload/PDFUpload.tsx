// src/components/PDFUpload/PDFUpload.tsx
import './PDFUpload.css';

export default function PDFUpload() {
  return (
    <section className="upload-container">
      <div className="upload-content">
        <h1>Upload Your Resume</h1>
        <p>Drop your PDF file here or click the button below to browse.</p>

        <div className="upload-box">
          <input type="file" id="fileInput" accept=".pdf" />
          <label htmlFor="fileInput" className="upload-label">
            Drag & Drop your file here or <span className="browse-text">Browse</span>
          </label>
        </div>

        <p className="file-note">Only PDF format is supported (max size: 5MB)</p>
      </div>
    </section>
  );
}
