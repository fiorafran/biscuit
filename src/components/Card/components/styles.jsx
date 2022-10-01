import styled from "styled-components";

const Button = styled.a`
  background-color: #51df90;
  border: none;
  outline: none;
  margin: 5px 0;
  width: 150px;
  height: 45px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #ffffff;
  &:hover {
    background-color: #29de7a;
    color: #ffffff;
  }
`;

export default { Button };
