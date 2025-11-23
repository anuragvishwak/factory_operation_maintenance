import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

function MaintenanceEngineerNavbar() {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <div className="bg-[#2f323a] flex items-center justify-between p-3 text-white">
      <div className="flex items-center text-[16px] font-semibold space-x-4">
        <button
          className={`${
            location.pathname === "/MaintenanceEngineerDashboard"
              ? "text-[#d42041]"
              : ""
          }`}
          onClick={() => {
            navigation("/MaintenanceEngineerDashboard");
          }}
        >
          Home
        </button>
        <button>Machine Overview</button>
        <button className="text-left ">Active Jobs</button>
        <button>Breakdown</button>
        <button>Preventive Maintenance Schedule</button>
        <button>Work Orders</button>
        <button>Spare Parts Requests</button>
        <button>Health Logs</button>
        <button>History</button>
        <button>Checklist</button>
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

export default MaintenanceEngineerNavbar;
