import { colors } from "../../palette";
import styled from "styled-components";

const LoginWithGoogle = styled.button`
  background-color: white;
  color: black;
  outline: none;
  border: 1px solid #c3c3c3;
  border-radius: 100px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ececec;
  }
`

export default { LoginWithGoogle }