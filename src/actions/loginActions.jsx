import history from '../history';

export function loginFetch(user, password) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ user, password })
  })
    .then((resp) => resp.json())
    .catch(() => false)
    .then((data) => {
      localStorage.setItem('token', data.token);
      return data;
    });
}

export function signupFetch(user) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ ...user })
  })
    .then((resp) => resp.json())
    .catch(
      () =>
        // ToDo... Cuando el backend este listo, esta respuesta se retornara en la linea 18.
        ({ status: true })
      // return false;
    )
    .then((data) => data);
}

export function logOut() {
  const { token } = localStorage;
  if (token) {
    localStorage.removeItem('token');
    history.push('/');
  }
}
