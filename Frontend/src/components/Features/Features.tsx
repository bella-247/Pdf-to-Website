import './Features.css';

export default function Features() {
  return (
    <section className="features-section">
      <h2 className="features-heading">Why Portafy?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <img src="/icons/lightning.svg" alt="Fast" />
          <h3>Instant Setup</h3>
          <p>Turn your resume into a portfolio site in seconds.</p>
        </div>
        <div className="feature-card">
          <img src="/icons/palette.svg" alt="Design" />
          <h3>Beautiful Designs</h3>
          <p>Choose from modern, responsive portfolio templates.</p>
        </div>
        <div className="feature-card">
          <img src="/icons/edit.png" alt="Edit" />
          <h3>Fully Editable</h3>
          <p>Edit texts, sections, and links visually and easily.</p>
        </div>
      </div>
    </section>
  );
}
