import { useQuery } from '@tanstack/react-query';
import {  getAllBookings} from '../util/apiCalendar';

const useFetchBookingList = ({ enabled = true } = {}) => {
  return useQuery({
    queryKey: ['bookingList'], 
    queryFn: getAllBookings,
    staleTime: 15 * 60 * 1000, // 15 minutes 
    cacheTime: 15 * 60 * 1000, 
    enabled,
  });
};

export default useFetchBookingList;
