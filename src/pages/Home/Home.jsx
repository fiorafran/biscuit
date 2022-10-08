import React, { useEffect, useState, useContext } from "react";
import { getData } from "../../utils";
import Card from "../../components/Card";
import FilterSearchProvider from "../../context/filterSearchContext";

const Home = () => {
  const [bizcos, setBizcos] = useState([]);
  const { keyword, setKeyword } = useContext(FilterSearchProvider);

  useEffect(() => {
    getData().then(setBizcos);
  }, []);

  return (
    !!bizcos?.length &&
    bizcos.map((bizco) => {
      if (keyword) {
        const filterBizco = bizco.keywords
          .map((kwd) => kwd.includes(keyword) && bizco)
          .filter(Boolean);
        return !!filterBizco.length && <Card key={bizco.id} {...bizco} />;
      }
      return <Card key={bizco.id} {...bizco} />;
    })
  );
};

export default Home;
