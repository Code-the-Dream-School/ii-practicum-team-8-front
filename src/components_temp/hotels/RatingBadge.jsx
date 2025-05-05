import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import HotelRating from './HotelRating';

const RatingBadge = ({ rating, label, reviews }) => {
  return (
    <Box display='flex' gap={0.5} sx={{ mt: 2}}>
      <HotelRating rating={rating}/>     
      <Typography variant='body2' sx= {{ color: 'primary.main' }} >{label}</Typography>
      <Typography variant='body2' color='text.secondary'>({reviews} reviews)</Typography>
    </Box>
  );
};

export default RatingBadge;
