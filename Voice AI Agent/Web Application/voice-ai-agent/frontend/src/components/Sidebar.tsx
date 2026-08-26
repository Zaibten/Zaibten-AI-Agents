import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Calls", path: "/calls" },
    { name: "Appointments", path: "/appointments" },
    { name: "Leads", path: "/leads" },
    { name: "Phone Numbers", path: "/phone-numbers" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Voice AI Agent</h1>
        <p className="text-sm text-gray-400 mt-1">{user?.businessName || user?.name}</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2.5 rounded-lg transition ${
              location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <button
        onClick={logout}
        className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;