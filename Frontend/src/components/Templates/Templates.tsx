import './Templates.css';

export default function Templates() {
  return (
    <section className="templates-section">
      <h2 className="templates-heading">Choose Your Template</h2>
      <div className="templates-grid">
        <div className="template-card">
          <img src="/templates/template1.webp" alt="Template 1" />
          <h3>Modern Minimal</h3>
        </div>
        <div className="template-card">
          <img src="/templates/template2.jpg" alt="Template 2" />
          <h3>Creative Pro</h3>
        </div>
        <div className="template-card">
          <img src="/templates/template3.png" alt="Template 3" />
          <h3>Elegant Classic</h3>
        </div>
      </div>
    </section>
  );
}
