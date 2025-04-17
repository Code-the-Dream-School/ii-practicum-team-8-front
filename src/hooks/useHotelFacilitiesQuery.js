import { useQuery } from '@tanstack/react-query';
import { getHotelFacilities } from '../util/apiBooking';

export const useHotelFacilitiesQuery = (hotelId) => {
  return useQuery({
    queryKey: ['hotelFacilities', hotelId],
    queryFn: () => getHotelFacilities(hotelId),
    staleTime: 5 * 24 * 60 * 60 * 1000, //5 days
    cacheTime: 5 * 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false, // Optional: disable auto refetch
    enabled: !!hotelId,
  });
};