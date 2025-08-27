import "./css/ContactPage.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function ContactPage() {
  return (
    <div className="contact-container">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Fill out the form below or reach us directly.</p>
      </section>

      {/* Contact Form Section */}
      <section className="contact-content">
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p><strong>Email:</strong> support@myapp.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Web Street, Code City</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
