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

export default DateField;