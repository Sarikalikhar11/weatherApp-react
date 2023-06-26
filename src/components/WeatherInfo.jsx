import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';
import React from 'react';
import { styled } from '@mui/material';

const Row = styled(Typography)({
  padding: 10,
  fontSize: 20,
  letterSpacing: 2,
  '& > svg': {
    marginRight: 10,
  },
});

const Error = styled(Typography)({
    color:'red',
    margin:50,
    padding:20
});

const WeatherInfo = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <Box style={{ padding: '30px 40px' }}>
      <Row>
        <LocationOnIcon />
        Location: {result.name},{result.sys.country}
      </Row>
      <Row>
        <SettingsBrightnessIcon />
        Temperature: {result.main.temp}
      </Row>
      <Row>
        <OpacityIcon />
        Humidity:{result.main.humidity}
      </Row>
      <Row>
        <Brightness5Icon />
        Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6Icon />
        Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <DehazeIcon />
        Humidity:{result.weather[0].main}
      </Row>
      <Row>
        <CloudIcon />
        Clouds:{result.clouds.all}%
      </Row>
    </Box>
  ) : (
    <Error>Please Enter the Values</Error>
  );
};

export default WeatherInfo;
