import { getAllData, deleteData, postData, updateData } from './index';
const endpointCalendar = `${import.meta.env.VITE_APP_API_URL}/api/v1/bookings`;
const getAuthHeaders = (token) => {
  if (!token) {
    throw new Error('No authentication token found. User is not authorized.');
  }
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

const getAllBookings = async (token) => {
  const res = await getAllData(endpointCalendar, {}, getAuthHeaders(token));
  if (!res) {
    return {};
  }
  return res;
};

const deleteBooking = async (bookingId, token) => {
  const res = await deleteData(
    `${endpointCalendar}/${bookingId}`,
    {},
    getAuthHeaders(token)
  );
  return res || {};
};

const updateBooking = async (booking, token) => {
  const { bookingId, ...requestBody } = booking;
  const res = await updateData(
    `${endpointCalendar}/${bookingId}`,
    requestBody,
    {},
    getAuthHeaders(token)
  );
  return res || {};
};

const createBooking = async (booking, token) => {
  const res = await postData(
    endpointCalendar,
    booking,
    {},
    getAuthHeaders(token)
  );
  return res || {};
};

export { getAllBookings, deleteBooking, updateBooking, createBooking };
