import { getData } from './index';

const headers = {
  'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
  'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
};

const getLocations = async (city) => {
  const url = `${import.meta.env.VITE_BOOKING_URL}/locations`;
  const params = { locale: 'en-us', name: city };
  return await getData(url, params, headers);
};

const getHotels = async () => {

  const url = `${import.meta.env.VITE_BOOKING_URL}/search-by-coordinates`;
  const params = {
    children_ages: '7,0',
    include_adjacency: 'true',
    adults_number: '2',
    checkout_date: '2025-09-26',
    filter_by_currency: 'USD',
    checkin_date: '2025-09-25',
    categories_filter_ids: 'class::2,class::4,free_cancellation::1',
    units: 'metric',
    order_by: 'price',
    children_number: '1',
    locale: 'en-us',
    page_number: '0',
    room_number: '1',
    latitude: '47.60621',
    longitude: '-122.33207',
  };

  const hotels = await getData(url, params, headers);

  if (!hotels || !hotels.result) {
    console.warn('No hotels returned');
    return [];
  }
  
  return hotels.result;
};

const getHotelPhotos = async (hotelId) => {

  const url = `${import.meta.env.VITE_BOOKING_URL}/photos`;
  const params = { hotel_id: hotelId, locale: 'en-us' };

  const photos = await getData(url, params, headers);
 
  if (!photos) {
    console.warn(`No photos returned for hotel ID ${hotelId}`);
    return [];
  }
  
  console.log(photos[0].tags);

  return photos.map((photo) => {
    return {
      photoId: photo.photo_id,
      urlMax: photo.url_max,
      url1440: photo.url_1440,
      urlSquare60: photo.url_square60,
      tags: photo.tags,
    };
  });
};

const getHotelsPhotos = async (hotelIds) => {

  const photos = await Promise.all(
    hotelIds.map(async (hotelId) => {
      const hotelPhotos = await getHotelPhotos(hotelId);

      if (!hotelPhotos) {
        console.warn(`No photos returned for hotel ID ${hotelId}`);
        return {
          hotelId,
          photos: [],
        };
      }

      const photos = hotelPhotos.map((photo) => ({
        photoId: photo.photoId,
        urlSquare60: photo.urlSquare60,
        urlMax: photo.urlMax,
        url1440: photo.url1440,
        tags: photo.tags,
      }));

      return {
        hotelId,
        photos,
      };
    })
  );

  return photos;
};

export { getHotels, getHotelPhotos };