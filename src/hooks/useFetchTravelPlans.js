import { useQuery } from '@tanstack/react-query';
import { getAllTravelPlans } from '../util/apiTravelPlan';

const useFetchTravelPlans = ({ user, token, enabled = true }) => {
  return useQuery({
    queryKey: ['travelPlans', user], 
    queryFn: () => getAllTravelPlans(token),
    staleTime: 15 * 60 * 1000,
    cacheTime: 15 * 60 * 1000, 
    enabled,
  });
};

export default useFetchTravelPlans;