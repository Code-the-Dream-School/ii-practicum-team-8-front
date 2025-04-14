import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
  //ImageListItemBar,
} from '@mui/material';

import Loader from './Loader';
import { useHotelPhotosQuery } from '../../hooks/useHotelPhotosQuery';

const HotelDetails = () => {
  const location = useLocation();
  const { hotel } = location.state || {};
  const hotelId = hotel?.hotel_id;

  const {
    data: hotelPhotos,
    isLoading,
    isError,
    error,
  } = useHotelPhotosQuery(hotelId);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const cols = isXs ? 1 : isMd ? 2 : isLg ? 3 : 4;
  const ITEMS_PER_LOAD = cols;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const handleReset = () => {
    setVisibleCount(ITEMS_PER_LOAD);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  const handleViewAll = () => {
    setVisibleCount(hotelPhotos.length);
  }

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Typography color="error">
        Error loading photos: {error?.message}
      </Typography>
    );

  const visiblePhotos = hotelPhotos.slice(0, visibleCount);

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography align="center" color="primary.main">
        {hotel?.hotel_name}
      </Typography>

      <ImageList
        variant="masonry"
        cols={cols}
        gap={8}
        sx={{
          borderRadius: 2,
          '& img': {
            width: '100%',
            borderRadius: 2,
            display: 'block',
            transition: 'transform 0.3s ease',
          },
        }}
      >
        {visiblePhotos.map((photo) => (
          <ImageListItem key={photo.photoId}>
            <img
              src={photo.url1440}
              alt={photo.tags?.[0] || 'Hotel photo'}
              loading="lazy"
            />
            {/* {photo.tags.map((item) => (
              <ImageListItemBar
                key={item.id}
                title={item.tag || 'Hotel photo'}
                position="below"
                sx={{
                  textAlign: 'center',
                }}
              />
            ))} */}
            )
          </ImageListItem>
        ))}
      </ImageList>

      {(visibleCount > ITEMS_PER_LOAD || visibleCount < hotelPhotos.length) && (
        <Box display="flex" justifyContent="right" mt={2} gap={2}>
        
            <Button variant="contained" onClick={handleReset}  disabled={visibleCount <= ITEMS_PER_LOAD}>
              Reset View
            </Button>
        
            <Button variant="contained" onClick={handleLoadMore} disabled={visibleCount >= hotelPhotos.length }>
              Load More
            </Button>

            <Button variant="contained" onClick={handleViewAll} disabled={visibleCount === hotelPhotos.length }>
              View All
            </Button>
        
        </Box>
      )}
    </Box>
  );
};

export default HotelDetails;
