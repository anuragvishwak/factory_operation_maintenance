import React, { useState } from "react";


function SafetySubNavbar({ currentSection, setcurrentSection }) {
  return (
    <div  className="flex flex-col w-64 bg-[#d42041] h-[calc(100vh-56px)] p-4 text-white font-semibold">
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "daily_safety_checks" ? "bg-[#2f323a] text-white" : ""
        }`}
        onClick={() => {
          setcurrentSection("daily_safety_checks");
        }}
      >
        Safety Checks
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "reporting_incidents" ? "bg-[#2f323a] text-white" : ""
        }`}
        onClick={() => {
          setcurrentSection("reporting_incidents");
        }}
      >
        Incident Reports
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "providing_safety_training" ? "bg-[#2f323a] text-white" : ""
        }`}
        onClick={() => {
          setcurrentSection("providing_safety_training");
        }}
      >
        Safety Training
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "ensuring_compliance" ? "bg-[#2f323a] text-white" : ""
        }`}
        onClick={() => {
          setcurrentSection("ensuring_compliance");
        }}
      >
        Compliance
      </button>

      <button
        className={`text-start py-1 px-2 ${
          currentSection === "maintaining_autit_records" ? "bg-[#2f323a] text-white" : ""
        }`}
        onClick={() => {
          setcurrentSection("maintaining_autit_records");
        }}
      >
        Audit Logs
      </button>
    </div>
  );
}

export default SafetySubNavbar;
