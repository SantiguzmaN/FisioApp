const patientData = {
    appointment: ['cita uno', 'cita dos', 'cita tres'],
    photo: 'https://res.cloudinary.com/douxyvndb/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1598667354/IMG_20191208_113710025_HDR_2_eitcra.jpg',
    sex: 'masculino',
    name: 'Juanito',
    lastName: 'perez',
    age: '33',
    cc: '1234567',
    email: 'juanoito@.com',
    rh: 'o+',
    eps: 'eps',
    movil: '31111111',
    phone: '8888888',
    allergies: 'alergias',
    basePathology: 'patologias de base',
    companion: 'juana',
    companionMovil: '32222222',
    status: true
};

const allUsers = [
  {nombre: 'R2D2' , cc: '123' },
  {nombre: 'C3PO' , cc: '234' },
  {nombre: 'Luke', cc: '345' },
  {nombre: 'Leia', cc: '456' },
  {nombre: 'Han', cc: '567' },
  {nombre: 'DARK VADER', cc: '666' },
  {nombre: 'Yoda', cc: '000' },
];


export function getPatient(userIdentification) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/getPatient`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({ userIdentification })
  })
  .then((resp) => resp.json())
  .catch(() => patientData)
  .then((data) => {
      localStorage.setItem('token', data.token);
      return data;
  });
};

export const getAllPatient = () => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/getUsers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
  })
    .then((resp) => resp.json())
    .catch(
      () => allUsers
      // ToDo... Cuando el backend este listo, esta respuesta se retornara en la linea 18.
      // return false;
    )
    .then((data) => data);
};