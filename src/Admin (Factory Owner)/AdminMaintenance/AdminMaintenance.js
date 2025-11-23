import React, { useState } from "react";
import MaintenanceSubNavbar from "./MaintenanceSubNavbar";
import AdminNavbar from "../AdminNavbar";
import PreventiveMaintenancePlanning from "./PreventiveMaintenancePlanning";
import MaintenanceReports from "./MaintenanceReports";
import BreakdownManagement from "./BreakdownManagement";
import WorkOrders from "./WorkOrders";
import SparePartsInventory from "./SparePartsInventory";

function AdminMaintenance() {
  const [currentSection, setcurrentSection] = useState(
    "preventive_maintenance_planning"
  );

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />

      <div className="flex">
        <MaintenanceSubNavbar
          currentSection={currentSection}
          setcurrentSection={setcurrentSection}
        />

        <div className="w-full h-[calc(100vh-56px)] overflow-auto">
          {currentSection === "preventive_maintenance_planning" ? (
            <PreventiveMaintenancePlanning />
          ) : currentSection === "breakdown_management" ? (
            <BreakdownManagement />
          ) : currentSection === "work_orders" ? (
            <WorkOrders />
          ) : currentSection === "spare_parts_invetory" ? (
            <SparePartsInventory />
          ) : currentSection === "maintenance_reports" ? (
            <MaintenanceReports />
          ) : (
            <MaintenanceReports />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminMaintenance;
