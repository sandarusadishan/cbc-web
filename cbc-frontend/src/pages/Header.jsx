import './css/style.css';
import logo from '../assets/favicon.ico.jpg'; // adjust path if needed

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-container">
        <h2 className="logo">
          <a href=".">
            <img src={logo} alt="App Logo" className="logo-img" />
          </a>
        </h2>
        <nav className="nav-links">
          <a href=".">Home</a>
          <a href="./about">About</a>
          <a href="./contact">Contact</a>
          <a href="./login">Login</a>
          <a href="./admin">Admin</a>
          <a href="./testing">Testing</a>
        </nav>
      </div>
    </header>
  );
}
