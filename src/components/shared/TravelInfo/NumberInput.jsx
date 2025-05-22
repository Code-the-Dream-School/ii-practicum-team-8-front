import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const NumberInput = ({ label, value, minValue, maxValue, onChange }) => {
  
  const handleIncrease = () => {
    if (maxValue) {
      const val = Math.min(value + 1, maxValue);
      onChange(val);
    } else {
      onChange(value + 1);
    }
  };
  const handleDecrease = () => {
    const val = Math.max(value - 1, minValue);
    onChange(val);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
      <Box sx={{ width: '25%' }}>
        <Typography>{label}</Typography>
      </Box>
      <Box sx={{ width: '75%' }}>
        <IconButton onClick={handleDecrease} aria-label="Decrease value">
          <RemoveIcon />
        </IconButton>
        <TextField
          value={value}
          size="small"
          type="text"
          slotProps={{
            input: {
              inputMode: 'numeric',
              min: minValue,
              max: maxValue,
              style: {
                width: 50,
              },
            },
          }}
        />
        <IconButton onClick={handleIncrease} aria-label="Increase value">
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

NumberInput.propTypes  = {
  label: PropTypes.string, 
  value: PropTypes.number, 
  minValue: PropTypes.number, 
  maxValue: PropTypes.number, 
  onChange: PropTypes.func
};

export default NumberInput;
