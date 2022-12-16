import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const SearchResults = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  let params = useParams();
  const check = JSON.parse(localStorage.getItem(params.input));
  const getCuisine = async (name) => {
    if (check) {
      setResult(check);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      const data = await api.json();
      setLoading(false);
      console.log(data.results);
      setResult(data.results);
      localStorage.setItem(name, JSON.stringify(data.results));
    }
  };

  useEffect(() => {
    getCuisine(params.input);
  }, [params.input]);

  console.log(result);

  const content = result.map((recipe) => {
    return (
      <Card height={18} title={recipe.title} id={recipe.id} image={recipe.image}/>
    );
  });

  return (
    <div className="my-16 flex flex-col gap-14">
      <p className="text-2xl font-bold">Search results for {params.input}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {loading ? "Loading..." : content}
      </div>
    </div>
  );
};

export default SearchResults;
