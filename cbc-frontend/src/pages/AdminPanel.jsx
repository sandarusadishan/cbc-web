export default function AdminPanel() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-10">MyAdmin</h2>
        <nav className="flex flex-col gap-4 text-lg">
          <a href="#" className="hover:bg-gray-700 rounded-md px-3 py-2">📊 Dashboard</a>
          <a href="#" className="hover:bg-gray-700 rounded-md px-3 py-2">👤 Users</a>
          <a href="#" className="hover:bg-gray-700 rounded-md px-3 py-2">🛒 Products</a>
          <a href="#" className="hover:bg-gray-700 rounded-md px-3 py-2">⚙️ Settings</a>
          <a href="." className="hover:bg-gray-700 rounded-md px-3 py-2">🚪 Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center gap-3 bg-gray-200 px-4 py-2 rounded-full">
            <img 
              src="/src/assets/favicon.ico.jpg" 
              alt="user" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-700 font-medium">Admin</span>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-medium text-gray-600 mb-2">Total Users</h3>
            <p className="text-2xl font-bold text-gray-800">1,245</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-medium text-gray-600 mb-2">Sales</h3>
            <p className="text-2xl font-bold text-gray-800">$12,430</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-medium text-gray-600 mb-2">Orders</h3>
            <p className="text-2xl font-bold text-gray-800">320</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h3 className="text-lg font-medium text-gray-600 mb-2">Revenue</h3>
            <p className="text-2xl font-bold text-gray-800">$24,000</p>
          </div>
        </section>

        {/* Content Area */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 font-medium text-gray-700">User</th>
                  <th className="px-4 py-2 font-medium text-gray-700">Action</th>
                  <th className="px-4 py-2 font-medium text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">Logged in</td>
                  <td className="px-4 py-2">2025-08-25</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">Jane Smith</td>
                  <td className="px-4 py-2">Purchased product</td>
                  <td className="px-4 py-2">2025-08-24</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">Michael Lee</td>
                  <td className="px-4 py-2">Updated profile</td>
                  <td className="px-4 py-2">2025-08-24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
