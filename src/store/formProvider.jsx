import React, { createContext, useMemo } from 'react';
import { FormReducer } from '../reducers/formReducer';

const FormStateContext = createContext({});
const FormDispatchContext = createContext(() => {
  // Empty function
});

export const useFormState = () => {
  const context = React.useContext(FormStateContext);
  if (context === undefined) {
    throw new Error('useFormState must be used within an FormProvider');
  }
  return context;
};

export const useFormDispatch = () => {
  const context = React.useContext(FormDispatchContext);
  if (context === undefined) {
    throw new Error('useFormDispatch must be used within an FormProvider');
  }
  return context;
};

const FormProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(FormReducer, {});
  const [stateValue, dispatchValue] = useMemo(() => [state, dispatch], [state]);

  return (
    <FormStateContext.Provider value={stateValue}>
      <FormDispatchContext.Provider value={dispatchValue}> {children} </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  );
};

export default FormProvider;
