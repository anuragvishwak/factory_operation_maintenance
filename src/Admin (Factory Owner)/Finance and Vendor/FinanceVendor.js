import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import Finance from "./Finance/Finance";
import Vendor from "./Vendor/Vendor";

function FinanceVendor() {
  const [financeVendorToggleSection, setfinanceVendorToggleSection] =
    useState("finance");

  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      <AdminNavbar
        setfinanceVendorToggleSection={setfinanceVendorToggleSection}
        financeVendorToggleSection={financeVendorToggleSection}
      />

      <div className="w-full">
        <div>
          {financeVendorToggleSection === "finance" ? <Finance /> : <Vendor />}
        </div>
      </div>
    </div>
  );
}

export default FinanceVendor;
