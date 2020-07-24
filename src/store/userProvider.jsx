import React, { createContext, useMemo } from 'react';
import { userReducer } from '../reducers/userReducer';

const UserStateContext = createContext({});
const UserDispatchContext = createContext(() => {
  // Empty function
});

export const useUserState = () => {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within an UserProvider');
  }
  return context;
};

export const useUserDispatch = () => {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within an UserProvider');
  }
  return context;
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, {});
  const [stateValue, dispatchValue] = useMemo(() => [state, dispatch], [state]);

  return (
    <UserStateContext.Provider value={stateValue}>
      <UserDispatchContext.Provider value={dispatchValue}> {children} </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export default UserProvider;