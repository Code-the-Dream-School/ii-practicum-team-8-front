import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const locations = [
  { id: 1, city: 'New York, USA', latitude: 40.7128, longitude: -74.0060 },
  { id: 2, city: 'Seattle, USA', latitude: 47.6062, longitude: -122.3321 },
  { id: 3, city: 'Los Angeles, USA', latitude: 34.0522, longitude: -118.2437 },
  { id: 4, city: 'Chicago, USA', latitude: 41.8781, longitude: -87.6298 },
  { id: 5, city: 'San Francisco, USA', latitude: 37.7749, longitude: -122.4194 },
  { id: 6, city: 'Las Vegas, USA', latitude: 36.1699, longitude: -115.1398 },
  { id: 7, city: 'Miami, USA', latitude: 25.7617, longitude: -80.1918 },
  { id: 8, city: 'Washington D.C, USA', latitude: 38.9072, longitude: -77.0369 },
  { id: 9, city: 'Boston, USA', latitude: 42.3601, longitude: -71.0589 },
  {id: 10, city: 'Bali, Indonesia', latitude: -8.3405, longitude: 115.0920 },
  {id: 10, city: 'Kyoto, Japan', latitude: 35.0116, longitude: 135.7681 },
  {id: 10, city: 'Rio de Janeiro, Brazil', latitude: -22.9068, longitude: -43.1729 },
  {id: 10, city: 'Rome, Italy', latitude: 41.9028, longitude: 12.4964 }
];


const AutoCompleteLocation = ({ value, onChange }) => {
  return (
    <Autocomplete
      options={locations}
      getOptionLabel={ location => location.city}
      value={value}
      onChange={onChange}
      sx={{
        width: '300px',
        maxWidth: '90%',
      }}
      renderInput={(params) => (
        <TextField
          label="Location"
          {...params}
          sx={{
            '& .MuiSvgIcon-root': { color: 'primary.main' },
            '& .MuiOutlinedInput-root.Mui-focused': {
              '& > fieldset': {
                borderColor: 'primary.dark',
              },
            },
          }}
        />
      )}
    />
  );
};

export default AutoCompleteLocation;
