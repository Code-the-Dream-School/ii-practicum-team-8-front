import dayjs from 'dayjs';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import AutocompleteLocation from './AutocompleteLocation';
import DateField from '../../shared/DateField';
import TravelerInfoDialog from './TravelerInfoDialog';

const SearchHotels = (
  {location, setLocation, 
   checkIn, setCheckIn, 
   checkOut, setCheckOut,
   travelerInfo, setTravelerInfo,
   handleSearch}) => {

  const handleAutocompleteChange = (event, value) => {
    setLocation(value);
  };

  const handleCheckInChange = (value) => {
    const checkInVal = value ? value.format('MM/DD/YYYY') : '';
    setCheckIn(checkInVal );
  };

  const handleCheckOutChange = (value) => {
    const checkOutVal = value ? value.format('MM/DD/YYYY') : '';
    setCheckOut(checkOutVal);
  };

  const kidsAgeStr = travelerInfo?.kids? `Age(s): ${travelerInfo?.kidsAge?.join(', ')};`: '';

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
        sx={{ width: '300px', maxWidth: '90%',}}
      />
      <DateField
        label="Check Out"
        value={dayjs(checkOut)}
        onChange={handleCheckOutChange}
        sx={{ width: '300px', maxWidth: '90%',}}
      />
      <TextField
        label='Traveler Info'
        variant='outlined'
        value = {`Adults: ${travelerInfo?.adults||2}; Kids: ${travelerInfo?.kids||0}; ${kidsAgeStr} Rooms: ${travelerInfo?.rooms||1}`}
        sx={{
          width: '400px',
          maxWidth: '90%',
        }}
        slotProps={{
          input: {
            readOnly: true,
            endAdornment: (
              <InputAdornment>
                <TravelerInfoDialog 
                    setTravelerInfo={setTravelerInfo} 
                    travelerInfo={travelerInfo} />
              </InputAdornment>
            ),
          },
        }}
      />
      <Button variant="contained" onClick={handleSearch}>Search</Button>
    </Box>
  );
};

export default SearchHotels;
