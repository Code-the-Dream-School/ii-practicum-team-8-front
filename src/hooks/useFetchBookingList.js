import { useQuery } from '@tanstack/react-query';
import {  getAllBookings} from '../util/apiCalendar';

const useFetchBookingList = ({ user, token, enabled = true }) => {
  return useQuery({
    queryKey: ['bookingList', user], 
    queryFn: () => getAllBookings(token),
    staleTime: 15 * 60 * 1000, // 15 minutes 
    cacheTime: 15 * 60 * 1000, 
    enabled,
  });
};

export default useFetchBookingList;
