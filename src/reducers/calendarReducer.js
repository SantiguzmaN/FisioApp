export const calendarReducer = (state, action) => {
  switch (action.type) {
  case 'ADD_APPOINTMENT':
    const myArray = state.cita || [];
    myArray.push(action.payload);
    return {
      ...state,
      cita: myArray,
    };
  
  case 'DELETE_APPOINTMENT':
    const borrar = state.cita.map(element => {
      if(element.title !== action.payload.title){
        return element;
      }
    } );
    return {
      ...state,
      cita: borrar,
    };

  default:
    return state;
  }
    
};
  
