import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../../../FirebaseConfig";

function AddMaterialConsumptionForm({ setopeningMaterialConsumption }) {
  const [gettingProductionLines, setgettingProductionLines] = useState([]);
  const [gettingInventoryDetails, setgettingInventoryDetails] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");
  const [selectedMaterial, setselectedMaterial] = useState("");
  const [date, setdate] = useState("");
  const [shift, setshift] = useState("");
  const [selectedMachine, setselectedMachine] = useState("");
  const [selectedProductionLine, setselectedProductionLine] = useState("");
  const [openingStock, setopeningStock] = useState("");
  const [quantityConsumed, setquantityConsumed] = useState("");
  const [quantityWasted, setquantityWasted] = useState("");
  const [closingStock, setclosingStock] = useState("");
  const [filteredMaterials, setfilteredMaterials] = useState([]);

  async function renderingInventory() {
    const taskDetails = await getDocs(
      collection(database, "inventory_management_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingInventoryDetails(multipleArray);
  }

  async function renderingProductionLines() {
    const taskDetails = await getDocs(
      collection(database, "production_line_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingProductionLines(multipleArray);
  }

  function addMaterialConsumption() {
    const materialConsumptionData = {
      date: date,
      materialCategory: selectedCategory,
      selectedMaterial: selectedMaterial,
      shift: shift,
      selectedMachine: selectedMachine,
      selectedProductionLine: selectedProductionLine,
      openingStock: openingStock,
      quantityConsumed: quantityConsumed,
      quantityWasted: quantityWasted,
      closingStock: closingStock,
    };

    try {
      addDoc(
        collection(database, "material_consumption_database"),
        materialConsumptionData
      );
      alert("Material Consumption ticket added successfully!!!");
      setopeningMaterialConsumption(false);
      //   renderingMachines();
    } catch {
      console.log("Something went wrong.");
    }
  }

  useEffect(() => {
    renderingProductionLines();
    renderingInventory();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = gettingInventoryDetails.filter(
        (item) => item.inventoryCategory === selectedCategory
      );
      setfilteredMaterials(filtered);
    }
  }, [selectedCategory, gettingInventoryDetails]);

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">
            Add Material Consumption
          </p>
          <button
            onClick={() => {
              setopeningMaterialConsumption(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Date</p>
            <input
              onChange={(event) => {
                setdate(event.target.value);
              }}
              type="date"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Shift</p>
            <input
              onChange={(event) => {
                setshift(event.target.value);
              }}
              placeholder="Nikhil Kamath"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Production Line</p>
            <select
              onChange={(event) => {
                setselectedProductionLine(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Production Line</option>
              {gettingProductionLines.map((production) => (
                <option value={production.lineName} className="">
                  {production.lineName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Machine</p>
            <select
              onChange={(event) => {
                setselectedMachine(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Machine</option>
              {gettingProductionLines.map((production) =>
                production.assignedMachines.map((machine) => (
                  <option value={machine} className="">
                    {machine}
                  </option>
                ))
              )}
            </select>
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Material Category
            </p>
            <select
              onChange={(e) => setselectedCategory(e.target.value)}
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Category</option>
              <option value="Raw Materials">Raw Materials</option>
              <option value="Finished Goods">Finished Goods</option>
              <option value="Packaging Material">Packaging Material</option>
            </select>
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Material Name</p>
            <select
              onChange={(e) => setselectedMaterial(e.target.value)}
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Material</option>

              {filteredMaterials.map((item) => (
                <option
                  key={item.id}
                  value={
                    item.materialName ||
                    item.productName ||
                    item.packagingMaterialName
                  }
                >
                  {item.materialName ||
                    item.productName ||
                    item.packagingMaterialName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Opening Stock</p>
            <input
              onChange={(event) => {
                setopeningStock(event.target.value);
              }}
              placeholder="Nikhil Kamath"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Quantity Consumed
            </p>
            <input
              onChange={(event) => {
                setquantityConsumed(event.target.value);
              }}
              placeholder="Nikhil Kamath"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Quantity Wasted</p>
            <input
              onChange={(event) => {
                setquantityWasted(event.target.value);
              }}
              placeholder="Nikhil Kamath"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Closing Stock</p>
            <input
              onChange={(event) => {
                setclosingStock(event.target.value);
              }}
              placeholder="Nikhil Kamath"
              className="border border-gray-300 p-1 w-full"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              addMaterialConsumption();
            }}
            className="bg-[#d42041] mt-5 py-1 px-4 text-white font-semibold"
          >
            Add Inventory
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddMaterialConsumptionForm;
