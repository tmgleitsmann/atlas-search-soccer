import React from "react";
import Select from "react-select";

const Selector = ({ setOperator }) => {
  const API_Options = [
    { value: "text", label: "text" },
    { value: "wildcard", label: "wildcard" },
    { value: "autocomplete", label: "autocomplete" },
  ];

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setOperator(e.value);
  };

  return (
    <Select
      className="w-1/5 p-2 outline-none text-xl"
      options={API_Options}
      onChange={handleChange}
      placeholder="Search Operator"
    />
  );
};

export default Selector;
