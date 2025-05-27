# 🌍 TripON: AI-Powered Travel Planning Web App

**TripON** is your personalized travel assistant!  
This AI-driven web application helps users effortlessly plan their trips by searching for hotels, viewing detailed information, making reservations, and generating custom itineraries. Powered by **Gemini AI**, TripON tailors travel plans to match user preferences, creating a seamless and enjoyable travel experience.

---

## 🎯 Project Goal

Enable users to:
- 🔍 Search hotels, view details, and make reservations
- 🗂️ Organize trips with ease
- 🤖 Generate personalized travel plans with the help of **Gemini AI**

---

## 🚀 Key Features (MVP)

✅ **User Registration & Login**  
Secure account management with the ability to view and manage bookings, saved stays, and travel plans.

✅ **Hotel Booking with Availability Calendar View**  
Explore hotel availability via an interactive calendar and book rooms directly from the platform.

✅ **Hotel Search & Details**  
Use filters to find the perfect hotel, view detailed descriptions, photos, location maps, and reviews.

✅ **AI Travel Planner**  
**Gemini AI** generates personalized travel plans based on user inputs, travel preferences, and selected hotels.

---

## 👥 Team Members

- **Tetiana Klitna** – Front End Developer  https://github.com/TetianaKlitna
- **Uma Sekar** – Front End Developer https://github.com/umavenki 
- **Tegegnwork Checol** – Front End Developer https://github.com/Tegegnwork
- **Kazbek Abraliev** – Back End Developer https://github.com/kebzaq
- **Stephanie Alvarado-Gallegos** – Back End Developer https://github.com/StephAlvarado   

---

## 🛠️ Tech Stack

### 🔙 Backend
- **Node.js**
- **Express**
- **Gemini AI**
- **Postman** (API testing)
- **JWT Authentication**
- **MongoDB**
- **Nodemailer** (email notifications)
- **Swagger** (API documentation)
- **Axios** (HTTP client)

### 🔜 Frontend
- **React.js**
- **React Router Dom**
- **Material-UI (MUI)**
- **MUI Icons**
- **Day.js** (date manipulation)
- **React Big Calendar**
- **Axios** (HTTP client)
- **React Query** (data fetching and caching)
- **PropTypes** (type-checking)
- **js-cookie** (cookie management)
---
---

## 📋 Project Management

### Tools Used
- **Jira** – for project tracking and issue management
- **GitHub** – for version control and code collaboration

### 📌 Project Setup in Jira
- **Tetiana Klitna** set up the Jira board for the team, sent out all the invitations, and created the main epics with relevant sub-tasks.
- Initial tickets focused on:
  - Cloning the GitHub repository
  - Setting up the local development environment to ensure everyone was ready to work efficiently.

### 🗓️ Team Meetings
- **Tuesdays:** Full team meeting and mentors
- **Thursdays:** Focused Frontend meetings and mentors
- **Mondays or Tuesdays:** Focused Backend meetings
- **Additional:** One-on-one or small group meetings when needed

---

## 💻 Detailed Contributions

### 🔙 Backend Team

- **Kazbek Abraliev**
  - Developed user authentication features, including registration and login APIs
  - Designed MongoDB schemas and models
  - Built Booking and AI Travel Planner API endpoints
  - Created Swagger API documentation
  - Handled backend deployments
  - Conducted peer code reviews
  - Facilitated team meetings

- **Stephanie Alvarado-Gallegos**
  - Developed forgot and reset password APIs
  - Created Booking endpoints for MyBookings and AllBookings APIs
  - Integrated **Gemini AI** into the system
  - Created the Prompt Builder to support the personalized AI travel planner
    
- **Tetiana Klitna**
  - Implemented the booking calendar view
  - Created a booking inline form for creating, updating, and deleting bookings
  - Developed the "Book Now!" page
  - Developed hotel search functionality
  - Designed detailed hotel information features
  - Created the "My Travel Plans" feature to display all AI-generated travel plans and daily itineraries,
    with options to view, update, or delete plans
  - Added PropTypes checking for React components
  - Implemented token saving using **js-cookie**

- **Uma Sekar**
  - Developed user registration and login features
  - Created a welcome message after successful login
  - Implemented password reset and forgot password forms, securely connected to the backend
  - Added a dark/light theme toggle for improved user experience
  - Deployed the frontend for public access

- **Tegegnwork Checol**
  - Built the home page with a navigation bar and footer
  - Developed Protected Routes to ensure secure access to features
  - Created the "Create Travel Plan" feature, allowing users to enter trip details, which are then processed by the backend AI to generate a day-by-day itinerary

---

## 🏔️ Challenges and How We Overcame Them

- **Code Merging Conflicts and Lost Code**  
  We encountered challenges while merging code, leading to occasional code conflicts and even code loss. To overcome this, we established a clear branching strategy, increased communication, and conducted peer reviews to minimize errors and recover lost changes.

- **Understanding New Tools**  
  Learning and adapting to new tools such as MUI, TanStack React Query, Gemini AI API, and the Public Booking API required extra effort. We overcame this by dividing the learning among team members, sharing knowledge during meetings, and leveraging available documentation and online resources.

- **Backend and Frontend Integration**  
  The frontend and backend teams sometimes faced mismatches in API expectations. To resolve this, the backend team provided detailed Swagger documentation, which helped clarify endpoints and response structures, streamlining the integration process.

- **Time Management**  
  Balancing practicum work with personal schedules was challenging for everyone on the team. We addressed this by establishing a regular meeting cadence (including team meetings, mentor sessions, and smaller group discussions), setting clear priorities for each sprint, and using Jira for task management and progress tracking.

---

## 🌟 Our Journey and What We Learned

Throughout this practicum, our team embarked on a journey of collaborative learning and growth:

- **Cross-Functional Collaboration**  
  We learned to effectively collaborate across frontend and backend, leveraging each other’s strengths and insights to deliver a unified product.

- **Enhanced Communication**  
  Regular standups, screen sharing, and thorough code reviews significantly improved our communication and problem-solving abilities.

- **Overcoming Challenges Together**  
  We faced and overcame API mismatches, persistent bugs, and code conflicts through teamwork and mutual support.

- **Increased Confidence with Tools**  
  Working hands-on with Git, Jira, and a variety of technical tools helped us grow more confident and efficient as developers.

- **Becoming Stronger Developers**  
  This experience helped us become more adaptable, resilient, and effective developers, ready to tackle future challenges with teamwork and determination.

## 📦 Installation Guide

### 🔙 Backend Setup
```bash
git clone https://github.com/your-username/tripon-back.git
cd tripon-back
npm install

.env:
# MongoDB connection string
MONGO_URI=

# JWT settings
JWT_SECRET=
JWT_LIFETIME=

# Gemini AI API Key
GEMINI_API_KEY=

# Frontend URL used in email reset password link
CLIENT_ID=https://your-frontend-url.com

# Email configuration for Nodemailer
EMAIL_USER=
EMAIL_PASS=
```

### 🔜 Frontend Setup
```bash
git clone https://github.com/your-username/tripon-front.git
cd tripon-front
npm install

# Backend API URL
VITE_APP_API_URL=

# Booking.com API details
VITE_BOOKING_URL=https://booking-com.p.rapidapi.com/v1/hotels
VITE_RAPIDAPI_HOST=booking-com.p.rapidapi.com
VITE_RAPIDAPI_KEY=
```
### ▶️ Running the Projects

#### Start backend:
```bash
npm run dev
```
#### Start frontend:
```bash
npm run dev
```
Visit http://localhost:5173 to access the app.
