import React, { useEffect, useState } from "react";
import Pages from "./pages/Pages";
import "./App.css";
import Category from "./components/Category";
import Search from "./components/Search";
import { useStateContext } from "./Contexts/ContextProvider";
import SidebarCategory from "./components/SidebarCategory";

const App = () => {
  const {width} = useStateContext();
  return (
    <div className="flex flex-col">
      {width>640?<Category />:<SidebarCategory/>}
      <Search />
      <Pages />
    </div>
  );
};

export default App;
