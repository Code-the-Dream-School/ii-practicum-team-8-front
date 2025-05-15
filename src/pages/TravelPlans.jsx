import { useAuth } from '../context/AuthContext';
import useFetchTravelPlans from '../hooks/useFetchTravelPlans';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TravelPlans = () => {

  const { user, token } = useAuth();
  const {
    data: plans,
    isLoading,
    isError,
    error,
    refetch: refetchTravelPlans,
  } = useFetchTravelPlans({ user, token });
  

  console.log(plans?.travelPlans);

  return (
    <Box className='m-container'>
    Travel Plans
    {/* {
      plans?.travelPlans?.map(plan => {
        return (<Typography>{` ${plan._id}: ${plan.startDate} - ${plan.endDate}`}</Typography>);
      })
    } */}
    </Box>
  );
};

export default TravelPlans;