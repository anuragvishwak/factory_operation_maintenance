import React, { useEffect, useState } from "react";
import AddInvoiceForm from "./FinanceForms/AddInvoiceForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../FirebaseConfig";
import { FaIndianRupeeSign } from "react-icons/fa6";

function InvoiceManagement() {
  const [openingInvoiceManagementForm, setopeningInvoiceManagementForm] =
    useState(false);
  const [gettingInvoices, setgettingInvoices] = useState([]);

  async function renderingInvoices() {
    const taskDetails = await getDocs(collection(database, "invoice_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingInvoices(multipleArray);
  }

  useEffect(() => {
    renderingInvoices();
  }, []);

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

      <div className="grid grid-cols-3 gap-4 mt-4">
        {gettingInvoices.map((invoice) => (
          <div className="border bg-white border-gray-300">
            <div className="bg-[#2f323a] p-4 text-white">
              <p className="text-[#d42041]">Invoice Number</p>
              <p className="font-bold text-white text-lg">
                {invoice.invoiceNumber}
              </p>
            </div>

            <div className="border-t-8 border-[#d42041] p-4">
              <div>
                <p className="text-sm text-[#2f323a]">Vendor</p>
                <p className="text-[#d42041] font-semibold">{invoice.vendor}</p>
              </div>
              <hr className="my-3 border-gray-300" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#2f323a]">Invoice Date</p>
                  <p className="text-[#d42041] font-semibold">
                    {invoice.invoiceDate}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#2f323a]">Due Date</p>
                  <p className="text-[#d42041] font-semibold">
                    {invoice.dueDate}
                  </p>
                </div>
              </div>
              <div className="border p-3 bg-gray-50 border-gray-300 mt-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#2f323a]">Invoice Amount</p>
                  <div className="flex items-center">
                    <FaIndianRupeeSign size={13} className="text-[#d42041]" />
                    <p className="text-[#d42041] font-semibold">
                      {invoice.invoiceAmount}/-
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#2f323a]">Tax Amount (GST)</p>
                  <div className="flex items-center">
                    <FaIndianRupeeSign size={13} className="text-[#d42041]" />
                    <p className="text-[#d42041] font-semibold">
                      {invoice.taxAmount}/-
                    </p>
                  </div>
                </div>
                <hr className="border-gray-300 my-2" />
                <div className="flex items-center justify-between">
                  <p className="text-[#d42041] font-bold">Total Amount</p>
                  <div className="flex items-center">
                    <FaIndianRupeeSign size={13} className="text-[#d42041]" />
                    <p className="text-[#d42041] font-bold">
                      {invoice.totalAmount}/-
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openingInvoiceManagementForm && (
        <AddInvoiceForm
          setopeningInvoiceManagementForm={setopeningInvoiceManagementForm}
        />
      )}
    </div>
  );
}

export default InvoiceManagement;
