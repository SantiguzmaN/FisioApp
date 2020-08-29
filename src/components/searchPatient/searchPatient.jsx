import React from 'react';
import { useHomeBoardDispatch } from '../../store/homeBoardProvider';
import '../../styles/patientProfile.css';
import { useState } from 'react';
import { getPatient } from '../../actions/patientActions.jsx';
import { useSearchDispatch } from '../../store/searchProvider';
import { toast } from 'react-toastify';

const SearchPatient = () => {
    const [userIdentification, setuserIdentification] = useState("");
    const searchDispatch = useSearchDispatch();
    const homeBoardDispatch = useHomeBoardDispatch();
    const [inputValue, setInputValue] = useState();
    const search = () => {
        switch (inputValue) {
            case '1':
                homeBoardDispatch({ type: 'SET_STATE', payload: 'patientProfile' });
                break;
            default:
                homeBoardDispatch({ type: 'SET_STATE', payload: 'notFound' });
        }
    }
    const getUser = () => {
        search();
        getPatient(userIdentification).then((data) => {
            if (data === false) {
                toast.warn("Problemas de conexion, intentelo de nuevo");
            } else if (data.status === false) {
                toast.error(
                    "El usuario no exite. Verifique e intentelo de nuevo"
                );
            } else if (data && data.status === true) {
                searchDispatch({ type: 'SET_USER', payload: data });
            }
        });
    }
    return (
        <div>
            <div className="col-5">
                <input
                    type="search"
                    className="form-control mb-4"
                    data-testid="setsearchconatiner"
                    name="search"
                    placeholder="buscar paciente"
                    id="value"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div>
                    <button type="button"
                        className="button btn btn-info btn-block my-4"
                        onClick={() => getUser()}>
                        buscar paciente
                    </button>
                </div>
            </div>
            <div className="row">

            </div>

        </div>
    );
};

export default SearchPatient;
