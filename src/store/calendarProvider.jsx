import React, { createContext, useMemo } from 'react';
import { calendarReducer } from '../reducers/calendarReducer';

const CalendarStateContext = createContext({});
const CalendarDispatchContext = createContext(() => {
  // Empty function
});

export const useCalendarState = () => {
  const context = React.useContext(CalendarStateContext);
  if (context === undefined) {
    throw new Error('useCalendarState must be used within an CalendarProvider');
  }
  return context;
};

export const useCalendarDispatch = () => {
  const context = React.useContext(CalendarDispatchContext);
  if (context === undefined) {
    throw new Error('useCalendarDispatch must be used within an CalendarProvider');
  }
  return context;
};

const CalendarProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(calendarReducer, {});
  const [stateValue, dispatchValue] = useMemo(() => [state, dispatch], [state]);

  return (
    <CalendarStateContext.Provider value={stateValue}>
      <CalendarDispatchContext.Provider value={dispatchValue}> {children} </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
};

export default CalendarProvider;
