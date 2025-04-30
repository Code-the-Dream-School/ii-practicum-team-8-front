import { useState, useEffect } from 'react';
import { getAllBookings } from '../util/apiCalendar';

const useCalendarApi = () => {
  
  const [bookingList, setBookingList] = useState([]);

  const [ isLoading, setIsLoading ] = useState(false);
  const [ isError, setIsError ] = useState(false);
  const [ error, setError ] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {   
    setIsLoading(true);
    try {
      const loadedBookingList = await getAllBookings();
      setBookingList(loadedBookingList);
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

  return { bookingList, isLoading, isError, error};

};

export default useCalendarApi;