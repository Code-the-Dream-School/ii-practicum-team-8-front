import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import useCalendarApi from "../hooks/useCalendarApi";

import BigCalendar from '../components/calendar/BigCalendar';
import LoadingWrapper from '../components/loading/LoadingWrapper';

const BookingCalendarPage = () => {

  const { bookingList, isLoading, isError, error} = useCalendarApi();

  return (
    <Box sx={{ height: '95vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'centerflex-start',
          alignItems: 'center',
          m: 1
        }}
      >
        <Typography variant="h5" color="primary.main">
          Dream Trip Planner:
        </Typography>
      </Box>

      <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        <BigCalendar bookingList={bookingList} />
      </LoadingWrapper>

    </Box>
  );
};

export default BookingCalendarPage;
