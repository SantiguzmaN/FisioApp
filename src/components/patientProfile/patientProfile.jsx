import React from 'react';
import Avatar from './Avatar';
import PatientRecord from './PatientRecord';
import PatientInfo from './PatientInfo';
import AppointmentGR from './AppointmentGR';
import { useEffect } from 'react';
import { useSearchState } from '../../store/searchProvider';
import { useState } from 'react';

const PatientProfile = () => {
  const [name, setName] = useState('');
  const { user } = useSearchState();

  useEffect(() => {
    if (user) setName(user.name);
  }, [user]);

  return (
    <div className="w-100">
      <div className="row">
        <div className="col-4 childenConteiner">
          <h4 className="usercolor">{name}</h4>
          <Avatar />
          <PatientRecord />
          <button type="button" className="button btn btn-info btn-block my-4" >Reporte grafico</button>
        </div>
        <div className="border col-8 text">
          <PatientInfo />
          <div className="border rg-appointment-Container">
            <AppointmentGR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
