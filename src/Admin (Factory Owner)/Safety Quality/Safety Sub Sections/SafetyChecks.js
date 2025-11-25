import React, { useEffect, useState } from "react";
import AddSafetyCheckForm from "./AddSafetyCheckForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../FirebaseConfig";

function SafetyChecks() {
  const [openingSafetyCheckForm, setopeningSafetyCheckForm] = useState(false);
  const [gettingSafetyChecks, setgettingSafetyChecks] = useState([]);

  async function renderingSafetyChecks() {
    const taskDetails = await getDocs(
      collection(database, "safety_check_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingSafetyChecks(multipleArray);
  }

  useEffect(() => {
    renderingSafetyChecks();
  }, []);

  return (
    <div>
      <div className="flex items-center bg-white p-3 border border-gray-300 justify-between">
        <p className="text-[#d42041] text-xl font-bold">Safety Check</p>
        <button
          onClick={() => {
            setopeningSafetyCheckForm(true);
          }}
          className="bg-[#d42041] text-sm font-semibold text-white p-1 px-3"
        >
          Add Safety Checks
        </button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {gettingSafetyChecks.map((checks) => (
          <div className="border bg-white border-gray-300">
            <div className="bg-[#2f323a] p-4 text-white">
              <p className="font-semibold text-[#d42041]">
                {checks.safetyCheckTitle}
              </p>
              <p className="font-bold text-white text-lg">
                {checks.checkTitle}
              </p>
              <div className="flex items-center">
                <p className="text-sm text-[#d42041] font-semibold">
                  {checks.priority} Priority
                </p>
                <span className="text-white px-2">|</span>
                <p className="text-sm text-[#d42041] font-semibold">
                  {checks.safetyCategory}
                </p>
                <span className="text-white px-2">|</span>

                <p className="text-sm text-[#d42041] font-semibold">
                  {checks.frequency}
                </p>
              </div>
            </div>

            <div className="p-4">
              <div className="border border-gray-300 p-3">
                <p className="text-sm text-[#2f323a]">Check Description</p>
                <p className="text-[#d42041] text-sm">
                  {checks.descriptionInstruction}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Department</p>
                  <p className="text-[#d42041] font-semibold">
                    {checks.department}
                  </p>
                </div>

                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Machine Area</p>
                  <p className="text-[#d42041] font-semibold">
                    {checks.applicableMachineArea}
                  </p>
                </div>

                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Check Type</p>
                  <p className="text-[#d42041] font-semibold">
                    {checks.checkType}
                  </p>
                </div>

                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Severity Level</p>
                  <p className="text-[#d42041] font-semibold">
                    {checks.severityLevel}
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 p-3">
                <p className="text-sm text-[#2f323a]">Assigned To</p>
                <p className="text-[#d42041] mb-3 font-semibold">
                  {checks.assignTo}
                </p>
                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">
                    Instruction for Inspector
                  </p>
                  <p className="text-[#d42041] text-sm">
                    {checks.instructionForInspector}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openingSafetyCheckForm && (
        <AddSafetyCheckForm
          setopeningSafetyCheckForm={setopeningSafetyCheckForm}
        />
      )}
    </div>
  );
}

export default SafetyChecks;
