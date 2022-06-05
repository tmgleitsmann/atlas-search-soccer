import React from "react";
import Selector from "./Selector";
import SearchIcon from "../images/Search.png";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  operator,
  setOperator,
  setSubmitted,
}) => {
  return (
    <div className="flex w-3/5 items-center ">
      <input
        className="border border-gray-700 w-4/5 px-6 py-2 text-2xl rounded-lg"
        placeholder="type to find players..."
        onChange={(event) => {
          if (event.target.value.length > 3) {
            setSearchTerm(event.target.value);
          }
        }}
      ></input>
      <Selector setOperator={setOperator} />
      <img
        className="mx-auto w-20 text-white mb-2 content-image"
        src={SearchIcon}
        alt="search"
        onClick={() => {
          setSubmitted(true);
          console.log("Click!");
        }}
      />
    </div>
  );
};

export default SearchBar;
