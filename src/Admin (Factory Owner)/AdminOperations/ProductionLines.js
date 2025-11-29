import React, { useEffect, useState } from "react";
import AddProductionLineForm from "./Operations Add Forms/AddProductionLineForm";
import { database } from "../../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { FaDotCircle } from "react-icons/fa";

function ProductionLines() {
  const [openingAddProductionLineForm, setopeningProductionLineForm] =
    useState(false);
  const [gettingProductionLines, setgettingProductionLines] = useState([]);
  const [gettingMachines, setgettigMachines] = useState([]);

  async function renderingMachines() {
    const taskDetails = await getDocs(collection(database, "machine_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettigMachines(multipleArray);
  }

  async function renderingProductionLines() {
    const taskDetails = await getDocs(
      collection(database, "production_line_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingProductionLines(multipleArray);
  }

  useEffect(() => {
    renderingProductionLines();
    renderingMachines();
  }, []);

  return (
    <div className="m-4">
      <div className="flex bg-white p-4 border border-gray-300 items-end justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">
            Production Line Management
          </p>
          <p className="text-[#d42041]">
            Add and manage all Production Lines from one centralized system.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <input
            placeholder="Search Production Lines...."
            className="border border-gray-300 py-1.5 px-3 w-96"
          />
          <button
            onClick={() => {
              setopeningProductionLineForm(true);
            }}
            className="bg-[#d42041] py-1.5 px-3 text-white font-semibold"
          >
            + Add Production Line
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-4 gap-4">
        {gettingProductionLines.map((production) => (
          <div>
            <div className="border bg-white border-gray-300">
              <div className="bg-[#2f323a] p-4 text-white">
                <div className="flex items-start justify-between">
                  {" "}
                  <p className="font-bold text-white text-lg">
                    {production.lineName}
                  </p>
                  <p className="text-sm bg-[#d42041] text-white py-0.5 px-3 rounded-full font-semibold">
                    {production.currentStatus}
                  </p>
                </div>
                <p className="text-sm text-[#d42041] font-semibold">
                  {production.lineCode}
                </p>
              </div>

              <div className="border-[#d42041] border-t-8 p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border w-full border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Supervisor</p>
                    <p className="text-[#d42041] font-semibold">
                      {production.supervisorName}
                    </p>
                  </div>

                  <div className="border border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Shift</p>
                    <p className="text-[#d42041] font-semibold">
                      {production.shift}
                    </p>
                  </div>

                  <div className="border w-full border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">
                      Daily Target
                    </p>
                    <p className="text-[#d42041] font-semibold">
                      {production.dailyTargetOuput} units
                    </p>
                  </div>

                  <div className="border w-full border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Product Output</p>
                    <p className="text-[#d42041] font-semibold">
                      {production.productOutput}
                    </p>
                  </div>
                </div>

                <div className="p-4 border border-gray-300 mt-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#2f323a]">
                      Assigned Machines
                    </p>
                    <p className="text-white bg-[#2f323a] text-[12px] py-0.5 px-4 rounded-full">
                      {production.assignedMachines.length} machines
                    </p>
                  </div>

                  <div className="mt-4">
                    {production.assignedMachines.map((machineId) => {
                      return (
                        <div
                          className="flex items-center space-x-1"
                          key={machineId}
                        >
                          <p className="text-[#d42041]">
                            {machineId}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openingAddProductionLineForm && (
        <AddProductionLineForm
          setopeningProductionLineForm={setopeningProductionLineForm}
        />
      )}
    </div>
  );
}

export default ProductionLines;
