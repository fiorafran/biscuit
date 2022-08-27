import styled from "styled-components";
import { colors } from "./palette";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.main};
`

export default { AppContainer };