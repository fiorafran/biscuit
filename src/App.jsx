import React from "react";
import styles from "./styles";
import Home from "./pages/Home";
import Search from "./components/Search";
import { FilterSearchProvider } from "./context/filterSearchContext";

const App = () => {
  return (
    <FilterSearchProvider>
      <Search />
      <styles.AppContainer>
        <Home />
      </styles.AppContainer>
    </FilterSearchProvider>
  );
};

export default App;
