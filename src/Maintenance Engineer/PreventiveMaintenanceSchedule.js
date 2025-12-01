import React, { useEffect, useState } from "react";
import MaintenanceEngineerNavbar from "./MaintenanceEngineerNavbar";
import { FaDotCircle } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../FirebaseConfig";

function PreventiveMaintenanceSchedule() {
  const [openingChecklist, setopeningChecklist] = useState(false);
  const [capturingChecklist, setcapturingChecklist] = useState({});
  const [gettingMaintenancePlan, setgettingMaintenancePlan] = useState([]);

  async function renderingMaintenancePlans() {
    const taskDetails = await getDocs(
      collection(database, "preventive_maintenance_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingMaintenancePlan(multipleArray);
  }

  useEffect(() => {
    renderingMaintenancePlans();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <MaintenanceEngineerNavbar />
      <div className="flex bg-white m-4 p-4 border rounded-xl border-gray-300 items-end justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">
            Preventive Maintenance Schedule
          </p>
          <p className="text-[#d42041]">
            Manage all Preventive Maintenance Schedules from one centralized
            system.
          </p>
        </div>

        <input
          placeholder="Search Preventive Maintenance Schedules...."
          className="border border-gray-300 py-1.5 px-3 w-96"
        />
      </div>

      <div className="flex justify-center bg-white rounded-xl p-4 border border-gray-300 m-4">
        <table className="w-full table-auto">
          <thead className="text-[#2f323a] bg-gray-50">
            <th className="font-medium">Machine</th>
            <th className="font-medium">Maintenance Type</th>
            <th className="py-1 font-medium text-center">Last Maintenance</th>
            <th className="text-center font-medium">Next Maintenance</th>
            <th className="text-center font-medium">Estimated Downtime</th>
            <th className="text-center font-medium">Maintenance Frequency</th>
            <th className="font-medium">Maintenance Checklist</th>
          </thead>

          <tbody>
            {gettingMaintenancePlan.map((plan) => (
              <tr className="border-y border-gray-300">
                <td className="py-1">
                  <div className=" flex justify-center">
                    <div>
                      <p className="text-start text-[#2f323a] font-semibold">
                        {plan.selectedMachine}
                      </p>
                      <p className="text-[#2f323a] text-[12px]">MAC-567</p>
                    </div>
                  </div>
                </td>
                <td className="text-center text-[#2f323a]">
                  {plan.maintenanceType}
                </td>
                <td className="text-center text-[#2f323a]">
                  {plan.lastMaintenanceDate}
                </td>
                <td className="text-center text-[#2f323a]">
                  {plan.nextMaintenanceDate}
                </td>
                <td className="text-center text-[#2f323a]">
                  {plan.estimatedDowntime}
                </td>
                <td className="text-center text-[#2f323a]">
                  {plan.maintenanceFrequency}
                </td>
                <td>
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        setopeningChecklist(true);
                        setcapturingChecklist(plan);
                      }}
                      className="text-white bg-[#2f323a] text-sm py-1 px-3"
                    >
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openingChecklist && (
        <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
          <div className="bg-white p-4">
            <div className="flex justify-between mb-4 items-start">
              <p className="font-bold text-lg text-[#d42041]">Checklists</p>
              <button 
              onClick={()=>{setopeningChecklist(false)}}
              className="font-bold text-[#2f323a]">Close</button>
            </div>
            {capturingChecklist?.checklist?.map((check) => (
              <div className="flex items-center text-[#2f323a] space-x-1">
                <FaDotCircle size={12} />
                <p>{check}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PreventiveMaintenanceSchedule;
