import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <RegisterStyled>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="LastName" />
          <Input placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance to the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create Account</Button>
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
  min-height: 60%;
  width: 40%;
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: 1px 6px 9px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 6px 9px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 6px 9px 2px rgba(0, 0, 0, 0.75);
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  outline: none;
  border: 1.5px solid black;
  border-radius: 3px;
  background-color: transparent;
  &::placeholder {
    color: black;
  }
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
  text-align: center;
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
export default Register;
