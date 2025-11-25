import React, { useState } from "react";


function SafetySubNavbar({ currentSection, setcurrentSection }) {
  return (
    <div className="flex text-[#2f323a] font-semibold">
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "daily_safety_checks" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("daily_safety_checks");
        }}
      >
        Safety Checks
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "reporting_incidents" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("reporting_incidents");
        }}
      >
        Incident Reports
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "providing_safety_training" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("providing_safety_training");
        }}
      >
        Safety Training
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "ensuring_compliance" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("ensuring_compliance");
        }}
      >
        Compliance
      </button>

      <button
        className={`text-start py-1 px-2 ${
          currentSection === "maintaining_autit_records" ? "text-[#d42041]" : ""
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
