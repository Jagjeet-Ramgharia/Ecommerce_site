import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
const Products = () => {
  return (
    <Container>
      {popularProducts.map((val) => (
        <Product val={val} key={val.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;
export default Products;
