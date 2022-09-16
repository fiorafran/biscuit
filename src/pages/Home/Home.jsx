import React, { useEffect, useState } from 'react'
import { getData } from "../../utils";
import Card from "../../components/Card";

const Home = () => {
  const [bizcos, setBizcos] = useState([]);

  useEffect(() => {
    getData().then(setBizcos);
  }, []);

  console.log({ bizcos });
  return !!bizcos?.length &&
      bizcos.map((bizco) => <Card key={bizco.id} {...bizco} />)
}

export default Home