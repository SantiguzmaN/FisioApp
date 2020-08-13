import React, { useState } from 'react';
import { useCalendarDispatch } from '../../store/calendarProvider';

const Form = () => {
  const calendarDispatch = useCalendarDispatch();
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [time, setTime] = useState('');
  const [time2, setTime2] = useState('');
  
  const Test = (e) => {
    const myEvents= {
      title: title,
      start: new Date(start+' '+time),
      end: new Date(start+' '+time2)
    };
    calendarDispatch({type: 'ADD_APPOINTMENT', payload: myEvents});
  };

  return (
    <div className="principal-c-calendar">
      {/*<form className="text-center"  onSubmit={Test}>*/}
      <div>
        <label id="title">Nombre de la actividad</label>
        <input name="title" id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
        <label id="fecha">Fecha</label>
        <input name="fecha" id="fecha" type="date" value={start} 
          onChange={(e) => setStart(e.target.value)}/>
      </div>
      <div>
        <label id="fecha">Hora Inicio</label>
        <input name="tiempo" id="tiempo" type="time" value={time} 
          onChange={(e) => setTime(e.target.value)}/>
      </div>
      <div>
        <label id="fecha">Hora Final</label>
        <input name="time" id="time" type="time" value={time2} 
          onChange={(e) => setTime2(e.target.value)}/>
      </div>
      <button onClick={() => Test()}>
          Iniciar Sesion
      </button>
      {/*</form>*/}
    </div>
  );
};

export default Form;
