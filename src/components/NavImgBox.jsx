import { useState } from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

import NavArrows from './NavArrows';

const NavImgBox = ({ images, hotelName }) => {
  const [currImg, setCurrImg] = useState(images?.[0]?.url || '');
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '400',
        '&:hover': {
          '.hide': {
            display: 'block',
          },
        },
      }}
    >
      <CardMedia
        sx={{ height: 150, width: '100%' }}
        component="img"
        image={currImg}
        alt={hotelName}
      />
      <NavArrows images={images} setCurrImg={setCurrImg} />
    </Box>
  );
};

export default NavImgBox;
