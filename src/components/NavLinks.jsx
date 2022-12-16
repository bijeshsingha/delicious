import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { BsHouseFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
const NavLinks = (props) => {
  const { isOpen, setIsOpen } = useStateContext();
  return (
    <>
      <NavLink
        to="/"
        className={props.normalLink}
        style={props.navLinkStyle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <BsHouseFill />
        <p className="px-2 scale-75">Home</p>
      </NavLink>
      <NavLink
        to="/cuisine/Italian"
        className={props.normalLink}
        style={props.navLinkStyle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaPizzaSlice />
        <p className="px-2 scale-75">Italian</p>
      </NavLink>
      <NavLink
        to="/cuisine/American"
        className={props.normalLink}
        style={props.navLinkStyle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaHamburger />
        <p className="px-2 scale-75">American</p>
      </NavLink>
      <NavLink
        to="/cuisine/Thai"
        className={props.normalLink}
        style={props.navLinkStyle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <GiNoodles />
        <p className="px-2 scale-75">Thai</p>
      </NavLink>
      <NavLink
        to="/cuisine/Chinese"
        className={props.normalLink}
        style={props.navLinkStyle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <GiChopsticks />
        <p className="px-2 scale-75">Chinese</p>
      </NavLink>
    </>
  );
};

export default NavLinks;
