import './Templates.css';

export default function Templates() {
  return (
    <section className="templates-section" id="templates">
      <h2 className="templates-heading">Choose Your Perfect Template</h2>
      <p className="templates-subheading">
        Professional templates designed to showcase your skills and experience in the best light
      </p>
      <div className="templates-grid">
        <div className="template-card">
          <div className="template-image">
            <img src="/templates/template1.webp" alt="Modern Minimal Template" />
            <div className="template-overlay">
              <button className="preview-btn">Preview</button>
            </div>
          </div>
          <h3>Modern Minimal</h3>
          <p>Clean and professional design perfect for corporate roles</p>
        </div>
        <div className="template-card">
          <div className="template-image">
            <img src="/templates/template2.jpg" alt="Creative Pro Template" />
            <div className="template-overlay">
              <button className="preview-btn">Preview</button>
            </div>
          </div>
          <h3>Creative Pro</h3>
          <p>Bold and creative design for designers and artists</p>
        </div>
        <div className="template-card">
          <div className="template-image">
            <img src="/templates/template3.png" alt="Elegant Classic Template" />
            <div className="template-overlay">
              <button className="preview-btn">Preview</button>
            </div>
          </div>
          <h3>Elegant Classic</h3>
          <p>Timeless design suitable for any profession</p>
        </div>
        <div className="template-card">
          <div className="template-image">
            <img src="/templates/template4.jpg" alt="Tech Savvy Template" />
            <div className="template-overlay">
              <button className="preview-btn">Preview</button>
            </div>
          </div>
          <h3>Tech Savvy</h3>
          <p>Modern tech-focused design for developers and engineers</p>
        </div>
      </div>
      <div className="templates-cta">
        <button className="view-all-btn">View All Templates</button>
      </div>
    </section>
  );
}
