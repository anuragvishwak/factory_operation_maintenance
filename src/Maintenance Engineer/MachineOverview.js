import React, { useEffect, useState } from "react";
import MaintenanceEngineerNavbar from "./MaintenanceEngineerNavbar";
import { database } from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function MachineOverview() {
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
    <div className="bg-gray-100 min-h-screen h-full">
      <MaintenanceEngineerNavbar />

      <div className="grid grid-cols-3 m-4 gap-4">
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

            <div className="border-t-8 border-[#d42041] p-4">
              <div className="grid grid-cols-2 gap-3">
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
    </div>
  );
}

export default MachineOverview;
