import PropTypes, { string } from 'prop-types';
import AiGenTravelPlanPropType from './AiGenTravelPlanPropType';

const TravelPlanPropType = PropTypes.shape({
    _id: PropTypes.string,
    destination: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    interests: PropTypes.arrayOf(string).isRequired,
    numberOfAdults: PropTypes.number.isRequired,
    numberOfKids: PropTypes.number.isRequired,
    numberOfTravelers: PropTypes,
    budget: PropTypes.string,
    aiGenTravelPlanPropType: AiGenTravelPlanPropType

});

export default TravelPlanPropType;