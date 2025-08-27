import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Welcome to <span className="text-blue-600">SYNOVAX</span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg md:text-xl">
            Build modern web apps with a clean and simple interface.
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            onClick={() => window.location.href="/login"}
          >
            🚀 Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-medium mb-2">⚡ Fast</h3>
            <p className="text-gray-700">Experience lightning-fast performance with optimized code.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-medium mb-2">🎨 Modern</h3>
            <p className="text-gray-700">Enjoy a sleek, minimal design that looks great everywhere.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-medium mb-2">🔒 Secure</h3>
            <p className="text-gray-700">Security comes first, keeping your data safe and private.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
