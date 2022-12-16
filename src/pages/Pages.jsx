import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import SearchResults from "./SearchResults";
import RecipeDetail from "./RecipeDetail";

function Pages() {
  return (
    <div className="sm:mx-[1rem] md:mx-[5rem] mx-[2rem] lg:mx-[15%]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cuisine/:type/*" element={<Cuisine />}/>
        <Route path="/recipe-detail/:title" element={<RecipeDetail />}/>
        <Route path="search-results/:input" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default Pages;
