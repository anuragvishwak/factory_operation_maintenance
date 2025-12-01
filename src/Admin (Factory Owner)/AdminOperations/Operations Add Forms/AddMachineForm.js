import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../../FirebaseConfig";

function AddMachineForm({ setopeningAddMachineForm, renderingMachines }) {
  const [machineName, setmachineName] = useState("");
  const [machineCode, setmachineCode] = useState("");
  const [machineType, setmachineType] = useState("");
  const [model, setmodel] = useState("");
  const [serialNumber, setserialNumber] = useState("");
  const [purchasedDate, setpurchasedDate] = useState("");
  const [installedDate, setinstalledDate] = useState("");
  const [vendorName, setvendorName] = useState("");

  function createMachine() {
    const machineData = {
      machineName: machineName,
      machineCode: machineCode,
      machineType: machineType,
      model: model,
      serialNumber: serialNumber,
      purchasedDate: purchasedDate,
      installedDate: installedDate,
      vendorName: vendorName,
    };

    try {
      addDoc(collection(database, "machine_database"), machineData);
      alert("Machine added successfully!!!");
      setopeningAddMachineForm(false);
      renderingMachines();
    } catch {
      console.log("Something went wrong.");
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start justify-between">
          <p className="text-[#d42041] text-2xl font-bold">Add Machine</p>
          <button
            onClick={() => {
              setopeningAddMachineForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>
        <hr className="border-gray-300 my-2"/>

        <div>
          <div>
            <p className=" text-[#d42041] text-lg font-semibold">
              Basic Information
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Machine Name
                </p>
                <input
                  onChange={(event) => {
                    setmachineName(event.target.value);
                  }}
                  placeholder="Press Machine"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Machine Code / Unique ID
                </p>
                <input
                  onChange={(event) => {
                    setmachineCode(event.target.value);
                  }}
                  placeholder="MAC-456"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Machine Type / Category
                </p>

                <select
                  onChange={(event) => {
                    setmachineType(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option value="">Select Machine Category</option>
                  <option value="production">Production Machine</option>
                  <option value="utility">Utility Machine</option>
                  <option value="quality">Quality Inspection Machine</option>
                  <option value="packaging">Packaging Machine</option>
                  <option value="material_handling">
                    Material Handling Machine
                  </option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Model</p>
                <input
                  onChange={(event) => {
                    setmodel(event.target.value);
                  }}
                  placeholder="OPTIMAL 8550 ND 01"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Serial Number
                </p>
                <input
                  onChange={(event) => {
                    setserialNumber(event.target.value);
                  }}
                  placeholder="MACH-5678"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          </div>

          <div className="my-4">
            <p className=" text-[#d42041] text-lg font-semibold">
              Purchase & Vendor
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Purchase Date
                </p>
                <input
                  onChange={(event) => {
                    setpurchasedDate(event.target.value);
                  }}
                  type="date"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Installed Date
                </p>
                <input
                  onChange={(event) => {
                    setinstalledDate(event.target.value);
                  }}
                  type="date"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Vendor / Supplier Name
                </p>
                <input
                  onChange={(event) => {
                    setvendorName(event.target.value);
                  }}
                  placeholder="Nikhil Kamath"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              createMachine();
            }}
            className="bg-[#d42041] mt-5 py-1 px-4 text-white font-semibold"
          >
            Add Machine
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMachineForm;
