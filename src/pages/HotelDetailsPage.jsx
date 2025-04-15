import { useLocation } from 'react-router-dom';

import { useHotelPhotosQuery } from '../hooks/useHotelPhotosQuery';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PhotoGallery from '../components/hotels/PhotoGallery';
import LoadingWrapper from '../components/loading/LoadingWrapper';

const HotelDetailsPage = () => {

  const location = useLocation();
  const { hotel } = location.state || {};
  const hotelId = hotel?.hotel_id;

  const {
    data: hotelPhotos,
    isLoading,
    isError,
    error,
  } = useHotelPhotosQuery(hotelId);

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography align="center" color="primary.main">
        {hotel?.hotel_name}
      </Typography>

      <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        <PhotoGallery hotelPhotos={hotelPhotos} />
      </LoadingWrapper>
    </Box>
  );
};

export default HotelDetailsPage;
