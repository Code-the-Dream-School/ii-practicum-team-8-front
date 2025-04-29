import { useQuery } from '@tanstack/react-query';
import { getHotels } from '../util/apiBooking';

export const useHotelsQuery = ({ location, checkIn, checkOut, travelerInfo }, enabled) => {
  return useQuery({
    queryKey: ['hotelSearch'],
    queryFn: () => getHotels(location, checkIn, checkOut, travelerInfo),
    staleTime: 5 * 24 * 60 * 60 * 1000, //5 days  5 * 60 * 1000, // 5 minutes
    cacheTime: 5 * 24 * 60 * 60 * 1000, // 15 * 60 * 1000, // 15 minutes
    enabled,
  });
};
