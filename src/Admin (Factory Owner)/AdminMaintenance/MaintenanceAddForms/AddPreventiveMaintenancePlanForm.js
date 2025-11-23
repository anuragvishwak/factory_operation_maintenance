import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../../../FirebaseConfig";

function AddPreventiveMaintenancePlanForm({
  setopeningPreventiveMaintenancePlanForm,
}) {
  const [gettingMachines, setgettigMachines] = useState([]);
  const [selectedMachine, setselectedMachine] = useState([]);
  const [lastMaintenanceDate, setlastMaintenanceDate] = useState("");
  const [nextMaintenanceDate, setnextMaintenanceDate] = useState("");
  const [maintenanceFrequency, setmaintenanceFrequency] = useState("");
  const [estimatedDowntime, setestimatedDowntime] = useState("");
  const [maintenanceType, setmaintenanceType] = useState("");
  const [checklist, setChecklist] = useState([""]);

  function addMaintenancePlan() {
    const maintenanceData = {
      selectedMachine: selectedMachine,
      lastMaintenanceDate: lastMaintenanceDate,
      nextMaintenanceDate: nextMaintenanceDate,
      maintenanceFrequency: maintenanceFrequency,
      estimatedDowntime: estimatedDowntime,
      maintenanceType: maintenanceType,
      checklist: checklist,
    };

    try {
      addDoc(
        collection(database, "preventive_maintenance_database"),
        maintenanceData
      );
      alert("Maintenance Plan added successfully!!!");
      setopeningPreventiveMaintenancePlanForm(false);
    } catch {
      console.log("Something went wrong.");
    }
  }

  async function renderingMachines() {
    const taskDetails = await getDocs(collection(database, "machine_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettigMachines(multipleArray);
  }

  useEffect(() => {
    renderingMachines();
  }, []);

  function addChecklistField() {
    setChecklist([...checklist, ""]);
  }

  function removeChecklistField(index) {
    const updated = [...checklist];
    updated.splice(index, 1);
    setChecklist(updated);
  }

  function updateChecklistValue(index, value) {
    const updated = [...checklist];
    updated[index] = value;
    setChecklist(updated);
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">
            Add Maintenance Plan
          </p>
          <button
            onClick={() => {
              setopeningPreventiveMaintenancePlanForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div>
          <p className="text-[#2f323a] font-semibold mb-1">Select Machine</p>
          <select
            onChange={(event) => {
              setselectedMachine(event.target.value);
            }}
            className="border border-gray-300 p-1 w-full"
          >
            <option>Select Machine</option>
            {gettingMachines.map((machine) => (
              <option value={machine.machineName} className="">
                {machine.machineName}
              </option>
            ))}
          </select>

          <div className="grid grid-cols-3 my-3 gap-3">
            <div>
              <p className="text-[#2f323a] font-semibold mb-1">
                Maintenance Type
              </p>
              <select
                onChange={(event) => {
                  setmaintenanceType(event.target.value);
                }}
                className="border border-gray-300 p-1 w-full"
              >
                <option>Select Maintenance Type</option>
                <option>Inspection</option>
                <option>Oil Change</option>
                <option>Calibration</option>
              </select>
            </div>

            <div>
              <p className="text-[#2f323a] font-semibold mb-1">
                Maintenance Frequency
              </p>

              <select
                onChange={(event) => {
                  setmaintenanceFrequency(event.target.value);
                }}
                className="border border-gray-300 p-1 w-full"
              >
                <option value="">Select Frequency</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div>
              <p className="text-[#2f323a] font-semibold mb-1">
                Last Maintenance Date
              </p>
              <input
                onChange={(event) => {
                  setlastMaintenanceDate(event.target.value);
                }}
                type="date"
                className="border border-gray-300 p-1 w-full"
              />
            </div>

            <div>
              <p className="text-[#2f323a] font-semibold mb-1">
                Next Maintenance Date
              </p>
              <input
                onChange={(event) => {
                  setnextMaintenanceDate(event.target.value);
                }}
                type="date"
                className="border border-gray-300 p-1 w-full"
              />
            </div>

            <div>
              <p className="text-[#2f323a] font-semibold mb-1">
                Estimated Downtime
              </p>
              <input
                onChange={(event) => {
                  setestimatedDowntime(event.target.value);
                }}
                placeholder="2-3 hours"
                className="border border-gray-300 p-1 w-full"
              />
            </div>
          </div>
          <div className="">
            <div className="flex items-center mb-2 space-x-1">
              <p className="text-[#2f323a] font-semibold">Checklist</p>
              <button
                onClick={addChecklistField}
                className="bg-[#d42041] text-white rounded-full px-2.5 py-1 mt-1 text-sm"
              >
                +
              </button>
            </div>
            {checklist.map((item, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input
                  value={item}
                  onChange={(e) => updateChecklistValue(index, e.target.value)}
                  placeholder={`Checklist item ${index + 1}`}
                  className="border border-gray-300 p-1 w-full"
                />

                {index !== 0 && (
                  <button
                    onClick={() => removeChecklistField(index)}
                    className="text-red-500 font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              addMaintenancePlan();
            }}
            className="bg-[#d42041] mt-5 py-1 px-4 text-white font-semibold"
          >
            Add Maintenance Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPreventiveMaintenancePlanForm;
