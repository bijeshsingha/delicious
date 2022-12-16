import React, { useState } from 'react'
import { BsHouseFill } from 'react-icons/bs';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../Contexts/ContextProvider';
import NavLinks from './NavLinks';


const SidebarCategory = () => {

  const navigate = useNavigate()

  const { isOpen, setIsOpen } = useStateContext();
  const [touchPosition, setTouchPosition] = useState(null)

  const hamberger = (
    <div
      id="hamburger-icon"
      className={`hamburger-icon ${isOpen && "open"}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );

  function handleTouchMove(e) {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      setIsOpen(false)
    }

    setTouchPosition(null)
  }
  const normalLink =
    "flex justify-start pl-4 items-center rounded-xl w-full h-[3rem] text-white text-xl";
  const navLinkStyle = ({ isActive }) => {
    return {
      background: isActive
        ? "linear-gradient(to right, #f27121, #e94057)"
        : "linear-gradient(35deg, #494949, #313131)",
    };
  };

  return (
    <div className="p-4 flex w-full justify-between fixed z-[100] bg-white">
      {hamberger}
      <div className="flex gap-1">
        <GiNoodles size={30} color="red"/>
        <p className="font-semibold text-xl text-red-500">Delicious</p>
      </div>
      <BsHouseFill size={32} onClick={()=>{navigate('/')}}/>
      {isOpen &&
        <div className="bg-[rgba(0,0,0,0.5)] flex w-full fixed top-0 left-0 z-40">
          <div id="sidebar" className="float-left h-screen w-[120%] flex flex-col gap-5 bg-white p-4 duration-1000 ease-in-out transition-all">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-xl">Cuisine</p>
            </div>
            <div className="flex flex-col gap-2 justify-start items-start ">
              <NavLinks normalLink={normalLink} navLinkStyle={navLinkStyle}/>
            </div>
          </div>
          <div className="w-[80%]" onTouchMove={handleTouchMove} onClick={() => { setIsOpen(false) }}></div>
        </div>}
    </div>
  )
}

export default SidebarCategory