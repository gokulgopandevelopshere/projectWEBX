import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ece6e3;
`;

const SettingsButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #8d988d;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #8d988d;
  transition: box-shadow 0.3s, color 0.3s;

  &:hover {
    background: #8d988d;
    color: #ece6e3;
    box-shadow: 0 0 10px rgba(141, 152, 141, 0.5);
  }
`;

const SignupForm = styled.form`
  background: #cebfb6;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    margin-right: auto; /* Align to the left for desktop */
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
`;

const DateCounter = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 5px;
  color: #8d988d;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const SignupButton = styled.button`
  width: 100%;
  background: #c1b1a6;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #9aa0a3;
  }
`;

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Add validation and form submission logic here

  return (
    <Container>
      <SettingsButton>Settings</SettingsButton>
      <SignupForm>
        <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Input type="text" placeholder="Username (Minimum 5 characters)" value={username} onChange={(e) => setUsername(e.target.value)} />
        {username.length < 5 && <div>Username must be at least 5 characters.</div>}
        <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <DateCounter type="date" placeholder="Birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
          Accept Terms and Conditions
        </CheckboxLabel>
        <SignupButton>Sign Up</SignupButton>
      </SignupForm>
    </Container>
  );
};

export default Signup;