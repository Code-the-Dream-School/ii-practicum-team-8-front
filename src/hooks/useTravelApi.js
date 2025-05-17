import { useState } from 'react';
import { deleteTravelPlan, updateTravelPlan, createTravelPlan, getTravelPlan} from '../util/apiTravelPlan';

const useTravelApi = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  const [createdTravelPlan, setCreatedTravelPlan] = useState();
  const [updatedTravelPlan, setUpdatedTravelPlan] = useState();
  const [deletedTravelPlan, setDeletedTravelPlan] = useState();
  const [ travelPlanById, setTravelPlanById] = useState();

  const deleteTravelPlanData = async (travelPlanId, token) => {
    setIsLoading(true);
    try {
      const res = await deleteTravelPlan(travelPlanId, token);
      setDeletedTravelPlan(res);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setError({
        message: err?.message || 'Something went wrong',
        status: err?.response?.status,
        statusText: err?.response?.statusText,
        data: err?.response?.data,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getTravelPlanData = async (travelPlanId, token) => {
    setIsLoading(true);
    try {
      const res = await getTravelPlan(travelPlanId, token);
      setTravelPlanById(res);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setError({
        message: err?.message || 'Something went wrong',
        status: err?.response?.status,
        statusText: err?.response?.statusText,
        data: err?.response?.data,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const createTravelPlanData = async (travelPlan, token) => {
    setIsLoading(true);
    try {
      const res = await createTravelPlan(travelPlan, token);
      setCreatedTravelPlan(res);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setError({
        message: err?.message || 'Something went wrong',
        status: err?.response?.status,
        statusText: err?.response?.statusText,
        data: err?.response?.data,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateTravelPlanData = async (travelPlan, token) => {
    setIsLoading(true);
    try {
      const res = await updateTravelPlan(travelPlan, token);
      setUpdatedTravelPlan(res);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setError({
        message: err?.message || 'Something went wrong',
        status: err?.response?.status,
        statusText: err?.response?.statusText,
        data: err?.response?.data,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    error,
    deleteTravelPlanData,
    createTravelPlanData,
    updateTravelPlanData,
    getTravelPlanData,
    deletedTravelPlan,
    updatedTravelPlan,
    createdTravelPlan,
    travelPlanById,
  };
};

export default useTravelApi;
