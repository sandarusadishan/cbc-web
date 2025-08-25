import './homePage.css';
export default function HomePage() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">MyApp</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to MyApp</h1>
        <p>Build modern web apps with a clean and simple interface.</p>
        <button>Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>⚡ Fast</h3>
          <p>Experience lightning-fast performance with optimized code.</p>
        </div>
        <div className="feature-card">
          <h3>🎨 Modern</h3>
          <p>Enjoy a sleek, minimal design that looks great everywhere.</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure</h3>
          <p>Security comes first, keeping your data safe and private.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  );
}
