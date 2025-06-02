import PropTypes from 'prop-types';

const TravelerInfoPropType = PropTypes.shape({
  adults: PropTypes.number.isRequired,
  kids: PropTypes.number.isRequired,
  rooms: PropTypes.number.isRequired,
  kidsAge: PropTypes.arrayOf(PropTypes.number),
});

export default TravelerInfoPropType;