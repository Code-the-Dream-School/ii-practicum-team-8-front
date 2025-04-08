import { useState, useEffect } from 'react';
import { getHotels } from '../util/index';

const useApi = () => {
  const [hotelsList, setHotelsList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchHotelsData();
  }, []);

  const handleApiCall = async (apiFnc, setData) => {
    setIsLoading(true);
    try {
      const result = await apiFnc();
      setData(result);
      setIsError(false);
    } catch (err) {
      console.log(err.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchHotelsData = async () => handleApiCall(getHotels, setHotelsList);

  return { hotelsList, isLoading, isError };
};

export default useApi;
