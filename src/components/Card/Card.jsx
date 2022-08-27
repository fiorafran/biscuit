import React, { useState } from "react";
import styled from "./styles";

const Card = ({ id, type, name, size, price }) => {
  return (
    <styled.Container>
      <styled.Image src={`/${id}.jpg`} />
      <styled.Wrapper>
        <styled.Title>{name}</styled.Title>
        <styled.SubTitle>{type}</styled.SubTitle>
        <styled.Description>
          <styled.TextWrapper>
            <styled.Text>Tamaño: </styled.Text>
            <styled.Text>Precio: </styled.Text>
          </styled.TextWrapper>
          <styled.PriceWrapper>
            <styled.Text>{size}</styled.Text>
            <styled.Price>{price}</styled.Price>
          </styled.PriceWrapper>
        </styled.Description>
      </styled.Wrapper>
    </styled.Container>
  );
};

export default Card;
