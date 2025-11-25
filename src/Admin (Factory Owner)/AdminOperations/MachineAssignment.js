import React, { useEffect, useState } from "react";
import AssignMachineForm from "./Operations Add Forms/AssignMachineForm";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { database } from "../../FirebaseConfig";

function MachineAssignment() {
  const [openingAssignMachineForm, setopeningAssignMachineForm] =
    useState(false);
  const [gettingAssignMachines, setgettingAssignMachines] = useState([]);

  async function renderingAssignedMachines() {
    const taskDetails = await getDocs(
      collection(database, "assign_machine_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingAssignMachines(multipleArray);
  }

  useEffect(() => {
    renderingAssignedMachines();
  }, []);

  return (
    <div className="m-4">
      <div className="flex bg-white p-4 border border-gray-300 items-end justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">
            Machine Aassignment
          </p>
          <p className="text-[#d42041]">
            Assign machines to operators from one centralized system.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <input
            placeholder="Search Assigned Machines...."
            className="border border-gray-300 py-1.5 px-3 w-96"
          />
          <button
            onClick={() => {
              setopeningAssignMachineForm(true);
            }}
            className="bg-[#d42041] py-1.5 px-3 text-white font-semibold"
          >
            Assign Machine
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 my-4 gap-4">
        {gettingAssignMachines.map((assign) => (
          <div className="bg-white border border-gray-300 p-4">
            <div>
              <p className="text-sm text-[#2f323a]">OPERATOR</p>
              <p className="text-[#d42041] text-lg font-semibold">
                {assign.selectedOperator}
              </p>
            </div>

            <hr className="border-gray-300 my-2" />
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-[#2f323a]">MACHINE</p>
                <p className="text-[#d42041] font-semibold">
                  {assign.selectedMachine}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#2f323a]">DEPARTMENT</p>
                <p className="text-[#d42041] font-semibold">
                  {assign.department}
                </p>
              </div>
            </div>

            <hr className="border-gray-300 my-2" />

            <div>
              <p className="text-sm text-[#2f323a]">PRODUCTION LINE</p>
              <p className="text-[#d42041] font-semibold">
                {assign.selectedProductionLine}
              </p>
            </div>

            <hr className="border-gray-300 my-3" />

            <div className="grid grid-cols-2 gap-3">
              <div className="p-2 border border-gray-300">
                <p className="text-sm text-[#2f323a]">Start Date</p>
                <p className="text-[#d42041] font-semibold">
                  {assign.startDate}
                </p>
              </div>

              <div className="p-2 border border-gray-300">
                <p className="text-sm text-[#2f323a]">End Date</p>
                <p className="text-[#d42041] font-semibold">{assign.endDate}</p>
              </div>
            </div>
            <div className="p-2 mt-3 border border-gray-300">
              <p className="text-sm text-[#2f323a]">Daily Hours Alloted</p>
              <p className="text-[#d42041] font-semibold">
                {assign.dailyHoursAlloted} Hours
              </p>
            </div>
          </div>
        ))}
      </div>
      {openingAssignMachineForm && (
        <AssignMachineForm
          setopeningAssignMachineForm={setopeningAssignMachineForm}
        />
      )}
    </div>
  );
}

export default MachineAssignment;
