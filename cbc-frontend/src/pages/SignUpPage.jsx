import Header from './Header';

export default function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Create Account</h1>
          <p className="text-gray-600 mb-6">Join us and get started</p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600">
            <span>Already have an account? </span>
            <a href="/login" className="text-blue-600 hover:text-blue-700 transition-colors">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
