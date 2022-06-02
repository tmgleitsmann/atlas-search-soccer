import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-4/5 ">
      <input
        className="border border-indigo-200 w-4/5 px-6 py-2 text-2xl rounded-lg"
        placeholder="type to find players..."
        onChange={(event) => {
          if (event.target.value.length > 3) {
            setSearchTerm(event.target.value);
          }
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
