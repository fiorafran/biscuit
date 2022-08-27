import React, { useEffect, useState } from "react";
import { getData } from "./utils";
import styles from "./styles";
import Card from "./components/Card/Card";

function App() {
  const [bizcos, setBizcos] = useState([]);

  useEffect(() => {
    getData().then(setBizcos);
  }, []);

  console.log({ bizcos });
  return (
    <styles.AppContainer>
      {!!bizcos &&
        !!bizcos.length &&
        bizcos.map((bizco) => <Card key={bizco.id} {...bizco} />)}
    </styles.AppContainer>
  );
}

export default App;
