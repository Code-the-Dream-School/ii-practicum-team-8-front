import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

import { amenities } from '../util/icons';

const amenitiesData = {
  wifi: { icon: amenities.wifi, title: 'Wifi' },
  pool: { icon: amenities.pool, title: 'Pool' },
  gym: { icon: amenities.gym, title: 'Gym' },
  restaurant: { icon: amenities.restaurant, title: 'Restaurant' },
  parking: { icon: amenities.parking, title: 'Free Parking' },
  fitness_center: { icon: amenities.gym, title: 'Gym' },
  beach: { icon: amenities.beach, title: 'Beach'},
  spa: { icon: amenities.spa, title: 'Spa' },
  bar: { icon: amenities.bar, title: 'Bar' },
};

const AmenitiesImgList = ({ amenities }) => {
  return (
    <ImageList sx={{ height: 120 }} cols={3} rowHeight={50}>
      {amenities.map((item) => {
        const key = item.toLowerCase();
        const amenity = amenitiesData[key];
        if (!amenity) {
          return null;
        }
        const Icon = amenity.icon;
        return (
          <ImageListItem
            key={key}
            sx={{ alignItems: 'center', gap: 0.5}}
          >
            <Icon alt={amenity.title} sx={{ color: 'primary.main' }} />
            <Typography color="primary.main"> {amenity.title}</Typography>
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default AmenitiesImgList;
