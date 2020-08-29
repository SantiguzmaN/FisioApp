import React, { useState, useEffect } from 'react';
import { FaUserInjured } from 'react-icons/fa';
import { TiUserAdd } from 'react-icons/ti';
import { toast } from 'react-toastify';
import PatientSuggest from './patientSuggest';
import { getAllPatient } from '../../actions/patientActions';
import { useUserDispatch } from '../../store/userProvider';
import { useHomeBoardDispatch } from '../../store/homeBoardProvider';
import '../../styles/modal.css';


const PatientManagement = () => {
  const [allUsers, setAllUsers] = useState([]);
  let patientToFind;
  const userDispatch = useUserDispatch();
  const homeBoardDispatch = useHomeBoardDispatch();
  const handleChange = e => {
    patientToFind = e.target.value;
  };

  const closeModal = () => {
  };

  useEffect(() => {
    getAllPatient().then((data) => {
      if (data === false) {
        toast.warn('Problemas de conexion, intentelo nuevamente');
      } else if (!data[0]) {
        toast.error(
          'El usuario y la contraseña no coinciden. Verifique e intentelo nuevamente'
        );
      } else if (data[0]) {
        toast.success('Usuarios Actualizados');
        setAllUsers(data);
      }
    });
  });

  const openEditPatient = () => {
    homeBoardDispatch({ type: 'SET_STATE', payload: 'editPatient' });
    userDispatch({ type: 'USER_TO_EDIT', payload: null })
  }

  return (
    <div className="appoitment-modal">
      <div className="modal-container">
        <div className="appoitment-header justify-content-center mb-0">
          <FaUserInjured size="60" />
          <h4 className="ml-2">Gestionar Paciente</h4>
        </div>
        <div className="modal-body row">
          <input className="form-control mb-4 col-10" type="email" placeholder="Buscar Paciente" onChange={e => handleChange(e)} />
          <button className='col-2 btn btn-secondary' onClick={() => openEditPatient()}> <TiUserAdd color="#fffff" size="40" /> </button>
        </div>
        <div className="border container-fluid">
          <div className="row border">
            <p className="ml-5 mt-2">Resultados</p>
          </div>
          {allUsers.map((user, i) => {
            return <PatientSuggest user={user} key={i + user} />;
          })}
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
