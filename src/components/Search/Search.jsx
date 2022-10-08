import React, { useContext } from "react";
import styled from "./styles";
import Logo from "../../assets/logo.png";
import FilterSearchProvider from "../../context/filterSearchContext";

const Search = () => {
  const handleSearch = ({ target }) => setKeyword(target.value);
  const { keyword, setKeyword } = useContext(FilterSearchProvider);
  return (
    <styled.Wrapper>
      <styled.Image src={Logo} />
      <styled.WrapperImage></styled.WrapperImage>
      <styled.Search
        placeholder="Buscar"
        value={keyword}
        onChange={handleSearch}
      />
    </styled.Wrapper>
  );
};

export default Search;
