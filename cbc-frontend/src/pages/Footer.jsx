import './css/style.css';
export default function Footer() {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <span>·</span>
        <a href="#">Terms</a>
      </div>
    </footer>
  );
}
