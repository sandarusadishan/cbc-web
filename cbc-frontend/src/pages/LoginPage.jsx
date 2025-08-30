import Header from './Header';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mb-6">Please log in to your account</p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600 flex justify-center gap-2">
            <a href="#" className="hover:text-blue-600 transition-colors">Forgot password?</a>
            <span>·</span>
            <a href="/signup" className="hover:text-blue-600 transition-colors">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
