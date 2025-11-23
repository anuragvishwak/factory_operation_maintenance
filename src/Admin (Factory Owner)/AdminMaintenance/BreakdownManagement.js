import React, { useEffect, useState } from "react";
import AddBreakdownTicketForm from "./MaintenanceAddForms/AddBreakdownTicketForm";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../FirebaseConfig";

function BreakdownManagement() {
  const [openingBreakdownTicketForm, setopeningBreakdownTicketForm] =
    useState(false);
  const [gettingBreakdownTickets, setgettingBreakdownTickets] = useState([]);
  async function renderingBreakdownTickets() {
    const taskDetails = await getDocs(
      collection(database, "breakdown_database")
    );
    let multipleArray = taskDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingBreakdownTickets(multipleArray);
  }

  useEffect(() => {
    renderingBreakdownTickets();
  }, []);

  return (
    <div className="m-4">
      <div className="flex bg-white p-4 border border-gray-300 items-end justify-between">
        <div className="">
          <p className="text-[#2f323a] text-xl font-bold">
            Breakdown Management
          </p>
          <p className="text-[#d42041]">
            Add and manage all Breakdown tickets from one centralized system.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <input
            placeholder="Search breakdowns..."
            className="border border-gray-300 py-1.5 px-3 w-96"
          />
          <button
            onClick={() => {
              setopeningBreakdownTicketForm(true);
            }}
            className="bg-[#d42041] py-1.5 px-3 text-white font-semibold"
          >
            + Add Breakdown Ticket
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-4 gap-4">
        {gettingBreakdownTickets.map((breakdown) => (
          <div className="border bg-white border-gray-300">
            <div className="bg-[#2f323a] p-4 text-white">
              <div className="flex items-start justify-between">
                <p className="font-bold text-white text-lg">
                  {breakdown.selectedMachine}
                </p>

                <p className="font-semibold bg-[#d42041] py-1 px-3 rounded-full text-white text-sm">
                  {breakdown.severity}
                </p>
              </div>

              <p className="text-[#d42041]">{breakdown.breakdownType}</p>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="border w-full border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Report Date</p>
                  <p className="text-[#d42041] font-semibold">
                    {breakdown.dateTime}
                  </p>
                </div>

                <div className="border w-full border-gray-300 p-3">
                  <p className="text-sm text-[#2f323a]">Reported By</p>
                  <p className="text-[#d42041] font-semibold">
                    {breakdown.reportedBy}
                  </p>
                </div>
              </div>

              <div className="border w-full mt-4 border-gray-300 p-3">
                <p className="text-sm text-[#2f323a]">Issue Description</p>
                <p className="text-[#d42041] font-semibold">
                  {breakdown.issueDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openingBreakdownTicketForm && (
        <AddBreakdownTicketForm
          setopeningBreakdownTicketForm={setopeningBreakdownTicketForm}
        />
      )}
    </div>
  );
}

export default BreakdownManagement;
