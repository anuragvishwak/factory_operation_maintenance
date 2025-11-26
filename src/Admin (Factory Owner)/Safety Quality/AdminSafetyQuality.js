import React, { useState } from "react";
import AdminNavbar from "../AdminNavbar";
import Safety from "./Safety";
import Quality from "./Quality";

function AdminSafetyQuality() {
  const [currentSection, setcurrentSection] = useState("safety");

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar
        currentSection={currentSection}
        setcurrentSection={setcurrentSection}
      />
      <div>
        <div className="">
          {currentSection === "safety" ? <Safety /> : <Quality />}
        </div>
      </div>
    </div>
  );
}

export default AdminSafetyQuality;
