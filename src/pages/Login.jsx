import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <RegisterStyled>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
          <Link>Don't Remember password, Reset it.</Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrapper>
    </RegisterStyled>
  );
};
const RegisterStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://www.teahub.io/photos/full/210-2104382_background-for-clothes-photography.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  background-color: white;
  min-height: 50%;
  height: 50%;
  width: 30%;
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: 1px 6px 9px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 6px 9px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 6px 9px 2px rgba(0, 0, 0, 0.75);
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  padding: 0 10px;
  /* text-align: center; */
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 90%;
  padding: 0 10px;
`;
const Input = styled.input`
  min-width: 40%;
  padding: 15px;
  outline: none;
  border: 1.5px solid black;
  border-radius: 3px;
  background-color: transparent;
  &::placeholder {
    color: black;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px 15px;
  background-color: teal;
  width: 100%;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  border-radius: 3px;
`;
const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
`;
export default Login;
