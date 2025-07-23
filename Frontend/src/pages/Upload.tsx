// src/pages/Upload.tsx
import Navbar from '../components/Navbar/Navbar';
import PDFUpload from '../components/PDFUpload/PDFUpload';
import FormBuilder from '../components/FormBuilder/FormBuilder';
import Footer from '../components/Footer/Footer';

import './Upload.css'; // 👈 We’ll style the layout here

export default function Upload() {
  return (
    <>
      <Navbar />
      <main className="upload-page-container">
        <div className="upload-left">
          <PDFUpload />
        </div>
        <div className="upload-right">
          <FormBuilder />
        </div>
      </main>
      <Footer />
    </>
  );
}
