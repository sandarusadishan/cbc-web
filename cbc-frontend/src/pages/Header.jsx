import logo from '../assets/favicon.ico.jpg'; // adjust path if needed

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="." className="flex items-center">
          <img src={logo} alt="App Logo" className="w-10 h-10 mr-2 object-cover rounded-full" />
          <span className="text-xl font-bold text-gray-800">MyApp</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="." className="hover:text-blue-600 transition-colors">Home</a>
          <a href="./about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="./contact" className="hover:text-blue-600 transition-colors">Contact</a>
          <a href="./login" className="hover:text-blue-600 transition-colors">Login</a>
          <a href="./admin" className="hover:text-blue-600 transition-colors">Admin</a>
          <a href="./testing" className="hover:text-blue-600 transition-colors">Testing</a>
        </nav>
      </div>
    </header>
  );
}
