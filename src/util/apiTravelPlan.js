import { getAllData, deleteData, postData, updateData, getData } from './index';

const endpointTravelPlans = `${
  import.meta.env.VITE_APP_API_URL
}/api/v1/travelplans`;

const getAuthHeaders = (token) => {
  if (!token) {
    throw new Error('No authentication token found. User is not authorized.');
  }
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

const getAllTravelPlans = async (token) => {
  const res = await getAllData(endpointTravelPlans, {}, getAuthHeaders(token));
  if (!res) {
    return {};
  }
  return res;
};

const getTravelPlan = async (travelPlanId, token) => {
  const res = await getData(
    `${endpointTravelPlans}/${travelPlanId}`,
    {},
    getAuthHeaders(token)
  );

  return res || {};
};

const deleteTravelPlan = async (travelPlanId, token) => {
  const res = await deleteData(
    `${endpointTravelPlans}/${travelPlanId}`,
    {},
    getAuthHeaders(token)
  );
  return res || {};
};

const updateTravelPlan = async (travelPlan, token) => {
  const { travelPlanId, ...requestBody } = travelPlan;
  const res = await updateData(
    `${endpointTravelPlans}/${travelPlanId}`,
    requestBody,
    {},
    getAuthHeaders(token)
  );
  return res || {};
};

const createTravelPlan = async (travelPlan, token) => {
  const res = await postData(
    endpointTravelPlans,
    travelPlan,
    {},
    getAuthHeaders(token)
  );
  return res || {};
};

export {
  getAllTravelPlans,
  getTravelPlan,
  deleteTravelPlan,
  updateTravelPlan,
  createTravelPlan,
};
