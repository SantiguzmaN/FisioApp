import React from 'react';
import '../../styles/patientProfile.css';

const Patient = () => {
  const patientData = {
    name: 'nombre del paciente',
    lastName: 'apellido',
    age: 'edad',
    cc: 'cc',
    email: 'correo electronico',
    rh: 'tipo de sangre',
    eps: 'eps',
    movil: 'celular',
    phone: 'fijo',
    allergies: 'alergias',
    basePathology: 'patologias de base',
    companion: 'nombre acompañante',
    companionMovil: 'celular del acompañante'
  };

  return (
    <div>
      <div>{patientData.name}</div>
      <div>{patientData.lastName}</div>
      <div>{patientData.age}</div>
      <div>{patientData.cc}</div>
      <div>{patientData.email}</div>
      <div>{patientData.rh}</div>
      <div>{patientData.eps}</div>
      <div>{patientData.movil}</div>
      <div>{patientData.phone}</div>
      <div>{patientData.allergies}</div>
      <div>{patientData.basePathology}</div>
      <div>{patientData.companion}</div>
      <div>{patientData.companionMovil}</div>
    </div>
  );
};

export default Patient;
