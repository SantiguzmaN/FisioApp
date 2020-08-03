import React from 'react';
import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../styles/calendar.css';

require('moment/locale/es.js');  
const localizer = momentLocalizer(moment);

const calendar = () => {
  //  ToDo . this event must be received as param
  const myEvents= [{
    title: 'actividad Fisica',
    start: new Date('2020-07-05 10:22:00'),
    end: new Date('2020-07-05 10:42:00')
  }];
  
  return (
    <div className="principal-c-calendar">
      <Calendar
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        localizer={localizer}
      />
    </div>
  );
};

export default calendar;
