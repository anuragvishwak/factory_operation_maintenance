import React, { useEffect, useState } from "react";
import MaintenanceEngineerNavbar from "./MaintenanceEngineerNavbar";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../FirebaseConfig";

function ActiveJobs() {
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
    <div className="bg-gray-100 min-h-screen h-full">
      <MaintenanceEngineerNavbar />
      <div className="bg-white border m-4 p-4 border-gray-300 flex items-center justify-between">
        <div>
          <p className="text-[#2f323a] text-xl font-bold">Active Jobs</p>
          <p className="text-[#d42041]">
            See All machine maintenance jobs from one centralized system.
          </p>
        </div>
        <input
          placeholder="Search Breakdown Tickets...."
          className="p-1.5 w-96 border border-gray-300"
        />
      </div>

      <div className="grid grid-cols-3 m-4 gap-4">
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

            <div className="border-[#d42041] border-t-8 p-4">
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
              <div className="mt-4 flex justify-end">
                <select className="border border-gray-300 p-1 w-60">
                  <option className="text-[#d42041] font-semibold">
                    Maintenance Status
                  </option>
                  <option className="text-[#d42041] font-semibold">
                    Pending
                  </option>
                  <option className="text-[#d42041] font-semibold">
                    Active
                  </option>
                  <option className="text-[#d42041] font-semibold">
                    In Progress
                  </option>
                  <option className="text-[#d42041] font-semibold">
                    Completed
                  </option>
                  <option className="text-[#d42041] font-semibold">
                    Closed
                  </option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveJobs;
