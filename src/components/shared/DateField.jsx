import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DateField = ({ label, value, onChange, sx }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        value={value}
        onChange={onChange}
        disablePast
        label={label}
        format="MM/DD/YYYY"
        views={['day']}
        slotProps={{
          textField: {
            sx: {
              ...sx,
              '& .MuiSvgIcon-root': { color: 'primary.main' },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

DateField.propTypes  = {
  label: PropTypes.string, 
  value: PropTypes.instanceOf(dayjs), 
  onChange: PropTypes.func, 
  sx: PropTypes.object
};

export default DateField;