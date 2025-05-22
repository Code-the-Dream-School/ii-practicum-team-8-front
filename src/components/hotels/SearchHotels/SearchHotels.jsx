import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AutocompleteLocation from './AutocompleteLocation';
import DateField from '../../shared/DateField';
import TravelerInfoTextField from '../../shared/TravelInfo/TravelerInfoTextField';

const SearchHotels = ({
  location,
  setLocation,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  travelerInfo,
  setTravelerInfo,
  handleSearch,
}) => {
  const handleAutocompleteChange = (event, value) => {
    setLocation(value);
  };

  const handleCheckInChange = (value) => {
    const checkInVal = value ? value.format('MM/DD/YYYY') : '';
    setCheckIn(checkInVal);
  };

  const handleCheckOutChange = (value) => {
    const checkOutVal = value ? value.format('MM/DD/YYYY') : '';
    setCheckOut(checkOutVal);
  };

  return (
    <Box
      display="flex"
      gap={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: 2,
        mb: 2,
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
      }}
    >
      <AutocompleteLocation
        value={location}
        onChange={handleAutocompleteChange}
      />
      <DateField
        label="Check In"
        value={dayjs(checkIn)}
        onChange={handleCheckInChange}
        sx={{
          width: {
            xs: '100%',
            sm: '300px',
          },
        }}
      />
      <DateField
        label="Check Out"
        value={dayjs(checkOut)}
        onChange={handleCheckOutChange}
        sx={{
          width: {
            xs: '100%',
            sm: '300px',
          },
        }}
      />
      <TravelerInfoTextField
        travelerInfo={travelerInfo}
        setTravelerInfo={setTravelerInfo}
        sx={{
          width: {
            xs: '100%',
            sm: '400px',
          },
        }}
      />
      <Button
        variant="contained"
        sx={{ height: '54px' }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchHotels;