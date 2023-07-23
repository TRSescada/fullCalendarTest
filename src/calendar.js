import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const MyCalendar = () => {
  // Sample events data (you can replace this with your own event data)
  const events = [
    { title: 'Event 1', date: '2023-07-08' },
    { title: 'Event 2', date: '2023-07-13' },
    // Add more events as needed
  ];

  return (
    <div style={{width :"70%",height:"10px"}}>
      <h1>My Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth" // The initial view when the calendar loads
        events={events}
      />
    </div>
  );
};

export default MyCalendar;