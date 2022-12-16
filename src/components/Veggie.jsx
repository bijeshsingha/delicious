import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import { useStateContext } from "../Contexts/ContextProvider";
import Card from "./Card";

const Veggie = () => {
  const { width } = useStateContext()
  const check = localStorage.getItem("veggie");
  const [veggie, setVeggie] = useState(check ? JSON.parse(check) : []);
  useEffect(() => {
    getVeggies();
  }, []);

  const getVeggies = async () => {
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      setVeggie(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
    }
  };

  const recipes = veggie.map((recipe) => (
    <SplideSlide key={recipe.id}>
      <Card height={25} title={recipe.title} id={recipe.id} image={recipe.image}/>
    </SplideSlide>
  ));

  return (
    <div className="flex flex-col gap-10 my-16">
      <p className="text-2xl font-bold">Vegeterian Picks</p>
      <div className="lg:px-10 px-0">
        <Splide
          options={{
            perPage: width<640?1:(width<1070?2:3),
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

export default Veggie;
