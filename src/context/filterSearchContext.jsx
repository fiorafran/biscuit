import React, { useState, createContext } from "react";

const Context = createContext();

export const FilterSearchProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <Context.Provider value={{ keyword, setKeyword }}>
      { children }
    </Context.Provider>
  );
};

export default Context;