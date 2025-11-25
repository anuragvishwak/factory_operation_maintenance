import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../../FirebaseConfig";

function AddSpartPartsInventoryForm({ setaddSparePartsForm }) {
  const [partName, setpartName] = useState("");
  const [partCode, setpartCode] = useState("");
  const [partCategory, setpartCategory] = useState("");
  const [currentQuantity, setcurrentQuantity] = useState("");
  const [minimumStockAlert, setminimumStockAlert] = useState("");
  const [vendor, setvendor] = useState("");
  const [lastRestockDate, setlastRestockDate] = useState("");

  function addSparePart() {
    const sparePartData = {
      partName: partName,
      partCode: partCode,
      partCategory: partCategory,
      currentQuantity: currentQuantity,
      minimumStockAlert: minimumStockAlert,
      vendor: vendor,
      lastRestockDate: lastRestockDate,
    };

    try {
      addDoc(
        collection(database, "spare_parts_inventory_database"),
        sparePartData
      );
      alert("Spare Part added successfully!!!");
      setaddSparePartsForm(false);
    } catch {
      console.log("Something went wrong.");
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">Add Spare Part</p>
          <button
            onClick={() => {
              setaddSparePartsForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Part Name</p>
            <input
              onChange={(event) => {
                setpartName(event.target.value);
              }}
              placeholder="Bolts"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Part Code</p>
            <input
              onChange={(event) => {
                setpartCode(event.target.value);
              }}
              placeholder="SP-678"
              className="border border-gray-300 p-1 w-full"
            />
          </div>
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Part Category</p>
            <select
              onChange={(event) => {
                setpartCategory(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Category</option>
              <option>Mechanical</option>
              <option>Electrical</option>
              <option>Pneumatic</option>
              <option>Consumable</option>
            </select>
          </div>
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Current Quantity
            </p>
            <input
              onChange={(event) => {
                setcurrentQuantity(event.target.value);
              }}
              placeholder="400 pcs"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Minimum Stock Alert
            </p>
            <input
              onChange={(event) => {
                setminimumStockAlert(event.target.value);
              }}
              placeholder="100 pcs"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Vendor</p>
            <input
              onChange={(event) => {
                setvendor(event.target.value);
              }}
              placeholder="Mahindra Mechanics"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Last Restock Date
            </p>
            <input
              onChange={(event) => {
                setlastRestockDate(event.target.value);
              }}
              type="date"
              className="border border-gray-300 p-1 w-full"
            />
          </div>
        </div>
        <div className="flex mt-4 justify-end">
          <button
            onClick={() => {
              addSparePart();
            }}
            className="bg-[#d42041] py-1 px-4 text-white font-semibold"
          >
            Add Spare Part
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSpartPartsInventoryForm;
