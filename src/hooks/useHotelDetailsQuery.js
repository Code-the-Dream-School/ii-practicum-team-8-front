import { useQuery } from '@tanstack/react-query';
import { getHotelDetails } from '../util/apiBooking';

export const useHotelDetailsQuery = (hotelId) => {
  return useQuery({
    queryKey: ['hotelDetails', hotelId],
    queryFn: () => getHotelDetails(hotelId),
    staleTime: 5 * 24 * 60 * 60 * 1000, //5 days
    cacheTime: 5 * 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false, // Optional: disable auto refetch
    enabled: !!hotelId,
  });
};
