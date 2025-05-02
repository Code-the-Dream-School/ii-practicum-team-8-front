import { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import { useHotelsQuery } from '../hooks/useHotelsQuery';

import ListHotels from '../components/hotels/ListHotels';
import LoadingWrapper from '../components/loading/LoadingWrapper';
import ErrorAlert from '../components/error/ErrorAlert';
import SearchHotels from '../components/hotels/SearchHotels/SearchHotels';

const HotelsPage = () => {

  const locationDefValue =  { id: 5, city: 'Seattle', latitude: 47.6062, longitude: -122.3321 };
  const checkInDefValue = dayjs().format('MM/DD/YYYY');;
  const checkOutDefValue = dayjs().add(3, 'day').format('MM/DD/YYYY');

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
     {showAlert && <ErrorAlert message='Check-In date must be before check-Out date.'/> }
      <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        <ListHotels hotels={listHotels} />
      </LoadingWrapper>
    </>
  );
};

export default HotelsPage;
