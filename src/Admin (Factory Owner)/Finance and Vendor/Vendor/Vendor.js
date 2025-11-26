import React, { useState } from "react";
import VendorSubNavbar from "./VendorSubNavbar";
import VendorInvoice from "./VendorInvoice";
import VendorRegistration from "./VendorRegistration";

function Vendor() {
  const [currentSection, setcurrentSection] = useState("vendor_registration");

  return (
    <div className="flex">
      <VendorSubNavbar
        currentSection={currentSection}
        setcurrentSection={setcurrentSection}
      />

      <div className="m-4">
        {currentSection === "vendor_registration" ? (
          <VendorRegistration />
        ) : (
          <VendorInvoice />
        )}
      </div>
    </div>
  );
}

export default Vendor;
