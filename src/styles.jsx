import styled from "styled-components";
import { colors } from "./palette";

const AppContainer = styled.div`
  width: 100vw;
  height: 96vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.main};
  flex-wrap: wrap;
  margin-top: 50px;
  overflow: scroll;
  overflow-x: hidden;
  @media (max-width: 700px) {
    margin-top: 55px;
    height: 92vh;
  }
`;

export default { AppContainer };
