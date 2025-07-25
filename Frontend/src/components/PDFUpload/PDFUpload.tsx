// src/components/PDFUpload/PDFUpload.tsx
import './PDFUpload.css';

export default function PDFUpload() {
  return (
    <div className="upload-box">
      <p className="upload-title">Upload your resume</p>
      <div className="upload-drag-area">
        <p>Drag and drop your resume here</p>
        <span className="upload-support">We support .pdf and .docx files</span>
        <button className="upload-btn">Upload Resume</button>
      </div>
    </div>
  );
}
