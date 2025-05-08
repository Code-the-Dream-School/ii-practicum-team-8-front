import { useNavigate } from 'react-router-dom';

import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

import RatingBadge from '../RatingBadge';
import StyledHotelCard from './HotelCard.styles';

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const onImageClick = () => {
    navigate(`${hotel?.hotel_id}`);
  };

  return (
    <StyledHotelCard onClick={() => onImageClick(hotel)} elevation={6}>
      <CardMedia
        sx={{ width: '100%', transform: 'scale(0.9)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
          },  
        }}
        component="img"
        image={hotel?.max_1440_photo_url}
        alt={hotel?.hotel_name}
      />

      <Box m={2}>
        <RatingBadge
          rating={(hotel?.review_score / 2).toFixed(1)}
          label={hotel?.review_score_word}
          reviews={hotel?.review_nr}
        />
      </Box>

      <CardHeader
        title={
          <Typography variant="subtitle1" color="primary.main">
            {hotel?.hotel_name}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle2">
            {`${hotel?.city_trans}, ${hotel?.country_trans}`}
          </Typography>
        }
      />

      <CardContent>
        <Typography component="p" align="right">
          From ${Math.trunc(hotel?.min_total_price)}
        </Typography>
      </CardContent>
    </StyledHotelCard>
  );
};
export default HotelCard;
