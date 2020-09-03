import React from 'react';
import '../../styles/forms.css';
import { FaUserInjured } from 'react-icons/fa';
import Avatar from '../patientProfile/Avatar';
import { useState } from 'react';
import PoseNet from '../cameraFlow/camera';
import '../../styles/patientProfile.css';

const AppoitmentBoard = () => {
  const [optioncamera, setOptionCamera] = useState('zero');
  const valoresFomulario = [];
  const obtainKeysAndValues = () => {
    const valoresFormulario = [];
    const clasesFormulario = ['gradoDolor', 'estimuloElectricidad', 'DensidadTejido', 'estimuloCalor', 'Movilidad',
      'Inflamación', 'Funcionalidad', 'tonoMuscular', 'Elasticidad', 'sensibilidad'];
    clasesFormulario.forEach(element => {
      var dato = document.getElementsByClassName(element);
      var value = [];
      for (var x = 0; x < dato.length; x++) {
        value.push({ 'id': dato[x].parentElement.innerText, 'res': dato[x].checked });
      }
      valoresFomulario.push({ 'key': element, 'value': value });
    });
  };
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
              <input type="checkbox" className="gradoDolor" name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            5
              <input type="checkbox" className="gradoDolor" name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            10
              <input type="checkbox" className="gradoDolor" name="check" />
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
              <input type="checkbox" className="estimuloElectricidad" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            no
              <input type="checkbox" className="estimuloElectricidad" Name="check" />
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
              <input type="checkbox" className="DensidadTejido" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            disminuye
              <input type="checkbox" className="DensidadTejido" Name="check" />
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
              <input type="checkbox" className="estimuloCalor" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            no
              <input type="checkbox" className="estimuloCalor" Name="check" />
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
              <input type="checkbox" className="Movilidad" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            50
              <input type="checkbox" className="Movilidad" Name="check" />
            </label >
          </div>
          <div className="col-3">
            <label className="col-2">
                            100
              <input type="checkbox" className="Movilidad" Name="check" />
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
              <input type="checkbox" className="Inflamación" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            50
              <input type="checkbox" className="Inflamación" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            100
              <input type="checkbox" className="Inflamación" Name="check" />
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
              <input type="checkbox" className="Funcionalidad" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            media
              <input type="checkbox" className="Funcionalidad" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            baja
              <input type="checkbox" className="Funcionalidad" Name="check" />
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
              <input type="checkbox" className="tonoMuscular" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            media
              <input type="checkbox" className="tonoMuscular" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            normal
              <input type="checkbox" className="tonoMuscular" Name="check" />
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
              <input type="checkbox" className="Elasticidad" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            muy baja
              <input type="checkbox" className="Elasticidad" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            normal
              <input type="checkbox" className="Elasticidad" Name="check" />
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
              <input type="checkbox" className="sensibilidad" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            alta
              <input type="checkbox" className="sensibilidad" Name="check" />
            </label>
          </div>
          <div className="col-3">
            <label className="col-2">
                            normal
              <input type="checkbox" className="sensibilidad" Name="check" />
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
            );
            break;
          case 'two':
            return (
              <Avatar />
            );
            break;
          }
        })()}
      </div>
      <div className="mx-auto my-auto ">
        <button className="btn btn-info mx-2 my-3" type="submit" data-testid="submit"
          onClick={() => { setOptionCamera('one'); }}>
                    modo Posenet
        </button>
        <button className="btn btn-info " type="submit" data-testid="submit"
          onClick={() => { setOptionCamera('two'); }}>
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
