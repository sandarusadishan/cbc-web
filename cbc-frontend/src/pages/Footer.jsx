export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="flex items-center gap-2 mt-2 md:mt-0 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
