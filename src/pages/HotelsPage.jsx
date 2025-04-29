import { useEffect, useState } from 'react';

import { useHotelsQuery } from '../hooks/useHotelsQuery';

import ListHotels from '../components/hotels/ListHotels';
import LoadingWrapper from '../components/loading/LoadingWrapper';
import SearchHotels from '../components/hotels/SearchHotels/SearchHotels';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const HotelsPage = () => {

  const newDate = new Date();
  const locationDefValue =  { id: 5, city: 'Seattle', latitude: 47.6062, longitude: -122.3321 };
  const checkInDefValue = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
  const checkOutDefValue = `${newDate.getMonth() + 1}/${newDate.getDate() + 3}/${newDate.getFullYear()}`;

  const [location, setLocation] = useState(locationDefValue);
  const [checkIn, setCheckIn] = useState(checkInDefValue);
  const [checkOut, setCheckOut] = useState(checkOutDefValue);

  const [showAlert, setShowAlert] = useState(false);

  useEffect( () => {
    refetch();
  }, []);

  const [travelerInfo, setTravelerInfo] = useState({
    adults: 2,
    kids: 0,
    rooms: 1,
    kidsAge: [],
  });

  const { data: listHotels, isLoading, isError, error, refetch } = useHotelsQuery({
    location,
    checkIn,
    checkOut,
    travelerInfo 
  }, false);

  const handleSearch = () => {
    if (new Date(checkIn) < new Date(checkOut)) {
      setShowAlert(false);
      refetch();
    } else {
      setShowAlert(true);
    }
  }

  return (
    <>
      <SearchHotels location={location} setLocation={setLocation}
                    checkIn={checkIn} setCheckIn={setCheckIn}
                    checkOut={checkOut} setCheckOut={setCheckOut}
                    travelerInfo={travelerInfo} setTravelerInfo={setTravelerInfo}
                    handleSearch={handleSearch}
      />
     {showAlert && (
        <Stack sx={{ width: '100%', mt: 2, mb: 2 }}>
          <Alert severity="error">Check-In date must be before check-Out date.</Alert>
        </Stack>
      ) }
      <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        <ListHotels hotels={listHotels} />
      </LoadingWrapper>
    </>
  );
};

export default HotelsPage;
