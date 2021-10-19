import React from "react";
import styled from "styled-components";

const CategoryItem = ({ val }) => {
  return (
    <Container>
      <Image src={val.img} />
      <Info>
        <Title>{val.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #fdf9f9;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
`;
export default CategoryItem;
