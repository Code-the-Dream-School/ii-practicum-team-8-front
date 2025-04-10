import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import LocationOnIcon from '@mui/icons-material/LocationOn';

import NavImgBox from '../NavImgBox';
import AmenitiesImgList from '../AmenitiesImgList';
import HotelRating from '../HotelRating';
import StyledHotelCard from './HotelCard.styles';

const HotelCard = ({ hotel }) => {
  return (
    <StyledHotelCard>
      <CardHeader
        title={
          <Typography variant="subtitle1" color="primary.main">
            {hotel.name}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle2">
            <LocationOnIcon sx={{ color: 'primary.main' }} />
            {`${hotel.address?.lines}, ${hotel.address?.cityName}, ${hotel.address?.postalCode}, ${hotel.address?.countryCode}`}
          </Typography>
        }
      />

      <NavImgBox images={hotel?.images} hotelName={hotel?.name} />

      <CardContent>
        <HotelRating rating={hotel.rating} marginLeft={0} />
        <Typography component="p">From ${hotel.price_per_night}</Typography>
        <AmenitiesImgList amenities={hotel.amenities} />
      </CardContent>
    </StyledHotelCard>
  );
};
export default HotelCard;
