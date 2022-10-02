import styled from "styled-components";
import { colors } from "../../palette";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${colors["secondary"]};
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Search = styled.input`
    border-radius: 20px;
    height: 30px;
    width: 300px;
    padding: 5px 15px;
    border: none;
    outline: none;
`

export default { Wrapper, Search };
