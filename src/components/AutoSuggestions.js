import React from "react";

const AutoSuggestions = ({
  items,
  setSuggestions,
  showSuggestions,
  searchTerm,
  setSearchTerm,
  setSubmitted,
}) => {
  if (!showSuggestions) return null;
  return (
    <div className="container flex px-4 space-x-6">
      <div className="flex flex-col">
        {items &&
          items.map((item) => {
            return (
              <div
                className="pl-8 my-4 border-b border-gray-300 w-auto text-lg"
                key={item.restaurant_id}
                onClick={(e) => {
                  setSearchTerm(item.name);
                  setSubmitted(true);

                  setSuggestions([]);
                }}
              >
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AutoSuggestions;
