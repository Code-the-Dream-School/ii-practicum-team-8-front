import { useState } from 'react';

import {
  useMediaQuery,
  useTheme,
  Box,
  ImageList,
  ImageListItem,
  Button,
  Chip,
} from '@mui/material';

const ITEMS_PER_LOAD = 4;

const PhotoGallery = ({ hotelPhotos }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  const cols = isXs ? 1 : isMd ? 2 : isLg ? 3 : 4;

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const handleReset = () => {
    setVisibleCount(ITEMS_PER_LOAD);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  const handleViewAll = () => {
    setVisibleCount(hotelPhotos.length);
  };

  const visiblePhotos = hotelPhotos?.slice(0, visibleCount);

  return (
    <>
      <ImageList
        variant="masonry"
        cols={cols}
        gap={10}
        sx={{
          '& img': {
            width: '100%',
            borderRadius: 2,
            display: 'block',
            transition: 'transform 0.3s ease',
          },
        }}
      >
        {visiblePhotos?.map((photo) => (
          <ImageListItem key={photo?.photo_id}>
            <img
              src={photo?.url_1440}
              alt={photo?.tags?.[0] || 'Hotel photo'}
              loading="lazy"
            />
            {photo.tags.map((item) => (
              <Chip
                key={item.id}
                size="medium"
                label={item?.tag}
                sx={{ mt: 1, mr: 1 }}
              />
            ))}
            )
          </ImageListItem>
        ))}
      </ImageList>
      {visiblePhotos && visiblePhotos.length > 0 && (
        <Box display="flex" justifyContent="left" mt={2} gap={2}>
          <Button
            variant="contained"
            onClick={handleReset}
            disabled={visibleCount <= ITEMS_PER_LOAD}
          >
            Reset View
          </Button>

          <Button
            variant="contained"
            onClick={handleLoadMore}
            disabled={visibleCount >= hotelPhotos.length}
          >
            Load More
          </Button>

          <Button
            variant="contained"
            onClick={handleViewAll}
            disabled={visibleCount === hotelPhotos.length}
          >
            View All
          </Button>
        </Box>
      )}
    </>
  );
};

export default PhotoGallery;
