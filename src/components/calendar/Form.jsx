import React, { useState } from 'react';
import { useCalendarDispatch } from '../../store/calendarProvider';
import { useFormState } from '../../store/formProvider';
import { useSearchState } from '../../store/searchProvider';
import { useEffect } from 'react';

const Form = () => {
  const { ac } = useFormState();
  const calendarDispatch = useCalendarDispatch();
  const { user } = useSearchState();
  const [realName, setRealName] = useState('');
  const [cedula, setCedula] = useState('');
  useEffect(() => {
    if (user){
      setRealName(user.name);
      setCedula(user.cc);
    }
  }, [user]);
  const [title, setTitle] = useState('');
  const cc = cedula;
  const name = realName;
  const [start, setStart] = useState('');
  const [time, setTime] = useState('');
  const [time2, setTime2] = useState('');
  

  const Test = (e) => {
    const myEvents= {
      title: (title+' , '+name),
      cc: cc,
      start: new Date(start+' '+time),
      end: new Date(start+' '+time2)
    };
    calendarDispatch({type: 'ADD_APPOINTMENT', payload: myEvents});
    setTitle('');
    setStart('');
    setTime('');
    setTime2('');
  };

  useEffect(()=>{
    if(ac !== undefined){
      const titleCom = ac.title.split(' ');
      setTitle(titleCom[0]);
    }
  });

  const Delete = (e) =>{
    const myEvents= {
      title: (title+' , '+name),
      cc: cc,
      start: new Date(start+' '+time),
      end: new Date(start+' '+time2)
    };
    calendarDispatch({type: 'DELETE_APPOINTMENT', payload: myEvents});
    setTitle('');
  };

  const Update = (e) =>{
    const myEvents= {
      title: (title+' , '+name),
      cc: cc,
      start: new Date(start+' '+time),
      end: new Date(start+' '+time2)
    };
    calendarDispatch({type: 'UPDATE_APPOINTMENT', payload: myEvents});
    setTitle('');
    setStart('');
    setTime('');
    setTime2('');
  };

  return (
    <div className="principal-Form mx-auto my-auto" >
      <div>
        <label id="title" className="col-6">Nombre de la actividad</label>
        <input className="col-6" name="title" id="title" type="text" value={title}
          onChange={(e) => setTitle(e.target.value)}/>  
      </div>
      <div>
        <label id="fecha" className="col-6">Fecha</label>
        <input className="col-6" name="fecha" id="fecha" type="date" value={start}
          onChange={(e) => setStart(e.target.value)}/>
      </div>
      <div>
        <label id="fecha" className="col-6">Hora Inicio</label>
        <input className="col-6" name="tiempo" id="tiempo" type="time" value={time}
          onChange={(e) => setTime(e.target.value)}/>
      </div>
      <div>
        <label id="fecha" className="col-6">Hora Final</label>
        <input className="col-6" name="tiempo2" id="tiempo2" type="time" value={time2||time}
          onChange={(e) => setTime2(e.target.value)}/>
      </div>
      <button className="btn btn-info btn-block my-4" onClick={() => Test()}>
          Agendar Cita
      </button>
      <button className="btn btn-info btn-block my-4" onClick={() => Update()}>
          Actualizar Cita
      </button>
      <button className="btn btn-info btn-block my-4" onClick={() => Delete()}>
          Borrar Cita
      </button>
    </div>
  );
};

export default Form;
