import React, { useState } from "react";
import AddInvoiceForm from "./FinanceForms/AddInvoiceForm";

function InvoiceManagement() {
  const [openingInvoiceManagementForm, setopeningInvoiceManagementForm] =
    useState(false);

  return (
    <div>
      <div className="bg-white border p-4 border-gray-300 flex items-center justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">Invoice Management</p>
          <p className="text-[#d42041]">
            Add and manage all Invoices from one centralized system.
          </p>
        </div>
        <button
          onClick={() => {
            setopeningInvoiceManagementForm(true);
          }}
          className="bg-[#d42041] py-1 px-4 text-white font-semibold"
        >
          Add Invoice
        </button>
      </div>

      {openingInvoiceManagementForm && <AddInvoiceForm setopeningInvoiceManagementForm = {setopeningInvoiceManagementForm}/>}
    </div>
  );
}

export default InvoiceManagement;
