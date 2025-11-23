import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import OperationsSubNavbar from "./OperationsSubNavbar";
import MachineManagement from "./MachineManagement";
import DowntimeReasons from "./DowntimeReasons";
import ProductionLines from "./ProductionLines";
import MachineAssignment from "./MachineAssignment";
import DailyProductionLogs from "./DailyProductionLogs";
import ShiftLogs from "./ShiftLogs";
import MaterialConsumption from "./MaterialConsumption";
import ProductionReports from "./ProductionReports";

function AdminOperations() {
  const [currentSection, setcurrentSection] = useState("machine_management");

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />
     <div className="flex">
         <OperationsSubNavbar
        currentSection={currentSection}
        setcurrentSection={setcurrentSection}
      />

      <div className="w-full h-[calc(100vh-56px)] overflow-auto">
        {currentSection === "machine_management" ? (
          <MachineManagement />
        ) : currentSection === "production_lines" ? (
          <ProductionLines />
        ) : currentSection === "machine_assignment" ? (
          <MachineAssignment />
        ) : currentSection === "daily_production_logs" ? (
          <DailyProductionLogs />
        ) : currentSection === "shift_logs" ? (
          <ShiftLogs />
        ) : currentSection === "material_consumption" ? (
          <MaterialConsumption />
        ) : currentSection === "production_reports" ? (
          <ProductionReports />
        ) : (
          <DowntimeReasons />
        )}
      </div>
     </div>
    </div>
  );
}

export default AdminOperations;
