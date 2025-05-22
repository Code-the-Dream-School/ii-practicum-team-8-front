import { useParams } from 'react-router-dom';
import { useHotelPhotosQuery } from '../hooks/useHotelPhotosQuery';
import { useHotelDetailsQuery } from '../hooks/useHotelDetailsQuery';
import { Typography, Grid, Divider, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RatingBadge from '../components/hotels/RatingBadge';
import PhotoGallery from '../components/shared/PhotoGallery';
import HotelMapView from '../components/hotels/HotelMapView';
import FacilitiesList from '../components/hotels/FacilitiesList';
import LoadingWrapper from '../components/loading/LoadingWrapper';

export default function HotelDetailsPage() {
  const { hotelId } = useParams();

  const {
    data: hotelPhotos,
    isLoading,
    isError,
    error,
  } = useHotelPhotosQuery(hotelId);

  const { data: hotelDetails } = useHotelDetailsQuery(hotelId);

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 12 }} sx={{ width: '100%' }}>
        <Typography variant="h5" color="primary.main" sx={{ mb: 2 }}>
          {hotelDetails?.name}
        </Typography>

        <RatingBadge
          rating={(hotelDetails?.review_score / 2).toFixed(1)}
          label={hotelDetails?.review_score_word}
          reviews={hotelDetails?.review_nr}
        />
        <Divider sx={{ width: '100%' }} />
      </Grid>

      <Grid size={{ xs: 12, sm: 12 }}>
        <Box
          display="flex"
          gap={3}
          sx={{
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '100%', md: '40%' } }}>
            <Typography>
              <LocationOnIcon
                sx={{ color: 'primary.main', verticalAlign: 'middle', mr: 1 }}
              />
              {`${hotelDetails?.address}, ${hotelDetails?.city}, ${hotelDetails?.zip}`}
            </Typography>
            <HotelMapView
              hotelId={hotelId}
              hotelName={hotelDetails?.name}
              location={hotelDetails?.location}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '100%', md: '60%' } }}>
            <Typography variant="subtitle1" align="justify">
              {hotelDetails?.description_translations?.[0]?.description}
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 12 }}>
        <FacilitiesList hotelId={hotelId} />
      </Grid>

      <Grid size={{ xs: 12, sm: 12 }}>
        <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
          <PhotoGallery hotelPhotos={hotelPhotos} />
        </LoadingWrapper>
      </Grid>
    </Grid>
  );
}
