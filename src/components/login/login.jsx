import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Background from '../shared/background';
import '../../styles/forms.css';


const Login = (props) => {

  const propsEmail =
    props.location && props.location.state && props.location.state.email ? props.location.state.email : '';
  const [email, setEmail] = useState(propsEmail);
  const [password, setPassword] = useState('');
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    toast.done('iniciar sesion')
  };

  return (
    <Background>
      <div className="wrapper">
        <form
          className="text-center border border-info bg-light w-50 p-5"
          data-testid="login-form"
          onSubmit={handleLoginSubmit}
        >
          <img className="img-form-logo mb-4 mx-center" src={`${process.env.PUBLIC_URL}/logo.png`} alt="FISIOAPP" />
          <h1> FISIO APP</h1>
          <input
            type="email"
            className="form-control mb-4"
            data-testid="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-4"
            data-testid="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div className="d-flex justify-content-around">
            <Link
              to={{
                pathname: '/forgot-password',
                state: { email },
              }}
              title="Forgot Password"
            >
              Forgot password?
            </Link>
          </div>
          <button className="btn btn-info btn-block my-4" type="submit" data-testid="submit">
            Login
          </button>
        </form>
      </div>
    </Background>
  );
};

export default Login;
