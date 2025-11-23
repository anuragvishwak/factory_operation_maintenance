import React, { useState } from "react";

function OperationsSubNavbar({ currentSection, setcurrentSection }) {
  return (
    <div className="flex flex-col w-64 bg-[#d42041] h-[calc(100vh-56px)] p-4 text-white font-semibold">
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "machine_management"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("machine_management");
        }}
      >
        Machine Management
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "production_lines" ? "bg-[#2f323a] text-white" : ""
        }`}
        onClick={() => {
          setcurrentSection("production_lines");
        }}
      >
        Production Lines
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "machine_assignment"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("machine_assignment");
        }}
      >
        Machine Assignment
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "daily_production_logs"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("daily_production_logs");
        }}
      >
        Daily Production Logs
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "shift_logs" ? "bg-[#2f323a] text-white" : ""
        }`}
        onClick={() => {
          setcurrentSection("shift_logs");
        }}
      >
        Shift Logs
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "material_consumption"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("material_consumption");
        }}
      >
        Material Consumption
      </button>
      <button
        className={`text-start  py-1 px-2 ${
          currentSection === "production_reports"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("production_reports");
        }}
      >
        Production Reports
      </button>
      <button
        className={`text-start  py-1 px-2 ${
          currentSection === "downtime_reasons"
            ? "bg-[#2f323a] rounded text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("downtime_reasons");
        }}
      >
        Downtime Reasons
      </button>
    </div>
  );
}

export default OperationsSubNavbar;
