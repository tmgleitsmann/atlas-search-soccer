// Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AdvancedSearchPage from "./pages/AdvancedSearchPage";

// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/search" element={<AdvancedSearchPage />} />
      </Routes>
    </>
  );
};

export default App;
