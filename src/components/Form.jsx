import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import { getWeather } from '../services/api';

const Container = styled(Box)({
  background: '#7b99b5',
  padding: '10px',
});

const Input = styled(InputBase)({
  color: '#f5f6f7',
  marginRight: 20,
  fontSize: '18px',
  borderRadius: '0 20px 0 0',
});

const GetButton = styled(Button)({
  background: '#e67e22',
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: '', country: '' });

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const getWeatherInfo = async () => {
    let response = await getWeather(data.city, data.country);
    setResult(response);
  };

  return (
    <Container>
      <Input placeholder="City" name="city" onChange={(e) => handleChange(e)} />
      <Input
        placeholder="Country"
        name="country"
        onChange={(e) => handleChange(e)}
      />
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
