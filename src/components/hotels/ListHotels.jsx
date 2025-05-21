import Grid from '@mui/material/Grid';

import HotelCard from './HotelCard/HotelCard';

const ListHotels = ({ hotels }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 3, sm: 8, md: 12, lg: 16 }}
      marginTop={2}
      marginBottom={2}
    >
      {hotels?.map((hotel) => (
        <Grid key={hotel?.hotel_id} size={{ xs: 3, sm: 4, md: 4 }}>
          <HotelCard hotel={hotel} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListHotels;
