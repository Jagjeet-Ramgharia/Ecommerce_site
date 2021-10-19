import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  MailOutline,
  Map,
  Phone,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import pay from "../../src/img/pay.PNG";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shopify</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          voluptatem ratione magni a illo laborum praesentium, corporis, fuga
          alias, nostrum asperiores voluptates! Aliquid quibusdam voluptatem at
          amet, laborum facere culpa.
        </Desc>
        <SocialContainer>
          <Icon color="3b5999">
            <Instagram />
          </Icon>
          <Icon color="E4405F">
            <GitHub />
          </Icon>
          <Icon color="55ACEE">
            <LinkedIn />
          </Icon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account </ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Home</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Map style={{ marginRight: "10px" }} /> 33 foot road,Ghai market,
          Ludhiana, Punjab
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 9876543210
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> shopify@gmail.com
        </ContactItem>
        <Payment src={pay} />
      </Right>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  /* background-color: violet; */
`;
const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const ContactItem = styled.span`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Payment = styled.img`
  object-fit: contain;
  width: 50%;
`;
export default Footer;
