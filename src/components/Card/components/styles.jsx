import styled from "styled-components";

const Button = styled.a`
  background-color: #51df90;
  border: none;
  outline: none;
  margin: 10px 0;
  width: 150px;
  height: 45px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #ffffff;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: #29de7a;
    color: #ffffff;
  }
  @media (max-width: 700px) {
    margin: 5px 0;
    height: 30px;
  }
`;

export default { Button };
