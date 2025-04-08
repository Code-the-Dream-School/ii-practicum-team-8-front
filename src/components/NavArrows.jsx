import { useState } from 'react';

import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';

const NavArrows = ({ images, setCurrImg }) => {
  const [currIndex, setCurrIndex] = useState(0);

  const handlePrevious = () => {
    const ind = (currIndex - 1 + images.length) % images.length;
    setCurrIndex(ind);
    setCurrImg(images[ind].url);
  };

  const handleNext = () => {
    const ind = (currIndex + 1) % images.length;
    setCurrIndex(ind);
    setCurrImg(images[ind].url);
  };

  return (
    <>
      <Button
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          color: 'white',
          backgroundColor: 'primary.main',
          display: 'none',
        }}
        className="hide"
        onClick={handlePrevious}
        aria-label="Previous Hotel Image"
      >
        <ArrowBack />
      </Button>
      <Button
        sx={{
          position: 'absolute',
          top: '50%',
          left: '90%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          color: 'white',
          backgroundColor: 'primary.main',
          display: 'none',
        }}
        className="hide"
        onClick={handleNext}
        aria-label="Next Hotel Image"
      >
        <ArrowForward />
      </Button>
    </>
  );
};

export default NavArrows;
