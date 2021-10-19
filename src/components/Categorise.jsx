import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "../components/CategoryItem";

const Categorise = () => {
  return (
    <Container>
      {categories.map((val) => (
        <CategoryItem val={val} key={val.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export default Categorise;
