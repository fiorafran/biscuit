import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./components/Search";

const App = () => {
  return (
    <styles.AppContainer>
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </styles.AppContainer>
  );
};

export default App;
