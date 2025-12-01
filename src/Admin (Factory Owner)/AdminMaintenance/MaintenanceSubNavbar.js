import React from "react";

function MaintenanceSubNavbar({ currentSection, setcurrentSection }) {
  return (
    <div className="flex flex-col w-64 bg-[#d42041] h-[calc(100vh-56px)] p-4 text-white font-semibold">
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "preventive_maintenance_planning"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("preventive_maintenance_planning");
        }}
      >
        Preventive Maintenance Planning
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "breakdown_management"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("breakdown_management");
        }}
      >
        Breakdown Management
      </button>

      <button
        className={`text-start py-1 px-2 ${
          currentSection === "work_orders"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("work_orders");
        }}
      >
        Work Orders
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "spare_parts_invetory"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("spare_parts_invetory");
        }}
      >
        Spare Parts Inventory
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "maintenance_reports"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("maintenance_reports");
        }}
      >
        Maintenance Reports
      </button>
    </div>
  );
}

export default MaintenanceSubNavbar;
