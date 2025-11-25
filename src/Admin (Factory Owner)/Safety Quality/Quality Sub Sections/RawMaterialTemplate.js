import React, { useEffect, useState } from "react";
import AddRawMaterialQualityTemplate from "./AddRawMaterialQualityTemplate";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../FirebaseConfig";

function RawMaterialTemplate() {
  const [openingAddRMQualityTemplate, setopeningAddRMQualityTemplate] =
    useState(false);
  const [gettingRwaMaterialTemplate, setgettingRawMaterialTemplate] = useState(
    []
  );

  async function renderingRawMaterialTemplate() {
    const taskDetails = await getDocs(
      collection(database, "raw_material_quality_template")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingRawMaterialTemplate(multipleArray);
  }

  useEffect(() => {
    renderingRawMaterialTemplate();
  }, []);

  return (
    <div>
      <div className="flex items-center bg-white p-3 border border-gray-300 justify-between">
        <p className="text-[#d42041] text-xl font-bold">Raw Material Quality</p>
        <button
          onClick={() => {
            setopeningAddRMQualityTemplate(true);
          }}
          className="bg-[#d42041] text-sm font-semibold text-white p-1 px-3"
        >
          Add RM Quality Template
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {gettingRwaMaterialTemplate.map((raw) => (
          <div className="border bg-white border-gray-300">
            <div className="bg-[#2f323a] p-4 text-white">
              <p className="font-semibold text-[#d42041]">
                {raw.materialCategory}
              </p>
              <p className="font-bold text-white text-lg">{raw.materialName}</p>
            </div>

            <div className="p-4">
              <div className="border border-gray-300 p-3">
                <p className="text-sm text-[#2f323a]">Parameter to Checks</p>
                <p className="text-[#d42041] font-semibold">
                  {raw.parameterToCheck}
                </p>
              </div>

              <div className="border my-3 flex items-center gap-6 border-gray-300 p-3">
                <div>
                  <p className="text-sm text-[#2f323a]">Minimum Threshold</p>
                  <p className="text-[#d42041] font-semibold">
                    {raw.minThreshold}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-[#2f323a]">Maximum Threshold</p>
                  <p className="text-[#d42041] font-semibold">
                    {raw.maxThreshold}
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 p-3">
                <p className="text-sm text-[#2f323a]">Sampling Quantity</p>
                <p className="text-[#d42041] font-semibold">
                  {raw.samplingQuantity}
                </p>
              </div>
              <hr className="border-gray-300 my-3" />
              <div className="border border-gray-300 p-3">
                <p className="text-sm text-[#2f323a]">Supplier / Vendor</p>
                <p className="text-[#d42041] font-semibold">{raw.supplier}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openingAddRMQualityTemplate && (
        <AddRawMaterialQualityTemplate
          setopeningAddRMQualityTemplate={setopeningAddRMQualityTemplate}
        />
      )}
    </div>
  );
}

export default RawMaterialTemplate;
