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
      console.log(element.title);
      console.log(action.payload.title);  
      if(element.title !== action.payload.title){
        return element;
      }
    });
    
    return {
      ...state,
      cita: borrar,
    };
  case 'UPDATE_APPOINTMENT':
    const update = state.cita.map(element => {
      if(element.title === action.payload.title){
        element.start = action.payload.start;
        element.end = action.payload.end;
      }
      return element;
    } );
    return {
      ...state,
      cita: update,
    };
  default:
    return state;
  }
    
};
  
