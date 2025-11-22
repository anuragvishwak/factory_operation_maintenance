import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <div className="bg-[#2f323a] flex items-center justify-between p-3 text-white">
      <div className="flex items-center text-[16px] font-semibold space-x-4">
        <button
          className={`${
            location.pathname === "/AdminDashboard" ? "text-[#d42041]" : ""
          }`}
          onClick={() => {
            navigation("/AdminDashboard");
          }}
        >
          Home
        </button>
        <button
          className={`${
            location.pathname === "/AdminOperations" ? "text-[#d42041]" : ""
          }`}
          onClick={() => {
            navigation("/AdminOperations");
          }}
        >
          Operations
        </button>
        <button>Maintenance</button>
        <button
          className={`${
            location.pathname === "/UserManagement" ? "text-[#d42041]" : ""
          }`}
          onClick={() => {
            navigation("/UserManagement");
          }}
        >
          User Management
        </button>
        <button>Inventory Management</button>
        <button>Safety & Quality</button>
        <button>Inventory</button>
        <button>Finance & Vendors</button>
        <button>Reports</button>
        <button>Audit Logs</button>
      </div>

      <div className="flex items-center space-x-2">
        <button className="bg-[#d42041] font-semibold py-1 px-3  text-white">
          Messenger
        </button>
        <button>
          <BiLogOut size={25} />
        </button>
      </div>
    </div>
  );
}

export default AdminNavbar;
