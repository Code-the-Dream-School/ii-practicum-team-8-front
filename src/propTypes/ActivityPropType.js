import PropTypes from 'prop-types';

const ActivityPropType = PropTypes.shape({
    Day: PropTypes.number.isRequired,
    Date: PropTypes.string.isRequired,
    Activities: PropTypes.arrayOf(PropTypes.shape({
        Time: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Cost: PropTypes.string.isRequired,
        Notes: PropTypes.string.isRequired
    }))
});

export default ActivityPropType;