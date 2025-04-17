import { getData } from './index';

const headers = {
  'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
  'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
};

const locale = 'en-us';

const getLocations = async (city) => {
  const url = `${import.meta.env.VITE_BOOKING_URL}/locations`;
  const params = { locale, name: city };
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
    locale,
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
  const params = { hotel_id: hotelId, locale };

  const photos = await getData(url, params, headers);

  if (!photos) {
    console.warn(`No photos returned for hotel ID ${hotelId}`);
    return [];
  }

  return photos;
};

const getHotelDetails = async (hotelId) => {
  const url = `${import.meta.env.VITE_BOOKING_URL}/data`;
  const params = {
    hotel_id: hotelId,
    locale,
  };

  const hotelDetails = await getData(url, params, headers);

  if (!hotelDetails) {
    console.warn(`No details returned for hotel ID ${hotelId}`);
    return {};
  }

  return hotelDetails;

};

const getHotelOnMap = async (hotelId) => {
  const url = `${import.meta.env.VITE_BOOKING_URL}/map-markers`;
  const params = {
    hotel_id: hotelId,
    locale,
  };

  const hotelOnMap = await getData(url, params, headers);

  if (!hotelOnMap) {
    console.warn(`No data returned for hotel ID ${hotelId}`);
    return {};
  }

  return hotelOnMap;
};

const getHotelFacilities = async (hotelId) => {
  const url = `${import.meta.env.VITE_BOOKING_URL}/facilities`;
  const params = {
    hotel_id: hotelId,
    locale,
  };

  const hotelFacilities = await getData(url, params, headers);

  if (!hotelFacilities) {
    console.warn(`No data returned for hotel ID ${hotelId}`);
    return [];
  }

  return hotelFacilities;
}

export { getHotels, getHotelPhotos, getHotelDetails, getHotelOnMap, getHotelFacilities };
