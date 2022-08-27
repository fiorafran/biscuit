import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  max-width: 200px;
  overflow: hidden;
  background-color: white;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
  height: 150px;
`;
const Wrapper = styled.div`
  padding: 10px;
  padding-left: 45px;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 5;
  box-shadow: -1px -13px 36px -14px rgba(0, 0, 0, 0.95);
  -webkit-box-shadow: -1px -13px 36px -14px rgba(0, 0, 0, 0.95);
  -moz-box-shadow: -1px -13px 36px -14px rgba(0, 0, 0, 0.95);
`;
const Title = styled.div`
  width: 100%;
  //padding-left: 15px;
`;
const SubTitle = styled.div`
  width: 100%;
  //padding: 0 15px;
`;
const Description = styled.div`
  display: flex;
  width: 100%;
  //padding: 0 5px;
`;
const TextWrapper = styled.div`
  width: 50%;
  //padding: 5px 15px;
`;
const PriceWrapper = styled.div`
  width: 50%;
  //padding: 5px 15px;
  text-align: center;
`;
const Text = styled.div``;
const Price = styled.div``;

export default {
  Container,
  Image,
  Wrapper,
  Title,
  SubTitle,
  Description,
  TextWrapper,
  PriceWrapper,
  Text,
  Price,
};
