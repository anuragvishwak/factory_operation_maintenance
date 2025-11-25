import React, { useEffect, useState } from "react";
import AddSpartPartsInventoryForm from "./MaintenanceAddForms/AddSpartPartsInventoryForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../FirebaseConfig";

function SparePartsInventory() {
  const [addSparePartsForm, setaddSparePartsForm] = useState(false);
  const [gettingSpareParts, setgettingSpareParts] = useState([]);
  async function renderingSpareParts() {
    const taskDetails = await getDocs(
      collection(database, "spare_parts_inventory_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingSpareParts(multipleArray);
  }

  useEffect(() => {
    renderingSpareParts();
  }, []);

  return (
    <div className="m-4">
      <div className="flex bg-white p-4 border border-gray-300 items-end justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">
            Spare Parts Inventory
          </p>
          <p className="text-[#d42041]">
            Add and manage all Spare Parts from one centralized system.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <input
            placeholder="Search Machines"
            className="border border-gray-300 py-1.5 px-3 w-96"
          />
          <button
            onClick={() => {
              setaddSparePartsForm(true);
            }}
            className="bg-[#d42041] py-1.5 px-3 text-white font-semibold"
          >
            + Add Spare Parts
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {gettingSpareParts.map((spare) => (
          <div className="border bg-white border-gray-300">
            <div className="bg-[#2f323a] p-4 text-white">
              <p className="font-bold text-white text-lg">
                {spare.partCategory}
              </p>
              <p className="text-[#d42041] text-sm">{spare.partCode}</p>
            </div>

            <div className="p-4">
              <div className="border w-full border-gray-300 p-3">
                <p className="text-sm text-[#2f323a]">Part Name</p>
                <p className="text-[#d42041] font-semibold">{spare.partName}</p>
              </div>

              <div className="border my-3 w-full border-gray-300 p-3">
                <p className="text-sm text-[#2f323a]">Vendor</p>
                <p className="text-[#d42041] font-semibold">{spare.vendor}</p>
              </div>

              <div className="p-3 border border-gray-300">
                <div className="">
                  <p className="text-sm text-[#2f323a]">Current Stock</p>
                  <p className="text-[#d42041] font-semibold">
                    {spare.currentQuantity} pcs
                  </p>
                </div>

                <hr className="border-gray-300 my-3" />

                <div className="">
                  <p className="text-sm text-red-500">Minimum Stock Alert</p>
                  <p className="text-red-500 font-semibold">
                    {spare.minimumStockAlert} pcs
                  </p>
                </div>
              </div>

              <div className="border mt-3 w-full border-gray-300 p-3">
                <p className="text-sm text-[#2f323a]">Last Restocked Date</p>
                <p className="text-[#d42041] font-semibold">
                  {spare.lastRestockDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {addSparePartsForm && (
        <AddSpartPartsInventoryForm
          setaddSparePartsForm={setaddSparePartsForm}
        />
      )}
    </div>
  );
}

export default SparePartsInventory;
