import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import locations from '../../../data/locations.json';

const AutoCompleteLocation = ({ value, onChange }) => {
  return (
    <Autocomplete
      options={locations}
      getOptionLabel={ location => location.city}
      value={value}
      onChange={onChange}
      sx={{
          width: {
            xs: '100%',
            sm: '300px',
          },
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
