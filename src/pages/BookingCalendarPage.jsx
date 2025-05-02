import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import useCalendarApi from "../hooks/useCalendarApi";

import BigCalendar from '../components/calendar/BigCalendar';
import LoadingWrapper from '../components/loading/LoadingWrapper';

const BookingCalendarPage = () => {

  const { bookingList, isLoading, isError, error} = useCalendarApi();

  return (
    <Box sx={{ height: '90vh' }}>

      <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        <BigCalendar bookingList={bookingList} />
      </LoadingWrapper>

    </Box>
  );
};

export default BookingCalendarPage;
