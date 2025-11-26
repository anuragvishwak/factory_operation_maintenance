import React from "react";

function FinanceSubNavbar({ currentSection, setcurrentSection }) {
  return (
    <div className="flex flex-col w-64 bg-[#d42041] h-[calc(100vh-56px)] p-4 text-white font-semibold">
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "expense_management"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("expense_management");
        }}
      >
        Expense Management
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "invoice_management"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("invoice_management");
        }}
      >
        Invoice Management
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "payment_tracking"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("payment_tracking");
        }}
      >
        Payment Tracking
      </button>
      <button
        className={`text-start py-1 px-2 ${
          currentSection === "finance_reports"
            ? "bg-[#2f323a] text-white"
            : ""
        }`}
        onClick={() => {
          setcurrentSection("finance_reports");
        }}
      >
        Financial Reports
      </button>
    </div>
  );
}

export default FinanceSubNavbar;
