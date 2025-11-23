import React, { useEffect, useState } from "react";
import AddPreventiveMaintenancePlanForm from "./MaintenanceAddForms/AddPreventiveMaintenancePlanForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../FirebaseConfig";
import { FaDotCircle } from "react-icons/fa";

function PreventiveMaintenancePlanning() {
  const [
    openingPreventiveMaintenancePlanForm,
    setopeningPreventiveMaintenancePlanForm,
  ] = useState(false);

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
    <div className="m-4">
      <div className="flex bg-white p-4 border border-gray-300 items-end justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">
            Preventive Maintenance Planning
          </p>
          <p className="text-[#d42041]">
            Add and manage all Preventive Maintenance Planning from one
            centralized system.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <input
            placeholder="Search Machines"
            className="border border-gray-300 py-1.5 px-3 w-96"
          />
          <button
            onClick={() => {
              setopeningPreventiveMaintenancePlanForm(true);
            }}
            className="bg-[#d42041] py-1.5 px-3 text-white font-semibold"
          >
            + Add Maintenance Plan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-4 gap-4">
        {gettingMaintenancePlan.map((plan) => (
          <div className="border bg-white border-gray-300">
            <div className="bg-[#2f323a] p-4 text-white">
              <p className="font-bold text-white text-lg">
                {plan.maintenanceType}
              </p>
              <p className="text-[#d42041] rounded-full font-semibold">
                {plan.selectedMachine}
              </p>
            </div>

            <div className="p-4">
              <div className="mb-3 grid grid-cols-2 gap-4">
                <div className="border w-full border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">
                    Last Maintenance Date
                  </p>
                  <p className="text-[#d42041] font-semibold">
                    {plan.lastMaintenanceDate}
                  </p>
                </div>

                <div className="border w-full border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">
                    Next Maintenance Date
                  </p>
                  <p className="text-[#d42041] font-semibold">
                    {plan.nextMaintenanceDate}
                  </p>
                </div>

                <div className="border w-full border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Estimated Down Time</p>
                  <p className="text-[#d42041] font-semibold">
                    {plan.estimatedDowntime}
                  </p>
                </div>

                <div className="border w-full border-gray-300 my-3 p-3">
                  <p className="text-sm text-[#2f323a]">
                    Maintenance Frequency
                  </p>
                  <p className="text-[#d42041] font-semibold">
                    {plan.maintenanceFrequency}
                  </p>
                </div>
              </div>

              <div className="border w-full border-gray-300 p-3">
                <p className="text-[#d42041] font-semibold">
                  Maintenance Checklist
                </p>

                <div>
                  {plan.checklist.map((check) => (
                    <div className="flex items-center text-[#2f323a] space-x-1">
                      <FaDotCircle size={12} />
                      <p>{check}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openingPreventiveMaintenancePlanForm && (
        <AddPreventiveMaintenancePlanForm
          setopeningPreventiveMaintenancePlanForm={
            setopeningPreventiveMaintenancePlanForm
          }
        />
      )}
    </div>
  );
}

export default PreventiveMaintenancePlanning;
