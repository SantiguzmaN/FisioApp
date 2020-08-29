import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useCalendarState } from '../../store/calendarProvider';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../styles/calendar.css';

require('moment/locale/es.js');

const BigCalendar = () => {
  const localizer = momentLocalizer(moment);
  const { cita } = useCalendarState();
  const messages = {
    next: 'siguiente',
    previous: 'anterior',
    today: 'Hoy',
    month: 'Mes',
    week: 'Sem',
    day: 'Dia',
  };

  const myEvents = cita || [];

  return (
    <div className="principal-c-calendar">
      <Calendar
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        localizer={localizer}
        messages={messages}
      />
    </div>
  );
};

export default BigCalendar;
