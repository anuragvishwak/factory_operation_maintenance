import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../../../FirebaseConfig";

function AddProductionLineForm({ setopeningProductionLineForm }) {
  const [gettingMachines, setgettigMachines] = useState([]);
  const [assignedMachines, setAssignedMachines] = useState([]);
  const [lineName, setlineName] = useState("");
  const [lineCode, setlineCode] = useState("");
  const [productOutput, setproductOutput] = useState("");
  const [supervisorName, setsupervisorName] = useState("");
  const [shift, setshift] = useState("");
  const [dailyTargetOuput, setdailyTargetOutput] = useState("");
  const [currentStatus, setcurrentStatus] = useState("");

  async function renderingMachines() {
    const taskDetails = await getDocs(collection(database, "machine_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettigMachines(multipleArray);
  }

  function createProductionLine() {
    const productionLineData = {
      lineName: lineName,
      lineCode: lineCode,
      productOutput: productOutput,
      supervisorName: supervisorName,
      shift: shift,
      dailyTargetOuput: dailyTargetOuput,
      assignedMachines: assignedMachines,
      currentStatus: currentStatus,
    };

    try {
      addDoc(
        collection(database, "production_line_database"),
        productionLineData
      );
      alert("Production Line added successfully!!!");
      setopeningProductionLineForm(false);
    } catch {
      console.log("Something went wrong.");
    }
  }

  useEffect(() => {
    renderingMachines();
  }, []);
  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">
            Add Production Line
          </p>
          <button
            onClick={() => {
              setopeningProductionLineForm(false);
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

            <div className="grid grid-cols-3 mb-3 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Line Name</p>
                <input
                  onChange={(event) => {
                    setlineName(event.target.value);
                  }}
                  placeholder="Press Machine"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Line Code</p>
                <input
                  onChange={(event) => {
                    setlineCode(event.target.value);
                  }}
                  placeholder="Press Machine"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Product Output
                </p>
                <input
                  onChange={(event) => {
                    setproductOutput(event.target.value);
                  }}
                  placeholder="Press Machine"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
            <div>
              <p className="text-[#2f323a] font-semibold mb-1">
                Assign Machines
              </p>

              <div className="border border-gray-300 rounded p-2 h-40 overflow-y-scroll">
                {gettingMachines.map((machine) => (
                  <div
                    key={machine.id}
                    className="flex items-center gap-2 mb-2"
                  >
                    <input
                      type="checkbox"
                      value={machine.id}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setAssignedMachines([
                            ...assignedMachines,
                            machine.id,
                          ]);
                        } else {
                          setAssignedMachines(
                            assignedMachines.filter((id) => id !== machine.id)
                          );
                        }
                      }}
                    />
                    <span>{machine.machineName}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className=" text-[#d42041] text-lg font-semibold">
                Operational Information
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Supervisor Name
                  </p>
                  <input
                    onChange={(event) => {
                      setsupervisorName(event.target.value);
                    }}
                    placeholder="Anurag Vishwakarma"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">Shift</p>
                  <select
                    onChange={(event) => {
                      setshift(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option>Select Shift</option>
                    <option>Morning</option>
                    <option>Evening</option>
                    <option>Night</option>
                  </select>
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Daily Target Output
                  </p>
                  <input
                    onChange={(event) => {
                      setdailyTargetOutput(event.target.value);
                    }}
                    placeholder="Anurag Vishwakarma"
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#2f323a] font-semibold mb-1">
                    Current Status
                  </p>
                  <select
                    onChange={(event) => {
                      setcurrentStatus(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option>Select Status</option>
                    <option>Active</option>
                    <option>Under Maintenance</option>
                    <option>Idle</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-4 justify-end">
          <button
            onClick={() => {
              createProductionLine();
            }}
            className="bg-[#d42041] py-1 px-4 text-white font-semibold"
          >
            + Add Production Line
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductionLineForm;
