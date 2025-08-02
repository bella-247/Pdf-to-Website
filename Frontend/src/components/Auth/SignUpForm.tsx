import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email.';
    if (!form.password) newErrors.password = 'Password is required.';
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    if (!form.confirmPassword) newErrors.confirmPassword = 'Please confirm your password.';
    else if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit logic here
      console.log('Form submitted:', form);
    }
  };

  return (
    <div className="signup-container">
      {/* Left Column - Branding */}
      <div className="signup-left">
        <div className="signup-content">
          <div className="signup-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="white" opacity="0.1"/>
              <rect x="20" y="25" width="40" height="30" rx="6" fill="white" opacity="0.9"/>
              <rect x="28" y="32" width="24" height="4" rx="2" fill="#0070f3"/>
              <rect x="28" y="40" width="16" height="4" rx="2" fill="#0070f3"/>
            </svg>
          </div>
          <h1 className="signup-tagline">Turn Your Resume into a Website in Seconds</h1>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="signup-right">
        <div className="signup-form-container">
          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <h2 className="signup-title">Create your Portafy account</h2>
            
            {/* Form Fields */}
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                autoComplete="name"
                value={form.fullName}
                onChange={handleChange}
                aria-invalid={!!errors.fullName}
                aria-describedby="fullName-error"
                required
              />
              {errors.fullName && <span className="form-error" id="fullName-error">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                required
              />
              {errors.email && <span className="form-error" id="email-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
                aria-invalid={!!errors.password}
                aria-describedby="password-error"
                required
              />
              {errors.password && <span className="form-error" id="password-error">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="new-password"
                value={form.confirmPassword}
                onChange={handleChange}
                aria-invalid={!!errors.confirmPassword}
                aria-describedby="confirmPassword-error"
                required
              />
              {errors.confirmPassword && <span className="form-error" id="confirmPassword-error">{errors.confirmPassword}</span>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="signup-btn">
              Create My Website
            </button>

            {/* Divider */}
            <div className="signup-divider">
              <span className="divider-line"></span>
              <span className="divider-text">or sign in with</span>
              <span className="divider-line"></span>
            </div>

            {/* Social Buttons */}
            <div className="social-buttons">
              <button
                type="button"
                className="social-btn google-btn"
                onClick={() => console.log('Google signup')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.48a4.68 4.68 0 01-2.03 3.07v2.55h3.28c1.92-1.77 3.03-4.38 3.03-7.41z" fill="#4285F4"/>
                    <path d="M10 20c2.7 0 4.97-.89 6.63-2.41l-3.28-2.55c-.91.61-2.07.97-3.35.97-2.57 0-4.75-1.74-5.53-4.07H1.08v2.56A10 10 0 0010 20z" fill="#34A853"/>
                    <path d="M4.47 11.94A5.99 5.99 0 014.09 10c0-.67.12-1.32.33-1.94V5.5H1.08A10 10 0 000 10c0 1.64.39 3.19 1.08 4.5l3.39-2.56z" fill="#FBBC05"/>
                    <path d="M10 4.01c1.47 0 2.78.51 3.81 1.5l2.85-2.85C14.97 1.13 12.7.01 10 .01A10 10 0 001.08 5.5l3.39 2.56C5.25 5.75 7.43 4.01 10 4.01z" fill="#EA4335"/>
                  </g>
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                className="social-btn github-btn"
                onClick={() => console.log('GitHub signup')}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0.25C4.47 0.25 0 4.72 0 10.25c0 4.41 2.87 8.15 6.84 9.48.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 5.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0020 10.25C20 4.72 15.52 0.25 10 0.25z" fill="currentColor"/>
                </svg>
                Continue with GitHub
              </button>
            </div>

            {/* Footer Links */}
            <p className="signup-disclaimer">
              By signing up, you agree to our <a href="#" tabIndex={0}>Terms of Service</a> and <a href="#" tabIndex={0}>Privacy Policy</a>.
            </p>
            <p className="signup-switch">
              Already have an account? <a href="/signin">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
