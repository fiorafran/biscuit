import React, { useContext, useState } from "react";
import styled from "./styles";
import Logo from "../../assets/logo.png";
import FilterSearchProvider from "../../context/filterSearchContext";

const Search = () => {
  const [localKeyword, setLocalKeyword] = useState('');
  const handleSearch = ({ target }) => {
    setLocalKeyword(target.value)
    const formatKeyword = target.value.trim().toLowerCase().replaceAll('  ', ' ');
    setKeyword(formatKeyword);
  }
  const { keyword, setKeyword } = useContext(FilterSearchProvider);
  return (
    <styled.Wrapper>
      <styled.Image src={Logo} />
      <styled.WrapperImage></styled.WrapperImage>
      <styled.Search
        placeholder="Buscar"
        value={localKeyword}
        onChange={handleSearch}
      />
    </styled.Wrapper>
  );
};

export default Search;
