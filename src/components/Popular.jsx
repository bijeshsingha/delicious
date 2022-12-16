import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import { useStateContext } from "../Contexts/ContextProvider";
import Card from "./Card";

const Popular = () => {
  const { width } = useStateContext();
  const check = localStorage.getItem("popular");
  const [popular, setPopular] = useState(check ? JSON.parse(check) : [])
  useEffect(() => {
    getPopular()
  }, []);

  const getPopular = async () => {
    if (check) {
      setPopular(JSON.parse(check))
    }
    else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      setPopular(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes))
    }
  };

  const recipes = popular.map((recipe) => (
    <SplideSlide key={recipe.id}>
      <Card height={25} title={recipe.title} id={recipe.id} image={recipe.image} />
    </SplideSlide>
  ));

  return (
    <div className="flex flex-col gap-10 my-16">
      <p className="text-2xl font-bold">Popular Picks</p>
      <div className="lg:px-10 px-0">
        <Splide
          options={{
            perPage: width < 640 ? 1 : (width < 1070 ? 3 : 4),
            arrows: false,
            pagination: true,
            drag: "free",
            gap: "5rem",
          }}
        >
          {recipes}
        </Splide>
      </div>
    </div>
  );
};

export default Popular;
