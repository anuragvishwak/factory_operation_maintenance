import React, { useEffect, useState } from "react";
import AddInventoryForm from "./AddInventoryForm";
import AdminNavbar from "./AdminNavbar";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../FirebaseConfig";

function AdminInventoryManagement() {
  const [openingAddInventoryForm, setopeningAddInventoryForm] = useState(false);
  const [gettingInventoryDetails, setgettingInventoryDetails] = useState([]);

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

  useEffect(() => {
    renderingInventory();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />
      <div className="flex bg-white p-4 m-4 border border-gray-300 items-end justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">
            Inventory Mangement
          </p>
          <p className="text-[#d42041]">
            Add and manage Inventory from one centralized system.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <input
            placeholder="Search Inventory...."
            className="border border-gray-300 py-1.5 px-3 w-96"
          />
          <button
            onClick={() => {
              setopeningAddInventoryForm(true);
            }}
            className="bg-[#d42041] py-1.5 px-3 text-white font-semibold"
          >
            + Add Inventory
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 m-4 gap-4">
        {gettingInventoryDetails.map((inventory) => (
          <div
            key={inventory.id}
            className="border bg-white border-gray-300 rounded shadow-sm"
          >
            <div className="bg-[#2f323a] p-4 text-white">
              <p className="text-xl font-bold mb-1.5">
                {inventory.materialName ||
                  inventory.productName ||
                  inventory.packagingMaterialName}
              </p>

              <div className="flex items-center space-x-2">
                {inventory.category && (
                  <p className="border border-white py-0.5 px-4 rounded-full text-white text-sm font-semibold">
                    {inventory.category}
                  </p>
                )}

                <p className="font-semibold text-sm rounded-full py-0.5 px-4 text-white bg-[#d42041]">
                  {inventory.inventoryCategory}
                </p>
              </div>
            </div>

            <div className="border-t-8 border-[#d42041] p-4">
              {inventory.inventoryCategory === "Raw Materials" && (
                <>
                  <div className="border mb-4 border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Supplier / Vendor</p>
                    <p className="text-[#d42041] font-semibold">
                      {inventory.supplierVendor}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-300 p-3">
                      <p className="text-sm text-[#2f323a]">Unit Cost</p>
                      <p className="text-[#d42041] font-semibold">
                        {inventory.rawMaterialUnitCost || "—"}
                      </p>
                    </div>

                    <div className="border border-gray-300 p-3">
                      <p className="text-sm text-[#2f323a]">Reorder Level</p>
                      <p className="text-[#d42041] font-semibold">
                        {inventory.reorderLevel || "—"}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {inventory.inventoryCategory === "Finished Goods" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">SKU</p>
                    <p className="text-[#d42041] font-semibold">
                      {inventory.sku}
                    </p>
                  </div>

                  <div className="border border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Quantity</p>
                    <p className="text-[#d42041] font-semibold">
                      {inventory.finishedGoodsQuantity}
                    </p>
                  </div>

                  <div className="border border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Selling Price</p>
                    <p className="text-[#d42041] font-semibold">
                      {inventory.sellingPrice}
                    </p>
                  </div>

                  <div className="border border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Manufacturing Date</p>
                    <p className="text-[#d42041] font-semibold">
                      {inventory.manufacturingDate}
                    </p>
                  </div>
                </div>
              )}

              {inventory.inventoryCategory === "Packaging Material" && (
                <div>
                  <div className="border border-gray-300 p-3">
                    <p className="text-sm text-[#2f323a]">Material Type</p>
                    <p className="text-[#d42041] font-semibold">
                      {inventory.materialType}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 mt-4 gap-4">
                    <div className="border border-gray-300 p-3">
                      <p className="text-sm text-[#2f323a]">Quantity</p>
                      <p className="text-[#d42041] font-semibold">
                        {inventory.packagingMaterialQuantity}
                      </p>
                    </div>

                    <div className="border border-gray-300 p-3">
                      <p className="text-sm text-[#2f323a]">Unit Cost</p>
                      <p className="text-[#d42041] font-semibold">
                        {inventory.packagingMaterialUnitCost}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {openingAddInventoryForm && (
        <AddInventoryForm
          setopeningAddInventoryForm={setopeningAddInventoryForm}
        />
      )}
    </div>
  );
}
export default AdminInventoryManagement;
