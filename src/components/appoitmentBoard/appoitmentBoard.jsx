import React from 'react';
import '../../styles/forms.css';
import { FaUserInjured } from 'react-icons/fa';
import Avatar from '../patientProfile/Avatar';
import { useState } from 'react';
import PoseNet from '../cameraFlow/camera';
import '../../styles/patientProfile.css';

const AppoitmentBoard = () => {
    const [optioncamera, setOptionCamera] = useState('zero');
    return (
        <div className="principal-container global">
            <div>
                <h1>CITA</h1>
                <div className="text-center  border-info  w-90">
                    <FaUserInjured size="60" />
                </div>
                <div className="row">
                    <div className="col-3">
                        grado de dolor
                </div>
                    <div className="col-3">
                        <label className="col-2">
                            1
                   <input type="checkbox" name="bajo" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            5
                   <input type="checkbox" name="medio" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            10
                   <input type="checkbox" name="alto" />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        estimulo electricidad
                </div>
                    <div className="col-3">
                        <label className="col-2">
                            si
                   <input type="checkbox" name="electricidadSi" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            no
                   <input type="checkbox" name="electricidadNo" />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        Densidad del tejido
                </div>
                    <div className="col-3">
                        <label className="col-2">
                            aumento
                   <input type="checkbox" name="aumento" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            disminuye
                   <input type="checkbox" name="disminucion" />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        estimulo calor
                </div>
                    <div className="col-3">
                        <label className="col-2">
                            si
                   <input type="checkbox" name="calorsi" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            no
                   <input type="checkbox" name="calorNo" />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        Movilidad
                </div>
                    <div className="col-3">
                        <label className="col-2">
                            10
                   <input type="checkbox" name="mov10" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            50
                   <input type="checkbox" name="mov50" />
                        </label >
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            100
                   <input type="checkbox" name="mov100" />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        Inflamación
                </div>
                    <div className="col-3">
                        <label className="col-2">
                            10
                   <input type="checkbox" name="inf10" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            50
                   <input type="checkbox" name="inf50" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            100
                   <input type="checkbox" name="inf100" />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        Funcionalidad
                </div>
                    <div className="col-3">
                        <label className="col-2">
                            alta
                   <input type="checkbox" name="funAlta" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            media
                   <input type="checkbox" name="funMadia" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            baja
                   <input type="checkbox" name="funBaja" />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        tono muscular
                </div>
                    <div className="col-3">
                        <label className="col-2">
                            alta
                   <input type="checkbox" name="tmAto" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            media
                   <input type="checkbox" name="tmMadia" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            normal
                       <input type="checkbox" name="tmNormal" />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        Elasticidad
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            baja
                   <input type="checkbox" name="eBaja" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            muy baja
                   <input type="checkbox" name="eMuyBaja" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            normal
                   <input type="checkbox" name="eNormal" />
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        sensibilidad
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            baja
                   <input type="checkbox" name="sBaja" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            alta
                   <input type="checkbox" name="sAlta" />
                        </label>
                    </div>
                    <div className="col-3">
                        <label className="col-2">
                            normal
                   <input type="checkbox" name="sNormal" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="appoitmen-camara ">
                {(() => {
                    switch (optioncamera) {
                        case 'one':
                            return (
                                <PoseNet />
                            )
                            break;
                        case 'two':
                            return (
                                <Avatar />
                            )
                            break;
                    }
                })()}
            </div>
            <div className="mx-auto my-auto ">
                <button className="btn btn-info mx-2 my-3" type="submit" data-testid="submit"
                    onClick={() => { setOptionCamera('one') }}>
                    modo Posenet
                </button>
                <button className="btn btn-info " type="submit" data-testid="submit"
                    onClick={() => { setOptionCamera('two') }}>
                    modo Mobilenet
                </button>
            </div>
            <button className="btn btn-info btn-block my-1" type="submit" data-testid="submit">
                Archivar
            </button>
        </div>

    );
};

export default AppoitmentBoard;