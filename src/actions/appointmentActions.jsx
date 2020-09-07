export const getGraphic = () => {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/getGraphic`, {
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
      return data;
    });
};
