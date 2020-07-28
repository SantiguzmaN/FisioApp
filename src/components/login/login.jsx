import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { loginFetch } from '../../actions/loginActions';
import { useUserDispatch } from '../../store/userProvider';
import Background from '../shared/background';
import history from '../../history';
import '../../styles/forms.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userDispatch = useUserDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginFetch(email, password).then((data) => {
      if (data === false) {
        toast.warn('Problemas de conexion, intentelo nuevamente');
      } else if (data.status === false) {
        toast.error(
          'El usuario y la contraseña no coinciden. Verifique e intentelo nuevamente'
        );
      } else if (data && data.status === true) {
        toast.success(`Iniciando sesion con el usuario: ${data.userName}`);
        userDispatch({ type: 'USER_SIGN_IN', payload: data });
        history.push('/');
      }
    });
  };

  return (
    <Background>
      <div className="wrapper">
        <form
          className="text-center border border-info bg-light w-50 p-5"
          data-testid="login-form"
          onSubmit={handleLoginSubmit}
        >
          <img
            className="img-form-logo mb-4 mx-center"
            src={`${process.env.PUBLIC_URL}/tata.jpg`}
            alt="FISIOAPP"
          />
          <input
            type="email"
            className="form-control mb-4"
            data-testid="email"
            name="email"
            placeholder="Correo Electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-4"
            data-testid="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="btn btn-info btn-block my-4"
            type="submit"
            data-testid="submit"
          >
            Iniciar Sesion
          </button>
          <div className="d-flex justify-content-around">
            <Link
              to={{
                pathname: '/signup'
              }}
              title="Sign Up"
            >
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    </Background>
  );
};

export default Login;
