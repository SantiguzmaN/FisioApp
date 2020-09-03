export function savePatient(user) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/savePatient`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ ...user })
  })
    .then((resp) => resp.json())
    .catch(() => false)
    .then((data) => {
      return data;
    });
};

export function updatePatient(user, userId) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/updatePatient/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ ...user })
  })
    .then((resp) => resp.json())
    .catch(() => false)
    .then((data) => {
      return data;
    });
};

export function getPatient(userIdentification) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/getPatient`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ cc: userIdentification })
  })
    .then((resp) => resp.json())
    .catch(() => false)
    .then((data) => {
      return data;
    });
};

export const getAllPatient = () => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/getAllPatients`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
  })
    .then((resp) => resp.json())
    .catch(
      () => false
    )
    .then((data) => {
      console.log(data);
      return data;
    });
};
