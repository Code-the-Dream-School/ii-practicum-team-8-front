import { useHotelOnMapQuery } from '../../hooks/useHotelOnMapQuery';

import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HotelMapView = ({ hotelId, hotelName, location }) => {

  const { data: hotelOnMap } = useHotelOnMapQuery(hotelId);
  console.log(hotelOnMap);

  const encodedQuery = encodeURIComponent(`${hotelName} near ${location?.latitude},${location?.longitude}`);

  return (
    <Paper sx={{ position: 'relative', width: '100%' }} elevation={2} align='right'>
      <CardMedia
        component="img"
        sx={{ borderRadius: 2, width: '100%', height: 'auto' }}
        image={hotelOnMap?.map_preview_url}
        alt={`Preview ${hotelName} on Map`}
      />
      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
        }}
        href={`https://www.google.com/maps/search/?api=1&query=${encodedQuery}`}
      >
        <LocationOnIcon /> View Map
      </Button>
    </Paper>
  );
};

export default HotelMapView;
