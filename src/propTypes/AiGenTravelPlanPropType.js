import PropTypes from 'prop-types';
import ActivityPropType from './ActivityPropType';

const AiGenTravelPlanPropType = PropTypes.shape({
    Activities: PropTypes.arrayOf(ActivityPropType),
    Budget: PropTypes.string,
    "Custom Preferences": PropTypes.string,
    Destination: PropTypes.string,
    Duration: PropTypes.string,
    Interests: PropTypes.arrayOf(PropTypes.string),
    TotalNumberOfTravelers: PropTypes.number
});

export default AiGenTravelPlanPropType;