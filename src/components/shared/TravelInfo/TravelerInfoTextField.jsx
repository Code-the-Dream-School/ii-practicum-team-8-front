import PropTypes from 'prop-types';
import TravelerInfoPropType from '../../../propTypes/TravelerInfoPropType';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import TravelerInfoDialog from './TravelerInfoDialog';

const TravelerInfoTextField = ({ travelerInfo, setTravelerInfo, sx }) => {

  const kidsAgeStr = travelerInfo?.kids
    ? `Age(s): ${travelerInfo?.kidsAge?.join(', ')};`
    : '';

  return (
    <TextField
      label="Traveler Info"
      variant="outlined"
      value={`Adults: ${travelerInfo?.adults || 2}; Kids: ${
        travelerInfo?.kids || 0
      }; ${kidsAgeStr} Rooms: ${travelerInfo?.rooms || 1}`}
      sx={{
        ...sx,
        '& .MuiOutlinedInput-root': {
          paddingRight: 0,
        },
      }}
      slotProps={{
        input: {
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <TravelerInfoDialog
                setTravelerInfo={setTravelerInfo}
                travelerInfo={travelerInfo}
              />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

TravelerInfoTextField.propTypes = {
  travelerInfo: TravelerInfoPropType,
  setTravelerInfo: PropTypes.func,
};

export default TravelerInfoTextField;