import React, { useEffect, useState } from "react";
import AddInProcessQualityTemplateForm from "./AddInProcessQualityTemplateForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../FirebaseConfig";

function InProcessQualityTemplate() {
  const [
    openingInProcessQualityTemplateForm,
    setopeningInProcessQualityTemplateForm,
  ] = useState(false);
  const [gettingInProcessQuality, setgettingInProcessQuality] = useState([]);

  async function renderingInProcessQuality() {
    const taskDetails = await getDocs(
      collection(database, "inProcess_Quality_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingInProcessQuality(multipleArray);
  }

  useEffect(() => {
    renderingInProcessQuality();
  }, []);

  return (
    <div>
      <div className="flex items-center bg-white p-3 border border-gray-300 justify-between">
        <p className="text-[#d42041] text-xl font-bold">InProcess Quality</p>
        <button
          onClick={() => {
            setopeningInProcessQualityTemplateForm(true);
          }}
          className="bg-[#d42041] text-sm font-semibold text-white p-1 px-3"
        >
          Add InProcess Template
        </button>
      </div>
      <div className="grid grid-cols-3 mt-4 gap-4">
        {gettingInProcessQuality.map((inProcess) => (
          <div className="border bg-white border-gray-300">
            <div className="bg-[#2f323a] p-4 text-white">
              <p className="font-bold text-white text-lg">
                Production Quality Control
              </p>
              <p className="font-semibold text-[#d42041]">
                Standard Manufacturing Specifications
              </p>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">
                    Machine Temperature Tolerance
                  </p>
                  <p className="text-[#d42041]">
                    {inProcess.machineTemperatureTolerance}
                  </p>
                </div>

                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">
                    Dimensional Tolerance
                  </p>
                  <p className="text-[#d42041]">
                    {inProcess.dimensionalTolerance}
                  </p>
                </div>

                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Cycle Time</p>
                  <p className="text-[#d42041]">
                    {inProcess.cycleTime}
                  </p>
                </div>
                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Color Consistency</p>
                  <p className="text-[#d42041]">
                    {inProcess.colorConsistency}
                  </p>
                </div>
                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Rejection Limit</p>
                  <p className="text-[#d42041]">
                    {inProcess.rejectionCount}
                  </p>
                </div>
                <div className="border border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Surface Defect Check</p>
                  <p className="text-[#d42041]">
                    {inProcess.surfaceDefectCheck}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-300 bg-[#fff5f7]">
              <p className="text-[#2f323a]">Note from Admin</p>
              <p className="text-[#d42041] font-semibold">
                {inProcess.operatorComments}
              </p>
            </div>
          </div>
        ))}
      </div>
      {openingInProcessQualityTemplateForm && (
        <AddInProcessQualityTemplateForm
          setopeningInProcessQualityTemplateForm={
            setopeningInProcessQualityTemplateForm
          }
        />
      )}
    </div>
  );
}

export default InProcessQualityTemplate;
