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
}) => {
  // const [suggestions, setSuggestions] = useState([]);
  // const [showSuggestions, setShowSuggestions] = useState(false);
  const initial = useRef(true);

  // if (searchTerm === "") setShowSuggestions(false);

  const Suggestions_AC_Endpoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/autocomplete";

  console.log("SEARCHTERM: " + searchTerm);

  // this is a function definition that calls another function API.fetchContent()
  const fetchAC_Content = async (searchTerm) => {
    let endpoint = Suggestions_AC_Endpoint;

    if (searchTerm) {
      endpoint = endpoint + `?searchTerm=${searchTerm}`;
    }
    try {
      let players = await (await fetch(endpoint)).json();

      console.log(endpoint);
      console.log(players);
      ////  setSuggestions(players);
    } catch (error) {
      console.error(error);
    }
  };

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
    <form className="flex w-3/5 items-center " onSubmit={handleSubmit}>
      <input
        type="text"
        className="relative border border-gray-700 w-4/5 px-6 py-2 text-2xl rounded-lg outline-none"
        placeholder="type to find players..."
        onChange={handleChange}
      ></input>
      <Selector setOperator={setOperator} />
      <button type="submit">
        <img
          className="mx-auto w-20 text-white mb-2 content-image"
          src={SearchIcon}
          alt="search"
          onClick={handleSubmit}
        />
      </button>
      {/*showSuggestions && (
        <div className="absolute z-10 w-full bg-white rounded shadow-2xl ml-32 text-san-juan-700 top-24 font-body">
          <AutoSuggestions
            items={suggestions}
            showSuggestions={showSuggestions}
            setSuggestions={setSuggestions}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setSubmitted={setSubmitted}
          />
        </div>
      )*/}
    </form>
  );
};

export default SearchBar;
