import { useState, useEffect } from 'react';
import {
  deleteBooking,
  updateBooking,
  createBooking,
} from '../util/apiCalendar';

const useCalendarApi = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  const [createdBooking, setCreatedBooking] = useState();
  const [updatedBooking, setUpdatedBooking] = useState();
  const [deletedBooking, setDeletedBooking] = useState();

  const deleteBookingData = async (bookingId, token) => {
    setIsLoading(true);
    try {
      const res = await deleteBooking(bookingId, token);
      setDeletedBooking(res);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setError({
        message: err?.message || 'Something went wrong',
        status: err?.response?.status,
        statusText: err?.response?.statusText,
        data: err?.response?.data,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const createBookingData = async (booking, token) => {
    setIsLoading(true);
    try {
      const res = await createBooking(booking, token);
      setCreatedBooking(res);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setError({
        message: err?.message || 'Something went wrong',
        status: err?.response?.status,
        statusText: err?.response?.statusText,
        data: err?.response?.data,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateBookingData = async (booking, token) => {
    setIsLoading(true);
    try {
      const res = await updateBooking(booking, token);
      setUpdatedBooking(res);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setError({
        message: err?.message || 'Something went wrong',
        status: err?.response?.status,
        statusText: err?.response?.statusText,
        data: err?.response?.data,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    error,
    deleteBookingData,
    createBookingData,
    updateBookingData,
    deletedBooking,
    updatedBooking,
    createdBooking,
  };
};

export default useCalendarApi;
