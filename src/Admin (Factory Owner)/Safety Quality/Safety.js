import React, { useState } from "react";
import SafetySubNavbar from "./SafetySubNavbar";
import SafetyChecks from "./Safety Sub Sections/SafetyChecks";

function Safety() {
  const [currentSection, setcurrentSection] = useState("daily_safety_checks");

  return (
    <div className="flex">
      <SafetySubNavbar
        currentSection={currentSection}
        setcurrentSection={setcurrentSection}
      />

      <div className="p-4">
        {currentSection === "daily_safety_checks" ? <SafetyChecks /> : ""}
      </div>
    </div>
  );
}

export default Safety;
