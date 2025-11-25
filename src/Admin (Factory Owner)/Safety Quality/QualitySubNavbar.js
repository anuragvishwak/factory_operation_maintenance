import React, { useState } from "react";
function QualitySubNavbar({ currentSection, setcurrentSection }) {
  return (
    <div className="flex text-[#2f323a] font-semibold">
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "raw_material_quality" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("raw_material_quality");
        }}
      >
        Raw Material Quality
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "incident_reports" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("incident_reports");
        }}
      >
        Incident Reports
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "in_process_quantity" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("in_process_quantity");
        }}
      >
        In-Process Quality
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "finished_goods_quality" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("finished_goods_quality");
        }}
      >
        Finished Goods Quality
      </button>

      <button
        className={`text-start py-1 px-2 ${
          currentSection === "machine_calibration" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("machine_calibration");
        }}
      >
        Machine Calibration
      </button>

      <button
        className={`text-start py-1 px-2 ${
          currentSection === "ncr_reports" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("ncr_reports");
        }}
      >
        NCR Reports
      </button>

      <button
        className={`text-start py-1 px-2 ${
          currentSection === "quaity_reports_analytics" ? "text-[#d42041]" : ""
        }`}
        onClick={() => {
          setcurrentSection("quaity_reports_analytics");
        }}
      >
        Quality Reports & Analytics
      </button>
    </div>
  );
}

export default QualitySubNavbar;
