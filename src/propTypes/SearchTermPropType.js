import PropTypes from 'prop-types';
import TravelerInfoPropType from './TravelerInfoPropType';
import LocationPropType from './LocationPropType';

const SearchTermPropType = PropTypes.shape({
     city: LocationPropType.isRequired,
     checkIn: PropTypes.instanceOf(Date).isRequired,
     checkOut: PropTypes.instanceOf(Date).isRequired,
     travelerInfo: TravelerInfoPropType.isRequired
});

export default SearchTermPropType;