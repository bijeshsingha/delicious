import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search-results/"+input)
  };
  return (
    <form className="h-12 mx-[1rem] lg:mx-[30%] sm:mx-[10%] lg:my-5 sm:my-5 mt-20" onSubmit={submitHandler}>
      <div className="w-full relative">
        <FaSearch className="absolute text-white top-[50%] left-0 translate-x-[100%] translate-y-[-50%]"></FaSearch>
        <input
          className="w-full focus:outline-none bg-gradient-to-r text-white text-lg from-slate-500 to-slate-600 py-4 px-12 rounded-xl"
          type="text"
          placeholder='Search for recipe'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          required
        />
      </div>
    </form>
  );
};

export default Search;
