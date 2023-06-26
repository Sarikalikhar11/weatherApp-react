import React, { useState } from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Sunset from '../assets/images/bg.jpg';
import Form from '../components/Form';
import WeatherInfo from '../components/WeatherInfo';

const Component = styled(Box)({
  height: '100vh',
  width: '65%',
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
});

const Image = styled(Box)({
  backgroundImage: `url(${Sunset})`,
  width: '27%',
  height: '80%',
  backgroundSize: 'cover',
  borderRadius: '20px 0 0 20px',
});

const Home = () => {
  const [result, setResult] = useState({});
  return (
    <Component>
      <Image></Image>
      <Box style={{ width: '73%', height: '80%' }}>
        <Form setResult={setResult} />
        <WeatherInfo result={result} />
      </Box>
    </Component>
  );
};

export default Home;
