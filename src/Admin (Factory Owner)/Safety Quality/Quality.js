import React, { useState } from "react";
import QualitySubNavbar from "./QualitySubNavbar";
import RawMaterialTemplate from "./Quality Sub Sections/RawMaterialTemplate";

function Quality() {
  const [currentSection, setcurrentSection] = useState("raw_material_quality");

  return (
    <div>
      <QualitySubNavbar
        currentSection={currentSection}
        setcurrentSection={setcurrentSection}
      />

      {currentSection === "raw_material_quality" ? <RawMaterialTemplate /> : ""}
    </div>
  );
}

export default Quality;
