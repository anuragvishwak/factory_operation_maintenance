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
        <button
          className={`${
            location.pathname === "/MachineOverview" ? "text-[#d42041]" : ""
          }`}
          onClick={() => {
            navigation("/MachineOverview");
          }}
        >
          Machine Overview
        </button>
        <button
          className={`${
            location.pathname === "/ActiveJobs" ? "text-[#d42041]" : ""
          }`}
          onClick={() => {
            navigation("/ActiveJobs");
          }}
        >
          Active Jobs
        </button>
        <button
          className={`${
            location.pathname === "/MaintenanceBreakdown"
              ? "text-[#d42041]"
              : ""
          }`}
          onClick={() => {
            navigation("/MaintenanceBreakdown");
          }}
        >
          Breakdown
        </button>
        <button
          className={`${
            location.pathname === "/PreventiveMaintenanceSchedule"
              ? "text-[#d42041]"
              : ""
          }`}
          onClick={() => {
            navigation("/PreventiveMaintenanceSchedule");
          }}
        >
          Preventive Maintenance Schedule
        </button>
        <button>Work Orders</button>
        <button
          className={`${
            location.pathname === "/MaintenanceSparePartsRequest"
              ? "text-[#d42041]"
              : ""
          }`}
          onClick={() => {
            navigation("/MaintenanceSparePartsRequest");
          }}
        >
          Spare Parts Requests
        </button>
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
