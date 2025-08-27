import './css/SignUpPage.css';
import Header from './Header';

export default function SignUpPage() {
  return (
    
    <div className="signup-wrapper">
      <Header />
      <div className="signup-card">
        <h1>Create Account</h1>
        <p className="subtitle">Join us and get started</p>
        <form>
          <div className="input-group">
            <input type="text" name="fullname" placeholder="Full Name" />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="extra-links">
          <span>Already have an account? </span>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}
