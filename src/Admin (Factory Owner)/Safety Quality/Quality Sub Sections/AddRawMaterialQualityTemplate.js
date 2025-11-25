import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../../FirebaseConfig";

function AddRawMaterialQualityTemplate({ setopeningAddRMQualityTemplate }) {
  const [materialCategory, setmaterialCategory] = useState("");
  const [materialName, setmaterialName] = useState("");
  const [supplier, setsupplier] = useState("");
  const [parameterToCheck, setparameterToCheck] = useState("");
  const [minThreshold, setminThreshold] = useState("");
  const [maxThreshold, setmaxThreshold] = useState("");

  const [samplingQuantity, setsamplingQuantity] = useState("");

  function addRawMaterialQualityTemplate() {
    const rawMaterialQualityData = {
      materialCategory: materialCategory,
      materialName: materialName,
      supplier: supplier,
      parameterToCheck: parameterToCheck,
      minThreshold: minThreshold,
      maxThreshold: maxThreshold,
      samplingQuantity: samplingQuantity,
    };

    try {
      addDoc(
        collection(database, "raw_material_quality_template"),
        rawMaterialQualityData
      );
      alert("Raw Material Quality Template added successfully!!!");
      setopeningAddRMQualityTemplate(false);
      //   renderingMachines();
    } catch {
      console.log("Something went wrong.");
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">
            Add RM Quality Template
          </p>
          <button
            onClick={() => {
              setopeningAddRMQualityTemplate(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Material Category
            </p>
            <select
              onChange={(event) => {
                setmaterialCategory(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Category</option>
              <option>Plastic</option>
              <option>Metal</option>
              <option>Chemical</option>
            </select>
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Material Name</p>
            <input
              onChange={(event) => {
                setmaterialName(event.target.value);
              }}
              placeholder="Bolts"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Supplier</p>
            <input
              onChange={(event) => {
                setsupplier(event.target.value);
              }}
              placeholder="Bolts"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Parameters to Check
            </p>
            <input
              onChange={(event) => {
                setparameterToCheck(event.target.value);
              }}
              placeholder="Bolts"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Minimum Thresholds
            </p>
            <input
              onChange={(event) => {
                setminThreshold(event.target.value);
              }}
              placeholder="Bolts"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Maximum Thresholds
            </p>
            <input
              onChange={(event) => {
                setmaxThreshold(event.target.value);
              }}
              placeholder="Bolts"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Sampling Quantity
            </p>
            <input
              onChange={(event) => {
                setsamplingQuantity(event.target.value);
              }}
              placeholder="Bolts"
              className="border border-gray-300 p-1 w-full"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              addRawMaterialQualityTemplate();
            }}
            className="bg-[#d42041] mt-5 py-1 px-4 text-white font-semibold"
          >
            Add Safety Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRawMaterialQualityTemplate;
