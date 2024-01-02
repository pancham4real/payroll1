import { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown" className="ml-10 font-bold mb-2 pl-80 mr-2">
        Financial Year:
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">-- Choose an option --</option>
        <option value="option1">2020</option>
        <option value="option2">2021</option>
        <option value="option3">2022</option>
        <option value="option3">2023</option>
        <option value="option3">2024</option>
        <option value="option3">2025</option>
        <option value="option3">2026</option>
      </select>
      {/* <p>You selected: {selectedOption}</p> */}
    </div>
  );
};

export default Dropdown;
