import React from 'react'

function VendorSubNavbar({currentSection, setcurrentSection}) {
  return (
     <div className="flex flex-col w-64 bg-[#d42041] h-[calc(100vh-56px)] p-4 text-white font-semibold">
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "vendor_registration"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("vendor_registration");
        }}
      >
        Vendor Registration
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "vendor_invoice"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("vendor_invoice");
        }}
      >
        Vendor Invoice
      </button>
    </div>
  )
}

export default VendorSubNavbar