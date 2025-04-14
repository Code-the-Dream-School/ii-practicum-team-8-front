import { useQuery } from '@tanstack/react-query';
import { getHotelPhotos } from '../util/apiBooking';

export const useHotelPhotosQuery = (hotelId) => {
  return useQuery({
    queryKey: ['hotelPhotos', hotelId],
    queryFn: () => getHotelPhotos(hotelId),
    staleTime:  5 * 24 * 60 * 60 * 1000, //5 days
    cacheTime: 5 * 24 * 60 * 60 * 1000,
    refetchOnWindowFocus: false, // Optional: disable auto refetch
    enabled: !!hotelId,
  });
};
