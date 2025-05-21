import PropTypes from 'prop-types';
import BookingPropType from './BookingPropType';

const EventCalendarPropType = PropTypes.shape({
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  originalBooking: BookingPropType.isRequired
});

export default EventCalendarPropType;