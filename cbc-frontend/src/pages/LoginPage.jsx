import './css/LoginPage.css'
import Header from './Header';
export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <Header />
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p className="subtitle">Please log in to your account</p>
        <form>
          <div className="input-group">
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="extra-links">
          <a href="#">Forgot password?</a>
          <span> · </span>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
}
