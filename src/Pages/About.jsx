import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About TripOn</h1>
      
      <div className="about-content">
        <section className="about-intro">
          <p>
            TripOn is a premier travel agency dedicated to creating unforgettable 
            experiences for our clients. Founded in 2025, we've helped thousands of 
            travelers discover the world's most amazing destinations.
          </p>
          <p>
            TripOn Travel Organizer Agency is a professional travel planning service 
            that helps individuals and groups create seamless and memorable travel experiences.
          </p>
          <p>
            Whether you're looking for a relaxing vacation, an adventurous getaway, or a 
            well-organized business trip, TripOn offers customized itineraries, accommodation 
            bookings, transportation arrangements, and guided tours.
          </p>
        </section>

        <section className="services-section">
          <h2>Services Offered by TripOn</h2>
          <ul className="services-list">
            <li>✔ Customized Travel Itineraries – Personalized trip plans based on your preferences</li>
            <li>✔ Flight & Hotel Bookings – Competitive pricing for flights, resorts, and boutique stays</li>
            <li>✔ Tour Packages – Curated sightseeing tours, adventure trips, and cultural experiences</li>
            <li>✔ Group Travel Planning – Special arrangements for family trips, corporate retreats, and destination weddings</li>
            <li>✔ Visa & Travel Insurance Assistance – Guidance on documentation and travel insurance options</li>
            <li>✔ 24/7 Customer Support – Help during emergencies or last-minute changes</li>
          </ul>
        </section>

        <section className="why-choose-section">
          <h2>Why Choose TripOn?</h2>
          <ul className="benefits-list">
            <li>✅ Expert Travel Consultants – Experienced planners to craft your perfect trip</li>
            <li>✅ Hassle-Free Experience – All logistics handled for a stress-free journey</li>
            <li>✅ Exclusive Deals – Access to special discounts on flights, hotels, and activities</li>
            <li>✅ Flexible Options – Tailored trips for solo travelers, couples, families, and groups</li>
          </ul>
        </section>

        <section className="closing-section">
          <p>
            If you're planning your next trip, TripOn ensures a smooth and enjoyable 
            travel experience from start to finish!
          </p>
          <p>
            Our team of travel experts works tirelessly to craft personalized itineraries 
            that match your dreams and budget. We partner with the best hotels, airlines, 
            and local guides to ensure your journey is seamless and memorable.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;