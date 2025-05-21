import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import dayjs from 'dayjs';
import { Views } from 'react-big-calendar';

const BigCalendarToolbar = (props) => {

  const isToday = dayjs(props?.date).isSame(dayjs(), 'day');

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
          variant='contained'
          onClick={() => props?.onNavigate('PREV')}
          size='small'
        >
          <ArrowBackIosNewIcon />
          Back
        </Button>

        <Button
          variant='contained'
          color={isToday? 'success': 'primary' }
          onClick={() => props?.onNavigate('TODAY')}
          size='small'
        >
          Today
        </Button>

        <Button
          variant='contained'
          onClick={() => props?.onNavigate('NEXT')}
          size='small'
        >
          Next
          <ArrowForwardIosIcon />
        </Button>
      </Box>

      <Typography variant="h5" color='primary.main'>{props?.label}</Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant='contained'
          color={props?.view === Views.MONTH ? 'success' : 'primary'}
          onClick={() => props?.onView(Views.MONTH)}
          size='small'
        >
          Month
        </Button>
      </Box>
    </Box>
  );
};

export default BigCalendarToolbar;
