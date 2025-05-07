import { getAllData, deleteData, postData, updateData } from './index';

const endpointCalendar = `${import.meta.env.VITE_APP_API_URL}/api/v1/bookings`;
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_USER_TOKEN}`,
  "Content-Type": "application/json"
};

const getAllBookings = async () => {
  const res = await getAllData(endpointCalendar, {}, headers);
  if (!res) {
    return {};
  }
  return res;
};

const deleteBooking = async (bookingId) => {
  const res = await deleteData(`${endpointCalendar}/${bookingId}`, {}, headers);
  return res||{};
};

const updateBooking = async (booking) => {
  const { bookingId, ...requestBody } = booking;
  const res = await updateData(`${endpointCalendar}/${bookingId}`, requestBody, {}, headers);
  return res||{};
};

const createBooking = async (booking) => {
  const res = await postData(endpointCalendar, booking, {}, headers);
  return res||{};
};

export { getAllBookings, deleteBooking, updateBooking, createBooking };