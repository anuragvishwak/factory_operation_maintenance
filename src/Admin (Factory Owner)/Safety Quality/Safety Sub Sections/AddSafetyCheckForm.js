import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../../FirebaseConfig";

function AddSafetyCheckForm({ setopeningSafetyCheckForm }) {
  const [safetyCheckTitle, setsafetyCheckTitle] = useState("");
  const [safetyCategory, setsafetyCategory] = useState("");
  const [department, setdepartment] = useState("");
  const [applicableMachineArea, setapplicableMachineArea] = useState("");
  const [frequency, setfrequency] = useState("");
  const [checkTitle, setcheckTitle] = useState("");
  const [checkType, setcheckType] = useState("");
  const [severityLevel, setseverityLevet] = useState("");
  const [descriptionInstruction, setdescriptionInstruction] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [priority, setpriority] = useState("");
  const [instructionForInspector, setinstructionForInspector] = useState("");

  function addSafetyCheck() {
    const safetyCheckData = {
      safetyCheckTitle: safetyCheckTitle,
      safetyCategory: safetyCategory,
      department: department,
      applicableMachineArea: applicableMachineArea,
      frequency: frequency,
      checkTitle: checkTitle,
      checkType: checkType,
      severityLevel: severityLevel,
      descriptionInstruction: descriptionInstruction,
      assignTo: assignTo,
      priority: priority,
      instructionForInspector: instructionForInspector,
    };

    try {
      addDoc(collection(database, "safety_check_database"), safetyCheckData);
      alert("Safety Check added successfully!!!");
      setopeningSafetyCheckForm(false);
      //   renderingMachines();
    } catch {
      console.log("Something went wrong.");
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white h-screen my-5 overflow-auto p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">Add Safety Check</p>
          <button
            onClick={() => {
              setopeningSafetyCheckForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div>
          <div>
            <p className=" text-[#d42041] text-lg font-semibold">
              Basic Information
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Safety Check Title
                </p>
                <input
                  onChange={(event) => {
                    setsafetyCheckTitle(event.target.value);
                  }}
                  placeholder="Bolts"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Safety Category
                </p>
                <select
                  onChange={(event) => {
                    setsafetyCategory(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>Select Category</option>
                  <option>Machine Safety</option>
                  <option>Electrical Safety</option>
                  <option>Fire Safety</option>
                  <option>PPE Safety</option>
                  <option>Chemical Safety</option>
                  <option>Workplace Safety</option>
                  <option>Environmental Safety</option>
                </select>
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Department</p>
                <select
                  onChange={(event) => {
                    setdepartment(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>Select Department</option>
                  <option>Production</option>
                  <option>Maintenance</option>
                  <option>Warehouse</option>
                  <option>Quality Control</option>
                  <option>Safety Department</option>
                </select>
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Applicable Machine/Area
                </p>
                <select
                  onChange={(event) => {
                    setapplicableMachineArea(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>Select Area / Machines</option>
                  <option>All Machines</option>
                  <option>Specific Machine</option>
                  <option>Entire Plant</option>
                  <option>Storage Area</option>
                  <option>Packing Area</option>
                </select>
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Frequency</p>
                <select
                  onChange={(event) => {
                    setfrequency(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>Select Frequency</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Annual</option>
                </select>
              </div>
            </div>
          </div>

          <div className="my-4">
            <p className=" text-[#d42041] text-lg font-semibold">
              Checklist Items
            </p>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Check Title</p>
                <input
                  onChange={(event) => {
                    setcheckTitle(event.target.value);
                  }}
                  placeholder="Press Machine"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Check Type</p>
                <select
                  onChange={(event) => {
                    setcheckType(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>Select Type</option>
                  <option>Yes / No</option>
                  <option>Pass / Fail</option>
                  <option>Numeric Value</option>
                </select>
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Severity Level
                </p>
                <select
                  onChange={(event) => {
                    setseverityLevet(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>Select Level</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
            <div>
              <p className="text-[#2f323a] font-semibold mb-1">
                Description / Instructions
              </p>
              <textarea
                onChange={(event) => {
                  setdescriptionInstruction(event.target.value);
                }}
                placeholder="Press Machine"
                className="border border-gray-300 h-28 p-1 w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <p className=" text-[#d42041] text-lg font-semibold">
            Escalation Rules
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[#2f323a] font-semibold mb-1">Assign to</p>
              <select
                onChange={(event) => {
                  setassignTo(event.target.value);
                }}
                className="border border-gray-300 p-1 w-full"
              >
                <option>Select Roles</option>
                <option>Safety Engineer</option>
                <option>Maintenance Engineer</option>
                <option>Supervisor</option>
              </select>
            </div>

            <div>
              <p className="text-[#2f323a] font-semibold mb-1">Priority</p>
              <select
                onChange={(event) => {
                  setpriority(event.target.value);
                }}
                className="border border-gray-300 p-1 w-full"
              >
                <option>Select Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[#2f323a] font-semibold mb-1">
            Instructions for inspector
          </p>
          <textarea
            onChange={(event) => {
              setinstructionForInspector(event.target.value);
            }}
            placeholder="Press Machine"
            className="border border-gray-300 h-28 p-1 w-full"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              addSafetyCheck();
            }}
            className="bg-[#d42041] mt-5 py-1 px-4 text-white font-semibold"
          >
            Add Safety Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSafetyCheckForm;
