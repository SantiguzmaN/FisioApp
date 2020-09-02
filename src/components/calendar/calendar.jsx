import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useCalendarState } from '../../store/calendarProvider';
import { useHomeBoardState } from '../../store/homeBoardProvider';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../styles/calendar.css';
import { useFormDispatch } from '../../store/formProvider';


require('moment/locale/es.js');

const BigCalendar = () => {
  const formDispatch = useFormDispatch();
  const localizer = momentLocalizer(moment);
  const { cita } = useCalendarState();
  //const { toOpen } = useHomeBoardState();

  const messages = {
    next: 'siguiente',
    previous: 'anterior',
    today: 'Hoy',
    month: 'Mes',
    week: 'Sem',
    day: 'Dia',
  };
  
  const handleSelectEvent =(event) =>{
    console.log("handleSelectEvent's event="+event.title);
    formDispatch({type: 'GET_APPOINTMENT', payload: event});
  };
  
  const myEvents = cita || [];

  return (
    <div className="principal-c-calendar">
      <Calendar
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        defaultView = 'month'
        onSelectEvent = {(event)=>handleSelectEvent(event)}
        defaultDate={moment().toDate()}
        localizer={localizer}
        messages={messages}
      />
    </div>
  );
};

export default BigCalendar;
