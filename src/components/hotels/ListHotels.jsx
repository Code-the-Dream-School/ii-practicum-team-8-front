import Grid from '@mui/material/Grid';
import { useHotelsQuery } from '../../hooks/useHotelsQuery';

import Loader from './Loader';
import HotelCard from './HotelCard/HotelCard';

const ListHotels = () => {
  const {
    data: listHotels,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useHotelsQuery();

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Typography color="error">
        Error loading photos: {error?.message}
      </Typography>
    );

  const fromCache = !isLoading && !isFetching && isSuccess;

  return (
    <>
      {fromCache ? (
        <p>Data loaded from cache</p>
      ) : (
        <p>Data fetched from the server</p>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 8, md: 12, lg: 16 }}
      >
        {listHotels.map((hotel) => (
          <Grid key={hotel.hotel_id} size={{ xs: 3, sm: 4, md: 4 }}>
            <HotelCard hotel={hotel} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ListHotels;
