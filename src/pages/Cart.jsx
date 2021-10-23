import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TButton>Continue Shopping</TButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Shopping Bag(2)</TopText>
          </TopTexts>
          <TButton type="filled">CheckOut Now</TButton>
        </Top>
        <Bottom>
          <Info></Info>
          <Summary></Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  margin: 0 10px;
`;
const TButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: ${(props) => (props.type === "filled" ? "none" : "2px solid")};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;
export default Cart;
