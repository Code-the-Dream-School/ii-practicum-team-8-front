import PropTypes from 'prop-types';

const HotelPhotoPropType = PropTypes.shape({
    photo_id: PropTypes.string,
    url_1440: PropTypes.string,
    tags: PropTypes.array
});

export default HotelPhotoPropType;