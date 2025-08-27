import "./css/HomePage.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span>SYNOVAX</span></h1>
          <p>Build modern web apps with a clean and simple interface.</p>
          <button className="cta-btn" onClick={() => window.location.href="/login"}>🚀 Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-grid">
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
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
