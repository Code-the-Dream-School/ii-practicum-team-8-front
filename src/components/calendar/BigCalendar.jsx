import { useState, useMemo } from 'react';
import './BigCalendar.style.css';

import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar';

import dayjs from 'dayjs';

import BigCalendarToolbar from './BigCalendarToolbar';
import MonthHeader from './headers/MonthHeader';
import WeekHeader from './headers/WeekHeader';
import EventComponent from './EventComponent';

const localizer = dayjsLocalizer(dayjs);

const BigCalendar = ({ bookingList, onShowBookingView }) => {
 
  const bookings = bookingList?.bookings?.map((booking) => {
    const endDate = new Date(booking?.endDate);
    endDate.setDate(endDate.getDate() + 1);

    return {
      start: new Date(booking?.startDate),
      end: endDate,
      title: `Guests ${
        booking?.numberOfAdults + booking?.numberOfKids
      }, rooms: ${booking?.numberOfRooms}`,
      originalBooking: booking,
    };
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleNavigate = (newDate) => {
    setCurrentDate(newDate);
  };

  const components = useMemo(() => ({
    toolbar: BigCalendarToolbar,
    event: EventComponent,
    month: { header: MonthHeader },
    week: { header: WeekHeader },
  }), []);

  return (
    <Calendar
      localizer={localizer}
      events={bookings}
      date={currentDate}
      onNavigate={handleNavigate}
      view={view}
      onView={handleViewChange}
      toolbar={true}
      views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
      components={components}
      selectable
      onSelectSlot={({ start, end }) => {

        const today = new Date().setHours(0, 0, 0, 0);
        const selected = new Date(start).setHours(0, 0, 0, 0);
        if (selected < today) {
           return;
        }

        const adjustedEnd = new Date(end.getTime() - 1);

        onShowBookingView({ startDate:start, endDate: adjustedEnd });
      }}
      onSelectEvent = {(event) => {
        onShowBookingView(event.originalBooking);
      }}
    />
  );
};

export default BigCalendar;