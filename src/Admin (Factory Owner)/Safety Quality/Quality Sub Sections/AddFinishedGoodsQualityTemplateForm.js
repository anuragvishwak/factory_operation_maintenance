import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "../../../FirebaseConfig";

function AddFinishedGoodsQualityTemplateForm({
  setopeningGoodsQualityTemplateForm,
}) {
  const [finishedGoodsFields, setFinishedGoodsFields] = useState([
    "Appearance Check",
    "Dimensions & Tolerances",
    "Weight Check",
    "Surface Finish",
    "Packaging Quality",
    "Labeling Accuracy",
    "Functional Tests",
    "Strength / Durability Tests",
  ]);

  const [newField, setNewField] = useState("");
  const [formData, setFormData] = useState({});

  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  const addNewField = () => {
    if (!newField.trim()) return;

    setFinishedGoodsFields((prev) => [...prev, newField.trim()]);
    setNewField("");
  };

  async function addFinishedGoodsQualityTemplate() {
    try {
      await addDoc(
        collection(database, "finished_goods_quality_database"),
        formData
      );

      alert("Finished Goods Quality Template added successfully!");
      setopeningGoodsQualityTemplateForm(false);
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">
            Add Finished Goods Quality Template
          </p>
          <button
            onClick={() => setopeningGoodsQualityTemplateForm(false)}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {finishedGoodsFields.map((field) => (
            <div key={field}>
              <p className="text-[#2f323a] font-semibold mb-1">{field}</p>
              <input
                placeholder={`Enter ${field}`}
                className="border border-gray-300 p-1 w-full"
                onChange={(e) => handleChange(field, e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="text-sm font-semibold mb-2 text-[#2f323a]">
            Add a New Custom Field
          </p>
          <div className="flex gap-2">
            <input
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
              placeholder="Enter new field label"
              className="border border-gray-300 p-1 w-64"
            />
            <button
              onClick={addNewField}
              className="bg-[#d42041] py-1 px-4 text-white font-semibold rounded"
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-[#d42041] mt-4 py-1 px-4 text-white font-semibold rounded"
            onClick={addFinishedGoodsQualityTemplate}
          >
            Add Quality Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFinishedGoodsQualityTemplateForm;
