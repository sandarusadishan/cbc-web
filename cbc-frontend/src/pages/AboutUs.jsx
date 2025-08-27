import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-blue-600">SYNOVAX</span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          We’re passionate about building modern web solutions that empower people and businesses worldwide.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          At MyApp, our mission is to make technology accessible, fast, and secure. 
          We believe in simple, clean interfaces that help users focus on what matters most.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <img 
              src="/src/assets/team1.jpg" 
              alt="Team Member 1" 
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-medium">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <img 
              src="/src/assets/team2.jpg" 
              alt="Team Member 2" 
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-medium">Jane Smith</h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <img 
              src="/src/assets/team3.jpg" 
              alt="Team Member 3" 
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-medium">Mark Wilson</h3>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
