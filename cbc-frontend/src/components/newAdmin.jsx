import { useState } from "react";

// Placeholder for a chart component, e.g., using Chart.js or Recharts
const SalesChart = () => (
  <div className="flex items-center justify-center h-full bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
    <p className="text-gray-400 dark:text-gray-500">Sales Chart Placeholder</p>
  </div>
);

// Example data for dashboard widgets and recent activity
const dashboardData = [
  { title: "Total Users", value: "1,245", trend: "+5%" },
  { title: "Revenue", value: "$24,000", trend: "+12%" },
  { title: "Orders", value: "320", trend: "+8%" },
  { title: "Products", value: "150", trend: "+3%" },
];

const recentActivityData = [
  { user: "John Doe", action: "Logged in", date: "2025-08-25", status: "Success" },
  { user: "Jane Smith", action: "Purchased product", date: "2025-08-24", status: "Success" },
  { user: "Michael Lee", action: "Updated profile", date: "2025-08-24", status: "Success" },
  { user: "Sarah Kim", action: "Failed login attempt", date: "2025-08-23", status: "Failed" },
];

// Content components for each route
const DashboardPage = () => (
  <>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      {dashboardData.map((item, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 duration-200">
          <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">{item.title}</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{item.value}</p>
          <span className="text-sm text-green-500 font-semibold mt-1">{item.trend} since last month</span>
        </div>
      ))}
    </section>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <section className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sales Overview</h2>
        <div className="h-64">
          <SalesChart />
        </div>
      </section>
      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300 rounded-tl-lg">User</th>
                <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">Action</th>
                <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">Date</th>
                <th className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300 rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivityData.map((activity, index) => (
                <tr key={index} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{activity.user}</td>
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{activity.action}</td>
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{activity.date}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${activity.status === "Success" ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200" : "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200"}`}>
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </>
);

const UsersPage = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 min-h-[50vh] flex items-center justify-center">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Users Management</h2>
  </div>
);

const ProductsPage = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 min-h-[50vh] flex items-center justify-center">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Products Management</h2>
  </div>
);

const SettingsPage = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 min-h-[50vh] flex items-center justify-center">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Settings</h2>
  </div>
);

// The main component that renders the layout and content
export default function AdminPanel() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />;
      case "users":
        return <UsersPage />;
      case "products":
        return <ProductsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case "dashboard":
        return "Dashboard";
      case "users":
        return "Users";
      case "products":
        return "Products";
      case "settings":
        return "Settings";
      default:
        return "Admin Panel";
    }
  };

  return (
    <div className={`flex min-h-screen font-sans ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} text-gray-900 dark:text-white transition-colors duration-300`}>
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg text-white flex flex-col p-6 transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">MyAdmin</h2>
        <nav className="flex flex-col gap-3 text-lg flex-grow">
          <button onClick={() => setCurrentPage("dashboard")} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2 text-gray-800 dark:text-gray-200 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg> Dashboard
          </button>
          <button onClick={() => setCurrentPage("users")} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2 text-gray-800 dark:text-gray-200 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg> Users
          </button>
          <button onClick={() => setCurrentPage("products")} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2 text-gray-800 dark:text-gray-200 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2m14 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2m14 0h-2.586a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 0012.707 9H11.293a1 1 0 00-.707.293L8.293 11.293a1 1 0 01-.707.293H5" />
            </svg> Products
          </button>
          <button onClick={() => setCurrentPage("settings")} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2 text-gray-800 dark:text-gray-200 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.525.322 1.01-.112 1.01-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg> Settings
          </button>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-3 mt-auto mb-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2 text-gray-800 dark:text-gray-200 transition-colors duration-200"
        >
          {isDarkMode ? <span>☀️</span> : <span>🌙</span>}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={() => alert("Logged out!")} className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3 py-2 text-gray-800 dark:text-gray-200 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg> Sign Out
        </button>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">{getPageTitle()}</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-gray-700 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600">
              <img
                src="https://via.placeholder.com/150"
                alt="user avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-gray-700 dark:text-gray-200 font-medium">Admin</span>
            </div>
          </div>
        </header>
        {renderPage()}
      </main>
    </div>
  );
}
