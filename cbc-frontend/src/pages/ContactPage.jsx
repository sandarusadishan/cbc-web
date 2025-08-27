import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-50 text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
          We’d love to hear from you. Fill out the form below or reach us directly.
        </p>
      </section>

      {/* Contact Form & Info Section */}
      <section className="flex flex-col md:flex-row justify-center gap-10 px-4 py-16 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a message</h2>
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              required 
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button 
              type="submit" 
              className="bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in touch</h2>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> support@myapp.com</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p className="text-gray-700"><strong>Address:</strong> 123 Web Street, Code City</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
