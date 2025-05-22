import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import InfoAlert from '../alerts/InfoAlert';
import HotelCard from './HotelCard/HotelCard';
import HotelPropType from '../../propTypes/HotelPropType';

const ListHotels = ({ hotels }) => {
  
  const isEmptyHotels = !hotels || hotels.length === 0;

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 3, sm: 8, md: 12, lg: 16 }}
      marginTop={2}
      marginBottom={2}
    >
      {isEmptyHotels ? (
        <InfoAlert message="We couldn't find any hotels that match your current filters." />
      ) : (
        hotels?.map((hotel) => (
          <Grid key={hotel?.hotel_id} size={{ xs: 3, sm: 4, md: 4 }}>
            <HotelCard hotel={hotel} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

ListHotels.propTypes  = {
  hotels: PropTypes.arrayOf(HotelPropType) 
};

export default ListHotels;
