import PropTypes from 'prop-types';

const BookingPropType = PropTypes.shape({
  _id: PropTypes.string,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  numberOfAdults: PropTypes.number.isRequired,
  numberOfKids: PropTypes.number.isRequired,
  numberOfRooms: PropTypes.number.isRequired
});

export default BookingPropType;