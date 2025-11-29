import React, { useEffect, useState } from "react";
import AddMaterialConsumptionForm from "./Operations Add Forms/AddMaterialConsumptionForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../FirebaseConfig";

function MaterialConsumption() {
  const [openingMaterialConsumption, setopeningMaterialConsumption] =
    useState(false);
  const [gettingConsumption, setgettingComsumption] = useState([]);

  async function renderingMaterialCosumption() {
    const taskDetails = await getDocs(
      collection(database, "material_consumption_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingComsumption(multipleArray);
  }

  useEffect(() => {
    renderingMaterialCosumption();
  }, []);

  return (
    <div className="m-4">
      <div className="bg-white border p-4 border-gray-300 flex items-center justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">
            Material Consumption
          </p>
          <p className="text-[#d42041]">
            Add and manage Material Consumption from one centralized system.
          </p>
        </div>
        <button
          onClick={() => {
            setopeningMaterialConsumption(true);
          }}
          className="bg-[#d42041] py-1 px-4 text-white font-semibold"
        >
          Add Invoice
        </button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {gettingConsumption.map((material) => (
          <div className="border bg-white border-gray-300">
            <p className="bg-[#2f323a] p-4 text-white font-semibold">
              {material.date}
            </p>

            <div className="bg-white border-[#d42041] border-t-8 p-4">
              <div>
                <p className="text-[#2f323a] text-lg font-semibold">
                  Material Info
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#2f323a]">Material Name</p>
                  <p className="text-[#d42041] font-semibold">
                    {material.selectedMaterial}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#2f323a]">Material Category</p>
                  <p className="text-[#d42041] font-semibold">
                    {material.materialCategory}
                  </p>
                </div>
              </div>
              <hr className="my-3 border-gray-300" />
              <div>
                <p className="text-[#2f323a] text-lg font-semibold">
                  Production Details
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#2f323a]">Production Line</p>
                  <p className="text-[#d42041] font-semibold">
                    {material.selectedProductionLine}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#2f323a]">Machine</p>
                  <p className="text-[#d42041] font-semibold">
                    {material.selectedMachine}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#2f323a]">Shift</p>
                  <p className="text-[#d42041] font-semibold">
                    {material.shift}
                  </p>
                </div>
              </div>
              
              <hr className="my-3 border-gray-300" />

              <div>
                <p className="text-[#2f323a] text-lg font-semibold">
                  Stock Details
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Opening Stock</p>
                    <p className="text-[#d42041] font-semibold">
                      {material.openingStock}
                    </p>
                  </div>

                  <div className="border border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Quantity Consumed</p>
                    <p className="text-[#d42041] font-semibold">
                      - {material.quantityConsumed}
                    </p>
                  </div>

                  <div className="border border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Quantity Wasted</p>
                    <p className="text-[#d42041] font-semibold">
                      - {material.quantityWasted}
                    </p>
                  </div>

                  <div className="border border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Closing Stock</p>
                    <p className="text-[#d42041] font-semibold">
                      {material.closingStock}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openingMaterialConsumption && (
        <AddMaterialConsumptionForm
          setopeningMaterialConsumption={setopeningMaterialConsumption}
        />
      )}
    </div>
  );
}

export default MaterialConsumption;
