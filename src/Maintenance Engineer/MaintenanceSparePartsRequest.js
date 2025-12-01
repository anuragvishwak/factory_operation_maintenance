import React, { useEffect, useState } from "react";
import MaintenanceEngineerNavbar from "./MaintenanceEngineerNavbar";
import RequestSparePartForm from "./RequestSparePartForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../FirebaseConfig";

function MaintenanceSparePartsRequest() {
  const [openingSparePartsRequestForm, setopeningSparePartsRequestForm] =
    useState(false);
  const [gettingSparePartRequests, setgettingSparePartRequests] = useState([]);
  const [gettingUsers, setgettingUsers] = useState([]);

  async function renderingSparePartRequests() {
    const taskDetails = await getDocs(
      collection(database, "spare_part_request_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingSparePartRequests(multipleArray);
  }

  async function renderingUsers() {
    const taskDetails = await getDocs(collection(database, "user_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingUsers(multipleArray);
  }

  useEffect(() => {
    renderingSparePartRequests();
    renderingUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <MaintenanceEngineerNavbar />
      <div className="bg-white border m-4 p-4 rounded-xl border-gray-300 flex items-center justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">
            Spare Parts Request
          </p>
          <p className="text-[#d42041]">
            Manage Spare Parts Requests from one centralized system.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <input
            placeholder="Search Spare Parts...."
            className="p-1.5 w-96 border border-gray-300"
          />
          <button
            onClick={() => {
              setopeningSparePartsRequestForm(true);
            }}
            className="bg-[#d42041] border border-[#d42041] font-semibold py-1.5 px-3  text-white"
          >
            Request Spare Parts
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 m-4">
        {gettingSparePartRequests.map((request) => (
          <div className="border bg-white border-gray-300">
            <div className="bg-[#2f323a] p-4">
              <div className="flex items-start justify-between">
                <p className="font-bold text-white text-lg">
                  {request.sparePartName}
                </p>
                <p className="bg-white py-0.5 text-sm font-semibold px-4 rounded-full">
                  {request.priority}
                </p>
              </div>
              <p className="text-sm text-[#d42041]">{request.partCode}</p>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-4">
                <div className="border border-gray-300 w-full p-2.5">
                  <p className="text-sm text-[#2f323a]">Machine</p>
                  <p className="text-[#d42041] font-semibold">
                    {request.selectedMachine}
                  </p>
                </div>

                <div className="border border-gray-300 rouned-xl w-full p-2.5">
                  <p className="text-sm text-[#2f323a]">Quantity Required</p>
                  <p className="text-[#d42041] font-semibold">
                    {request.quantityRequired} units
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 rounded-lg mt-4 p-2.5">
                <p className="text-sm text-[#2f323a]">Reason for Request</p>
                <p className="text-[#d42041] font-semibold">
                  {request.reasonForRequest}
                </p>
              </div>

              <hr className="border-gray-300 my-4" />
              <div className="border border-gray-300 rounded-lg mt-4 p-2.5">
                <p className="text-sm text-[#2f323a]">Requested By</p>
                <p className="text-[#d42041] font-semibold">
                  {gettingUsers
                    .filter((user) => user.email === request.requestBy)
                    .map((user) => (
                      <p>{user.fullName}</p>
                    ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openingSparePartsRequestForm && (
        <RequestSparePartForm
          setopeningSparePartsRequestForm={setopeningSparePartsRequestForm}
        />
      )}
    </div>
  );
}

export default MaintenanceSparePartsRequest;
