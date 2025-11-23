import React, { useEffect, useState } from "react";
import { database } from "../../../FirebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

function AddBreakdownTicketForm({ setopeningBreakdownTicketForm }) {
  const [gettingMachines, setgettigMachines] = useState([]);
  const [selectedMachine, setselectedMachine] = useState("");
  const [issueDescription, setissueDescription] = useState("");
  const [severity, setseverity] = useState("");
  const [reportedBy, setreportedBy] = useState("");
  const [dateTime, setdateTime] = useState("");
  const [breakdownType, setbreakdownType] = useState("");

  async function renderingMachines() {
    const taskDetails = await getDocs(collection(database, "machine_database"));
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettigMachines(multipleArray);
  }

  function addBreakdownTicket() {
    const breakdownTicketData = {
      selectedMachine: selectedMachine,
      issueDescription: issueDescription,
      severity: severity,
      reportedBy: reportedBy,
      dateTime: dateTime,
      breakdownType: breakdownType,
    };

    try {
      addDoc(collection(database, "breakdown_database"), breakdownTicketData);
      alert("Breakdown Ticket added successfully!!!");
      setopeningBreakdownTicketForm(false);
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
            Add Breakdown Ticket
          </p>
          <button
            onClick={() => {
              setopeningBreakdownTicketForm(false);
            }}
            className="font-bold text-[#2f323a]"
          >
            Close
          </button>
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
            {gettingMachines.map((machine) => (
              <option value={machine.machineName} className="">
                {machine.machineName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="text-[#2f323a] my-3 font-semibold mb-1">
            Issue Description
          </p>
          <textarea
            onChange={(event) => {
              setissueDescription(event.target.value);
            }}
            placeholder="Machines make a lot of noises."
            className="border border-gray-300 p-1 w-full"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Breakdown Type</p>
            <select
              onChange={(event) => {
                setbreakdownType(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Type</option>
              <option>Mechanical</option>
              <option>Electrical</option>
              <option>Software / Control System</option>
              <option>Instrumentation / Sensors</option>
            </select>
          </div>
          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Severity</p>
            <select
              onChange={(event) => {
                setseverity(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Severity</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Reported By</p>
            <input
              onChange={(event) => {
                setreportedBy(event.target.value);
              }}
              placeholder="Vikram Jain"
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#2f323a] font-semibold mb-1">Date / Time</p>
            <input
              onChange={(event) => {
                setdateTime(event.target.value);
              }}
              type="date"
              className="border border-gray-300 p-1 w-full"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              addBreakdownTicket();
            }}
            className="bg-[#d42041] mt-5 py-1 px-4 text-white font-semibold"
          >
            Add Maintenance Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBreakdownTicketForm;
