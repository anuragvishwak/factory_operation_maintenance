import React, { useEffect, useState } from "react";
import MaintenanceSubNavbar from "../Admin (Factory Owner)/AdminMaintenance/MaintenanceSubNavbar";
import MaintenanceEngineerNavbar from "./MaintenanceEngineerNavbar";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../FirebaseConfig";

function MaintenanceBreakdown() {
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
          <p className="text-[#2f323a] text-xl font-bold">Brekadown</p>
          <p className="text-[#d42041]">
            See All History of Breakdown Tickets from one centralized system.
          </p>
        </div>
        <input
          placeholder="Search Breakdown Tickets...."
          className="p-1.5 w-96 border border-gray-300"
        />
      </div>

      <div className="flex justify-center bg-white p-4 border border-gray-300 m-4">
        <table className="w-full border border-gray-300 table-auto">
          <thead className="bg-[#2f323a] border border-gray-300 text-white">
            <th className="py-1 text-start px-8">Breakdown Date</th>
            <th className="text-start">Machine Name</th>
            <th className="text-start">Breakdown Type</th>
            <th className="text-start">Severity</th>
            <th className="text-start">Reported By</th>
            <th className="text-start">Description</th>
          </thead>

          <tbody>
            {gettingBreakdownTickets.map((breakdown) => (
              <tr className="border-b border-gray-300">
                <td className="text-start text-[#d42041] font-semibold py-1 px-8">
                  {breakdown.dateTime}
                </td>
                <td className="text-start text-[#d42041] font-semibold">
                  {breakdown.selectedMachine}
                </td>
                <td className="text-start text-[#d42041] font-semibold">
                  {breakdown.breakdownType}
                </td>
                <td className="text-start text-[#d42041] font-semibold">
                  {breakdown.severity}
                </td>
                <td className="text-start text-[#d42041] font-semibold">
                  {breakdown.reportedBy}
                </td>
                <td className="text-justify text-[#d42041] font-semibold">
                  {breakdown.issueDescription}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MaintenanceBreakdown;
