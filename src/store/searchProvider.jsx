import React, { createContext, useMemo } from 'react';
import { searchReducer } from '../reducers/searchReducer';

const searchstateContext = createContext({});
const searchDispatchContext = createContext(() => {
    // Empty function
});

export const useSearchState = () => {
    const context = React.useContext(searchstateContext);
    if (context === undefined) {
        throw new Error('useSearchState must be used within an HomeBoardProvider');
    }
    return context;
};

export const useSearchDispatch = () => {
    const context = React.useContext(searchDispatchContext);
    if (context === undefined) {
        throw new Error('useSearchDispatch must be used within an HomeBoardProvider');
    }
    return context;
};

const SearchProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(searchReducer, {});
    const [stateValue, dispatchValue] = useMemo(() => [state, dispatch], [state]);

    return (
        <searchstateContext.Provider value={stateValue}>
            <searchDispatchContext.Provider value={dispatchValue}> {children} </searchDispatchContext.Provider>
        </searchstateContext.Provider>
    );
};

export default SearchProvider;
