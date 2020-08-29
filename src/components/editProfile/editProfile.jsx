import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../../styles/forms.css';

const EditPatient = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [cc, setCc] = useState('');
  const [email, setEmail] = useState('');
  const [rh, setRh] = useState('');
  const [eps, setEps] = useState('');
  const [movil, setMovil] = useState('');
  const [phone, setPhone] = useState('');
  const [allergies, setAllergies] = useState('');
  const [basePathology, setBasePathology] = useState('');
  const [companion, setCompanion] = useState('');
  const [companionMovil, setCompanionMovil] = useState('');

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const data = { name, lastName, age, cc, email, rh, eps, movil, phone, allergies, basePathology, companion, companionMovil };
  }

  return (
    <div className="global h-100">
      <form
        className="text-center border border-info bg-light w-90 p-5"
        data-testid="login-form"
        onSubmit={handleEditSubmit}
      >
        <h1>
          Editar Información del paciente
          </h1>
        <input
          type="name"
          className="form-control mb-4"
          data-testid="name"
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="lastName"
          className="form-control mb-4"
          data-testid="LastName"
          name="LastName"
          placeholder="Apellidos"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />
        <input
          type="age"
          className="form-control mb-4"
          data-testid="age"
          name="age"
          placeholder="Edad"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
        />
        <input
          type="cc"
          className="form-control mb-4"
          data-testid="cc"
          name="cc"
          placeholder="Cédula"
          value={cc}
          onChange={e => setCc(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-control mb-4"
          data-testid="email"
          name="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="rh"
          className="form-control mb-4"
          data-testid="rh"
          name="rh"
          placeholder="Tipo de Sangre"
          value={rh}
          onChange={e => setRh(e.target.value)}
          required
        />
        <input
          type="eps"
          className="form-control mb-4"
          data-testid="eps"
          name="eps"
          placeholder="Eps"
          value={eps}
          onChange={e => setEps(e.target.value)}
          required
        />
        <input
          type="movil"
          className="form-control mb-4"
          data-testid="movil"
          name="movil"
          placeholder="Celular"
          value="movil"
          onChange={e => setMovil(e.target.value)}
          required
        />
        <input
          type="phone"
          className="form-control mb-4"
          data-testid="phone"
          name="phone"
          placeholder="Teléfono fijo"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
        <input
          type="allergies"
          className="form-control mb-4"
          data-testid="allergies"
          name="allergies"
          placeholder="Alergias"
          value={allergies}
          onChange={e => setAllergies(e.target.value)}
          required
        />
        <input
          type="basePathology"
          className="form-control mb-4"
          data-testid="basePathology"
          name="basePathology"
          placeholder="Patologías de base"
          value={basePathology}
          onChange={e => setBasePathology(e.target.value)}
          required
        />
        <input
          type="companion"
          className="form-control mb-4"
          data-testid="companion"
          name="companion"
          placeholder="Acompañante"
          value={companion}
          onChange={e => setCompanion(e.target.value)}
          required
        />
        <input
          type="companionMovil"
          className="form-control mb-4"
          data-testid="companionMovil"
          name="companionMovil"
          placeholder="Teléfono del acompañante"
          value={companionMovil}
          onChange={e => setCompanionMovil(e.target.value)}
          required
        />
        <button className="btn btn-info btn-block my-4" type="submit" data-testid="submit">
          Actualizar
          </button>
      </form>
    </div>
  );
}

export default EditPatient;