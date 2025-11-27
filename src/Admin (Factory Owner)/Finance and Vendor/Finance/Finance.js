import React, { useState } from "react";
import FinanceSubNavbar from "./FinanceSubNavbar";
import ExpenseManagement from "./ExpenseManagement";
import InvoiceManagement from "./InvoiceManagement";
import PaymentTracking from "./PaymentTracking";
import FinanceReports from "./FinanceReports";

function Finance() {
  const [currentSection, setcurrentSection] = useState("expense_management");
  return (
    <div className="flex">
      <FinanceSubNavbar
        currentSection={currentSection}
        setcurrentSection={setcurrentSection}
      />
      <div className="w-full m-4">
        {currentSection === "expense_management" ? (
          <ExpenseManagement />
        ) : currentSection === "invoice_management" ? (
          <InvoiceManagement />
        ) : currentSection === "payment_tracking" ? (
          <PaymentTracking />
        )  : (
          <FinanceReports />
        )}
      </div>
    </div>
  );
}

export default Finance;
