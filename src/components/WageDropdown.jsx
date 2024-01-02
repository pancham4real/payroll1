import React, { useState } from "react";

const WageDropdown = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label className="dropdown text-sm mr-2 font-bold  ">
        <span> Select : </span>
      </label>
      <select
        id="dropdown"
        value={selectedValue}
        onChange={handleSelectChange}
        className=" mt-2 border"
      >
        <option className="font-bold  text-sm" value="">
          Select...
        </option>
        <option className="font-bold  text-sm" value="Air">
          TA
        </option>
        <option className="font-bold  text-sm" value="Train">
          LTC
        </option>
      </select>
      {selectedValue && (
        <p className="mt-2 text-xs">You have selected: {selectedValue}</p>
      )}
    </div>
  );
};

export default WageDropdown;
