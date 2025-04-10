import Grid from '@mui/material/Grid';
import useApi from '../hooks/useApi';

import Loader from './Loader';
import HotelCard from './HotelCard/HotelCard';

const ListHotels = () => {
  const { hotelsList, isLoading, isError } = useApi();

  if (isLoading) return <Loader />;
  if (isError) return <p>Something went wrong...</p>;
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 3, sm: 8, md: 12, lg: 16 }}
    >
      {hotelsList.map((hotel) => (
        <Grid item key={hotel.hotelId} size={{ xs: 3, sm: 4, md: 4 }}>
          <HotelCard hotel={hotel} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListHotels;
