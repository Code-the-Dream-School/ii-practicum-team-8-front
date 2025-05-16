import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import dayjs from "dayjs";
const Travelplan = () => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: "",
    numberOfAdults: 1,
    numberOfKids: 0,
    budget: "free",
    interests: ["Nature & Adventure", "Culture & History"],
    customPreferences: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const interestoptions = [
    "Nature & Adventure",
    "Culture & History",
    "Leisure & Relaxation",
    "Food & Drink",
    "Entertainment & Nightlife",
    "Shopping & Urban",
    "Seasonal & Sports",
    "Well-being & Spiritual",
  ];

  const budgetoptions = [
    { value: "free", label: "Free" },
    { value: "economy", label: "Economy" },
    { value: "moderate", label: "Moderate" },
    { value: "luxury", label: "Luxury" },
  ];
  const handleChange = (e) => {
    let { name, value } = e.target;

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
    console.log(formData);
    setIsLoading(true);
    setError(null);

    const travelplanData = { ...formData };
    travelplanData.startDate = dayjs(
      travelplanData.startDate,
      "MM/DD/YYYY"
    ).format("YYYY-MM-DD");
    travelplanData.endDate = dayjs(travelplanData.endDate, "MM/DD/YYYY").format(
      "YYYY-MM-DD"
    );
    console.log(travelplanData);
    try {
      const apiUrl = `${import.meta.env.VITE_APP_API_URL}/api/v1/travelplans`;
      console.log("Making request to:", apiUrl);
      console.log(
        "API URL:",
        `${import.meta.env.VITE_APP_API_URL}/api/v1/travelplans`
      );
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(travelplanData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status:${response.status}`);
      }

      const data = await response.json();
      console.log("success:", data);
      setResponseData(data);
      console.log("success:", data);
    } catch (error) {
      setError(error.message);
      console.error("Error submitting travel plans:", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchtravelPlans = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const apiUrl = `${import.meta.env.VITE_APP_API_URL}/api/v1/travelplans`;
      console.log("Fetching travel plans from:", apiUrl);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status:${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched travel plans:", data);
      return data;
    } catch (error) {
      setError(error.message);
      console.error("Error fetching travel plans:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="travel-plan-form">
      <h2>Create Your perfect travel Plan</h2>
      {error && <div className="error-message">{error}</div>}
      {responseData && (
        <div className="success-message">
          plan created successfully! ID:{responseData.id}
        </div>
      )}
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
            min="1"
            max="15"
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
            min="1"
            max="15"
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
            min="0"
            max="15"
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
                  formData.interests.includes(interest) ? "active" : ""
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
          {isLoading ? "submitting..." : "Create Travel plan"}
        </button>
      </form>
    </div>
  );
};
export default Travelplan;
