import styled from "styled-components";
import { colors } from "../../palette";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background: ${colors["secondary"]};
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 13px 9px 0px rgba(0, 0, 0, 0.1);
  z-index: 99;
`;
const Search = styled.input`
  border-radius: 20px;
  height: 30px;
  width: 300px;
  padding: 5px 15px;
  border: none;
  outline: none;
  background: #fda9a9;
  border: 1px solid #fcd;
  &::placeholder {
    color: #ffffff;
  }
  @media (max-width: 700px) {
    width: 250px;
    height: 22px;
    margin-left: 40px;
    font-size: 16px;
  }
`;
const WrapperImage = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 60px;
  position: absolute;
  top: 5px;
  left: 10px;
  background-color: #e0e0e0;
  border-radius: 30px;
  @media (max-width: 700px) {
    left: 5px;
    top: 8px;
    width: 50px;
  }
`;

export default { Wrapper, Search, WrapperImage, Image };
