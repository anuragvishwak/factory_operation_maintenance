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
      <div className="bg-white border m-4 p-4 rounded-xl border-gray-300 flex items-center justify-between">
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

      <div className="flex justify-center bg-white rounded-xl p-4 border border-gray-300 m-4">
        <table className="w-full table-auto">
          <thead className="text-[#2f323a] bg-gray-100">
            <th className="py-1 text-start px-8 font-medium">Breakdown Date</th>
            <th className="text-start font-medium">Machine Name</th>
            <th className="text-start font-medium">Breakdown Type</th>
            <th className="text-start font-medium">Severity</th>
            <th className="text-start font-medium">Reported By</th>
            <th className="text-start font-medium">Description</th>
          </thead>

          <tbody className="">
            {gettingBreakdownTickets.map((breakdown) => (
              <tr className="border-y border-gray-300">
                <td className="text-start text-[#2f323a] py-1 px-8">
                  {breakdown.dateTime}
                </td>
                <td>
                  <div>
                    <p className="text-start text-[#2f323a] font-semibold">
                      {breakdown.selectedMachine}
                    </p>
                    <p className="text-[#2f323a] text-[12px]">MAC-567</p>
                  </div>
                </td>
                <td className="text-start text-[#2f323a]">
                  {breakdown.breakdownType}
                </td>
                <td className="text-start text-[#2f323a]">
                  {breakdown.severity}
                </td>
                <td className="text-start text-[#2f323a]">
                  {breakdown.reportedBy}
                </td>
                <td className="text-justify text-[#2f323a]">
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
