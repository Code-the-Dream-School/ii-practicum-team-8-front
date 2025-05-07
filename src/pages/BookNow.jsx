import { useNavigate } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import PhotoGallery from '../components/shared/PhotoGallery';
import RatingBadge from '../components/hotels/RatingBadge';
import BookingForm from '../components/booking/BookingForm';

import hotelPhotos from '../data/hotelPhotos.json';

const BookingNow = () => {

  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <Grid
        size={{ xs: 12, sm: 12 }}
        sx={{ textAlign: 'center', justifyContent: 'center' }}
      >
        <Typography variant="h5" color="primary.main" sx={{ mb: 2 }}>
          Kindred Cottage
        </Typography>
        <RatingBadge rating={5} label="Excellent" reviews={650} />
      </Grid>

      <Grid size={{ xs: 12, sm: 12 }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
          Kindred Cottage is a lovely home with waterfront to the channel
          leading into First Lake, Fulton Chain. Situated in the Hollywood
          Hills, a short drive into the village. The waterfront with private
          dock is directly across from the cottage. First floor offers a great
          room with fireplace in the living room, and large dining area. Enjoy
          cooking in a modern kitchen, adjacent to the great room. A comfortable
          office could also be used as a reading room and can be closed off for
          added privacy. A bedroom suite is also on the first floor. Upstairs
          are two other spacious bedrooms and a second full bath. Enjoy the
          views and gardens while cocktailing or grilling on the open patio. The
          garage has a bonus room with two twins for extra guests. Featuring a
          private dock, firepit, and outdoor seating by the lake. Kindred
          Cottage is sure to be your summer place for many fond memories to be
          made.
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, sm: 12 }}>
        <PhotoGallery hotelPhotos={hotelPhotos} />
      </Grid>

      <Grid size={{ xs: 12, sm: 12 }}>
        <BookingForm onCancel={() => navigate("..")} isInlineForm={false}/>
      </Grid>
    </Grid>
  );
};

export default BookingNow;
