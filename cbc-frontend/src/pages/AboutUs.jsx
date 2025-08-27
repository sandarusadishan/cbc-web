import "./css/AboutUs.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function AboutUs() {
  return (
    <div className="about-container">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About <span>SYNOVAX</span></h1>
        <p>We’re passionate about building modern web solutions that empower people and businesses worldwide.</p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At MyApp, our mission is to make technology accessible, fast, and secure. 
          We believe in simple, clean interfaces that help users focus on what matters most.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/src/assets/team1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img src="/src/assets/team2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-card">
            <img src="/src/assets/team3.jpg" alt="Team Member 3" />
            <h3>Mark Wilson</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
