import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HotelRating = ({ rating }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Rating
        name="read-only"
        value={rating}
        precision={0.5}
        size="small"
        readOnly
      />
      <Typography variant="body2" component="p" marginLeft={0.5}>
        {rating}
      </Typography>
    </Box>
  );
};

export default HotelRating;
