import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../../../../FirebaseConfig";

function AddInvoiceForm({ setopeningInvoiceManagementForm }) {
  const [gettingVendor, setgettingVendor] = useState([]);
  const [vendor, setvendor] = useState("");
  const [invoiceNumber, setinvoiceNumber] = useState("");
  const [invoiceDate, setinvoiceDate] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [invoiceAmount, setinvoiceAmount] = useState("");
  const [taxAmount, settaxAmount] = useState("");
  const [totalAmount, settotalAmount] = useState("");

  async function renderingVendors() {
    const taskDetails = await getDocs(
      collection(database, "vendor_management_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingVendor(multipleArray);
  }

  function addInvoice() {
    const invoiceData = {
      vendor: vendor,
      invoiceNumber: invoiceNumber,
      invoiceDate: invoiceDate,
      dueDate: dueDate,
      invoiceAmount: invoiceAmount,
      taxAmount: taxAmount,
      totalAmount: totalAmount,
    };

    try {
      addDoc(collection(database, "invoice_database"), invoiceData);
      alert("Invoice added successfully!!!");
      setopeningInvoiceManagementForm(false);
      //   renderingMachines();
    } catch {
      console.log("Something went wrong.");
    }
  }

  useEffect(() => {
    renderingVendors();
  }, []);


  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">Add Invoice</p>
          <button
            onClick={() => {
              setopeningInvoiceManagementForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Vendor</p>
            <select
              onChange={(event) => {
                setvendor(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Vendor</option>
              {gettingVendor.map((vendor) => (
                <option value={vendor.vendorName}>{vendor.vendorName}</option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">invoice Number</p>
            <input
              onChange={(event) => {
                setinvoiceNumber(event.target.value);
              }}
              placeholder="MAC-456"
              className="border border-gray-300 p-1 w-full"
            />
          </div>
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Invoice Date</p>
            <input
              onChange={(event) => {
                setinvoiceDate(event.target.value);
              }}
              type="date"
              className="border border-gray-300 p-1 w-full"
            />
          </div>
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Due Date</p>
            <input
              onChange={(event) => {
                setdueDate(event.target.value);
              }}
              type="date"
              className="border border-gray-300 p-1 w-full"
            />
          </div>{" "}
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Invoice Amount</p>
            <input
              onChange={(event) => {
                setinvoiceAmount(event.target.value);
              }}
              placeholder="MAC-456"
              className="border border-gray-300 p-1 w-full"
            />
          </div>
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Tax Amount</p>
            <input
              onChange={(event) => {
                settaxAmount(event.target.value);
              }}
              placeholder="$4000/-"
              className="border border-gray-300 p-1 w-full"
            />
          </div>{" "}
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Total Amount</p>
            <input
              onChange={(event) => {
                settotalAmount(event.target.value);
              }}
              placeholder="$8000/-"
              className="border border-gray-300 p-1 w-full"
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              addInvoice();
            }}
            className="bg-[#d42041] mt-5 py-1 px-4 text-white font-semibold"
          >
            Add Invoice
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddInvoiceForm;
