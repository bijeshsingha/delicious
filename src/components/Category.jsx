import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { BsHouseFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
import NavLinks from "./NavLinks";

const Category = () => {
  const { width } = useStateContext();
  const normalLink =
    "flex flex-col justify-center items-center rounded-[50%] w-[6rem] h-[6rem] scale-90 text-white text-xl";
  const navLinkStyle = ({ isActive }) => {
    return {
      background: isActive
        ? "linear-gradient(to right, #f27121, #e94057)"
        : "linear-gradient(35deg, #494949, #313131)",
    };
  };

  return (
    <div className="flex justify-center items-center gap-4 my-4">
      <NavLinks normalLink={normalLink} navLinkStyle={navLinkStyle}/>
    </div>
  );
};

export default Category;
