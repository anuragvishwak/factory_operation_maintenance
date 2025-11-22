import React, { useEffect, useState } from "react";
import AddMachineForm from "./Operations Add Forms/AddMachineForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../FirebaseConfig";

function MachineManagement() {
  const [openingAddMachineForm, setopeningAddMachineForm] = useState(false);
  const [gettingMachines, setgettigMachines] = useState([]);

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

  return (
    <div className="m-4">
      <div className="flex bg-white p-4 border border-gray-300 items-end justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">Machine Management</p>
          <p className="text-[#d42041]">
            Add and manage all machines from one centralized system.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <input
            placeholder="Search Machines"
            className="border border-gray-300 py-1.5 px-3 w-96"
          />
          <button
            onClick={() => {
              setopeningAddMachineForm(true);
            }}
            className="bg-[#d42041] py-1.5 px-3 text-white font-semibold"
          >
            + Add Machine
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-4 gap-4">
        {gettingMachines.map((machine) => (
          <div className="border bg-white border-gray-300">
            <div className="bg-[#2f323a] p-4 text-white">
              <p className="font-bold text-white text-lg">
                {machine.machineName}
              </p>
              <div className="flex items-center">
                <p className="text-sm text-[#d42041] font-semibold">
                  {machine.machineCode}
                </p>
                <span className="text-white px-2">|</span>
                <p className="text-sm text-[#d42041] font-semibold">
                  {machine.model}
                </p>
              </div>
            </div>

            <div className="bg-white p-4">
              <div className="grid grid-cols-4 gap-3">
                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Type</p>
                  <p className="text-[#d42041] font-semibold">
                    {machine.machineType}
                  </p>
                </div>

                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Serial Number</p>
                  <p className="text-[#d42041] font-semibold">
                    {machine.serialNumber}
                  </p>
                </div>

                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Purchase Date</p>
                  <p className="text-[#d42041] font-semibold">
                    {machine.purchasedDate}
                  </p>
                </div>

                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Installed Date</p>
                  <p className="text-[#d42041] font-semibold">
                    {machine.installedDate}
                  </p>
                </div>
              </div>

              <div className="border p-3 my-3 border-gray-300">
                <div className="flex items-center justify-between">
                  <p className="text-[#2f323a]">Last Maintenance</p>
                  <p className="text-[#d42041] font-semibold">
                    {machine.lastMaintenanceDate}
                  </p>
                </div>

                <hr className="border-gray-300 my-2" />

                <div className="flex items-center justify-between">
                  <p className="text-[#2f323a]">Next Maintenance</p>
                  <p className="text-[#d42041] font-semibold">
                    {machine.nextMaintenanceDate}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-[#2f323a]">Maintenance Frequency</p>
                  <p className="text-[#d42041] capitalize font-semibold">
                    {machine.maintenanceFrequency}
                  </p>
                </div>
              </div>

              <div className="p-3 border border-gray-300">
                <p className="text-[#2f323a]">Vendor</p>
                <p className="text-[#d42041] font-semibold">
                  {machine.vendorName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openingAddMachineForm && (
        <AddMachineForm renderingMachines = {renderingMachines} setopeningAddMachineForm={setopeningAddMachineForm} />
      )}
    </div>
  );
}

export default MachineManagement;
