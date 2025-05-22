import PropTypes from 'prop-types';
import TravelerInfoPropType from './TravelerInfoPropType';
import LocationPropType from './LocationPropType';

const SearchTermPropType = PropTypes.shape({
     city: LocationPropType,
     checkIn: PropTypes.string,
     checkOut: PropTypes.string,
     travelerInfo: TravelerInfoPropType
});

export default SearchTermPropType;