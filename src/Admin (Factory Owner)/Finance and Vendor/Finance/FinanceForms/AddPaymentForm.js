import React from "react";

function AddPaymentForm({ setopeningAddPaymentForm }) {
  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">Add Expense</p>
          <button
            onClick={() => {
              setopeningAddPaymentForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div>
            
        </div>
      </div>
    </div>
  );
}

export default AddPaymentForm;
