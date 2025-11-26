import React, { useState } from "react";
import QualitySubNavbar from "./QualitySubNavbar";
import RawMaterialTemplate from "./Quality Sub Sections/RawMaterialTemplate";
import InProcessQualityTemplate from "./Quality Sub Sections/InProcessQualityTemplate";
import FinishedGoodsQualityTemplate from "./Quality Sub Sections/FinishedGoodsQualityTemplate";

function Quality() {
  const [currentSection, setcurrentSection] = useState("raw_material_quality");

  return (
    <div>
      <QualitySubNavbar
        currentSection={currentSection}
        setcurrentSection={setcurrentSection}
      />

      {currentSection === "raw_material_quality" ? (
        <RawMaterialTemplate />
      ) : currentSection === "finished_goods_quality"? (
        <FinishedGoodsQualityTemplate />
      ) : (
        <InProcessQualityTemplate />
      )}
    </div>
  );
}

export default Quality;
