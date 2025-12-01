import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../FirebaseConfig";

function RequestSparePartForm({ setopeningSparePartsRequestForm }) {
  const currentUser = localStorage.getItem("email");
  const requestDate = new Date(2025, 10, 27, 10, 42);  
  const [gettingMachines, setgettigMachines] = useState([]);
  const [selectedMachine, setselectedMachine] = useState("");
  const [sparePartName, setsparePartName] = useState("");
  const [partCode, setpartCode] = useState("");
  const [quantityRequired, setquantityRequired] = useState("");
  const [priority, setpriority] = useState("");
  const [reasonForRequest, setreasonForRequest] = useState("");

  async function renderingMachines() {
    const taskDetails = await getDocs(
      collection(database, "machine_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettigMachines(multipleArray);
  }

  async function addSparePartRequest() {
    const sparePartData = {
      selectedMachine: selectedMachine,
      sparePartName: sparePartName,
      partCode: partCode,
      quantityRequired: quantityRequired,
      priority: priority,
      reasonForRequest: reasonForRequest,
      requestBy: currentUser,
      requestDate: requestDate
    };

     try {
          addDoc(collection(database, "spare_part_request_database"), sparePartData);
          alert("Spare Part requested successfully!!!");
          setopeningSparePartsRequestForm(false);
        //   renderingMachines();
        } catch {
          console.log("Something went wrong.");
        }
  }

  useEffect(() => {
    renderingMachines();
  }, []);

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-4">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-[#d42041] text-2xl font-bold">
            Request Spare Part
          </p>
          <button
            onClick={() => {
              setopeningSparePartsRequestForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
        </div>

        <div>
          <div className="grid grid-cols-3 mb-4 gap-4">
            <div>
              <p className="text-[#2f323a] font-semibold mb-1">Machine</p>
              <select
                onChange={(event) => {
                  setselectedMachine(event.target.value);
                }}
                className="border border-gray-300 p-1 w-full"
              >
                <option>Select Machine</option>
                {gettingMachines.map((machine) => (
                  <option value={machine.machineName} className="">
                    {machine.machineName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="text-[#2f323a] font-semibold mb-1">
                Spare Part Name
              </p>
              <input
                onChange={(event) => {
                  setsparePartName(event.target.value);
                }}
                className="border border-gray-300 p-1 w-full"
              />
            </div>
            <div>
              <p className="text-[#2f323a] font-semibold mb-1">
                Spare Part Code
              </p>
              <input
                onChange={(event) => {
                  setpartCode(event.target.value);
                }}
                className="border border-gray-300 p-1 w-full"
              />
            </div>

            <div>
              <p className="text-[#2f323a] font-semibold mb-1">
                Quantity Required
              </p>
              <input
                onChange={(event) => {
                  setquantityRequired(event.target.value);
                }}
                className="border border-gray-300 p-1 w-full"
              />
            </div>

            <div>
              <p className="text-[#2f323a] font-semibold mb-1">Priority</p>
              <select
                onChange={(event) => {
                  setpriority(event.target.value);
                }}
                className="border border-gray-300 p-1 w-full"
              >
                <option>Select Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Emergency</option>
              </select>
            </div>
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">
              Reason for Request
            </p>
            <textarea
              onChange={(event) => {
                setreasonForRequest(event.target.value);
              }}
              className="border h-40 border-gray-300 p-1 w-full"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              addSparePartRequest();
            }}
            className="bg-[#d42041] mt-5 py-1 px-4 text-white font-semibold"
          >
            Request Spare Part
          </button>
        </div>
      </div>
    </div>
  );
}

export default RequestSparePartForm;
