import React, { createContext, useMemo } from 'react';
import { homeBoardReducer } from '../reducers/homeBoardReducer';

const HomeBoardStateContext = createContext({});
const HomeBoardDispatchContext = createContext(() => {
  // Empty function
});

export const useHomeBoardState = () => {
  const context = React.useContext(HomeBoardStateContext);
  if (context === undefined) {
    throw new Error('useHomeBoardState must be used within an HomeBoardProvider');
  }
  return context;
};

export const useHomeBoardDispatch = () => {
  const context = React.useContext(HomeBoardDispatchContext);
  if (context === undefined) {
    throw new Error('useHomeBoardDispatch must be used within an HomeBoardProvider');
  }
  return context;
};

const HomeBoardProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(homeBoardReducer, {});
  const [stateValue, dispatchValue] = useMemo(() => [state, dispatch], [state]);

  return (
    <HomeBoardStateContext.Provider value={stateValue}>
      <HomeBoardDispatchContext.Provider value={dispatchValue}> {children} </HomeBoardDispatchContext.Provider>
    </HomeBoardStateContext.Provider>
  );
};

export default HomeBoardProvider;
