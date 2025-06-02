import PropTypes from 'prop-types';

const HotelPropType = PropTypes.shape({
    hotel_id: PropTypes.string,
    hotel_name: PropTypes.string,
    review_score: PropTypes.number,
    review_score_word: PropTypes.string,
    review_nr: PropTypes.number,
    max_1440_photo_url: PropTypes.string,
    city_trans: PropTypes.string,
    country_trans: PropTypes.string,
    min_total_price: PropTypes.number
});

export default HotelPropType;