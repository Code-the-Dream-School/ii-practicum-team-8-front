import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AutocompleteLocation from './AutocompleteLocation';
import DateField from '../../shared/DateField';
import TravelerInfoTextField from '../../shared/TravelInfo/TravelerInfoTextField';
import LocationPropType from '../../../propTypes/LocationPropType';
import TravelerInfoPropType from '../../../propTypes/TravelerInfoPropType';

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
        value={checkIn}
        onChange={(value) => setCheckIn(value)}
        sx={{
          width: {
            xs: '100%',
            sm: '300px',
          },
        }}
      />
      <DateField
        label="Check Out"
        value={checkOut}
        onChange={(value) => setCheckOut(value)}
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

SearchHotels.propTypes  = {
  location: LocationPropType,
  setLocation: PropTypes.func,
  checkIn: PropTypes.instanceOf(dayjs().constructor),
  setCheckIn: PropTypes.func,
  checkOut: PropTypes.instanceOf(dayjs().constructor),
  setCheckOut: PropTypes.func,
  travelerInfo: TravelerInfoPropType,
  setTravelerInfo: PropTypes.func,
  handleSearch: PropTypes.func,
};

export default SearchHotels;
