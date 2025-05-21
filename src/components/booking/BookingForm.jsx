import PropTypes from 'prop-types';
import BookingPropType from '../../propTypes/BookingPropType';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import useCalendarApi from '../../hooks/useCalendarApi';
import { useAuth } from '../../context/AuthContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DateField from '../shared/DateField';
import LoadingWrapper from '../loading/LoadingWrapper';
import SuccessAlert from '../alerts/SuccessAlert';
import TravelerInfoTextField from './TravelerInfoTextField';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BookingForm = ({ booking, refetchBookings, onCancel, isInlineForm }) => {
  const { token } = useAuth();
  const {
    deleteBookingData,
    createBookingData,
    updateBookingData,
    isLoading,
    isError,
    error,
    deletedBooking,
    updatedBooking,
    createdBooking,
  } = useCalendarApi();

  const label = booking?._id ? 'Update' : 'Create';

  const [checkIn, setCheckIn] = useState(booking?.startDate);
  const [checkOut, setCheckOut] = useState(booking?.endDate);
  const [travelerInfo, setTravelerInfo] = useState({
    adults: booking?.numberOfAdults ? booking?.numberOfAdults : 2,
    kids: booking?.numberOfKids ? booking?.numberOfKids : 0,
    rooms: booking?.numberOfRooms ? booking?.numberOfRooms : 1,
    kidsAge: [],
  });

  useEffect(() => {
    setCheckIn(booking?.startDate);
    setCheckOut(booking?.endDate);
    setTravelerInfo({
      adults: booking?.numberOfAdults ? booking?.numberOfAdults : 2,
      kids: booking?.numberOfKids ? booking?.numberOfKids : 0,
      rooms: booking?.numberOfRooms ? booking?.numberOfRooms : 1,
      kidsAge: [],
    });
  }, [booking]);

  useEffect(() => {
    if (createdBooking || updatedBooking || deletedBooking) {
      refetchBookings();
    }
  }, [createdBooking, updatedBooking, deletedBooking]);

  const handleCheckInChange = (value) => {
    const checkInVal = value ? value.format('MM/DD/YYYY') : '';
    setCheckIn(checkInVal);
  };

  const handleCheckOutChange = (value) => {
    const checkOutVal = value ? value.format('MM/DD/YYYY') : '';
    setCheckOut(checkOutVal);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      startDate: dayjs(checkIn).format('MM/DD/YYYY'),
      endDate: dayjs(checkOut).format('MM/DD/YYYY'),
      numberOfAdults: travelerInfo?.adults,
      numberOfKids: travelerInfo?.kids,
      numberOfRooms: travelerInfo?.rooms,
    };

    if (booking?._id) {
      bookingData.bookingId = booking?._id;
      updateBookingData(bookingData, token);
    } else {
      createBookingData(bookingData, token);
    }
  };

  const handleOnDelete = (e) => {
    deleteBookingData(booking?._id, token);
  };

  return (
    <Box component="form" onSubmit={handleOnSubmit}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid size={booking?._id ? { xs: 12, sm: 10 } : { xs: 12, sm: 12 }}>
          <Typography variant="h6" color="primary.main" fontWeight="bold">
            {label} Booking:
          </Typography>
        </Grid>

        {booking?._id && (
          <Grid size={{ xs: 12, sm: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={handleOnDelete}
              aria-label="delete"
              disabled={isLoading}
            >
              <DeleteIcon />
            </Button>
          </Grid>
        )}

        <Grid size={{ xs: 12, sm: 12 }}>
          <DateField
            label="Check In"
            value={dayjs(checkIn)}
            onChange={handleCheckInChange}
            sx={{ width: '100%' }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 12 }}>
          <DateField
            label="Check Out"
            value={dayjs(checkOut)}
            onChange={handleCheckOutChange}
            sx={{ width: '100%' }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 12 }}>
          <TravelerInfoTextField
            travelerInfo={travelerInfo}
            setTravelerInfo={setTravelerInfo}
          />
        </Grid>

        <Grid size={{ xs: 12 }} textAlign="center" justifyContent="center">
          <Button
            variant="contained"
            size="large"
            sx={{ m: 2 }}
            onClick={onCancel}
          >
            <CancelIcon /> Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isLoading}
          >
            {booking?._id ? (
              <>
                <EditIcon /> Update
              </>
            ) : (
              <>
                <AddIcon /> Create
              </>
            )}
          </Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 12 }}>
          <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
            {(updatedBooking || createdBooking || deletedBooking) && (
              <SuccessAlert message="Success" />
            )}
          </LoadingWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

BookingForm.propTypes = {
  booking: BookingPropType,
  refetchBookings: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isInlineForm: PropTypes.bool.isRequired,
};

export default BookingForm;