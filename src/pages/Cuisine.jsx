import "@splidejs/react-splide/css";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Route, Routes } from "react-router-dom";
import Card from "../components/Card";
import RecipeDetail from "./RecipeDetail";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const navigate = useNavigate();
  const check = JSON.parse(localStorage.getItem(params.type));
  const getCuisine = async (name) => {
    if (check) {
      setCuisine(check);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );
      const data = await api.json();
      console.log(data.results);
      setCuisine(data.results);
      localStorage.setItem(name, JSON.stringify(data.results));
    }
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const abc = cuisine.map((recipe) => (
      <Card key={recipe.id} height={18} title={recipe.title} id={recipe.id} image={recipe.image}/>
  ));

  return (
    <div className="my-16 flex flex-col gap-14">
      <p className="text-2xl font-bold">{params.type} Cuisine</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {abc}
      </div>
    </div>
  );
};

export default Cuisine;
