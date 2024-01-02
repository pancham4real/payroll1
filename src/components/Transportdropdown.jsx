import React, { useState } from "react";

const Transportdropdown = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label className="dropdown text-sm mr-2 font-bold  ">
        <span> Select Mode : </span>
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
          Air
        </option>
        <option className="font-bold  text-sm" value="Train">
          Train
        </option>
        <option className="font-bold  text-sm" value="Road">
          Road
        </option>
        <option className="font-bold  text-sm" value="Sea">
          Sea
        </option>
      </select>
      {selectedValue && (
        <p className="mt-2 text-xs">You have selected: {selectedValue}</p>
      )}
    </div>
  );
};

export default Transportdropdown;
