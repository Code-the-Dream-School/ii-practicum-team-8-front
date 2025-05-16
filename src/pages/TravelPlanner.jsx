import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import useFetchTravelPlans from '../hooks/useFetchTravelPlans';
import useTravelApi from '../hooks/useTravelApi';
import LoadingWrapper from '../components/loading/LoadingWrapper';
import TravelPlanCard from '../components/planner/TravelPlanCard';
import SuccessAlert from '../components/alerts/SuccessAlert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const TravelPlanner = () => {
  const { user, token } = useAuth();
  const {
    data: plans,
    isLoading,
    isError,
    error,
    refetch: refetchTravelPlans,
  } = useFetchTravelPlans({ user, token });

  const {
    deleteTravelPlanData,
    isLoading: isLoadingDel,
    isError: isErrorDel,
    error: errorDel,
    deletedTravelPlan,
  } = useTravelApi();

  useEffect(() => {
    refetchTravelPlans();
  }, [deletedTravelPlan]);

  return (
    <Box className="m-container">
      <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 3, sm: 8, md: 12, lg: 16 }}
          marginTop={2}
          marginBottom={2}
        >
          <Grid size={{ xs: 16, sm: 16 }}>
            <LoadingWrapper
              isLoading={isLoadingDel}
              isError={isErrorDel}
              error={errorDel}
            >
              {deletedTravelPlan && (
                <SuccessAlert
                  message={deletedTravelPlan?.msg}
                />
              )}
            </LoadingWrapper>
          </Grid>

          {plans?.travelPlans?.map((plan) => (
            <Grid key={plan?._id} size={{ xs: 3, sm: 4, md: 4 }}>
              <TravelPlanCard
                plan={plan}
                deleteTravelPlanData={deleteTravelPlanData}
              />
            </Grid>
          ))}
        </Grid>
      </LoadingWrapper>
    </Box>
  );
};

export default TravelPlanner;
