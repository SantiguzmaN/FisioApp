import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Background from '../shared/background';
import history from '../../history';
import '../../styles/forms.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Las contraseñas no coinciden')
    } else {
      toast.success('Las contraseñas coinciden')
      history.push('/');
      //Falta hacer la verificación en el backend
    }
  }

  return (
    <Background>
      <div className="wrapper">
        <form
          className="text-center border border-info bg-light w-50 p-5"
          data-testid="login-form"
          onSubmit={handleSignUpSubmit}
        >
          <h1>
            Regístrate
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
            type="password"
            className="form-control mb-4"
            data-testid="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-4"
            data-testid="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <button className="btn btn-info btn-block my-4" type="submit" data-testid="submit">
            Registrarse
          </button>
        </form>
      </div>
    </Background>
  );
}

export default Signup;