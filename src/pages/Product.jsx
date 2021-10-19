import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { Add, Remove } from "@material-ui/icons";
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://assets.ajio.com/medias/sys_master/root/20210413/rvmj/6074b25faeb269a9e38ddf95/-473Wx593H-462271343-blue-MODEL.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim JumpSuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nisi aperiam inventore ratione dolore, enim sed et totam unde quo
            fugiat omnis porro consequuntur tempore quibusdam maxime in
            aspernatur cum?
          </Desc>
          <Price>$ 200</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>xs</FilterSizeOption>
                <FilterSizeOption>s</FilterSizeOption>
                <FilterSizeOption>m</FilterSizeOption>
                <FilterSizeOption>l</FilterSizeOption>
                <FilterSizeOption>xl</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 5px;
  margin-left: 10px;
`;
const FilterSizeOption = styled.option`
  text-transform: uppercase;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;
const Button = styled.button`
  border: 2px solid teal;
  outline: none;
  padding: 15px;
  background-color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;

export default Product;
