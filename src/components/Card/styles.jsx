import styled from "styled-components";
import { getColorBar } from "../../palette";

const Container = styled.div`
  width: 230px;
  max-width: 230px;
  overflow: hidden;
  background-color: white;
  border-radius: 15px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 150px;
`;
const Star = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 15px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 5;
  box-shadow: -1px -13px 36px -14px rgba(0, 0, 0, 0.95);
  -webkit-box-shadow: -1px -13px 36px -14px rgba(0, 0, 0, 0.95);
  -moz-box-shadow: -1px -13px 36px -14px rgba(0, 0, 0, 0.95);
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 15px 2px;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
`;
const SubTitle = styled.div`
  width: 100%;
  padding: 0px 15px 8px;
  color: #afafaf;
  font-size: 14px;
`;
const Divisor = styled.span`
  background-color: #e8e8e8;
  margin: auto;
  width: 94%;
  height: 1px;
`;
const colorBar = styled.span`
  width: 100%;
  height: 8px;
  background-color: ${({ name }) => getColorBar(name)};
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 15px 2px;
`;
const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const Text = styled.div`
  /* margin-right: 60px; */
  width: 60%;
`;
const Select = styled.select`
  cursor: pointer;
  padding: 3px 7px;
  margin: 2px 0 6px;
  background-color: transparent;
  outline: none;
  border: 1px solid #ededed;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.2s ease;
  &:hover {
    background-color: #f7f7f7;
  }
`;
const Price = styled.div`
  color: #51df90;
  font-size: 18px;
  font-weight: bold;
  width: 26%;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  Container,
  Image,
  Wrapper,
  Title,
  SubTitle,
  Divisor,
  Description,
  TextWrapper,
  PriceWrapper,
  Text,
  Select,
  Price,
  ButtonWrapper,
  colorBar,
  Star
};
