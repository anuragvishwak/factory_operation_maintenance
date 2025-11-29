import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function AdminNavbar({
  currentSection,
  setcurrentSection,
  setfinanceVendorToggleSection,
  financeVendorToggleSection,
}) {
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
        <button
          className={`${
            location.pathname === "/AdminMaintenance" ? "text-[#d42041]" : ""
          }`}
          onClick={() => {
            navigation("/AdminMaintenance");
          }}
        >
          Maintenance
        </button>
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
        <button
          className={`${
            location.pathname === "/AdminInventoryManagement"
              ? "text-[#d42041]"
              : ""
          }`}
          onClick={() => {
            navigation("/AdminInventoryManagement");
          }}
        >
          Inventory Management
        </button>
        <button
          className={`${
            location.pathname === "/AdminSafetyQuality" ? "text-[#d42041]" : ""
          }`}
          onClick={() => {
            navigation("/AdminSafetyQuality");
          }}
        >
          Safety & Quality
        </button>
        <button
          className={`${
            location.pathname === "/FinanceVendor" ? "text-[#d42041]" : ""
          }`}
          onClick={() => {
            navigation("/FinanceVendor");
          }}
        >
          Finance & Vendors
        </button>
        <button>Reports</button>
        <button>Audit Logs</button>
      </div>

      <div className="flex items-center space-x-2">
        {location.pathname === "/AdminSafetyQuality" ? (
          <div className="flex items-center space-x-4">
            <div className="font-semibold text-sm bg-[#d42041] p-1 rounded">
              <button
                onClick={() => {
                  setcurrentSection("safety");
                }}
                className={`py-0.5 px-3 ${
                  currentSection === "finance"
                   ? "bg-[#2f323a] text-white"
                    : "text-white"
                }`}
              >
                Safety
              </button>
              <button
                onClick={() => {
                  setcurrentSection("quality");
                }}
                className={`py-0.5 px-3 ${
                  currentSection === "vendor"
                    ? "bg-[#2f323a] text-white"
                    : "text-white"
                }`}
              >
                Quality
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {location.pathname === "/FinanceVendor" && (
          <div className="flex items-center space-x-4">
            <div className="font-semibold text-sm bg-[#d42041] p-1 rounded">
              <button
                onClick={() => setfinanceVendorToggleSection("finance")}
                className={`py-0.5 px-3 ${
                  financeVendorToggleSection === "finance"
                    ? "bg-[#2f323a] text-white"
                    : "text-white"
                }`}
              >
                Finance
              </button>

              <button
                onClick={() => setfinanceVendorToggleSection("vendor")}
                className={`py-0.5 px-3 ${
                  financeVendorToggleSection === "vendor"
                    ? "bg-[#2f323a] text-white"
                    : "text-white"
                }`}
              >
                Vendors
              </button>
            </div>
          </div>
        )}

        <button className="bg-[#d42041] font-semibold py-1 px-3  text-white">
          Messenger
        </button>
        <button
          onClick={() => {
            navigation("/");
            localStorage.clear();
          }}
        >
          <BiLogOut size={25} />
        </button>
      </div>
    </div>
  );
}

export default AdminNavbar;
