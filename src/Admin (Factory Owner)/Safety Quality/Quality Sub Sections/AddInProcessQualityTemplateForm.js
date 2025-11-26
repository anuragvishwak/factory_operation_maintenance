import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../../FirebaseConfig";

function AddInProcessQualityTemplateForm({
  setopeningInProcessQualityTemplateForm,
}) {
  const [machineTemperatureTolerance, setMachineTemperatureTolerance] =
    useState("");
  const [dimensionalTolerance, setDimensionalTolerance] = useState("");
  const [surfaceDefectCheck, setSurfaceDefectCheck] = useState("");
  const [colorConsistency, setColorConsistency] = useState("");
  const [cycleTime, setCycleTime] = useState("");
  const [rejectionCount, setRejectionCount] = useState("");
  const [operatorComments, setOperatorComments] = useState("");

  function addInProcessQualityTemplate() {
    const inProcessQualityData = {
      machineTemperatureTolerance,
      dimensionalTolerance,
      surfaceDefectCheck,
      colorConsistency,
      cycleTime,
      rejectionCount,
      operatorComments,
    };

    try {
      addDoc(
        collection(database, "inProcess_Quality_database"),
        inProcessQualityData
      );
      alert("In-Process Quality Template added successfully!");
      setopeningInProcessQualityTemplateForm(false);
    } catch {
      console.log("Something went wrong.");
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4 w-[850px] rounded">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">
            Add In-Process Quality Template
          </p>
          <button
            onClick={() => setopeningInProcessQualityTemplateForm(false)}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Machine Temperature Tolerance
            </p>
            <input
              onChange={(e) => setMachineTemperatureTolerance(e.target.value)}
              placeholder="e.g., 180°C ± 5°C"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Dimensional Tolerance
            </p>
            <input
              onChange={(e) => setDimensionalTolerance(e.target.value)}
              placeholder="e.g., ±0.5mm"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Surface Defect Check
            </p>
            <input
              onChange={(e) => setSurfaceDefectCheck(e.target.value)}
              placeholder="e.g., No scratches, no dents"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Color Consistency
            </p>
            <input
              onChange={(e) => setColorConsistency(e.target.value)}
              placeholder="e.g., No color variation"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Cycle Time</p>
            <input
              onChange={(e) => setCycleTime(e.target.value)}
              placeholder="e.g., 45 sec"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Rejection Limit</p>
            <input
              onChange={(e) => setRejectionCount(e.target.value)}
              placeholder="e.g., Max 2 per batch"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div className="col-span-3">
            <p className="text-[#2f323a] font-semibold mb-1">
              Operator Comments
            </p>
            <textarea
              onChange={(e) => setOperatorComments(e.target.value)}
              placeholder="Any notes / problems observed"
              className="border border-gray-300 p-1 w-full h-20"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={addInProcessQualityTemplate}
            className="bg-[#d42041] mt-4 py-1 px-4 text-white font-semibold rounded"
          >
            Add Quality Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddInProcessQualityTemplateForm;
