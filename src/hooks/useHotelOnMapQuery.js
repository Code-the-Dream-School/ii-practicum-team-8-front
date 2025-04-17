import { useQuery } from '@tanstack/react-query';
import { getHotelOnMap } from '../util/apiBooking';

export const useHotelOnMapQuery = (hotelId) => {
  return useQuery({
    queryKey: ['hotelOnMap', hotelId],
    queryFn: () => getHotelOnMap(hotelId),
    staleTime: 5 * 24 * 60 * 60 * 1000, //5 days
    cacheTime: 5 * 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false, // Optional: disable auto refetch
    enabled: !!hotelId,
  });
};
