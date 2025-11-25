import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import Safety from "./Safety";
import Quality from "./Quality";

function AdminSafetyQuality() {
  const [currentSection, setcurrentSection] = useState("safety");

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />

      <div>
        <div className="flex bg-white p-4 m-4 border border-gray-300 items-end justify-between">
          <div>
            <p className="text-[#2f323a] text-xl font-bold">Safety & Quality</p>
            <p className="text-[#d42041]text-[#d42041]">
              Add and manage Safety & Quality from one centralized system.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <input
              placeholder="Search Inventory...."
              className="border border-gray-300 py-1.5 px-3 w-96"
            />
            <div className="font-semibold  bg-[#2f323a] p-1">
              <button
                onClick={() => {
                  setcurrentSection("safety");
                }}
                className={`py-0.5 px-3 ${
                  currentSection === "safety"
                    ? "bg-[#d42041] text-white"
                    : "text-[#d42041]"
                }`}
              >
                Safety
              </button>
              <button
                onClick={() => {
                  setcurrentSection("quality");
                }}
                className={`py-0.5 px-3 ${
                  currentSection === "quality"
                    ? "bg-[#d42041] text-white"
                    : "text-[#d42041]"
                }`}
              >
                Quality
              </button>
            </div>
          </div>
        </div>

        <div className="m-4">
          {currentSection === "safety" ? <Safety /> : <Quality />}
        </div>
      </div>
    </div>
  );
}

export default AdminSafetyQuality;
