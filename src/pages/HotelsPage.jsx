import { useEffect, useState, useCallback } from 'react';
import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';
import { useHotelsQuery } from '../hooks/useHotelsQuery';
import ListHotels from '../components/hotels/ListHotels';
import LoadingWrapper from '../components/loading/LoadingWrapper';
import ErrorAlert from '../components/alerts/ErrorAlert';
import SearchHotels from '../components/hotels/SearchHotels/SearchHotels';
import AppliedFilters from '../components/hotels/SearchHotels/AppliedFilters';

import locations from '../data/locations.json';

const HotelsPage = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();

  const locationId = parseInt(searchParams.get('locationId'));
  const locationParam = locations.find((item) => item.id === locationId);

  const locationDefValue = locationParam || {
    id: 2,
    city: 'Seattle',
    latitude: 47.6062,
    longitude: -122.3321,
  };
  const checkInDefValue = dayjs();
  const checkOutDefValue = dayjs().add(3, 'day');
  const travelerInfoDefValue = {
    adults: 2,
    kids: 0,
    rooms: 1,
    kidsAge: [],
  };

  const [location, setLocation] = useState(locationDefValue);
  const [checkIn, setCheckIn] = useState(checkInDefValue);
  const [checkOut, setCheckOut] = useState(checkOutDefValue);
  const [travelerInfo, setTravelerInfo] = useState(travelerInfoDefValue);

  const [showAlert, setShowAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState({
    location: locationDefValue,
    checkIn: checkInDefValue,
    checkOut: checkOutDefValue,
    travelerInfo: travelerInfoDefValue,
  });

  const {
    data: listHotels,
    isLoading,
    isError,
    error,
    refetch,
  } = useHotelsQuery(
    {
      location,
      checkIn,
      checkOut,
      travelerInfo,
    },
    false
  );

  useEffect(() => {
    setSearchParams({ locationId: locationDefValue.id });
    refetch();
  }, []);

  const handleSearch = useCallback(() => {
    if (checkIn.isBefore(checkOut)) {
      setShowAlert(false);
      refetch();
      setSearchTerm({
        location,
        checkIn,
        checkOut,
        travelerInfo,
      });
      setSearchParams({ locationId: location.id });
    } else {
      setShowAlert(true);
    }
  }, [location, checkIn, checkOut, travelerInfo]);

  return (
    <>
      <SearchHotels
        location={location}
        setLocation={setLocation}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        travelerInfo={travelerInfo}
        setTravelerInfo={setTravelerInfo}
        handleSearch={handleSearch}
      />
      {showAlert && (
        <ErrorAlert message="Check-In date must be before check-Out date." />
      )}

      {searchTerm && <AppliedFilters searchTerm={searchTerm} />}

      <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        <ListHotels hotels={listHotels} />
      </LoadingWrapper>
    </>
  );
};

export default HotelsPage;
