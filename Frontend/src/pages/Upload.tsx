// src/pages/Upload.tsx
import Navbar from '../components/Navbar/Navbar'
import PDFUpload from '../components/PDFUpload/PDFUpload'
import FormBuilder from '../components/FormBuilder/FormBuilder'
import Footer from '../components/Footer/Footer'
import './Upload.css'

export default function Upload() {
  return (
    <>
      <Navbar />
      <main className="upload-page-container">
        <section className="upload-left">
          <PDFUpload />
        </section>
        <section className="upload-right">
          <FormBuilder />
        </section>
      </main>
      <Footer />
    </>
  )
}
