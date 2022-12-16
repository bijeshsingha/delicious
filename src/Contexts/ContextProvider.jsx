import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();


//for the provider
export const ContextProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false)
  const watchWidth = () => {
    setWidth(window.innerWidth);
  };
  React.useEffect(() => {
    window.addEventListener("resize", watchWidth);

    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ width, setWidth, isOpen, setIsOpen }}>
      {children}
    </StateContext.Provider>
  );
};

//for the consumers
export const useStateContext = () => useContext(StateContext);
