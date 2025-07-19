import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Users Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"Portafy helped me land interviews with a beautiful portfolio I created in minutes."</p>
          <h4>- Eden M.</h4>
        </div>
        <div className="testimonial-card">
          <p>"I never knew turning a PDF resume into a site could be this easy and professional."</p>
          <h4>- Daniel T.</h4>
        </div>
        <div className="testimonial-card">
          <p>"The templates are modern and the experience is smooth. Highly recommended!"</p>
          <h4>- Liyat A.</h4>
        </div>
      </div>
    </section>
  );
}
