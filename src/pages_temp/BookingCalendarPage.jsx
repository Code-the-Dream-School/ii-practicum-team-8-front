import { useState } from 'react';

import Box from '@mui/material/Box';

import useFetchBookingList from '../hooks/useFetchBookingList';

import BigCalendar from '../components/calendar/BigCalendar';
import LoadingWrapper from '../components/loading/LoadingWrapper';
import BookingForm from '../components/booking/BookingForm';

const BookingCalendarPage = () => {
  
  const { data: bookingList, isLoading, isError, error, refetch: refetchBookings } = useFetchBookingList();

  const [formOpen, setFormOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState();

  const handleShowBookingView = (booking) => {
    setSelectedBooking(booking);
    setFormOpen(true);
  };

  const handleCancel = () => {
    setFormOpen(false);
  }

  return (
    <Box display="flex" height="100vh">
      <Box flexGrow={1} overflow="auto" flexBasis={'70%'}>
        <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
          <BigCalendar
            bookingList={bookingList}
            onShowBookingView={handleShowBookingView}
          />
        </LoadingWrapper>
      </Box>

      {formOpen && (
        <Box flexGrow={1} overflow="auto" flexBasis={'30%'} bgcolor="background.paper" p={1}>
          <BookingForm booking={selectedBooking} refetchBookings={refetchBookings} onCancel={handleCancel} isInlineForm={true}/>
        </Box>
      )}
    </Box>
  );
};

export default BookingCalendarPage;
