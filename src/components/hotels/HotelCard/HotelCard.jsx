import { useNavigate } from "react-router-dom";

import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import LocationOnIcon from '@mui/icons-material/LocationOn';

import AmenitiesImgList from '../AmenitiesImgList';
import HotelRating from '../HotelRating';
import StyledHotelCard from './HotelCard.styles';

const HotelCard = ({ hotel }) => {

  const navigate = useNavigate();

  const onImageClick = () => {
    navigate(`${hotel.hotel_id}`, {
      state: { hotel: hotel },
    });
  };

  return (
    <StyledHotelCard onClick={() => onImageClick(hotel)}>
      <CardHeader
        title={
          <Typography variant="subtitle1" color="primary.main">
            {hotel?.hotel_name}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle2">
            <LocationOnIcon sx={{ color: 'primary.main' }} />
            {`${hotel?.address}, ${hotel?.city_trans}, ${hotel?.zip}, ${hotel?.country_trans}`}
          </Typography>
        }
      />

      <CardMedia
        sx={{ height: 150, width: '100%' }}
        component="img"
        image={hotel?.max_1440_photo_url}
        alt={hotel?.name}
      />

      <CardContent>
        <HotelRating
          rating={(hotel?.review_score / 2).toFixed(1)}
          marginLeft={0}
        />
        <Typography component="p">
          From ${Math.trunc(hotel.min_total_price)}
        </Typography>
        {/* <AmenitiesImgList amenities={hotel.amenities} /> */}
      </CardContent>
    </StyledHotelCard>
  );
};
export default HotelCard;
