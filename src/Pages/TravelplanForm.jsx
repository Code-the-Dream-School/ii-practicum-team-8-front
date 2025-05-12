import React, { useState } from 'react';

    const TravelplanForm = () =>{
    const [formData, setFormData] = useState({
        destination: '',
        arrivalDate: '', 
        departureDate: '',
        travelers: 1,
        budgetLevel: '',
        interests: '',
        accommodationType:'',
        transportation:'',
        dietaryRestrictions:'',
        specialRequirements:''

});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [responseData, setResponseData] = useState(null);

        const interestoptions =[
                'Beach', 'Food', 'Sport', 'Nature', 'Cultural', 
                'Historical','Shopping','Relax','Spiritual'
        ];

        const budgetoptions = [
          { value: 'low', label: 'Low ($500)' },
          { value: 'medium', label: 'Medium ($2500)'},
          { value: 'high', label: 'High  ($5000)' }
      ];
        const handleChange = (e) => {
                const { name,value } = e.target;
                setFormData(prev =>({...prev,
                        [name]:value}));

        };
         const handleInterestToggle = (interest) => {
                setFormData(prev =>{
                        const newInterests = prev.interests.includes(interest)
                        ? prev.interests.filter(i => i !== interest) 
                        : [...prev.interests, interest];
                        return{...prev,interests: newInterests };
                });
         };
        const handleSubmit = async (e) => {
                e.preventDefault();
                setIsLoading(true);
                setError(null);
        
         
        try {
                const response = await fetch ('https://api.com /travelplans',{
                        method: 'POST',
                        headers: {
                         'Content-Type':'application/json',
                        },
                        body: JSON.stringify(formData),
                });

                if (!response.ok) {
                        throw new Error(`HTTP error! status:${response.status}`);
                }

          const data = await response.json();
          setResponseData(data);
           console.log('success:',data);
        } catch (error) {
                setError(error.message);
                console.error('Error submitting form:', error.message);
        } finally {
                setIsLoading(false);
        }
    };
     const fetchtravelplans = async () => {
        setIsLoading(true);
        try {
                const response = await fetch('https://api.com /travelplans');
                if (!response.ok) {
                        throw new Error(`HTTP error! status:${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched travel plans:',data);
                return data;
        } catch (error){
                setError(error.message);
                console.error('Error fetching travel plans:',error);
        } finally {
                setIsLoading(false);
        }
     };
        return(
                <div className='travel-plan-form'>
                        <h2>Create Your perfect travel Plan</h2>
                        {error && <div className='error- message'>error</div>}
                        {responseData &&(
                                <div className='success-message'>
                             plan created successfully! ID:{responseData.id}
                                </div>
                        )}
                        <form onSubmit={handleSubmit}>
                   <div className = 'form-group'>
                        <label htmlFor='destination'> Destination (City/Country)</label>
                        <input 
                        id='destination'
                        type='text'
                        name='destination' 
                        value={formData.destination}
                        onChange= {handleChange}
                        required
                        />
                   </div>

                   <div className = 'form-row'>
                        <div className='form-group'>
                        <label htmlFor='arrivalDate'>Arrival Date</label>
                        <input 
                        id='arrivalDate'
                        type='date'
                        name='arrivalDate' 
                        value={formData.arrivalDate}
                        onChange={handleChange}
                        required
                        />
                   </div>
                    <div className = 'form-group'>
                        <label htmlFor='departureDate'>Departure Date</label>
                        <input
                        id='departureDate'
                        type='date'
                        name='departureDate' 
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                        />
                        </div>
                   </div>
         <div className = 'form-group'>
        <label htmlFor='travelers'>Number of Travelers</label>
          <input
                id='travelers' 
                type='number'
                name='travelers' 
                min= '1'
                max= '15'
                value={formData.travelers}
                onChange={handleChange}
                required
                        />
        <div className="form-group">
        <label htmlFor="numberOfAdults">Number of Adults:</label>
        <input 
        type="number" id="numberOfAdults" 
        name="numberOfAdults" min="1" max="15" 
        value= {formData.numberOfAdults} 
        required
      />
        </div>
  
  <div className="form-group">
    <label htmlFor="numberOfKids">Number of Kids:</label>
    <input 
    type="number" 
    id="numberOfKids" 
    name="numberOfKids" 
    min="0" max="15" 
    value={formData.numberOfKids}/>
           </div>
        </div>

                   <div className = 'form-group'>
                        <label htmlFor='budgetLevel'>Budget Level</label>
                        <select
                         id='budgetLevel'
                        name='budgetLevel' 
                        value={formData.budgetLevel}
                        onChange={handleChange}
                        required
                        >
                          {budgetoptions.map(option =>(
                          <option key={option.value} value={option.value}>
                              {option.label}
                              </option>
                       ))}
                        </select>
                        </div>
                        <div className = 'form-group'>
                        <label>Interests(Select all that apply)</label>
                        <div className='interest-options'>
                                {interestoptions.map(interest =>(
                               <button 
                               type='button'
                               key={interest}
                               className={`interest-btn ${formData.interests.includes(interest) ? 'active':''}`}
                               onClick={() => handleInterestToggle(interest)}
                               aria-pressed = {formData.interests.includes(interest)}
                               >
                                {interest}
                               </button>
                                ))}
                        </div>
                        
                        </div>
      <div className='form-row'>
 <div className='form-group'>
    <label htmlFor='accommodationType'> Accommodation Type</label>
    <select
    id='accommodationType' 
    name='accommodationType'
    value={formData.accommodationType}
    onChange={handleChange}
    >
       <option value='hotel'>Hotel</option>
         <option value='hostel'>Hostel </option>
         <option value='apartment'> Apartment</option>  
         <option value='resort'> Resort</option>  
         <option value='bed and breakfast'> Bed & Breakfast</option>
    </select>
     </div>
 
 
        <div className='form-group'>
    <label htmlFor='transportation'> Transportation</label>
    <select 
    id='transportation'
    name='transportation'
    value={formData.transportation}
    onChange={handleChange}
    >
       <option value='flight'>Filght</option>
         <option value='Train'>Train</option>
         <option value='car'> Car</option>  
         <option value='bus'> Bus</option>  
         <option value='cruise'>Cruise </option>
      </select>
        </div>
        </div>
    <div className='form-group'>
    <label> Dietary Restriction(if any)</label>
    <input
    type='text'
    name='dietaryRestrictions'
    value={formData.dietaryRestrictions}
    onChange={handleChange}
    placeholder='Type'
    />
   </div>
   
    <button type='submit' className='submit-btn' disabled={isLoading}>
       { isLoading ? 'submitting...': 'Create Travel plan'}
    </button>
      
      </form>
        </div>
        );
};
export default TravelplanForm;