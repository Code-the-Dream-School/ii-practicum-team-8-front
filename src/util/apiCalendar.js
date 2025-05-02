import { getAllData } from './index';

const endpointCalendar = `${import.meta.env.VITE_APP_API_URL}/api/v1/bookings`;
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_USER_TOKEN}`,
};

const getAllBookings = async () => {
  const config = {
    method: 'GET',
    headers,
  };

  const res = await getAllData(endpointCalendar, config);
  console.log(res);

  if (!res) {
    return {};
  }

  return res;
};

export { getAllBookings };
