import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import dayjs from 'dayjs';
import { Views } from 'react-big-calendar';

const BigCalendarToolbar = ({ date, label, view, onNavigate, onView }) => {
  
  const isToday = dayjs(date).isSame(dayjs(), 'day');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1,
        p: 1,
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="contained"
          onClick={() => onNavigate('PREV')}
          size="small"
        >
          <ArrowBackIosNewIcon />
          Back
        </Button>

        <Button
          variant="contained"
          color={isToday ? 'success' : 'primary'}
          onClick={() => onNavigate('TODAY')}
          size="small"
        >
          Today
        </Button>

        <Button
          variant="contained"
          onClick={() => onNavigate('NEXT')}
          size="small"
        >
          Next
          <ArrowForwardIosIcon />
        </Button>
      </Box>

      <Typography variant="h5" color="primary.main">
        {label}
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="contained"
          color={view === Views.MONTH ? 'success' : 'primary'}
          onClick={() => onView(Views.MONTH)}
          size="small"
        >
          Month
        </Button>
      </Box>
    </Box>
  );
};

BigCalendarToolbar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  label: PropTypes.string,
  view: PropTypes.oneOf(Object.values(Views)),
  onNavigate: PropTypes.func,
  onView: PropTypes.func,
};

export default BigCalendarToolbar;
