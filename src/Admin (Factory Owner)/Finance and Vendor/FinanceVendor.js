import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import Finance from "./Finance/Finance";
import Vendor from "./Vendor/Vendor";

function FinanceVendor() {
  const [financeVendorToggleSection, setfinanceVendorToggleSection] =
    useState("finance");

  return (
    <div>
      <AdminNavbar
        setfinanceVendorToggleSection={setfinanceVendorToggleSection}
        financeVendorToggleSection={financeVendorToggleSection}
      />

       <div>
        <div className="">
          {financeVendorToggleSection === "finance" ? <Finance /> : <Vendor />}
        </div>
      </div>
    </div>
  );
}

export default FinanceVendor;
