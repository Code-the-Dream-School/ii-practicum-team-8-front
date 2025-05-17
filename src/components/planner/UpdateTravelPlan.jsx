import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useAuth } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import useTravelApi from '../../hooks/useTravelApi';
import LoadingWrapper from '../loading/LoadingWrapper';
import SuccessAlert from '../alerts/SuccessAlert';

const UpdateTravelPlan = () => {
  const { travelPlanId } = useParams();
  const { token } = useAuth();
  const { getTravelPlanData, travelPlanById } = useTravelApi();

  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 2,
    numberOfAdults: 2,
    numberOfKids: 0,
    budget: 'free',
    interests: ['Nature & Adventure'],
    customPreferences: '',
  });

  const { updateTravelPlanData, isLoading, isError, error, updatedTravelPlan } =
    useTravelApi();

  useEffect(() => {
    getTravelPlanData(travelPlanId, token);
  }, []);

  useEffect(() => {
    if (travelPlanById?.travelPlan) {
      const plan = travelPlanById.travelPlan;
      setFormData({
        destination: plan.destination || '',
        startDate: dayjs(plan.startDate).format('YYYY-MM-DD'),
        endDate: dayjs(plan.endDate).format('YYYY-MM-DD'),
        travelers: (plan.numberOfAdults || 2) + (plan.numberOfKids || 0),
        numberOfAdults: plan.numberOfAdults || 2,
        numberOfKids: plan.numberOfKids || 0,
        budget: plan.budget || 'free',
        interests: plan.interests || [],
        customPreferences: plan.customPreferences || '',
      });
    }
  }, [travelPlanById]);

  const interestoptions = [
    'Nature & Adventure',
    'Culture & History',
    'Leisure & Relaxation',
    'Food & Drink',
    'Entertainment & Nightlife',
    'Shopping & Urban',
    'Seasonal & Sports',
    'Well-being & Spiritual',
  ];

  const budgetoptions = [
    { value: 'free', label: 'Free' },
    { value: 'economy', label: 'Economy' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'luxury', label: 'Luxury' },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleInterestToggle = (interest) => {
    setFormData((prev) => {
      const newInterests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: newInterests };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const travelData = { ...formData };
    travelData.startDate = dayjs(travelData.startDate).format('MM/DD/YYYY');
    travelData.endDate = dayjs(travelData.endDate).format("MM/DD/YYYY");
    travelData.travelPlanId = travelPlanId;
    updateTravelPlanData(travelData, token);
  };

  return (
    <div className="travel-plan-form">
      <h2>Travel Plan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destination"> Destination (City/Country)</label>
          <input
            id="destination"
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate"> Start Date</label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              id="endDate"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="travelers">Number of Travelers:</label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            min={1}
            max={15}
            value={formData.travelers}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfAdults">Number of Adults:</label>
          <input
            type="number"
            id="numberOfAdults"
            name="numberOfAdults"
            min={1}
            max={15}
            value={formData.numberOfAdults}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfKids">Number of Kids:</label>
          <input
            type="number"
            id="numberOfKids"
            name="numberOfKids"
            min={0}
            max={15}
            value={formData.numberOfKids}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            {budgetoptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Interests(Select all that apply)</label>
          <div className="interest-options">
            {interestoptions.map((interest) => (
              <button
                type="button"
                key={interest}
                className={`interest-btn ${
                  formData.interests.includes(interest) ? 'active' : ''
                }`}
                onClick={() => handleInterestToggle(interest)}
                aria-pressed={formData.interests.includes(interest)}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Custom Preferences</label>
          <textarea
            name="customPreferences"
            value={formData.customPreferences}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? 'submitting...' : 'Update Travel plan'}
        </button>
      </form>
      <LoadingWrapper isLoading={isLoading} isError={isError} error={error}>
        {updatedTravelPlan && <SuccessAlert message="Success" />}
      </LoadingWrapper>
    </div>
  );
};
export default UpdateTravelPlan;
