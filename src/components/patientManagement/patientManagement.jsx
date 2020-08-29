import React, { useState, useEffect } from 'react';
import { FaUserInjured } from 'react-icons/fa';
import { TiUserAdd } from 'react-icons/ti';
import PatientSuggest from './patientSuggest';
import '../../styles/modal.css';


const PatientManagement = () => {
  let patientToFind;
  const handleChange = e => {
    patientToFind = e.target.value;
  };

  const closeModal = () => {
  };

  return (
    <div className="appoitment-modal">
      <div className="modal-container">
        <div className="appoitment-header justify-content-center mb-0">
          <FaUserInjured size="60" />
          <h4 className="ml-2">Gestionar Paciente</h4>
        </div>
        <div className="modal-body row">
          <input className="form-control mb-4 col-10" type="email" placeholder="Buscar Paciente" onChange={e => handleChange(e)} />
          <div className='col-2'> <TiUserAdd color="#fffff" size="40" /> </div>
        </div>
        <div className="border container-fluid">
          <div className="row border">
            <p className="ml-5 mt-2">Resultados</p>
          </div>
          <PatientSuggest />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={() => closeModal()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientManagement;
