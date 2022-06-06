import React, { useState, useEffect, useRef } from "react";
import Selector from "./Selector";
import SearchIcon from "../images/Search.png";
import AutoSuggestions from "./AutoSuggestions";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  operator,
  setOperator,
  setSubmitted,
  players,
  showAutocompletePlayers,
  setShowAutocompletePlayers,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMITTING!!!");
    setSubmitted(true);
  };
  const handleChange = (event) => {
    if (event.target.value.length > 3) {
      setSearchTerm(event.target.value);
    }
  };

  return (
    <div className=" w-full items-center">
      <form
        className="relative flex w-3/5 mx-auto items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex items-center">
          <input
            type="text"
            className="border border-gray-700 w-4/5 px-6 py-2 text-2xl rounded-lg outline-none"
            placeholder="type to find players..."
            onChange={handleChange}
          ></input>
          <Selector setOperator={setOperator} />
          <button type="submit">
            <img
              className="mx-auto w-20 text-white mb-2 content-image text-2xl"
              src={SearchIcon}
              alt="search"
              onClick={handleSubmit}
            />
          </button>
        </div>
      </form>
      {showAutocompletePlayers && (
        <div className="absolute bottom-0 right-0 z-10  text-left w-2/5 bg-white rounded shadow-2xl">
          <AutoSuggestions
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setSubmitted={setSubmitted}
            players={players}
            setShowAutocompletePlayers={setShowAutocompletePlayers}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;

// const [suggestions, setSuggestions] = useState([]);
// const [showSuggestions, setShowSuggestions] = useState(false);
//const initial = useRef(true);

// if (searchTerm === "") setShowSuggestions(false);

// this is a function definition that calls another function API.fetchContent()
// const fetchAC_Content = async (searchTerm) => {
//   let endpoint = Suggestions_AC_Endpoint;

//   if (searchTerm.length > 3) {
//     endpoint = endpoint + `?searchTerm=${searchTerm}`;
//   }
//   try {
//     let players = await (await fetch(endpoint)).json();

//     console.log(players);
//     ////  setSuggestions(players);
//   } catch (error) {
//     console.error(error);
//   }
// };

// initial render and search with 1 page calling the fetchContent function above
// eslint-disable-next-line
// useEffect(() => {
//   if (initial.current) {
//     initial.current = false;
//     return;
//   }

//   // build out autocomplete terms
//   if (searchTerm !== "" && searchTerm.length > 3) {
//     fetchAC_Content(searchTerm);
//     if (suggestions.length !== 0) {
//       setShowSuggestions(true);
//       return;
//     }
//     setShowSuggestions(false);
//   }
//   return;

//   // eslint-disable-next-line
// }, [searchTerm]);
