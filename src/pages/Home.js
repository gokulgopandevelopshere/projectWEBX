import React, { useState } from 'react';
import styled from 'styled-components';

const colors = {
  primary: '#E95793',
  secondary: '#DA0C81',
  tertiary: '#940B92',
  quaternary: '#610C9F',
};

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width:100%;
  overflow:auto;
`;

const Form = styled.form`
  max-width: 400px;
  margin: auto;
  background: white;
  padding: 20px 50px 200px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  width:1000%;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 2px solid #610C9F;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 25%;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.secondary};
  }
`;

const AppHeader = styled.header`
  background-color: ${colors.primary};
  color: white;
  width:100%;
  height :55px;
  padding: 0px ;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  background-color: ${colors.tertiary};
  color: white;
  padding: 100px 0;
  text-align: center;
  font-size: 14px;
`;
const Heading1 = styled.h1`
   padding-top:8px;
   text-align:center;
   font-size:2.1em;
`;
const Heading2 = styled.h1`
   padding-top:8px;
   margin:11px;
   text-align:center;
   font-size:1em;
`;

function App() {
  const [formData, setFormData] = useState({
    age: '',
    location: '',
    income: '',
    maritalStatus: 'single',
    educationLevel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(`Demographic Information:
      Age: ${formData.age}
      Location: ${formData.location}
      Income: ${formData.income}
      Marital Status: ${formData.maritalStatus}
      Education Level: ${formData.educationLevel}`);
  };

  return (
    <Wrapper>
      <AppHeader>
        <Heading1>Digital marketing Campaign</Heading1>
      </AppHeader>

      <Heading2>Unlock the Power of "Hunger To Buy" Today!</Heading2>
      <Form> 
        <Label htmlFor="age">Age:</Label>
        <Input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <Label htmlFor="location">Location:</Label>
        <Input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <Label htmlFor="income">Income:</Label>
        <Input
          type="text"
          id="income"
          name="income"
          value={formData.income}
          onChange={handleChange}
          required
        />
        <Label htmlFor="maritalStatus">Marital Status:</Label>
        <Select
          id="maritalStatus"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          required
        >
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="family">Family</option>
        </Select>
        <Label htmlFor="educationLevel">Education Level:</Label>
        <Input
          type="text"
          id="educationLevel"
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          required
        />
        <Button type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <Footer>
        &copy; {new Date().getFullYear} Market Research Form. All rights reserved.
      </Footer>
    </Wrapper>
  );
}

export default App;