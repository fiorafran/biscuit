import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styled from "./styles";

const WantThisButton = ({ price, size, name }) => {
  const parseName = name.trim().replaceAll(" ", "+");

  return (
    <styled.Button
      href={`https://wa.me/3412791160?text=Hola%2C+me+gustar%C3%ADa+este+bizcochuelo%3A+${parseName}%2C+tama%C3%B1o+${size}`}
    >
      ¡Quiero este!
      <FaWhatsapp size={23} />
    </styled.Button>
  );
};

export default WantThisButton;
