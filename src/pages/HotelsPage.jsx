import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import dayjs from 'dayjs';

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
  const locationParam = locations.find(item => item.id === locationId);

  const locationDefValue = locationParam || {
    id: 2,
    city: 'Seattle',
    latitude: 47.6062,
    longitude: -122.3321,
  };
  const checkInDefValue = dayjs().format('MM/DD/YYYY');
  const checkOutDefValue = dayjs().add(3, 'day').format('MM/DD/YYYY');
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

  useEffect(() => {
    setSearchParams({ locationId: locationDefValue.id })
    refetch();
  }, []);

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

  const handleSearch = () => {
    if (new Date(checkIn) < new Date(checkOut)) {
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
  };

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
