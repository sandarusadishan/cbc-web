import { Link, Routes, Route } from "react-router-dom";
import { BsGraphUp, BsListCheck, BsBoxSeam, BsPeople , BsBoxArrowRight } from "react-icons/bs";
import AdminProductsPage from "./admin/adminProductsPage";

export default function AdminPanel() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-6">
        <h2 className="text-xl font-bold mb-10">තොගHub Admin</h2>
        <nav className="flex flex-col gap-4 text-lg">
          <Link to="/admin/dashboard" className="flex items-center gap-2 hover:bg-gray-700 rounded-md px-3 py-2">
            <BsGraphUp /> Dashboard
          </Link>
          <Link to="/admin/orders" className="flex items-center gap-2 hover:bg-gray-700 rounded-md px-3 py-2">
            <BsListCheck /> Orders
          </Link>
          <Link to="/admin/products" className="flex items-center gap-2 hover:bg-gray-700 rounded-md px-3 py-2">
            <BsBoxSeam /> Products
          </Link>
          <Link to="/admin/customers" className="flex items-center gap-2 hover:bg-gray-700 rounded-md px-3 py-2">
            <BsPeople  /> Customers
          </Link>
          <Link to="/" className="flex items-center gap-2 hover:bg-gray-700 rounded-md px-3 py-2">
            <BsBoxArrowRight /> Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/products" element={<AdminProductsPage />} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<h1>404 Not Found the admin page</h1>} />
        </Routes>
      </div>
    </div>
  );
}
