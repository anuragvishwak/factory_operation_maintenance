import React, { useState } from "react";
import AddFinishedGoodsQualityTemplateForm from "./AddFinishedGoodsQualityTemplateForm";

function FinishedGoodsQualityTemplate() {
  const [openingGoodsQualityTemplateForm, setopeningGoodsQualityTemplateForm] =
    useState(false);
  return (
    <div>
      <div className="flex items-center bg-white p-3 border border-gray-300 justify-between">
        <p className="text-[#d42041] text-xl font-bold">
          Finished Goods Quality
        </p>
        <button
          onClick={() => {
            setopeningGoodsQualityTemplateForm(true);
          }}
          className="bg-[#d42041] text-sm font-semibold text-white p-1 px-3"
        >
          Add Finished Goods Template
        </button>
      </div>

      <div></div>

      {openingGoodsQualityTemplateForm && <AddFinishedGoodsQualityTemplateForm setopeningGoodsQualityTemplateForm = {setopeningGoodsQualityTemplateForm}/>}
    </div>
  );
}

export default FinishedGoodsQualityTemplate;
