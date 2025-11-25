import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../FirebaseConfig";

function AddInventoryForm({ setopeningAddInventoryForm }) {
  const [inventoryCategory, setinventoryCategory] = useState("");
  const [materialName, setmaterialName] = useState("");
  const [category, setcategory] = useState("");
  const [supplierVendor, setsupplierVendor] = useState("");
  const [rawMaterialUnitCost, setrawMaterialUnitCost] = useState("");
  const [reorderLevel, setreorderLevel] = useState("");
  const [productName, setproductName] = useState("");
  const [sku, setsku] = useState("");
  const [finishedGoodsQuantity, setfinishedGoodsQuantity] = useState("");
  const [sellingPrice, setsellingPrice] = useState("");
  const [manufacturingDate, setamnufacturingDate] = useState("");
  const [packagingMaterialName, setpackagingMaterialName] = useState("");
  const [materialType, SetmaterialType] = useState("");
  const [packagingMaterialQuantity, setpackagingMaterialQuantity] =
    useState("");
  const [packagingMaterialUnitCost, setpackagingMaterialUnitCost] =
    useState("");

  console.log("finding inventory category", inventoryCategory);

  async function addInventory() {
    try {
      if (inventoryCategory === "Raw Materials") {
        const rawMaterialData = {
          materialName,
          category,
          supplierVendor,
          rawMaterialUnitCost,
          reorderLevel,
          createdAt: new Date(),
          inventoryCategory: inventoryCategory,
        };

        await addDoc(
          collection(database, "inventory_management_database"),
          rawMaterialData
        );
        alert("Raw Material Added Successfully!");
      } else if (inventoryCategory === "Finished Goods") {
        const finishedGoodsData = {
          productName,
          sku,
          finishedGoodsQuantity,
          sellingPrice,
          manufacturingDate,
          category,
          createdAt: new Date(),
          inventoryCategory: inventoryCategory,
        };

        await addDoc(
          collection(database, "inventory_management_database"),
          finishedGoodsData
        );
        alert("Finished Goods Added Successfully!");
      } else if (inventoryCategory === "Packaging Material") {
        const packagingMaterialData = {
          packagingMaterialName,
          materialType,
          packagingMaterialQuantity,
          packagingMaterialUnitCost,
          category,
          inventoryCategory: inventoryCategory,
          createdAt: new Date(),
        };

        await addDoc(
          collection(database, "inventory_management_database"),
          packagingMaterialData
        );
        alert("Packaging Material Added Successfully!");
      } else {
        alert("Please select a valid inventory category!");
        return;
      }

      setopeningAddInventoryForm(false);
    } catch (error) {
      console.log("Something went wrong.", error);
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white w-5/12 p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">Add Inventory</p>
          <button
            onClick={() => {
              setopeningAddInventoryForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div>
          <div className="mb-4">
            <p className="text-[#2f323a] font-semibold mb-1">
              Inventory Category
            </p>

            <select
              onChange={(event) => {
                setinventoryCategory(event.target.value);
              }}
              className="border p-1 border-gray-300 w-full"
            >
              <option>Select Category</option>
              <option>Raw Materials</option>
              <option>Finished Goods</option>
              <option>Packaging Material</option>
            </select>
          </div>

          {inventoryCategory === "Raw Materials" ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Material Name
                </p>
                <input
                  onChange={(event) => {
                    setmaterialName(event.target.value);
                  }}
                  placeholder="Press Machine"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Category</p>
                <select
                  onChange={(event) => {
                    setcategory(event.target.value);
                  }}
                  className="border p-1 border-gray-300 w-full"
                >
                  <option>Select Category</option>
                  <option>Polymers & Plastics</option>
                  <option>Metals & Alloys</option>
                  <option>Chemicals & Solvents</option>
                  <option>Textiles & Fabrics</option>
                  <option>Food-grade Materials / Ingredients</option>
                  <option>Minerals & Powders</option>
                  <option>Electronics & Hardware Components</option>
                  <option>Packaging Materials</option>
                </select>
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Supplier / Vendor
                </p>
                <input
                  onChange={(event) => {
                    setsupplierVendor(event.target.value);
                  }}
                  placeholder="Perfect Chemical Solutions"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Unit Cost</p>
                <input
                  onChange={(event) => {
                    setrawMaterialUnitCost(event.target.value);
                  }}
                  placeholder="100rs pcs"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Reorder Level
                </p>
                <input
                  onChange={(event) => {
                    setreorderLevel(event.target.value);
                  }}
                  placeholder="100rs pcs"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          ) : inventoryCategory === "Finished Goods" ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Product Name
                </p>
                <input
                  onChange={(event) => {
                    setproductName(event.target.value);
                  }}
                  placeholder="Polymers"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">SKU</p>
                <input
                  onChange={(event) => {
                    setsku(event.target.value);
                  }}
                  placeholder="Polymers"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Quantiy</p>
                <input
                  onChange={(event) => {
                    setfinishedGoodsQuantity(event.target.value);
                  }}
                  placeholder="400"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Selling Price
                </p>
                <input
                  onChange={(event) => {
                    setsellingPrice(event.target.value);
                  }}
                  placeholder="300/-"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Manufacturing Date
                </p>
                <input
                  onChange={(event) => {
                    setamnufacturingDate(event.target.value);
                  }}
                  type="date"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          ) : inventoryCategory === "Packaging Material" ? (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Material Name
                </p>
                <input
                  onChange={(event) => {
                    setpackagingMaterialName(event.target.value);
                  }}
                  placeholder="Cello Tape"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">
                  Material Type
                </p>
                <input
                  onChange={(event) => {
                    SetmaterialType(event.target.value);
                  }}
                  placeholder="Cello Tape"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Quantity</p>
                <input
                  onChange={(event) => {
                    setpackagingMaterialQuantity(event.target.value);
                  }}
                  placeholder="400 pcs"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#2f323a] font-semibold mb-1">Unit Cost</p>
                <input
                  onChange={(event) => {
                    setpackagingMaterialUnitCost(event.target.value);
                  }}
                  placeholder="100/-"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              addInventory();
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

export default AddInventoryForm;
