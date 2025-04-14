import { useQuery } from '@tanstack/react-query';
import { getHotels } from '../util/apiBooking';

export const useHotelsQuery = () => {
  return useQuery({
    queryKey: ['hotelsSeattle'],
    queryFn: getHotels,
    staleTime: 5 * 24 * 60 * 60 * 1000, //5 days  5 * 60 * 1000, // 5 minutes
    cacheTime: 5 * 24 * 60 * 60 * 1000, // 15 * 60 * 1000, // 15 minutes
    refetchOnWindowFocus: false, // Optional: disable auto refetch
  });
};
