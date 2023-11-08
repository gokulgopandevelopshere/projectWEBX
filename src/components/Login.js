import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "./styles/stylefont.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ece6e3;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  color: #8d988d;
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  background: #cebfb6;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  margin: 5px;
  border: none;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  width: 100%;
  background: #c1b1a6;
  color: white;
  font-size:25px;
  letter-spacing: 1em;

  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Montserrat-extrabold', sans-serif;

  &:hover {
    background: #9aa0a3;
  }
`;
const SignupButton=styled.button`
width: 100%;
  background: #c1b1a6;
  color: white;
  font-size:25px;
  letter-spacing: 1em;

  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Montserrat-extrabold', sans-serif;

  &:hover {
    background: #9aa0a3;
  }



`
const Subtitle =styled.p`
  font-size:10px;
  padding:10px;
  color:black;
  letter-spacing:1px;
  font-family:'Montserrat-light',sans-serif;

`

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  useEffect(() => {
    setIsUsernameValid(username.length > 0); // Username should not be empty
    setIsPasswordValid(password.length >= 8); // Password should be at least 8 characters
  }, [username, password]);

  return (
    <Container>
      
      <Logo> Social A P E </Logo>
      <LoginForm>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {!isUsernameValid && <Subtitle>Username is required.</Subtitle>}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPasswordValid && <Subtitle>Password must be at least 8 characters.</Subtitle>}
        <LoginButton>Login</LoginButton>
        <SignupButton>Signup</SignupButton>
      </LoginForm>
    </Container>
  );
};

export default Login;