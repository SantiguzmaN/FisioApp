import React from 'react';
import history from '../history';

const respuestaLoginDone = {
  status: true,
  token: 'xxx1234',
  userName: 'Tatiana Rivera',
};

const respuestaLoginError = {
  status: false,
};

export function loginFetch(user, password){
  return fetch(`${process.env.INTEGRATIVE_PROJECT_SERVER_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ user, password }),
  })
    .then(resp => resp.json())
    .catch(() => {
      // ToDo... Cuando el backend este listo, esta respuesta se retornara en la linea 18.
      localStorage.setItem('token', respuestaLoginDone.token);
      return respuestaLoginDone;
      // return false;
    })
    .then(data => {
      return data;
    });
}

export function logOut() {
  const token = localStorage.token;
  if (token) {
    localStorage.removeItem('token');
    history.push('/')
  }
}