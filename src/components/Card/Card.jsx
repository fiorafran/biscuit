import React, { useState, useMemo } from "react";
import WantThisButton from "./components/WantThisButton";
import Star from "../../assets/star.png";
import styled from "./styles";

const Card = ({ id, type, name, size, price }) => {
  const parsePrice = JSON.parse(price);
  const [pickedSize, setSize] = useState("18");
  const pickedPrice = useMemo(() => parsePrice[pickedSize], [pickedSize]);
  return (
    <styled.Container>
      <styled.Image src={`/${id}.jpg`} />
      <styled.Wrapper>
        <styled.Title>
          {name}
          <styled.Star src={Star} />
        </styled.Title>
        <styled.SubTitle>{type}</styled.SubTitle>
        <styled.Divisor />
        <styled.Description>
          <styled.TextWrapper>
            <styled.Text>Tamaño: </styled.Text>
            <styled.Select
              onChange={({ target }) => setSize(target.value)}
              defaultValue="18"
            >
              {size.map((sz) => (
                <option key={sz} value={sz}>
                  {sz}
                </option>
              ))}
            </styled.Select>
          </styled.TextWrapper>
          <styled.PriceWrapper>
            <styled.Text>Precio: </styled.Text>
            <styled.Price>${pickedPrice}</styled.Price>
          </styled.PriceWrapper>
        </styled.Description>
        <styled.ButtonWrapper>
          <WantThisButton price={pickedPrice} size={pickedSize} name={name} />
        </styled.ButtonWrapper>
      </styled.Wrapper>
      <styled.colorBar name={name} />
    </styled.Container>
  );
};

export default Card;
