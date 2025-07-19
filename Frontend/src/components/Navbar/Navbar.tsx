// src/components/Navbar/Navbar.tsx
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Portafy</div>
      <ul className="navbar-links">
        <li><a href="#">Features</a></li>
        <li><a href="#">Templates</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
        <li><button className="login-button">Login</button></li>
      </ul>
    </nav>
  );
}
