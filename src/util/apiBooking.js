import { getData } from './index';

import hotelsData from '../data/hotels.json';
import Motel6IssaquashPhotos from '../data/Motel6IssaquashPhotos.json';
import Motel6IssaquashDetails from '../data/Motel6IssaquashDetails.json';
import Motel6IssaquashOnMap from '../data/Motel6IssaquashOnMap.json';
import Motel6IssaquashFacilities from '../data/Motel6IssaquashFacilities.json';

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

const getHotels = async (location, checkIn, checkOut, travelerInfo) => {
  
  const checkInFormatted = checkIn.format('YYYY-MM-DD');
  const checkOutFormatted = checkOut.format('YYYY-MM-DD');
  
  const kidsAgeStr = travelerInfo?.kidsAge?.join(', ');

  const url = `${import.meta.env.VITE_BOOKING_URL}/search-by-coordinates`;
  const params = {
    adults_number: travelerInfo?.adults,
    checkout_date: checkOutFormatted,
    filter_by_currency: 'USD',
    checkin_date: checkInFormatted,
    units: 'metric',
    order_by: 'popularity',
    locale,
    page_number: '0',
    room_number: travelerInfo?.rooms,
    latitude: location?.latitude,
    longitude: location?.longitude,
  };

  if (travelerInfo?.kids) {
    params.children_number = travelerInfo?.kids;
    params.children_ages = kidsAgeStr;
  }

  const hotels = await getData(url, params, headers);

  if (!hotels || !hotels.result) {
    console.warn('No hotels returned');
    return [];
  }

  return hotels.result;

  //return hotelsData;
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

  //return Motel6IssaquashPhotos;
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

  //return Motel6IssaquashDetails;
};

const getHotelOnMap = async (hotelId) => {
  const url = `${import.meta.env.VITE_BOOKING_URL}/map-markers`;
  const params = {
    hotel_id: hotelId,
    locale,
  };

  const hotelOnMap = await getData(url, params, headers);

  if (!hotelOnMap) {
    console.warn(`No map returned for hotel ID ${hotelId}`);
    return {};
  }

  return hotelOnMap;

  //return Motel6IssaquashOnMap
};

const getHotelFacilities = async (hotelId) => {
  const url = `${import.meta.env.VITE_BOOKING_URL}/facilities`;
  const params = {
    hotel_id: hotelId,
    locale,
  };

  const hotelFacilities = await getData(url, params, headers);

  if (!hotelFacilities) {
    console.warn(`No facilities returned for hotel ID ${hotelId}`);
    return [];
  
  }

  return hotelFacilities;

  //return Motel6IssaquashFacilities;
};

export {
  getHotels,
  getHotelPhotos,
  getHotelDetails,
  getHotelOnMap,
  getHotelFacilities,
};
