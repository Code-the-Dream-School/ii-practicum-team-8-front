import { useState, useMemo } from 'react';

import './BigCalendar.style.css';

import Paper from '@mui/material/Paper';

import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar';
import dayjs from 'dayjs';

import BigCalendarToolbar from './BigCalendarToolbar';
import MonthHeader from './headers/MonthHeader';
import WeekHeader from './headers/WeekHeader';

const localizer = dayjsLocalizer(dayjs);

const BigCalendar = ( {bookingList} ) => {

  const events = bookingList?.bookings?.map((booking) => ({
    start: new Date(booking?.startDate),
    end: new Date(booking?.endDate),
    title: `Guests ${booking?.numberOfGuests}, rooms: ${booking?.numberOfRooms}`,
  }));
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleNavigate = (newDate) => {
    setCurrentDate(newDate);
  };

  const components = useMemo(
    () => ({
      toolbar: BigCalendarToolbar,
      event: (props) => {
        return (
          <Paper
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              width: '100%',
              height: '100%',
              padding: 1,
              margin: 0,
            }}
          >
            {props.title}
          </Paper>
        );
      },
      month: { header: MonthHeader },
      week: { header: WeekHeader },
    }),
    []
  );

  return (
    <Calendar
      localizer={localizer}
      events={events}
      date={currentDate}
      onNavigate={handleNavigate}
      view={view}
      onView={handleViewChange}
      toolbar={true}
      views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
      components={components}
    />
  );
};

export default BigCalendar;
