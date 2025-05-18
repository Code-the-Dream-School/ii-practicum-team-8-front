import { useState, useMemo } from 'react';
import './BigCalendar.style.css';

import { Calendar, dayjsLocalizer, Views } from 'react-big-calendar';

import dayjs from 'dayjs';

import BigCalendarToolbar from './BigCalendarToolbar';
import MonthHeader from './headers/MonthHeader';
import EventComponent from './EventComponent';

const localizer = dayjsLocalizer(dayjs);

const BigCalendar = ({ bookingList, onShowBookingView }) => {
 
  const bookings = bookingList?.bookings?.map((booking) => {
    return {
      start: dayjs.utc(booking?.startDate).local().toDate(),
      end: dayjs.utc(booking?.endDate).local().add(1, 'day').toDate(),
      title: `Guests ${
        booking?.numberOfAdults + booking?.numberOfKids
      }, rooms: ${booking?.numberOfRooms}`,
      originalBooking: booking,
    };
  });

  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNavigate = (newDate) => {
    setCurrentDate(newDate);
  };

  const components = useMemo(() => ({
    toolbar: BigCalendarToolbar,
    event: EventComponent,
    month: { header: MonthHeader },
  }), []);

  return (
    <Calendar
      localizer={localizer}
      events={bookings}
      date={currentDate}
      onNavigate={handleNavigate}
      view={Views.MONTH}
      toolbar={true}
      views={[Views.MONTH]}
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