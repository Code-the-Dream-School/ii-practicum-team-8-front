import { useEffect } from 'react';

import NumberInput from './NumberInput';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const KidsAgeFields = ({ kids, kidsAge, setKidsAge }) => {
  const handleAgeChange = (index, newValue) => {
    const newKidsAge = [...kidsAge];
    newKidsAge[index] = newValue;
    setKidsAge(newKidsAge);
  };

  const rerenderKidsAgeFields = () => {
    const fields = [];

    for (let i = 0; i < kids; i++) {
      fields.push(
        <NumberInput
          key={i}
          label={`Kid ${i + 1}:`}
          value={kidsAge[i] || 0}
          minValue={0}
          maxValue={17}
          onChange={(value) => handleAgeChange(i, value)}
        />
      );
    }

    return fields;
  };

  return (
    <Box>
      <Typography sx={{ fontWeight: '600' }}>Age(s):</Typography>
      {rerenderKidsAgeFields()}
    </Box>
  );
};

export default KidsAgeFields;
