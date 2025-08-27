import "./css/AdminPanel.css";

export default function AdminPanel() {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-logo">MyAdmin</h2>
        <nav>
          <a href="#">📊 Dashboard</a>
          <a href="#">👤 Users</a>
          <a href="#">🛒 Products</a>
          <a href="#">⚙️ Settings</a>
          <a href=".">🚪 Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
          <div className="admin-user">
            <img src="/src/assets/favicon.ico.jpg" alt="user" />
            <span>Admin</span>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <section className="dashboard-widgets">
          <div className="widget">
            <h3>Total Users</h3>
            <p>1,245</p>
          </div>
          <div className="widget">
            <h3>Sales</h3>
            <p>$12,430</p>
          </div>
          <div className="widget">
            <h3>Orders</h3>
            <p>320</p>
          </div>
          <div className="widget">
            <h3>Revenue</h3>
            <p>$24,000</p>
          </div>
        </section>

        {/* Content Area */}
        <section className="dashboard-content">
          <h2>Recent Activity</h2>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Logged in</td>
                <td>2025-08-25</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Purchased product</td>
                <td>2025-08-24</td>
              </tr>
              <tr>
                <td>Michael Lee</td>
                <td>Updated profile</td>
                <td>2025-08-24</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
