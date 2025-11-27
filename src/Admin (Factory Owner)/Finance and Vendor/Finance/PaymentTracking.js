import React, { useState } from "react";
import AddPaymentForm from "./FinanceForms/AddPaymentForm";

function PaymentTracking() {
  const [openingAddPaymentForm, setopeningAddPaymentForm] = useState(false);

  return (
    <div>
      <div className="flex bg-white p-4 border border-gray-300 items-end justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">
            Payment Management & Tracking
          </p>
          <p className="text-[#d42041]">
            Manage and track payments from one centralized system.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <input
            placeholder="Search Assigned Machines...."
            className="border border-gray-300 py-1.5 px-3 w-96"
          />
          <button
            onClick={() => {
              setopeningAddPaymentForm(true);
            }}
            className="bg-[#d42041] py-1.5 px-3 text-white font-semibold"
          >
            Add Payment
          </button>
        </div>
      </div>

      {openingAddPaymentForm && <AddPaymentForm setopeningAddPaymentForm = {setopeningAddPaymentForm}/>}
    </div>
  );
}

export default PaymentTracking;
